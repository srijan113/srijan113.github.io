/**
 * Work history, education and certifications (from LinkedIn).
 * Also used to build the downloadable CV in public/.
 */

export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  /** Rounded duration shown next to the dates. */
  duration: string;
  location?: string;
  highlights?: string[];
};

export const experience: Role[] = [
  {
    company: 'Nurses and Company',
    title: 'Team Lead',
    start: 'Jan 2025',
    end: 'Sep 2026',
    duration: '1 yr 9 mos',
    location: 'United States',
    highlights: [
      'Led the team building a full CRM for a home-care company: client and caregiver management, scheduling, payments and payroll.',
    ],
  },
  {
    company: 'Bhawani Infotech',
    title: 'Back End Developer',
    start: 'Feb 2023',
    end: 'Jan 2025',
    duration: '2 yrs',
    location: 'Bagmati, Nepal',
  },
  {
    company: 'Intelzy',
    title: 'Back End Developer',
    start: 'Nov 2020',
    end: 'Feb 2023',
    duration: '2 yrs 4 mos',
  },
];

export const education = [
  {
    school: 'Lumbini ICT College',
    degree: "Bachelor's degree, Computer Science",
    years: '2017 – 2021',
  },
];

export const certifications = [
  'Introduction to Programming Using Python',
  'Build a Netflix-like Service Using Django and Python',
];

/** Years of professional experience, counted from the first role (Nov 2020). */
export const yearsOfExperience = '5+';
