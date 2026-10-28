import { profile } from '../data/profile';
import { ArrowCurveRightUp } from './icons';
import styles from './Footer.module.css';

/** Black footer with the oversized handle and back-to-top button. */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <p className={`dm ${styles.tagline}`}>{profile.footerTagline}</p>
        <button
          type="button"
          className={styles.circle}
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ArrowCurveRightUp className={styles.icon} />
        </button>
      </div>
      <p className={`dm ${styles.name}`} aria-hidden="true">
        {profile.footerName}
      </p>
    </footer>
  );
}
