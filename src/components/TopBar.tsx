import { profile } from '../data/profile';
import styles from './TopBar.module.css';

/** Handle + tagline row at the top of each page. */
export function TopBar({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <div className={`${styles.bar} ${tone === 'dark' ? styles.dark : ''}`}>
      <p className={styles.handle}>{profile.handle}</p>
      <p className={styles.tagline}>{profile.tagline}</p>
    </div>
  );
}
