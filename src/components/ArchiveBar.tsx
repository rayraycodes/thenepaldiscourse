import React from 'react';

/**
 * Slim bar above the 2026 site pointing visitors to the 2027 home.
 * Plain <a> on purpose: the 2027 home is outside the router's /2026 basename.
 * BASE_URL is "/" in production and "/staging/" on the staging build.
 */
export function ArchiveBar() {
  return (
    <a href={import.meta.env.BASE_URL} className="tnd-archive-bar">
      <span>
        <span className="tnd-archive-bar-long">You’re viewing the 2026 archive. </span>
        <span className="tnd-archive-bar-cta">
          <span className="tnd-archive-bar-name">The Nepal Discourse</span>
          <abbr className="tnd-archive-bar-abbr" title="The Nepal Discourse">TND</abbr> 2027 · April 10–11 · Save the date{' '}
          <span aria-hidden="true">→</span>
        </span>
      </span>
    </a>
  );
}
