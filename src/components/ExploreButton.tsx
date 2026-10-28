import { Link } from '../router';
import styles from './ExploreButton.module.css';

/** Outlined pill with a black dot. */
export function ExploreButton({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to} className={styles.pill}>
      <span className={styles.dot} aria-hidden="true" />
      {label}
    </Link>
  );
}
