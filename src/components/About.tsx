import { profile } from '../data/profile';
import { Link } from '../router';
import { ArrowCircleUpRight, DownloadIcon } from './icons';
import styles from './About.module.css';

/** Intro block under the hero. */
export function About() {
  return (
    <section className={styles.about} aria-label="About">
      <p className={`dm ${styles.lead}`}>
        I’m Srijan Pokhrel, a backend and DevOps developer from Nepal. I build the systems and
        infrastructure behind real products — CRMs with scheduling and payroll,
        government-verified billing, school platforms and booking engines.
      </p>
      <div className={styles.aside}>
        <p className={`dm ${styles.body}`}>
          5+ years with Python, Django and FastAPI on AWS. I’ve grown from back-end developer to team
          lead, and I care about systems that stay fast, secure and easy to run.
        </p>
        <div className={styles.links}>
          <a href={profile.cvUrl} download className={`dm ${styles.more}`}>
            Download CV
            <DownloadIcon className={styles.cvIcon} />
          </a>
          <Link to="/skills" className={`dm ${styles.more}`}>
            More about me
            <ArrowCircleUpRight className={styles.moreIcon} />
          </Link>
        </div>
      </div>
    </section>
  );
}
