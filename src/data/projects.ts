import bridgefinances from '../assets/images/bridgefinances.jpg';
import medhavhi from '../assets/images/medhavhi.jpg';
import mevohub from '../assets/images/mevohub.jpg';
import nepalebilling from '../assets/images/nepalebilling.jpg';
import nursesandco from '../assets/images/nursesandco.jpg';
import sedulit from '../assets/images/sedulit.jpg';

export type Project = {
  id: string;
  title: string;
  /** Short label shown above the description, e.g. role or duration. */
  meta: string;
  description: string;
  image: string;
  url: string;
};

/** Ordered by importance. The home page shows the first four. */
export const projects: Project[] = [
  {
    id: 'nursesandco',
    title: 'Nurses & Company CRM',
    meta: 'Team Lead · Latest project',
    description:
      'A full CRM for a home-care company: client and caregiver management, scheduling, payments and payroll in one system.',
    image: nursesandco,
    url: 'https://nursesandco.com/',
  },
  {
    id: 'nepalebilling',
    title: 'Nepal E-Billing',
    meta: 'Backend · 1.5 years',
    description:
      'IRD-verified online billing software for businesses in Nepal, with NFRS-based reporting. I built the backend from its starting phase.',
    image: nepalebilling,
    url: 'https://nepalebilling.com/',
  },
  {
    id: 'medhavhi',
    title: 'Medhavhi School Management',
    meta: 'Backend · Microservices · 2 years',
    description:
      'A complete school management system and my first microservices project built from the ground up.',
    image: medhavhi,
    url: 'https://medhavhi.com/en',
  },
  {
    id: 'sedulit',
    title: 'Sedulit Scheduling',
    meta: 'Core scheduling logic · Backend',
    description:
      'An all-in-one appointment booking platform. I built the core scheduling logic and the entire backend.',
    image: sedulit,
    url: 'https://sedulit.com/',
  },
  {
    id: 'mevohub',
    title: 'MevoHub',
    meta: 'Side project · Ongoing',
    description:
      'A more affordable take on Calendly and Cal.com: merges multiple calendars into one view, records meetings and gives you summaries and translations.',
    image: mevohub,
    url: 'https://mevohub.com/en',
  },
  {
    id: 'bridgefinances',
    title: 'Bridge Finances',
    meta: 'Side project · Maintenance',
    description:
      'Website and server for an Australian mortgage broker. I manage the hosting and backend, and fix front-end issues when needed.',
    image: bridgefinances,
    url: 'https://www.bridgefinances.com.au/',
  },
];
