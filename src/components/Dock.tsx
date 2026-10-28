import type { ComponentType, SVGProps } from 'react';

import avatar from '../assets/images/avatar.png';
import { profile } from '../data/profile';
import { Link, usePath } from '../router';
import {
  ArrowCircleUpLeftIcon,
  CubeIcon,
  DownloadIcon,
  GithubIcon,
  HomeIcon,
  LinkedinIcon,
  TerminalIcon,
} from './icons';
import styles from './Dock.module.css';

type Item = {
  key: string;
  label: string;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  /** Internal route, or an external URL. */
  to?: string;
  href?: string;
  muted?: boolean;
  /** Download the linked file instead of opening it. */
  download?: boolean;
};

const items: Item[] = [
  { key: 'home', label: 'Home', Icon: HomeIcon, to: '/' },
  { key: 'skills', label: 'Skills', Icon: TerminalIcon, to: '/skills' },
  { key: 'projects', label: 'Projects', Icon: CubeIcon, to: '/projects' },
  { key: 'me', label: profile.name, to: '/' },
  { key: 'cv', label: 'Download CV', Icon: DownloadIcon, href: profile.cvUrl, download: true },
  { key: 'linkedin', label: 'LinkedIn', Icon: LinkedinIcon, href: profile.linkedinUrl },
  { key: 'github', label: 'GitHub', Icon: GithubIcon, href: profile.githubUrl, muted: true },
  { key: 'contact', label: 'Email me', Icon: ArrowCircleUpLeftIcon, href: `mailto:${profile.email}`, muted: true },
];

/** Floating navigation dock, fixed to the bottom of the viewport. */
export function Dock() {
  const path = usePath();

  return (
    <nav className={styles.wrap} aria-label="Main">
      <ul className={styles.dock}>
        {items.map(({ key, label, Icon, to, href, muted, download }) => {
          const active = !!to && key !== 'me' && path === to;
          const className = [styles.item, active && styles.active, muted && styles.muted, !Icon && styles.avatar]
            .filter(Boolean)
            .join(' ');
          const content = Icon ? (
            <Icon className={key === 'skills' ? styles.iconWide : styles.icon} />
          ) : (
            <img src={avatar} alt="" />
          );

          return (
            <li key={key}>
              {to ? (
                <Link to={to} className={className} aria-label={label} title={label} aria-current={active ? 'page' : undefined}>
                  {content}
                </Link>
              ) : (
                <a
                  href={href}
                  className={className}
                  aria-label={label}
                  title={label}
                  download={download || undefined}
                  {...(href?.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>
                  {content}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
