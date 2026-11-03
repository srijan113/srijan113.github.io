/**
 * Search-engine metadata for every page: titles, descriptions, social cards and
 * schema.org structured data. Used both when pre-rendering the HTML at build time
 * (scripts/prerender.mjs) and when navigating in the browser (applyHead).
 */
import { certifications, education } from './data/experience';
import { profile } from './data/profile';
import { projects } from './data/projects';
import { SITE_URL } from './data/site';

export { SITE_URL };

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  /** Breadcrumb label for the page itself. */
  crumb?: string;
};

const projectPages: PageMeta[] = projects.map((p) => ({
  path: `/projects/${p.slug}`,
  title: `${p.title} – Project by Srijan Pokhrel`,
  description: `${p.description} ${p.role} on ${p.title}: a project by Srijan Pokhrel, backend and DevOps developer in Nepal.`,
  crumb: p.title,
}));

export const pages: PageMeta[] = [
  {
    path: '/',
    title: 'Srijan Pokhrel – Backend & DevOps Developer in Nepal',
    description:
      'Srijan Pokhrel (srijanpokhrel, srijan113) is a backend and DevOps developer in Nepal with 5+ years of Python, Django, FastAPI and AWS experience. See projects, experience and CV.',
  },
  {
    path: '/about',
    title: 'About Srijan Pokhrel – Backend & DevOps Developer from Nepal',
    description:
      'About Srijan Pokhrel (srijanpokhrel, srijan113): backend and DevOps developer from Nepal with 5+ years in Python, Django, FastAPI, AWS and Docker. Career, projects, education and contact.',
    crumb: 'About',
  },
  {
    path: '/skills',
    crumb: 'Skills',
    title: 'Skills – Srijan Pokhrel, Python, Django & DevOps Developer',
    description:
      'Skills of Srijan Pokhrel, backend and DevOps developer in Nepal: Python, Django, FastAPI, Flask, GraphQL, PostgreSQL, MongoDB, AWS, Docker, CI/CD and team leadership.',
  },
  {
    path: '/projects',
    crumb: 'Projects',
    title: 'Projects – Srijan Pokhrel, Backend Developer in Nepal',
    description:
      'Products built by Srijan Pokhrel: a home-care CRM, IRD-verified Nepal e-billing, a microservices school management system, booking and scheduling platforms.',
  },
  ...projectPages,
];

export const KEYWORDS = [
  'Srijan Pokhrel',
  'srijanpokhrel',
  'srijan113',
  'Srijan Pokhrel developer',
  'Srijan Pokhrel Nepal',
  'सृजन पोखरेल',
  'developer in Nepal',
  'backend developer Nepal',
  'DevOps engineer Nepal',
  'Python developer Nepal',
  'Django developer Nepal',
  'FastAPI developer',
  'AWS DevOps Nepal',
  'software engineer Nepal',
  'team lead Nepal',
].join(', ');

export const pageFor = (path: string): PageMeta => pages.find((p) => p.path === path) ?? pages[0];

const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const url = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}/`);

const person = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: profile.name,
  givenName: 'Srijan',
  familyName: 'Pokhrel',
  alternateName: ['srijanpokhrel', 'srijan113', 'सृजन पोखरेल', 'Srijan Pokhrel (srijan113)'],
  url: `${SITE_URL}/`,
  mainEntityOfPage: `${SITE_URL}/about/`,
  image: OG_IMAGE,
  jobTitle: 'Backend and DevOps Developer',
  description: pages[0].description,
  email: `mailto:${profile.email}`,
  telephone: profile.phone.replace(/\s/g, ''),
  address: { '@type': 'PostalAddress', addressRegion: 'Narayani', addressCountry: 'NP' },
  nationality: { '@type': 'Country', name: 'Nepal' },
  homeLocation: { '@type': 'Country', name: 'Nepal' },
  alumniOf: education.map((e) => ({ '@type': 'CollegeOrUniversity', name: e.school })),
  hasCredential: certifications.map((c) => ({ '@type': 'EducationalOccupationalCredential', name: c })),
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Backend and DevOps Developer',
    occupationLocation: { '@type': 'Country', name: 'Nepal' },
    skills: 'Python, Django, Django REST Framework, FastAPI, Flask, GraphQL, PostgreSQL, MongoDB, AWS, Docker, Linux, CI/CD, GitHub Actions, Microservices',
  },
  knowsAbout: [
    'Python', 'Django', 'Django REST Framework', 'FastAPI', 'Flask', 'REST APIs', 'GraphQL',
    'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Linux server administration', 'Load balancing',
    'CI/CD', 'GitHub Actions', 'DevOps', 'Microservices', 'Multi-tenant architecture', 'React',
    'Team leadership', 'Product management',
  ],
  sameAs: [profile.linkedinUrl, profile.githubUrl],
};

const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'Srijan Pokhrel',
  alternateName: ['srijanpokhrel', 'srijanpokhrel.info.np', 'srijan113', 'Srijan Pokhrel – Developer'],
  inLanguage: 'en',
  publisher: { '@id': `${SITE_URL}/#person` },
};

