import { useRef, type ComponentPropsWithoutRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'motion/react';

const transitionEase = [0.16, 1, 0.3, 1] as const;

/** Harvard GSE calendar — general and student ticket tiers */
const HARVARD_GSE_EVENT_URL =
  'https://calendar.gse.harvard.edu/en/36YmkP6/the-nepal-discourse-human-development-ai-and-the-next-generation-of-leadership-5a5YUc2TDOv/overview';

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
      className="our-story-hero flex w-full flex-col items-center text-center"
      initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.45, ease: transitionEase }}
    >
      <p className="our-story-eyebrow">The Nepal Discourse 2026</p>
      <div className="our-story-title-block">
        <h1
          id="register-heading"
          className="our-story-h1 font-serif font-semibold leading-[1.12] text-[#1A1A1A] m-0 text-center"
        >
          Buy Tickets
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
            aria-labelledby="register-heading"
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
                    href={HARVARD_GSE_EVENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apply-register-cta"
                    aria-describedby="general-admission-details"
                  >
                    <span className="text-left text-pretty">
                      Click here to purchase a general admission ticket to The Nepal Discourse 2026 ($100
                      per day).
                    </span>
                    <span className="apply-story-external-suffix shrink-0" aria-hidden="true">
                      {'\u00A0'}
                      <ExternalLink className="apply-story-external-icon" />
                    </span>
                  </a>
                </p>
                <p>
                  To secure your spot, please use the button above to view available ticket tiers.
                  Then click &ldquo;Register Today,&rdquo; select the Standard Ticket option for your
                  preferred day (Day 1 or Day 2 or both), and complete your details at checkout. Once
                  your purchase is confirmed, you will receive a confirmation email with the option to
                  add the event to your calendar.
                </p>

                <h3 id="student-admission">Student Admission</h3>
                <p id="student-admission-intro">
                  We are pleased to announce that the highly anticipated student tickets are now
                  available.
                </p>
                <p>
                  To secure your spot, please use the button below to view available ticket tiers.
                  Then click &ldquo;Register Today,&rdquo; select the Student Ticket option for your
                  preferred day (Day 1 or Day 2 or both), and complete your details at checkout. Once
                  your purchase is confirmed, you will receive a confirmation email with the option to
                  add the event to your calendar. Subsidized tickets are reserved exclusively for
                  students with a valid .edu email address. This tier is capped at 100 tickets, and
                  student IDs will be verified at the event.
                </p>
                <p>
                  <a
                    href={HARVARD_GSE_EVENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apply-register-cta"
                    aria-describedby="student-admission-intro"
                  >
                    <span className="text-left text-pretty">
                      Click here to Purchase Student Discount Tickets ($50 per day)
                    </span>
                    <span className="apply-story-external-suffix shrink-0" aria-hidden="true">
                      {'\u00A0'}
                      <ExternalLink className="apply-story-external-icon" />
                    </span>
                  </a>
                </p>
                <p>
                  We highly encourage you to secure your tickets within the next few days before they
                  sell out.
                </p>

                <h3 id="vip-patron">VIP Patron Pass</h3>
                <p id="vip-patron-details">
                  The VIP Patron Pass is designed for supporters who want to help fund this
                  student-led initiative. In addition to preferred access, VIP patrons receive select
                  benefits, including guided Harvard–MIT tours, a dinner reception, and a VIP goodie
                  bag. VIP passes are limited in quantity.
                </p>
                <p className="apply-vip-contact">
                  If you are interested, please reach out to{' '}
                  <a
                    href="mailto:info@thenepaldiscourse.com"
                    className="apply-story-link"
                    {...({ 'x-apple-data-detectors': 'false' } as Record<string, string>)}
                  >
                    info@thenepaldiscourse.com
                  </a>{' '}
                  to inquire about a VIP Patron Pass.
                </p>

                <h3 id="other-ticket-tiers">Other Ticket Tiers</h3>
                <p id="hgse-student-ticket">
                  <strong>HGSE Student Ticket:</strong> Per Harvard guidelines, at least 20 tickets are
                  reserved strictly for the Harvard Graduate School of Education (HGSE) community.
                </p>

                <h3 id="event-details-preparation">Event Details and Preparation</h3>
                <p>
                  A fuller attendee handbook and practical details will be shared after your ticket is
                  confirmed. Treat your registration confirmation and follow-up emails as the primary
                  source for timing and logistics.
                </p>

                <h3 id="important-note">Important Note</h3>
                <p id="important-note-context-lead">
                  The Nepal Discourse is a student-led conference supported by volunteers, faculty,
                  and partners. We aim to run a high-quality program, but we operate with the staffing
                  and resources typical of an academic convening rather than a commercial summit.
                </p>
                <p>
                  We cannot provide travel, visa, or accommodation support, arrange invitations for
                  immigration purposes, or book lodging on your behalf. Please plan your own logistics
                  and ensure you meet all requirements to enter the United States and access Harvard
                  and MIT campus venues.
                </p>
                <p>
                  Information on this page is for planning only and is not a contract of services.
                  Check-in and venue access may require a government-issued photo ID and your ticket or
                  confirmation. Follow instructions in your registration and confirmation emails if
                  they differ from anything published here.
                </p>
                <p className="apply-important-contact">
                  For ticketing or access questions, contact{' '}
                  <a
                    href="mailto:info@thenepaldiscourse.com"
                    className="apply-story-link"
                    {...({ 'x-apple-data-detectors': 'false' } as Record<string, string>)}
                  >
                    info@thenepaldiscourse.com
                  </a>
                  .
                </p>
              </div>
            </RevealSection>
          </article>
        </div>
      </div>
    </div>
  );
}
