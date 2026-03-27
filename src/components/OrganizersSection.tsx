import { useRef, type CSSProperties } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { organizers } from '../data/organizers';

/** Fixed square; circle via .organizer-avatar-frame in globals.css */
const AVATAR_PX = 96;
const organizerAvatarRadius: CSSProperties = { borderRadius: '50%' };

function initialsFromName(name: string): string {
  const cleaned = name.replace(/^Dr\.?\s*/i, '').trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function OrganizersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const reduced = useReducedMotion();

  return (
    <section
      id="organizers"
      ref={ref}
      className="py-24 px-6 lg:px-12"
      aria-labelledby="organizers-heading"
    >
      <div className="max-w-[1200px] mx-auto organizers-section-stack">
        <header className="organizers-section-intro">
          <motion.h2
            id="organizers-heading"
            className="organizers-section-heading text-3xl md:text-4xl font-serif"
            initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={reduced || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
          >
            Organizing Team
          </motion.h2>
          <motion.p
            className="text-muted-foreground leading-relaxed"
            initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={reduced || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.48, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            Nepali student leaders and collaborators helping build The Nepal Discourse.
          </motion.p>
        </header>

        <ul className="w-full organizers-grid">
          {organizers.map((person, index) => (
            <motion.li
              key={`${person.name}-${person.affiliation}-${index}`}
              initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={reduced || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{
                duration: 0.45,
                delay: reduced ? 0 : Math.min(index * 0.045, 0.5),
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="organizer-row">
                {person.imageSrc ? (
                  <div className="organizer-avatar-frame" style={organizerAvatarRadius}>
                    <img
                      src={person.imageSrc}
                      alt={`Portrait of ${person.name}`}
                      width={AVATAR_PX}
                      height={AVATAR_PX}
                      loading="lazy"
                      decoding="async"
                      className="box-border size-full max-h-none min-h-0 min-w-0 object-cover object-center"
                      style={organizerAvatarRadius}
                    />
                  </div>
                ) : (
                  <div
                    className="organizer-avatar-frame organizer-avatar-placeholder"
                    style={organizerAvatarRadius}
                    aria-hidden="true"
                  >
                    {initialsFromName(person.name)}
                  </div>
                )}
                <div className="organizer-text">
                  <p className="font-serif text-lg font-medium text-foreground mb-1">
                    {person.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{person.affiliation}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
