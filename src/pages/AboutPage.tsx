import { ArrowCircleUpRight, DownloadIcon } from '../components/icons';
import { Layout } from '../components/Layout';
import { TopBar } from '../components/TopBar';
import { certifications, education, experience, yearsOfExperience } from '../data/experience';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { Link } from '../router';
import styles from './Article.module.css';

const stack = [
  'Python', 'Django', 'Django REST Framework', 'FastAPI', 'Flask', 'REST APIs', 'GraphQL',
  'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Linux servers', 'Load balancers', 'GitHub Actions',
  'CI/CD', 'Microservices', 'Multi-tenant systems', 'Git', 'React', 'HTML', 'CSS', 'JavaScript',
];

/** About page: the long-form story of who Srijan Pokhrel is and what he does. */
export function AboutPage() {
  return (
    <Layout>
      <TopBar tone="dark" />
      <article className={styles.content}>
        <header className={styles.header}>
          <p className={styles.kicker}>About · srijanpokhrel · srijan113 · Nepal</p>
          <h1 className={styles.title}>Srijan Pokhrel, backend and DevOps developer in Nepal</h1>
          <p className={`dm ${styles.lead}`}>
            I’m Srijan Pokhrel (written as one word, srijanpokhrel), also known online as srijan113. I’m a software developer from Nepal
            with {yearsOfExperience} years of experience building backends, APIs and the cloud
            infrastructure that runs them, from my first role as a back-end developer to leading a
            team as team lead.
          </p>
          <dl className={styles.facts}>
            <div>
              <dt>Role</dt>
              <dd>Backend &amp; DevOps Engineer</dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>{yearsOfExperience} years</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Online</dt>
              <dd>
                <a href={profile.githubUrl} target="_blank" rel="me noreferrer">
                  GitHub
                </a>{' '}
                ·{' '}
                <a href={profile.linkedinUrl} target="_blank" rel="me noreferrer">
                  LinkedIn
                </a>
              </dd>
            </div>
          </dl>
        </header>

        <section className={styles.section} aria-labelledby="what-title">
          <h2 id="what-title" className={styles.sectionTitle}>
            What I do
          </h2>
          <div className={`dm ${styles.body}`}>
            <p>
              I build the parts of a product people don’t see: the <strong>APIs</strong>, the{' '}
              <strong>databases</strong>, the <strong>business logic</strong> and the{' '}
              <strong>servers</strong> everything runs on. Most of my work is in{' '}
              <strong>Python</strong>, with <strong>Django</strong>, Django REST Framework,{' '}
              <strong>FastAPI</strong> and Flask, backed by PostgreSQL and MongoDB.
            </p>
            <p>
              On the <strong>DevOps</strong> side, I set up and run Linux servers and load
              balancers, containerise services with Docker, deploy to <strong>AWS</strong> and
              automate builds and releases with GitHub Actions. I’ve designed monolithic,
              multi-tenant and <strong>microservices</strong> architectures, and I pick between them
              based on what the product actually needs.
            </p>
            <p>
              Beyond code, I work on requirement analysis, product management and leading teams:
              turning what a business needs into a plan, and then into software that ships.
            </p>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="journey-title">
          <h2 id="journey-title" className={styles.sectionTitle}>
            My journey
          </h2>
          <div className={`dm ${styles.body}`}>
            <p>
              I studied Computer Science at {education[0].school} ({education[0].years}). I started
              my career in November 2020 as a back-end developer at <strong>Intelzy</strong>, then
              joined <strong>Bhawani Infotech</strong> in Bagmati, Nepal as a back-end developer in
              February 2023.
            </p>
            <p>
              In January 2025 I became <strong>team lead at Nurses and Company</strong>, a home-care
              company in the United States, where I led the team that built their CRM: client and
              caregiver management, scheduling, payments and payroll in one system.
            </p>
            <ul className={styles.list}>
              {experience.map((r) => (
                <li key={r.company}>
                  <strong>{r.title}</strong>, {r.company} · {r.start} – {r.end}
                  {r.location ? ` · ${r.location}` : ''}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="built-title">
          <h2 id="built-title" className={styles.sectionTitle}>
            Things I’ve built
          </h2>
          <div className={`dm ${styles.body}`}>
            <p>
              Over the years I’ve built and run software for healthcare, finance, education and
              scheduling, for clients in Nepal, the United States and Australia.
            </p>
            <ul className={styles.list}>
              {projects.map((p) => (
                <li key={p.id}>
                  <Link to={`/projects/${p.slug}`}>{p.title}</Link>: {p.description}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="stack-title">
          <h2 id="stack-title" className={styles.sectionTitle}>
            Tools I use
          </h2>
          <div className={`dm ${styles.body}`}>
            <ul className={styles.chips}>
              {stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p>
              See the full breakdown on the <Link to="/skills">skills page</Link>.
            </p>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="edu-title">
          <h2 id="edu-title" className={styles.sectionTitle}>
            Education
          </h2>
          <div className={`dm ${styles.body}`}>
            <ul className={styles.list}>
              {education.map((e) => (
                <li key={e.school}>
                  <strong>{e.degree}</strong>, {e.school} · {e.years}
                </li>
              ))}
              {certifications.map((c) => (
                <li key={c}>Certification: {c}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="work-title">
          <h2 id="work-title" className={styles.sectionTitle}>
            Work with me
          </h2>
          <div className={`dm ${styles.body}`}>
            <p>
              Need a backend built, a server set up or a team to lead? Email me at{' '}
              <a href={`mailto:${profile.email}`}>{profile.email}</a> or call{' '}
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>.
            </p>
            <div className={styles.actions}>
              <a href={profile.cvUrl} download className={`${styles.button} ${styles.primary}`}>
                Download CV
                <DownloadIcon />
              </a>
              <Link to="/projects" className={styles.button}>
                See projects
                <ArrowCircleUpRight />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
