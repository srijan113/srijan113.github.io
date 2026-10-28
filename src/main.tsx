import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import { App } from './App';
import { Router } from './router';
import './styles/global.css';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);

// Production pages are pre-rendered to HTML (good for SEO); attach to that markup.
// In development the root is empty, so render from scratch.
if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);
