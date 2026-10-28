// Logos (PNG at 3x).
import awsLogo from '../assets/skills/aws.png';
import css3Logo from '../assets/skills/css3.png';
import djangoLogo from '../assets/skills/django.png';
import dockerLogo from '../assets/skills/docker.png';
import gitLogo from '../assets/skills/git.png';
import githubLogo from '../assets/skills/github.png';
import html5Logo from '../assets/skills/html5.png';
import javascriptLogo from '../assets/skills/javascript.png';
import mongodbLogo from '../assets/skills/mongodb.png';
import postgresqlLogo from '../assets/skills/postgresql.png';
import pythonLogo from '../assets/skills/python.png';
import reactLogo from '../assets/skills/react.png';

type ImageSource = string;

export type Justify = 'flex-start' | 'flex-end' | 'center' | 'space-between';

/** A logo shown inside a 100px dark circle. `w`/`h` are the logo's size in px at 1920. */
export type LogoItem = { type: 'logo'; name: string; source: ImageSource; w: number; h: number };
/** A group of text pills (e.g. "Prototyping", "Wireframing"). */
export type ChipsItem = { type: 'chips'; labels: string[] };
export type RowItem = LogoItem | ChipsItem;

export type SkillRow = { justify: Justify; items: RowItem[] };

export type SkillCardData = {
  id: string;
  title: string;
  description: string;
  rows: SkillRow[];
  /** Gap between the icon area and the text block (px at 1920). */
  gap?: number;
};

/** Two cards side by side; `firstWidth` is the fixed width of the first card on desktop. */
export type SkillCardPair = { id: string; pair: [SkillCardData, SkillCardData]; firstWidth: number };

export type SkillColumn = {
  /** Fixed desktop width in px at 1920. Columns without a width share the remaining space. */
  width?: number;
  cards: (SkillCardData | SkillCardPair)[];
};

const logo = (name: string, source: ImageSource, w: number, h = w): LogoItem => ({
  type: 'logo',
  name,
  source,
  w,
  h,
});
const chips = (...labels: string[]): ChipsItem => ({ type: 'chips', labels });

const L = {
  python: logo('Python', pythonLogo, 60),
  django: logo('Django', djangoLogo, 70),
  aws: logo('AWS', awsLogo, 50),
  docker: logo('Docker', dockerLogo, 60),
  postgresql: logo('PostgreSQL', postgresqlLogo, 50),
  mongodb: logo('MongoDB', mongodbLogo, 60),
  git: logo('Git', gitLogo, 60),
  github: logo('GitHub', githubLogo, 60),
  html5: logo('HTML5', html5Logo, 51),
  css3: logo('CSS3', css3Logo, 50),
  javascript: logo('JavaScript', javascriptLogo, 50),
  react: logo('React', reactLogo, 60),
};

export const skillColumns: SkillColumn[] = [
  {
    cards: [
      {
        id: 'backend',
        title: 'Backend Development',
        description:
          'Designing and building robust APIs and business logic in Python with Django, Django REST Framework, FastAPI and Flask — from billing engines to scheduling systems and CRMs.',
        rows: [
          { justify: 'flex-start', items: [L.python, L.django] },
          { justify: 'flex-start', items: [chips('Django REST Framework', 'FastAPI', 'Flask')] },
          { justify: 'flex-start', items: [chips('RESTful APIs', 'GraphQL')] },
        ],
        gap: 40,
      },
      {
        id: 'leadership',
        title: 'Leadership & Product',
        description:
          'Leading teams from requirement analysis to production: shaping the product, planning the work, guiding developers and keeping delivery on track.',
        rows: [
          { justify: 'flex-start', items: [chips('Team Lead', 'Team Management')] },
          { justify: 'flex-start', items: [chips('Requirement Analysis', 'Product Management')] },
        ],
      },
    ],
  },
  {
    width: 442,
    cards: [
      {
        id: 'devops',
        title: 'Cloud & DevOps',
        description:
          'Configuring Linux servers and load balancers, containerising applications with Docker and shipping through CI/CD pipelines with GitHub Actions on AWS.',
        rows: [
          { justify: 'flex-start', items: [L.aws, L.docker] },
          { justify: 'flex-start', items: [chips('Linux Servers', 'Load Balancers')] },
          { justify: 'flex-start', items: [chips('GitHub Actions', 'CI/CD')] },
        ],
        gap: 40,
      },
      {
        id: 'vcs',
        title: 'Version Control',
        description: 'Clean Git workflows, code reviews and collaboration across teams.',
        rows: [{ justify: 'flex-start', items: [L.git, L.github] }],
      },
    ],
  },
  {
    cards: [
      {
        id: 'databases',
        title: 'Databases',
        description:
          'Relational and document data with PostgreSQL and MongoDB: schema design, queries and keeping data consistent across services.',
        rows: [{ justify: 'flex-start', items: [L.postgresql, L.mongodb] }],
      },
      {
        id: 'architecture',
        title: 'Architecture',
        description:
          'Designing and deploying scalable systems across multi-tenant, microservices and monolithic architectures — including a microservices platform built from day one.',
        rows: [
          { justify: 'flex-start', items: [chips('Microservices', 'Multi-tenant')] },
          { justify: 'flex-start', items: [chips('Monolithic')] },
        ],
      },
      {
        id: 'frontend',
        title: 'Front-End Development',
        description:
          'Building interfaces with React, HTML, CSS and JavaScript — so I can ship features end to end, not just the API behind them.',
        rows: [{ justify: 'flex-start', items: [L.html5, L.css3, L.javascript, L.react] }],
      },
    ],
  },
];

export const isPair = (c: SkillCardData | SkillCardPair): c is SkillCardPair => 'pair' in c;
