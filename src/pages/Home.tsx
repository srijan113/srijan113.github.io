import { About } from '../components/About';
import { ExploreButton } from '../components/ExploreButton';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import { ProjectGrid } from '../components/ProjectGrid';
import { Timeline } from '../components/Timeline';
import { experience, yearsOfExperience } from '../data/experience';
import styles from './Home.module.css';

/** Home page. */
export function Home() {
  return (
    <Layout>
      <Hero />
      <div className={styles.content}>
        <About />
        <Timeline
          id="experience"
          title="Experience"
          note={`${yearsOfExperience} years building and running backends, from back-end developer to team lead.`}
          items={experience.map((r) => ({
            id: r.company,
            label: `${r.start} — ${r.end}`,
            sublabel: r.duration,
            title: r.company,
            subtitle: r.title,
            detail: r.highlights?.join(' '),
            aside: r.location,
          }))}
        />
        <section className={styles.works} aria-labelledby="works-title">
          <div className={styles.header}>
            <h2 id="works-title" className={styles.title}>
              Impressive Works
            </h2>
            <p className={`dm ${styles.note}`}>
              A SELECTION OF PRODUCTS I’VE BUILT AND RUN IN PRODUCTION — FROM HEALTHCARE AND
              FINANCE TO EDUCATION AND SCHEDULING.
            </p>
          </div>
          <ProjectGrid limit={4} />
          <ExploreButton to="/projects" label="Explore more" />
        </section>
      </div>
    </Layout>
  );
}
