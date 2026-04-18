import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/** Default GA4 property; override with `VITE_GA_MEASUREMENT_ID` if needed. */
const DEFAULT_MEASUREMENT_ID = 'G-0WS6E1VCHH';
const MEASUREMENT_ID =
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined)?.trim() || DEFAULT_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends GA4 page_view on client-side navigations. Initial load is handled by
 * `index.html` (gtag.js); this avoids double-counting the first page.
 */
export function GoogleAnalytics() {
  const location = useLocation();
  const lastReportedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!MEASUREMENT_ID || typeof window.gtag !== 'function') return;

    const path = location.pathname + location.search;
    if (lastReportedPath.current === path) return;

    if (lastReportedPath.current === null) {
      lastReportedPath.current = path;
      return;
    }

    lastReportedPath.current = path;
    window.gtag('config', MEASUREMENT_ID, {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  return null;
}
