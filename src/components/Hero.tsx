import heroDesktop from '../assets/images/hero-desktop.jpg';
import heroMobile from '../assets/images/hero-mobile.jpg';
import { profile } from '../data/profile';
import { Link } from '../router';
import { ArrowCircleUpRightLarge } from './icons';
import { TopBar } from './TopBar';
import styles from './Hero.module.css';

/** Home hero: portrait photo, top bar, scrolling title and arrow link. */
export function Hero() {
  const line = `${profile.heroMarquee}  ·  `;

  return (
    <header className={styles.hero}>
      <picture>
        <source media="(max-width: 899px)" srcSet={heroMobile} />
        <img
          className={styles.photo}
          src={heroDesktop}
          width={1920}
          height={960}
          fetchPriority="high"
          alt={`${profile.name}, backend and DevOps developer from Nepal`}
        />
      </picture>

      <TopBar />

      <Link to="/projects" className={styles.arrow} aria-label="See my projects">
        <ArrowCircleUpRightLarge />
      </Link>

      <h1 className="visually-hidden">{profile.name} – Backend &amp; DevOps Developer in Nepal</h1>
      <div className={styles.marquee} aria-hidden="true">
        <span className={styles.track}>
          <span>{line}</span>
          <span>{line}</span>
        </span>
      </div>
    </header>
  );
}
