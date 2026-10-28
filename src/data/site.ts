/**
 * The public address of the site, with no trailing slash.
 * Used for canonical links, the sitemap, social previews and structured data.
 *
 * On GitHub Pages the deploy workflow sets VITE_SITE_URL automatically
 * (https://srijan113.github.io, or your custom domain). The fallback below is
 * used for local builds.
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://srijan113.github.io').replace(/\/+$/, '');
