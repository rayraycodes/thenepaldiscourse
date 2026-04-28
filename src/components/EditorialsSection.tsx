import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { EDITORIALS, type EditorialEntry } from '../data/editorials';

const transitionEase = [0.16, 1, 0.3, 1] as const;

function EditorialsHero() {
  const reduced = useReducedMotion();
  return (
    <motion.header
      className="our-story-hero editorials-hero"
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.45, ease: transitionEase }}
    >
      <p className="our-story-eyebrow">In their words</p>
      <div className="our-story-title-block">
        <h1
          id="editorials-heading"
          className="our-story-h1 font-serif font-semibold leading-[1.12] m-0"
        >
          Editorials
        </h1>
      </div>
      <p className="editorials-hero-lede">
        Pieces from our community published in the Kathmandu Post and Kantipur.
      </p>
    </motion.header>
  );
}

function EditorialCard({ editorial, index }: { editorial: EditorialEntry; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduced = useReducedMotion();

  const originalLang = editorial.originalLang;
  const originalTitle =
    editorial.title[originalLang] ?? editorial.title.en ?? editorial.title.ne ?? '';
  const originalLink =
    editorial.links[originalLang] ?? editorial.links.en ?? editorial.links.ne ?? '#';

  const accessibleSummary = `Read “${originalTitle}” by ${editorial.authors} in ${editorial.outlet}, ${editorial.publishedAt}.`;

  return (
    <motion.article
      ref={ref}
      className="editorials-card"
      initial={reduced ? false : { opacity: 0, y: 14 }}
      animate={reduced || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{
        duration: reduced ? 0 : 0.42,
        delay: reduced ? 0 : Math.min(index * 0.06, 0.36),
        ease: transitionEase,
      }}
    >
      <a
        href={originalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="editorials-card-link"
        aria-label={accessibleSummary}
      >
        <div className="editorials-card-thumb-wrap">
          <img
            src={editorial.thumbnail}
            alt={editorial.thumbnailAlt}
            className="editorials-card-thumb"
            loading="lazy"
            decoding="async"
          />
        </div>
        <h2
          className="editorials-card-title font-serif"
          lang={originalLang}
        >
          {originalTitle}
        </h2>
      </a>
      <p className="editorials-card-byline">
        <span className="editorials-card-author">{editorial.authors}</span>
        <span aria-hidden="true" className="editorials-card-sep">
          ·
        </span>
        <span className="editorials-card-meta">
          {editorial.outlet} —{' '}
          <time dateTime={editorial.publishedAtISO}>{editorial.publishedAt}</time>
        </span>
      </p>
      <p className="editorials-card-langs" aria-label="Available languages">
        {editorial.links.en ? (
          <a
            href={editorial.links.en}
            target="_blank"
            rel="noopener noreferrer"
            className="editorials-card-lang"
          >
            English
          </a>
        ) : (
          <span className="editorials-card-lang editorials-card-lang--muted">
            English
            {editorial.englishComingSoon ? (
              <span className="editorials-card-lang-note"> (coming soon)</span>
            ) : null}
          </span>
        )}
        <span aria-hidden="true" className="editorials-card-langs-sep">
          |
        </span>
        {editorial.links.ne ? (
          <a
            href={editorial.links.ne}
            target="_blank"
            rel="noopener noreferrer"
            className="editorials-card-lang"
            lang="ne"
          >
            नेपाली
          </a>
        ) : (
          <span lang="ne" className="editorials-card-lang editorials-card-lang--muted">
            नेपाली
          </span>
        )}
      </p>
    </motion.article>
  );
}

export function EditorialsSection() {
  return (
    <div className="our-story-layout">
      <div className="our-story-page">
        <div className="our-story-watermark" aria-hidden="true" />
        <div className="our-story-inner">
          <section
            className="our-story-article w-full max-w-full min-w-0 px-4 sm:px-8"
            aria-labelledby="editorials-heading"
          >
            <EditorialsHero />
            <ul
              className="editorials-grid"
              aria-label="Editorials by community contributors"
            >
              {EDITORIALS.map((editorial, index) => (
                <li className="editorials-grid-item" key={editorial.id}>
                  <EditorialCard editorial={editorial} index={index} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
