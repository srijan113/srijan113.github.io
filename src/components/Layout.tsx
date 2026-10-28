import type { ReactNode } from 'react';

import { Contact } from './Contact';
import { Footer } from './Footer';

/** Page shell shared by every route: page content, then contact block and footer. */
export function Layout({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <>
      <main style={{ background: dark ? 'var(--black)' : 'var(--white)' }}>{children}</main>
      <Contact />
      <Footer />
    </>
  );
}
