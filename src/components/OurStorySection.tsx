import { useRef, type ComponentPropsWithoutRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { STRATEGIC_PILLARS } from '../data/strategicPillars';
import { PillarCard } from './PillarCard';

const transitionEase = [0.16, 1, 0.3, 1] as const;

/** First image: full column + 16:9 crop. Second: full column, uncropped centered image + full-width caption. Closing: `--w20` on large screens. */
const storyFigureLandscapeClassName = 'our-story-figure our-story-figure--landscape-full';
const storyFigureNaturalCenterClassName =
  'our-story-figure our-story-figure--landscape-full our-story-figure--natural-center';
const storyFigureClosingClassName = 'our-story-figure our-story-figure--w20';

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

function RevealFigure(props: ComponentPropsWithoutRef<typeof motion.figure>) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduced = useReducedMotion();

  return (
    <motion.figure
      ref={ref}
      initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      animate={reduced || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: reduced ? 0 : 0.44, ease: transitionEase }}
      {...props}
    />
  );
}

function ArticleHeader() {
  const reduced = useReducedMotion();
  return (
    <motion.header
      className="our-story-hero"
      initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.45, ease: transitionEase }}
    >
      <p className="our-story-eyebrow">September 2025, Cambridge, MA</p>
      <div className="our-story-title-block">
        <h1
          id="story-title-heading"
          className="our-story-h1 font-serif font-semibold leading-[1.12] text-[#1A1A1A] m-0"
        >
          The Story Behind the Story
        </h1>
      </div>
    </motion.header>
  );
}

function SectionRule({ extraBelow }: { extraBelow?: boolean }) {
  return (
    <hr
      className={extraBelow ? 'our-story-divider our-story-divider--loose' : 'our-story-divider'}
      aria-hidden="true"
    />
  );
}

/** Same expandable cards as home Strategic Framework */
function OurStoryStrategicPillars() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="w-full max-w-[1200px] mx-auto pt-12 md:pt-20 space-y-6"
      aria-label="Four pillars of the first convening"
    >
      {STRATEGIC_PILLARS.map((pillar, index) => (
        <PillarCard
          key={pillar.number}
          {...pillar}
          delay={index * 0.1}
          isInView={isInView}
          showSessions={false}
          showDescriptionAndOutcome={false}
        />
      ))}
    </section>
  );
}

