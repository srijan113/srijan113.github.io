import { useEffect } from 'react';

import { Dock } from './components/Dock';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { usePath } from './router';
import { applyHead } from './seo';

const routes = {
  '/': Home,
  '/skills': Skills,
  '/projects': Projects,
} as const;

export function App() {
  const path = usePath();
  const Page = routes[path as keyof typeof routes] ?? Home;

  useEffect(() => {
    applyHead(path);
  }, [path]);

  return (
    <>
      <Page />
      <Dock />
    </>
  );
}
