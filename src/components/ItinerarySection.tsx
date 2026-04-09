import { useRef, type ComponentPropsWithoutRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { ItineraryOnboardingGuide } from './ItineraryOnboardingGuide';

const transitionEase = [0.16, 1, 0.3, 1] as const;

function RevealSection({
  children,
  ...props
}: ComponentPropsWithoutRef<typeof motion.section>) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-48px' });
  const reduced = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={reduced || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: reduced ? 0 : 0.48, ease: transitionEase }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

function PageHeader() {
  const reduced = useReducedMotion();
  return (
    <motion.header
      className="our-story-hero"
      initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.45, ease: transitionEase }}
    >
      <p className="our-story-eyebrow">The Nepal Discourse 2026</p>
      <div className="our-story-title-block">
        <h1
          id="itinerary-heading"
          className="our-story-h1 font-serif font-semibold leading-[1.12] text-[#1A1A1A] m-0"
        >
          Conference Schedule
        </h1>
      </div>
    </motion.header>
  );
}

export function ItinerarySection() {
  return (
    <div className="our-story-layout our-story-layout--itinerary our-story-layout--itinerary-aaa">
      <div className="our-story-page">
        <div className="our-story-watermark" aria-hidden="true" />
        <div className="our-story-inner">
          <article
            className="our-story-article relative w-full max-w-full min-w-0 px-4 sm:px-8"
            aria-labelledby="itinerary-heading"
          >
            <a href="#itinerary-toc" className="itinerary-skip-toc">
              Skip to table of contents
            </a>
            <PageHeader />

            <RevealSection aria-label="Conference schedule and onboarding guide">
              <ItineraryOnboardingGuide />
            </RevealSection>
          </article>
        </div>
      </div>
    </div>
  );
}
