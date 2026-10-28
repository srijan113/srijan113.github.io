/** Server entry used at build time to pre-render each page to static HTML. */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { App } from './App';
import { Router } from './router';

export { headHtml, pages, robotsTxt, sitemapXml, SITE_URL } from './seo';

export function render(path: string): string {
  return renderToString(
    <StrictMode>
      <Router initialPath={path}>
        <App />
      </Router>
    </StrictMode>,
  );
}
