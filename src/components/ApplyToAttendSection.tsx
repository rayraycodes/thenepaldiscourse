import { useRef, type ComponentPropsWithoutRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'motion/react';

const transitionEase = [0.16, 1, 0.3, 1] as const;

const REGISTRATION_FORM_URL =
  'https://harvard.az1.qualtrics.com/jfe/form/SV_4Iu7svN4Y3gAaRo';

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
          id="apply-heading"
          className="our-story-h1 font-serif font-semibold leading-[1.12] text-[#1A1A1A] m-0"
        >
          Apply to Attend
        </h1>
      </div>
    </motion.header>
  );
}

export function ApplyToAttendSection() {
  return (
    <div className="our-story-layout our-story-layout--apply">
      <div className="our-story-page">
        <div className="our-story-watermark" aria-hidden="true" />
        <div className="our-story-inner">
          <article
            className="our-story-article w-full max-w-full min-w-0 px-4 sm:px-8"
            aria-labelledby="apply-heading"
          >
            <PageHeader />

            <RevealSection aria-label="Admission and registration">
              <div className="our-story-prose our-story-prose--compact-transparency our-story-prose--apply">
                <p>
                  Thank you for your interest in The Nepal Discourse 2026.
                </p>

                <h3 id="general-admission">General Admission</h3>
                <p id="general-admission-details">
                  General tickets are $100 per day. This helps cover the core costs of hosting the
                  convening across Harvard and MIT venues, including catering and event operations.
                </p>
                <p>
                  <a
                    href={REGISTRATION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apply-story-link"
                    aria-describedby="general-admission-details"
                  >
                    Register for general admission to The Nepal Discourse 2026 ($100 per day).
                    <span className="apply-story-external-suffix" aria-hidden="true">
                      {'\u00A0'}
                      <ExternalLink className="apply-story-external-icon" />
                    </span>
                  </a>
                </p>

                <h3 id="student-admission">Student Admission</h3>
                <p id="student-admission-details">
                  We are working hard to secure additional funding so we can keep the conference
                  accessible to students. Our goal is to subsidize student tickets by 50%, bringing
                  the price to $50 per day. Please register for a student ticket and keep an eye out
                  for the purchase link when it becomes available. Purchases will require a .edu
                  email, and a valid student ID is required at check-in.
                </p>
                <p>
                  <a
                    href={REGISTRATION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apply-story-link"
                    aria-describedby="student-admission-details"
                  >
                    Register for a student ticket to The Nepal Discourse 2026 (.edu email; student ID
                    at check-in).
                    <span className="apply-story-external-suffix" aria-hidden="true">
                      {'\u00A0'}
                      <ExternalLink className="apply-story-external-icon" />
                    </span>
                  </a>
                </p>

                <h3 id="vip-patron">VIP Patron Pass</h3>
                <p id="vip-patron-details">
                  The VIP Patron Pass is designed for supporters who want to help fund this
                  student-led initiative. In addition to preferred access, VIP patrons receive select
                  benefits, including guided Harvard–MIT tours, a dinner reception, and a VIP goodie
                  bag. VIP passes are limited in quantity.
                </p>
                <p className="apply-vip-contact">
                  If you are interested, please reach&nbsp;out to{' '}
                  <span
                    className="apply-plain-email"
                    translate="no"
                    {...({ 'x-apple-data-detectors': 'false' } as Record<string, string>)}
                  >
                    info@thenepaldiaspora.com
                  </span>{' '}
                  to inquire about a VIP Patron Pass.
                </p>
              </div>
            </RevealSection>
          </article>
        </div>
      </div>
    </div>
  );
}