/** schema.org JSON-LD graph for a page. */
export function structuredData(path: string) {
  const page = pageFor(path);
  const graph: Record<string, unknown>[] = [
    person,
    website,
    {
      '@type': path === '/' || path === '/about' ? 'ProfilePage' : 'WebPage',
      '@id': `${url(page.path)}#webpage`,
      url: url(page.path),
      name: page.title,
      description: page.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#person` },
      ...(path === '/' || path === '/about' ? { mainEntity: { '@id': `${SITE_URL}/#person` } } : {}),
      primaryImageOfPage: OG_IMAGE,
      inLanguage: 'en',
    },
  ];

  if (page.path !== '/') {
    const crumbs = [{ name: 'Home', item: `${SITE_URL}/` }];
    if (page.path.startsWith('/projects/')) crumbs.push({ name: 'Projects', item: url('/projects') });
    crumbs.push({ name: page.crumb ?? page.title, item: url(page.path) });
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, ...c })),
    });
  }

  const project = projects.find((p) => `/projects/${p.slug}` === page.path);
  if (project) {
    graph.push({
      '@type': 'CreativeWork',
      '@id': `${url(page.path)}#project`,
      name: project.title,
      description: project.description,
      url: url(page.path),
      sameAs: project.url,
      image: new URL(project.image, `${SITE_URL}/`).href,
      creator: { '@id': `${SITE_URL}/#person` },
      author: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en',
    });
  }

  if (page.path === '/projects' || page.path === '/') {
    graph.push({
      '@type': 'ItemList',
      name: 'Projects by Srijan Pokhrel',
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: p.title,
          description: p.description,
          url: url(`/projects/${p.slug}`),
          sameAs: p.url,
          creator: { '@id': `${SITE_URL}/#person` },
        },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** All <head> tags for a page, as an HTML string (used when pre-rendering). */
export function headHtml(path: string): string {
  const page = pageFor(path);
  const canonical = url(page.path);
  const json = JSON.stringify(structuredData(page.path)).replace(/</g, '\\u003c');
  return [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<meta name="keywords" content="${esc(KEYWORDS)}" />`,
    `<meta name="author" content="${esc(profile.name)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<link rel="me" href="${profile.githubUrl}" />`,
    `<link rel="me" href="${profile.linkedinUrl}" />`,
    `<meta name="geo.region" content="NP" />`,
    `<meta name="geo.placename" content="Nepal" />`,
    `<meta property="og:type" content="${page.path.startsWith('/projects/') ? 'article' : 'profile'}" />`,
    `<meta property="og:site_name" content="Srijan Pokhrel" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Srijan Pokhrel – Backend &amp; DevOps Developer in Nepal" />`,
    `<meta property="profile:first_name" content="Srijan" />`,
    `<meta property="profile:last_name" content="Pokhrel" />`,
    `<meta property="profile:username" content="srijan113" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<script type="application/ld+json" id="ld-json">${json}</script>`,
  ].join('\n    ');
}

/** Keeps the <head> in sync when navigating between pages in the browser. */
export function applyHead(path: string) {
  const page = pageFor(path);
  const canonical = url(page.path);
  document.title = page.title;

  const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
    let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.content = value;
  };
  setMeta('name', 'description', page.description);
  setMeta('property', 'og:title', page.title);
  setMeta('property', 'og:description', page.description);
  setMeta('property', 'og:url', canonical);
  setMeta('name', 'twitter:title', page.title);
  setMeta('name', 'twitter:description', page.description);

  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = canonical;

  let ld = document.getElementById('ld-json');
  if (!ld) {
    ld = document.createElement('script');
    ld.id = 'ld-json';
    ld.setAttribute('type', 'application/ld+json');
    document.head.appendChild(ld);
  }
  ld.textContent = JSON.stringify(structuredData(page.path));
}

export function sitemapXml(lastmod: string): string {
  const entries = pages
    .map(
      (p) => `  <url>
    <loc>${url(p.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${p.path === '/' ? '1.0' : p.path === '/about' ? '0.9' : p.path.startsWith('/projects/') ? '0.7' : '0.8'}</priority>
  </url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

export function robotsTxt(): string {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}
