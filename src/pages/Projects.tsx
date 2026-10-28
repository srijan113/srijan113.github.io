import { Layout } from '../components/Layout';
import { ProjectGrid } from '../components/ProjectGrid';
import { TopBar } from '../components/TopBar';
import styles from './Projects.module.css';

/** Projects page. */
export function Projects() {
  return (
    <Layout>
      <TopBar tone="dark" />
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.kicker}>Projects by Srijan Pokhrel · Backend &amp; DevOps · Nepal</p>
          <h1 className={styles.title}>products I’ve built, shipped and kept running</h1>
        </div>
        <ProjectGrid />
      </div>
    </Layout>
  );
}
