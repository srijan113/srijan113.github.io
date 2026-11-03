import { ArrowCircleUpRight } from '../components/icons';
import { Layout } from '../components/Layout';
import { TopBar } from '../components/TopBar';
import { profile } from '../data/profile';
import { projects, type Project } from '../data/projects';
import { Link } from '../router';
import styles from './Article.module.css';

const hostOf = (url: string) => new URL(url).hostname.replace(/^www\./, '');

/** Case-study page for one project: /projects/<slug>/. */
export function ProjectPage({ project }: { project: Project }) {
  const index = projects.indexOf(project);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <Layout>
      <TopBar tone="dark" />
      <article className={styles.content}>
        <header className={styles.header}>
          <p className={styles.kicker}>
            <Link to="/projects">Projects</Link> · {project.kind}
          </p>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={`dm ${styles.lead}`}>{project.description}</p>
          <dl className={styles.facts}>
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Duration</dt>
              <dd>{project.period}</dd>
            </div>
            <div>
              <dt>Built by</dt>
              <dd>
                <Link to="/about">{profile.name}</Link>
              </dd>
            </div>
            <div>
              <dt>Live site</dt>
              <dd>
                <a href={project.url} target="_blank" rel="noreferrer">
                  {hostOf(project.url)}
                </a>
              </dd>
            </div>
          </dl>
        </header>

        <div className={styles.media}>
          <img
            src={project.image}
            alt={`${project.title} – project by Srijan Pokhrel`}
            width={790}
            height={460}
            decoding="async"
          />
        </div>

        <section className={styles.section} aria-labelledby="overview-title">
          <h2 id="overview-title" className={styles.sectionTitle}>
            Overview
          </h2>
          <div className={`dm ${styles.body}`}>
            {project.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="work-title">
          <h2 id="work-title" className={styles.sectionTitle}>
            What I did
          </h2>
          <div className={`dm ${styles.body}`}>
            <ul className={styles.list}>
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className={styles.actions}>
              <a href={project.url} target="_blank" rel="noreferrer" className={`${styles.button} ${styles.primary}`}>
                Visit {hostOf(project.url)}
                <ArrowCircleUpRight />
              </a>
              <Link to="/projects" className={styles.button}>
                All projects
              </Link>
            </div>
          </div>
        </section>

        <nav className={styles.pager} aria-label="More projects">
          <Link to={`/projects/${prev.slug}`}>
            <span>← Previous project</span>
            <strong>{prev.title}</strong>
          </Link>
          <Link to={`/projects/${next.slug}`}>
            <span>Next project →</span>
            <strong>{next.title}</strong>
          </Link>
        </nav>
      </article>
    </Layout>
  );
}
