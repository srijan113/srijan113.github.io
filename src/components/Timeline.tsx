import type { ReactNode } from 'react';

import styles from './Timeline.module.css';

export type TimelineItem = {
  id: string;
  /** Small mono label on the left, e.g. dates. */
  label: string;
  /** Muted mono line under the label, e.g. duration. */
  sublabel?: string;
  title: string;
  subtitle?: string;
  detail?: string;
  /** Mono text on the far right, e.g. location. */
  aside?: string;
};

type Props = {
  title: string;
  note?: ReactNode;
  items: TimelineItem[];
  tone?: 'light' | 'dark';
  id?: string;
};

/** Section heading + list of rows separated by thin rules (experience, education…). */
export function Timeline({ title, note, items, tone = 'light', id }: Props) {
  return (
    <section id={id} className={`${styles.section} ${tone === 'dark' ? styles.dark : ''}`} aria-labelledby={`${id ?? title}-title`}>
      <div className={styles.header}>
        <h2 id={`${id ?? title}-title`} className={styles.heading}>
          {title}
        </h2>
        {note && <p className={`dm ${styles.note}`}>{note}</p>}
      </div>

      <ol className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.row}>
            <div className={styles.when}>
              <span>{item.label}</span>
              {item.sublabel && <span className={styles.muted}>{item.sublabel}</span>}
            </div>
            <div className={styles.what}>
              <h3 className={styles.title}>{item.title}</h3>
              {item.subtitle && <p className={`dm ${styles.subtitle}`}>{item.subtitle}</p>}
              {item.detail && <p className={`dm ${styles.detail}`}>{item.detail}</p>}
            </div>
            {item.aside && <p className={styles.aside}>{item.aside}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}
