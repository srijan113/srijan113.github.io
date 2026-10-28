import { Layout } from '../components/Layout';
import { SkillCard } from '../components/SkillCard';
import { Timeline } from '../components/Timeline';
import { TopBar } from '../components/TopBar';
import { certifications, education } from '../data/experience';
import { isPair, skillColumns } from '../data/skills';
import styles from './Skills.module.css';

/** Skills page: three-column masonry of skill cards on a black page. */
export function Skills() {
  return (
    <Layout dark>
      <div className={styles.page}>
        <TopBar />
        <div className={styles.header}>
          <p className={styles.kicker}>Srijan Pokhrel · Python &amp; DevOps developer · Nepal</p>
          <h1 className={`dm ${styles.title}`}>Skills that fuel my passion</h1>
        </div>

        <div className={styles.columns}>
          {skillColumns.map((col, i) => (
            <div
              key={i}
              className={styles.column}
              style={col.width ? { flex: `0 0 calc(var(--u) * ${col.width})` } : undefined}>
              {col.cards.map((c) =>
                isPair(c) ? (
                  <div key={c.id} className={styles.pair}>
                    <SkillCard
                      card={c.pair[0]}
                      className={styles.pairFixed}
                    />
                    <SkillCard card={c.pair[1]} className={styles.pairFlex} />
                  </div>
                ) : (
                  <SkillCard key={c.id} card={c} className={styles.card} />
                ),
              )}
            </div>
          ))}
        </div>

        <div className={styles.learning}>
          <Timeline
            id="education"
            tone="dark"
            title="Education"
            note="Formal study and certifications."
            items={[
              ...education.map((e) => ({
                id: e.school,
                label: e.years,
                title: e.school,
                subtitle: e.degree,
              })),
              ...certifications.map((c) => ({
                id: c,
                label: 'Certification',
                title: c,
              })),
            ]}
          />
        </div>
      </div>
    </Layout>
  );
}
