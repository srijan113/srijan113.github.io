import bridgefinances from '../assets/images/bridgefinances.jpg';
import medhavhi from '../assets/images/medhavhi.jpg';
import mevohub from '../assets/images/mevohub.jpg';
import nepalebilling from '../assets/images/nepalebilling.jpg';
import nursesandco from '../assets/images/nursesandco.jpg';
import sedulit from '../assets/images/sedulit.jpg';

export type Project = {
  id: string;
  /** URL of the case-study page: /projects/<slug>/ */
  slug: string;
  title: string;
  /** Short label shown on cards, e.g. role or duration. */
  meta: string;
  /** One or two sentences: used on cards and in search results. */
  description: string;
  /** Case-study page details. */
  role: string;
  period: string;
  kind: string;
  overview: string[];
  highlights: string[];
  image: string;
  /** Live site. */
  url: string;
};

/** Ordered by importance. The home page shows the first four. */
export const projects: Project[] = [
  {
    id: 'nursesandco',
    slug: 'nurses-and-company-crm',
    title: 'Nurses & Company CRM',
    meta: 'Team Lead · Latest project',
    description:
      'A full CRM for a home-care company: client and caregiver management, scheduling, payments and payroll in one system.',
    role: 'Team Lead',
    period: 'Jan 2025 – Sep 2026',
    kind: 'Client project · CRM',
    overview: [
      'Nurses & Company is a senior home-care provider in St. Louis, in the United States. As team lead, I led the team that built the company’s CRM: the system it uses to run its day-to-day care operations.',
      'The CRM brings everything into one place: clients (patients) and caregivers, the schedules that match them, the payments that come in and the payroll that goes out. It is my most recent project.',
    ],
    highlights: [
      'Led the team building the CRM, from requirements to production.',
      'Client (patient) management: records and care details for every client.',
      'Caregiver management: profiles and availability for the care team.',
      'Scheduling that matches caregivers to clients.',
      'Payments and payroll built into the same system.',
    ],
    image: nursesandco,
    url: 'https://nursesandco.com/',
  },
  {
    id: 'nepalebilling',
    slug: 'nepal-e-billing',
    title: 'Nepal E-Billing',
    meta: 'Backend · 1.5 years',
    description:
      'IRD-verified online billing software for businesses in Nepal, with NFRS-based reporting. I built the backend from its starting phase.',
    role: 'Backend Developer',
    period: '1.5 years',
    kind: 'Product · Billing & accounting',
    overview: [
      'Nepal E-Billing is an online billing system built for businesses in Nepal. It is IRD verified and comes with an NFRS-based reporting system, so businesses can bill and report in line with Nepal’s requirements.',
      'I worked on the product for a year and a half and built its backend from the starting phase, laying the foundations the rest of the product grew on.',
    ],
    highlights: [
      'Built the backend from the product’s starting phase.',
      'NFRS-based financial reporting for Nepali businesses.',
      'Online billing designed around IRD requirements in Nepal.',
      'Worked on it for 1.5 years, alongside Medhavhi.',
    ],
    image: nepalebilling,
    url: 'https://nepalebilling.com/',
  },
  {
    id: 'medhavhi',
    slug: 'medhavhi-school-management-system',
    title: 'Medhavhi School Management',
    meta: 'Backend · Microservices · 2 years',
    description:
      'A complete school management system and my first microservices project built from the ground up.',
    role: 'Backend Developer',
    period: '2 years',
    kind: 'Product · Education',
    overview: [
      'Medhavhi is a full school and learning management system that connects students, teachers, schools and parents on one platform.',
      'It was my first microservices project built from the very start. I worked on its backend for two years, alongside Nepal E-Billing.',
    ],
    highlights: [
      'Designed and built the backend as microservices from day one.',
      'A complete school management system for students, teachers, schools and parents.',
      'Two years on the product, in parallel with Nepal E-Billing.',
    ],
    image: medhavhi,
    url: 'https://medhavhi.com/en',
  },
  {
    id: 'sedulit',
    slug: 'sedulit-scheduling',
    title: 'Sedulit Scheduling',
    meta: 'Core scheduling logic · Backend',
    description:
      'An all-in-one appointment booking platform. I built the core scheduling logic and the entire backend.',
    role: 'Backend Developer',
    period: '—',
    kind: 'Product · Booking & scheduling',
    overview: [
      'Sedulit is an all-in-one platform for booking appointments, built so businesses can take charge of their scheduling without technical skills.',
      'I worked on the core logic of the scheduling system and built the whole backend.',
    ],
    highlights: [
      'Built the core scheduling logic that powers bookings.',
      'Built the entire backend of the platform.',
    ],
    image: sedulit,
    url: 'https://sedulit.com/',
  },
  {
    id: 'mevohub',
    slug: 'mevohub',
    title: 'MevoHub',
    meta: 'Side project · Ongoing',
    description:
      'A more affordable take on Calendly and Cal.com: merges multiple calendars into one view, records meetings and gives you summaries and translations.',
    role: 'Creator',
    period: 'Ongoing',
    kind: 'Side project · Scheduling',
    overview: [
      'MevoHub is my own side project: a scheduling platform in the spirit of Calendly and Cal.com, with the goal of making it cheaper.',
      'It goes beyond booking. You can connect multiple accounts and it merges all your meetings and events into a single calendar, so you can see your whole day at a glance. It also records meetings and gives you a comprehensive summary of what was discussed, along with translations.',
    ],
    highlights: [
      'Scheduling and booking, as a more affordable alternative to Calendly and Cal.com.',
      'Connect multiple accounts and see every meeting and event in one calendar.',
      'Meeting recordings with comprehensive summaries.',
      'Translations of what was said.',
    ],
    image: mevohub,
    url: 'https://mevohub.com/en',
  },
  {
    id: 'bridgefinances',
    slug: 'bridge-finances',
    title: 'Bridge Finances',
    meta: 'Side project · Maintenance',
    description:
      'Website and server for an Australian mortgage broker. I manage the hosting and backend, and fix front-end issues when needed.',
    role: 'Backend & server',
    period: 'Maintenance',
    kind: 'Side project · Website',
    overview: [
      'Bridge Finances is an Australian finance and mortgage broker. I took care of their website and everything around it: the server, the hosting and the backend.',
      'My focus was the backend, but I also fixed front-end bugs when needed. The site is complete and I now maintain it.',
    ],
    highlights: [
      'Manage the server and hosting for the website.',
      'Backend development, plus front-end fixes when needed.',
      'Ongoing maintenance of the finished site.',
    ],
    image: bridgefinances,
    url: 'https://www.bridgefinances.com.au/',
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
