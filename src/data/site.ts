/**
 * The public address of the site, with no trailing slash.
 * Used for canonical links, the sitemap, social previews and structured data.
 *
 * On GitHub Pages the deploy workflow sets VITE_SITE_URL automatically
 * (https://srijanpokhrel.info.np). The fallback below is
 * used for local builds.
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://srijanpokhrel.info.np').replace(/\/+$/, '');