export function OurStorySection() {
  return (
    <div className="our-story-layout">
      <div className="our-story-page">
        <div className="our-story-watermark" aria-hidden="true" />
        <div className="our-story-inner">
          <article
            className="our-story-article w-full max-w-full min-w-0 px-4 sm:px-8"
            aria-labelledby="story-title-heading"
          >
          <ArticleHeader />

          <RevealSection aria-labelledby="section-encounter">
            <div className="our-story-prose">
              <h2 id="section-encounter" className="!mt-0">
                The Encounter
              </h2>
              <p>
                In early September 2025, just days after the GenZ protests sparked new
                conversations across Nepal, a random encounter at Harvard&apos;s Gutman
                Library set the foundation for a transformative movement. Long-time
                friends Salome Bhatta (HGSE &apos;24) and Utsav Kharel (HGSE &apos;26)
                crossed paths with Dr. Arun R. Joshi (EdM &apos;86, EdD &apos;98), a fellow
                Harvard alum. Bound by a shared passion for human development, education,
                and ecosystem innovation, the three began meeting virtually every Friday
                morning. Those weekly hours were dedicated to unpacking the deep-seated
                challenges facing human capital in Nepal, initially without a specific
                agenda, but driven by a profound sense of purpose.
              </p>
              <p>
                Dr. Joshi brings his extensive global experience in the human development
                sector. Salome brought her expertise as a learning experience designer,
                having previously led a nonprofit in Nepal and worked alongside professors
                to design highly impactful, student-centred courses and education programmes
                at Harvard. Utsav draws from his journey, transitioning from management
                consulting in London to driving social innovation across Nepal and the Asia
                Pacific, and later leading impact innovation labs in East Africa. His drive
                to disrupt traditional models and make learning accessible to all walks of
                life dovetailed perfectly with the group&apos;s emerging mission.
              </p>
            </div>
          </RevealSection>

          <RevealFigure className={storyFigureLandscapeClassName}>
            <div className="our-story-figure-crop">
              <img
                src="/storyimages/story1.png"
                alt="Scene from the founding chapter of The Nepal Discourse: collaboration among Harvard community members invested in Nepal"
                className="our-story-figure-img our-story-figure-img--story1"
                width={1200}
                height={675}
                sizes="(max-width: 39.99rem) 92vw, min(90ch, 92vw)"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="our-story-figcaption">
              Early trust and curiosity at Harvard helped turn a chance meeting into a
              sustained rhythm of dialogue about Nepal&apos;s human capital future.
            </figcaption>
          </RevealFigure>

          <SectionRule />

          <RevealSection aria-labelledby="section-aha">
            <div className="our-story-prose">
              <h2 id="section-aha" className="!mt-0">
                The Aha Moment
              </h2>
              <h3 id="aha-subheading">Urgency in the Age of AI</h3>
              <p>
                As the trio mapped the landscape, they confronted an uncomfortable truth:
                Nepal&apos;s developmental ecosystem was deeply fragmented, with critical
                efforts operating in silos. More pressing was the looming disruption of
                artificial intelligence and emerging technologies on the current trajectory
                of human development. They asked themselves a critical question: Can we
                really afford to wait ten years to read a research recommendation telling us
                we need to be proactive about technology to bridge growing disparities? The
                answer was a resounding no. Perhaps this is &apos;the Nepal Moment.&apos;
              </p>
              <blockquote className="our-story-pull-quote our-story-pull-quote--harvard">
                <p className="m-0 p-0 text-inherit leading-inherit">
                  Can we really afford to wait ten years?
                </p>
              </blockquote>
              <p>
                They envisioned a new kind of dialogue: one anchored at Harvard University
                and MIT, tapping into the abundance of future-defining conversations
                happening within these institutions. However, they were resolute from day
                one: this could not be just another &apos;talk shop&apos; where brilliant
                minds gather to speak without consequence. It had to be a global platform
                designed to forge concrete, actionable plans, driven by distinct
                stakeholders who would hold each other accountable year after year.
                Moreover, this conversation should be led by practitioners from
                Nepal-based ecosystems. They also agreed that the initiative would remain
                non-ideological and that no large-scale funding would be entertained from
                a single source, in order to preserve neutrality, independence, and
                integrity.
              </p>
            </div>
          </RevealSection>

          <SectionRule extraBelow />

          <RevealSection aria-labelledby="section-concept">
            <div className="our-story-prose">
              <h2 id="section-concept" className="!mt-0">
                From Concept to Collaboration
              </h2>
              <p className="our-story-key-pillars-lede">
                Treating their vision like a startup, they drafted a concept note as a
                minimum viable product (MVP) and shared it with their peers from other
                schools, alumni and professors for rigorous feedback. Guided further by
                Dr. Joshi, drawing on his over two-decade career leading education
                portfolios for The World Bank across multiple countries and as the founder
                of Leadership Academy Nepal, the team, with support from Anup Kaphle and
                Mahesh Swar from Kathmandu Media Group (KMG), engaged industry leaders, academics,
                grassroots organisations, bureaucrats, and civil society members from both
                Nepal and the diaspora. Through multiple iterations, the vision for the
                first convening shaped into four key pillars:
              </p>
            </div>

            <OurStoryStrategicPillars />
          </RevealSection>

          <RevealFigure className={storyFigureNaturalCenterClassName}>
            <div className="our-story-figure-natural-wrap">
              <img
                src="/storyimages/story2.png"
                alt="Visual representing partnership across Nepali institutions, diaspora networks, and global academia"
                className="our-story-figure-img our-story-figure-img--natural"
                width={1200}
                height={675}
                sizes="(max-width: 39.99rem) 92vw, min(90ch, 92vw)"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="our-story-figcaption our-story-figcaption--full-width">
              Iteration with peers and practitioners helped turn a concept note into a
              shared framework with room for accountability.
            </figcaption>
          </RevealFigure>

          <SectionRule />

          <RevealSection aria-labelledby="section-movement">
            <div className="our-story-prose">
              <h2 id="section-movement" className="!mt-0">
                A Movement Takes Shape
              </h2>
              <p>
                By December, the momentum was undeniable. More friends from Harvard, MIT,
                and neighbouring schools joined the cause, transforming the early concept
                into a fully realised initiative by Nepali students at Harvard University
                and MIT. Student groups mobilised to design immersive conversation
                experiences, forge ecosystem-level partnerships, and develop strategic
                frameworks for Strategic Foresight 2035 in close collaboration with
                grassroots organisations and academics in Nepal.
              </p>
            </div>
          </RevealSection>

          <SectionRule extraBelow />

          <RevealSection aria-labelledby="section-closing">
            <div className="our-story-prose">
              <h2 id="section-closing" className="!mt-0">
                Closing
              </h2>
              <p>
                What began as an accidental meeting in a library has blossomed into a
                source of immense hope and enthusiasm. It is a unified effort across the
                diaspora and the local ecosystem to build something deep, meaningful, and
                enduring for Nepal&apos;s future.
              </p>
              <blockquote className="our-story-pull-quote our-story-pull-quote--closing">
                <p className="m-0 p-0 text-inherit leading-inherit">
                  What began as an accidental meeting in a library has blossomed into a
                  source of immense hope and enthusiasm
                </p>
              </blockquote>
            </div>
          </RevealSection>

          <RevealFigure className={storyFigureClosingClassName}>
            <img
              src="/storyimages/story3.png"
              alt="Closing image for The Nepal Discourse story: hope and collective momentum for Nepal"
              className="our-story-figure-img"
              width={1200}
              height={675}
              sizes="(max-width: 39.99rem) 92vw, 20vw"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="our-story-figcaption">
              A long-form invitation to stay with a question worth carrying forward: what
              must we build together, starting now?
            </figcaption>
          </RevealFigure>
        </article>
        </div>
      </div>
    </div>
  );
}
