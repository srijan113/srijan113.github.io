import { projects, type Project } from '../data/projects';
import { ArrowCircleRight } from './icons';
import styles from './ProjectGrid.module.css';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <a className={styles.card} href={project.url} target="_blank" rel="noreferrer">
      <div className={styles.rule}>
        <span>{number}</span>
        <span>{project.meta}</span>
      </div>
      <div className={styles.media}>
        <img
          src={project.image}
          alt={`${project.title} – project by Srijan Pokhrel`}
          width={790}
          height={460}
          loading="lazy"
          decoding="async"
          className={styles.image}
        />
      </div>
      <h3 className={styles.caption}>
        <ArrowCircleRight className={styles.arrow} />
        <span>{project.title}</span>
      </h3>
      <p className={`dm ${styles.description}`}>{project.description}</p>
    </a>
  );
}

/** Projects grid: each project sits under a thin rule with its number and role. */
export function ProjectGrid({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <div className={styles.grid}>
      {list.map((p, i) => (
        <ProjectCard key={p.id} project={p} index={i} />
      ))}
    </div>
  );
}
