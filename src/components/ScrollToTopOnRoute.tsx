import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll to top when the path changes (not when only the hash changes on the same path).
 */
export function ScrollToTopOnRoute() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname]);

  return null;
}
