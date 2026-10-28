import { profile } from '../data/profile';
import styles from './Contact.module.css';

/** "Got a project in mind? Let’s talk" block with the blue "Get in touch" circle. */
export function Contact() {
  const tel = profile.phone.replace(/[^+\d]/g, '');

  return (
    <section className={styles.contact} aria-labelledby="contact-title">
      <div>
        <p className={styles.kicker}>That's all for now.</p>
        <h2 id="contact-title" className={styles.headline}>
          Got a project in mind?
          <br />
          Let’s talk
        </h2>
      </div>

      <div className={styles.divider}>
        <a className={styles.circle} href={`mailto:${profile.email}`}>
          Get in touch
        </a>
      </div>

      <div className={styles.details}>
        <a className={styles.item} href={`mailto:${profile.email}`}>
          <span className={styles.label}>Email:</span>
          <span className={styles.value}>{profile.email}</span>
        </a>
        <a className={styles.item} href={`tel:${tel}`}>
          <span className={styles.label}>Phone</span>
          <span className={styles.value}>{profile.phone}</span>
        </a>
        <a className={styles.item} href={profile.cvUrl} download>
          <span className={styles.label}>CV</span>
          <span className={styles.value}>Download PDF ↓</span>
        </a>
      </div>
    </section>
  );
}
