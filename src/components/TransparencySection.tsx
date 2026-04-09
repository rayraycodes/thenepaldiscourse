import { useRef, type ComponentPropsWithoutRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

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
      <p className="our-story-eyebrow">The Nepal Discourse</p>
      <div className="our-story-title-block">
        <h1
          id="transparency-heading"
          className="our-story-h1 font-serif font-semibold leading-[1.12] text-[#1A1A1A] m-0"
        >
          Transparency
        </h1>
      </div>
    </motion.header>
  );
}

export function TransparencySection() {
  return (
    <div className="our-story-layout our-story-layout--transparency">
      <div className="our-story-page">
        <div className="our-story-watermark" aria-hidden="true" />
        <div className="our-story-inner">
          <article
            className="our-story-article w-full max-w-full min-w-0 px-4 sm:px-8"
            aria-labelledby="transparency-heading"
          >
            <PageHeader />

            <RevealSection aria-label="Funding and accountability">
              <div className="our-story-prose our-story-prose--compact-transparency">
                <p>
                  The Nepal Discourse was founded on the belief that to build a resilient and
                  forward-looking ecosystem, we must first build trust. As a platform convening
                  diverse voices to shape the future of human capital in Nepal, our integrity,
                  neutrality, and independence are our most valuable assets.
                </p>
                <p>
                  To ensure that our dialogues remain entirely non-ideological and driven solely
                  by the shared goals of the Nepali community and diaspora, we have established a
                  strict, community-backed financial model.
                </p>
                <h3 id="transparency-funded">How We Are Funded</h3>
                <p>
                  We are intentionally diversifying our financial support to ensure no single
                  entity can influence the agenda or outcomes of The Nepal Discourse. Our
                  initiative is sustained through a coalition of community backing, including:
                </p>
                <ul>
                  <li>
                    <strong>Community Participation:</strong> Proceeds from conference ticket
                    sales, including Standard and VIP Patron passes.
                  </li>
                  <li>
                    <strong>Corporate Sponsorships:</strong> Strategic sponsorships from
                    values-aligned businesses operating within Nepal and the global diaspora.
                  </li>
                  <li>
                    <strong>Philanthropic Giving:</strong> Contributions from high-net-worth
                    individuals across the diaspora and academic institutions who believe in our
                    mission.
                  </li>
                </ul>
                <h3 id="transparency-guardrails">Our Guardrails for Independence</h3>
                <p>
                  To preserve the neutrality of this historic platform, The Nepal Discourse
                  strictly prohibits the acceptance of large-scale, monopolistic funding from any
                  single source. By capping individual contributions and relying on a broad base of
                  support (particularly through ticketing and VIP Patron Passes), we want to
                  ensure that the platform remains student-led and owned by the community it
                  serves.
                </p>
                <h3 id="transparency-accountability">Accountability</h3>
                <p>
                  We believe that this conference is built for the human development of Nepal and
                  must be fully accountable to the community that deeply cares about Nepal&apos;s
                  future. We are committed to an open-book policy.
                </p>
                <p>
                  Moving forward, all finalised details regarding the financing, operational costs,
                  and fund allocation for the inaugural conference will be regularly updated and
                  published directly on this page. As an initiative led by officially recognised
                  Nepali student organisations at Harvard University and the Massachusetts
                  Institute of Technology (MIT), we hold ourselves to the highest standards of
                  financial stewardship.
                </p>
              </div>
            </RevealSection>
          </article>
        </div>
      </div>
    </div>
  );
}
