import { useEffect } from 'react';

import { Dock } from './components/Dock';
import { projectBySlug } from './data/projects';
import { AboutPage } from './pages/AboutPage';
import { Home } from './pages/Home';
import { ProjectPage } from './pages/ProjectPage';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { usePath } from './router';
import { applyHead } from './seo';

const routes = {
  '/': Home,
  '/skills': Skills,
  '/projects': Projects,
  '/about': AboutPage,
} as const;

export function App() {
  const path = usePath();
  const project = path.startsWith('/projects/') ? projectBySlug(path.slice('/projects/'.length)) : undefined;
  const Page = routes[path as keyof typeof routes] ?? Home;

  useEffect(() => {
    applyHead(path);
  }, [path]);

  return (
    <>
      {project ? <ProjectPage project={project} /> : <Page />}
      <Dock />
    </>
  );
}
