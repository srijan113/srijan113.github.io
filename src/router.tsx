import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';

/**
 * A tiny History-API router. The site only has three pages, so this keeps the
 * project dependency-free. Swap for react-router if the site grows.
 */

type RouterValue = { path: string; navigate: (to: string) => void };

const RouterContext = createContext<RouterValue>({ path: '/', navigate: () => {} });

const normalize = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p);

/** Where the site is served from: '' at a domain root, '/repo' on a GitHub project page. */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Browser pathname → app route ('/skills/' or '/repo/skills' → '/skills'). */
const toRoute = (pathname: string) => {
  const p = BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname;
  return normalize(p);
};

/**
 * App route → public URL. Pages are served as folders (/skills/index.html), so use a
 * trailing slash; GitHub Pages would otherwise redirect /skills → /skills/.
 */
export const href = (route: string) => (route === '/' ? `${BASE}/` : `${BASE}${normalize(route)}/`);

/** `initialPath` is used when pre-rendering on the server, where there is no window. */
export function Router({ children, initialPath }: { children: ReactNode; initialPath?: string }) {
  const [path, setPath] = useState(() => normalize(initialPath ?? toRoute(window.location.pathname)));

  useEffect(() => {
    const onPop = () => setPath(toRoute(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to: string) => {
    if (normalize(to) !== toRoute(window.location.pathname)) {
      window.history.pushState(null, '', href(to));
      setPath(normalize(to));
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export const usePath = () => useContext(RouterContext).path;
export const useNavigate = () => useContext(RouterContext).navigate;

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

/** Internal link: renders a real <a href> but navigates without a page reload. */
export function Link({ to, onClick, ...rest }: LinkProps) {
  const navigate = useNavigate();
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(to);
  };
  return <a href={href(to)} onClick={handleClick} {...rest} />;
}
