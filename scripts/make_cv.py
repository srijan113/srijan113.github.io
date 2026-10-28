"""Builds public/Srijan-Pokhrel-CV.pdf (text only, no images).

Run from the project root:  pip install reportlab && python scripts/make_cv.py public/Srijan-Pokhrel-CV.pdf
"""
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether
from reportlab.platypus.flowables import HRFlowable

INK, MUTED = HexColor('#111111'), HexColor('#555555')
S = lambda name, **kw: ParagraphStyle(name, fontName=kw.pop('font', 'Helvetica'), textColor=kw.pop('color', INK), **kw)
name_s = S('name', font='Helvetica-Bold', fontSize=22, leading=26)
head_s = S('head', fontSize=11.5, leading=15, color=MUTED)
contact_s = S('contact', fontSize=9.2, leading=13, color=MUTED)
section_s = S('section', font='Helvetica-Bold', fontSize=10.5, leading=13, spaceBefore=9, spaceAfter=2)
body_s = S('body', fontSize=9.3, leading=12.6)
role_s = S('role', font='Helvetica-Bold', fontSize=10, leading=13)
meta_s = S('meta', fontSize=9, leading=12, color=MUTED)
right_s = S('right', fontSize=9, leading=13, color=MUTED, alignment=2)
bullet_s = S('bullet', fontSize=9.3, leading=12.6, leftIndent=11, bulletIndent=1)

link = lambda url, text=None: f'<link href="{url}" color="#111111">{text or url}</link>'

def section(title):
    return [Paragraph(title.upper(), section_s), HRFlowable(width='100%', thickness=0.6, color=INK, spaceBefore=0, spaceAfter=5)]

def row(left, right):
    t = Table([[Paragraph(left, role_s), Paragraph(right, right_s)]], colWidths=['70%', '30%'])
    t.setStyle(TableStyle([('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 0),
                           ('TOPPADDING', (0, 0), (-1, -1), 0), ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
                           ('VALIGN', (0, 0), (-1, -1), 'TOP')]))
    return t

story = [
    Paragraph('Srijan Pokhrel', name_s),
    Paragraph('Backend &amp; DevOps Engineer · Python · Django · FastAPI', head_s),
    Spacer(1, 4),
    Paragraph(' · '.join([
        link('mailto:srijan.pokhrel113@gmail.com', 'srijan.pokhrel113@gmail.com'),
        '+977 9865076047', 'Narayani, Nepal']), contact_s),
    Paragraph(' · '.join([
        link('https://www.linkedin.com/in/srijan-pokhrel-598b661ba/', 'linkedin.com/in/srijan-pokhrel-598b661ba'),
        link('https://github.com/srijan113', 'github.com/srijan113')]), contact_s),
]

story += section('Summary')
story += [Paragraph(
    'Backend and DevOps engineer with 5+ years of experience designing, developing and deploying scalable web '
    'applications in Python. Experienced across multi-tenant, microservices and monolithic architectures, with '
    'Django, Flask and FastAPI, RESTful and GraphQL APIs, and both SQL (PostgreSQL) and NoSQL (MongoDB) databases. '
    'Hands-on with server administration and DevOps: configuring Linux servers and load balancers, containerising '
    'applications with Docker and running CI/CD pipelines with GitHub Actions on AWS. Most recently team lead for a '
    'full CRM serving a US home-care company.', body_s)]

story += section('Experience')
roles = [
    ('Team Lead', 'Nurses and Company', 'United States', 'Jan 2025 – Sep 2026', [
        'Led the team building a full CRM for a home-care company: client (patient) and caregiver management, '
        'scheduling, payments and payroll.',
    ]),
    ('Back End Developer', 'Bhawani Infotech', 'Bagmati, Nepal', 'Feb 2023 – Jan 2025', []),
    ('Back End Developer', 'Intelzy', None, 'Nov 2020 – Feb 2023', []),
]
for title, company, loc, dates, bullets in roles:
    block = [row(f'{title} — {company}', dates)]
    if loc:
        block.append(Paragraph(loc, meta_s))
    for b in bullets:
        block.append(Paragraph(b, bullet_s, bulletText='•'))
    block.append(Spacer(1, 5))
    story.append(KeepTogether(block))

story += section('Selected Projects')
projects = [
    ('Nurses &amp; Company CRM', 'https://nursesandco.com/', 'nursesandco.com',
     'Full CRM for a US home-care company: client and caregiver management, scheduling, payments and payroll.'),
    ('Nepal E-Billing', 'https://nepalebilling.com/', 'nepalebilling.com',
     'IRD-verified online billing system for businesses in Nepal with NFRS-based reporting. Built the backend from its starting phase; 1.5 years on the product.'),
    ('Medhavhi School Management System', 'https://medhavhi.com/en', 'medhavhi.com',
     'Complete school management platform; my first microservices project, built from the ground up (2 years).'),
    ('Sedulit', 'https://sedulit.com/', 'sedulit.com',
     'All-in-one appointment booking platform. Built the core scheduling logic and the entire backend.'),
    ('MevoHub (side project, ongoing)', 'https://mevohub.com/en', 'mevohub.com',
     'Affordable alternative to Calendly and Cal.com: merges multiple calendars into one view, records meetings and generates summaries and translations.'),
    ('Bridge Finances (side project)', 'https://www.bridgefinances.com.au/', 'bridgefinances.com.au',
     'Website for an Australian mortgage broker: server, hosting and backend, plus front-end fixes. In maintenance.'),
]
for title, url, short, desc in projects:
    story.append(KeepTogether([row(title, link(url, short)), Paragraph(desc, body_s), Spacer(1, 4)]))

story += section('Skills')
skills = [
    ('Languages &amp; frameworks', 'Python, Django, Django REST Framework, FastAPI, Flask, JavaScript, React, HTML, CSS'),
    ('APIs &amp; architecture', 'RESTful APIs, GraphQL, microservices, multi-tenant, monolithic'),
    ('Databases', 'PostgreSQL, MongoDB'),
    ('Cloud &amp; DevOps', 'AWS, Docker, Linux server administration, load balancers, CI/CD with GitHub Actions'),
    ('Tools', 'Git, GitHub'),
    ('Leadership', 'Team lead, team management, requirement analysis, product management'),
]
for k, v in skills:
    story.append(Paragraph(f'<b>{k}:</b> {v}', body_s))
    story.append(Spacer(1, 1))

story += section('Education &amp; Certifications')
story.append(row("Bachelor's degree, Computer Science — Lumbini ICT College", '2017 – 2021'))
story.append(Spacer(1, 3))
story.append(Paragraph('<b>Certifications:</b> Introduction to Programming Using Python · '
                       'Build a Netflix-like Service Using Django and Python', body_s))

doc = SimpleDocTemplate(sys.argv[1], pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm,
                        topMargin=12 * mm, bottomMargin=11 * mm,
                        title='Srijan Pokhrel — CV', author='Srijan Pokhrel',
                        subject='Backend & DevOps Engineer', creator='Srijan Pokhrel')
doc.build(story)
