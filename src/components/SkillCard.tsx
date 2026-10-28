import type { CSSProperties } from 'react';

import type { RowItem, SkillCardData } from '../data/skills';
import styles from './SkillCard.module.css';

type Vars = CSSProperties & Record<`--${string}`, string | number>;

function Item({ item }: { item: RowItem }) {
  if (item.type === 'chips') {
    return (
      <ul className={styles.chips}>
        {item.labels.map((label) => (
          <li key={label} className={`dm ${styles.chip}`}>
            {label}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <span className={styles.circle} title={item.name}>
      <img
        src={item.source}
        alt={item.name}
        width={item.w}
        height={item.h}
        loading="lazy"
        decoding="async"
        style={{ '--w': item.w, '--h': item.h } as Vars}
      />
    </span>
  );
}

/** Dark rounded card with logo circles / pills, title and description (Skills page). */
export function SkillCard({ card, className = '' }: { card: SkillCardData; className?: string }) {
  return (
    <article className={`${styles.card} ${className}`} style={{ '--gap': card.gap ?? 30 } as Vars}>
      <div className={styles.rows}>
        {card.rows.map((row, i) => (
          <div key={i} className={styles.row} style={{ justifyContent: row.justify }}>
            {row.items.map((item, j) => (
              <Item key={j} item={item} />
            ))}
          </div>
        ))}
      </div>
      <div className={styles.text}>
        <h3 className={`dm ${styles.title}`}>{card.title}</h3>
        <p className={`dm ${styles.body}`}>{card.description}</p>
      </div>
    </article>
  );
}
