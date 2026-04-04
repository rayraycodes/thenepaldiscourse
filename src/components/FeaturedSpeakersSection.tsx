import {
  useCallback,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent,
} from 'react';
import { motion, useInView } from 'motion/react';

const FINE_POINTER_HOVER_MQ = '(hover: hover) and (pointer: fine)';
/** Align with Tailwind `md` (768px): collapse long grid only below md */
const MOBILE_SPEAKERS_GRID_MQ = '(max-width: 767px)';
const MOBILE_SPEAKERS_INITIAL_COUNT = 6;

function subscribeFinePointerHover(onChange: () => void) {
  const mq = window.matchMedia(FINE_POINTER_HOVER_MQ);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

function getFinePointerHoverSnapshot() {
  return window.matchMedia(FINE_POINTER_HOVER_MQ).matches;
}

function usePrefersFinePointerHover() {
  return useSyncExternalStore(subscribeFinePointerHover, getFinePointerHoverSnapshot, () => false);
}

function subscribeMobileSpeakersGrid(onChange: () => void) {
  const mq = window.matchMedia(MOBILE_SPEAKERS_GRID_MQ);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

function getMobileSpeakersGridSnapshot() {
  return window.matchMedia(MOBILE_SPEAKERS_GRID_MQ).matches;
}

/** True when featured speaker grid uses narrow (2-col) layout */
function useMobileFeaturedSpeakersGrid() {
  return useSyncExternalStore(
    subscribeMobileSpeakersGrid,
    getMobileSpeakersGridSnapshot,
    () => false,
  );
}

type Speaker = {
  id: string;
  name: string;
  title: string;
  image: string;
};

const speakers: Speaker[] = [
  {
    id: 'anup-kaphle',
    name: 'Anup Kaphle',
    title: 'Editor-in-Chief, Rest of World',
    image: '/speakers/anupkaphle.jpg',
  },
  {
    id: 'biswash-gauchan',
    name: 'Dr. Biswash Gauchan, FCA',
    title: 'Executive Director, Institute for Integrated Development Studies (IIDS)',
    image: '/speakers/drbiswashgauchan.png',
  },
  {
    id: 'sanjay-manandhar',
    name: 'Sanjay Manandhar',
    title: 'CEO, Zifino',
    image: '/speakers/sanjaymanandhar.jpg',
  },
  {
    id: 'rupa-laxmi-shah',
    name: 'Rupa Laxmi Shah',
    title: 'Director of Philanthropy and Partnerships, MIT RAISE',
    image: '/speakers/rupalaxmishah.jpg',
  },
  {
    id: 'dipta-shah',
    name: 'Dipta Shah',
    title: 'Founding Partner, 54i Ventures',
    image: '/speakers/diptashah.jpeg',
  },
  {
    id: 'peter-blair',
    name: 'Dr. Peter Q. Blair',
    title:
      'Associate Professor at Harvard; Co-Director of Project on Workforce',
    image: '/speakers/peterblair.webp',
  },
  {
    id: 'sameer-maskey',
    name: 'Dr. Sameer Maskey',
    title: 'Founder and CEO of Fusemachines',
    image: '/speakers/sameermaskey.png',
  },
  {
    id: 'sambhav-sirohiya',
    name: 'Sambhav Swar Sirohiya',
    title:
      'Managing Director, Kantipur Media Group; Managing Partner, MNS',
    image: '/speakers/sambhav.jpeg',
  },
  {
    id: 'shubhangi-rana',
    name: 'Shubhangi Rana',
    title: 'Program Manager, MIT KSC; Co-founder, Pad2Go Nepal',
    image: '/speakers/shubhangirana.jpeg',
  },
  {
    id: 'mahendra-pandey',
    name: 'Mahendra Pandey',
    title:
      'Director, Forced Labor & Human Trafficking (FLHT) at Humanity United',
    image: '/speakers/mahendra.jpeg',
  },
  {
    id: 'bhawani-rana',
    name: 'Bhawani Rana',
    title: 'President, FNCCI (2017–2020)',
    image: '/speakers/bhawanirana.png',
  },
  {
    id: 'biswas-dhakal',
    name: 'Biswas Dhakal',
    title: 'Chairman, F1Soft; CEO, FILPs',
    image: '/speakers/biswasdhakal.jpg',
  },
  {
    id: 'david-sislen',
    name: 'David Sislen',
    title:
      'Division Director for Maldives, Nepal, and Sri Lanka, The World Bank',
    image: '/speakers/davidsislen.png',
  },
  {
    id: 'manoj-paudel',
    name: 'Manoj Paudel',
    title: 'Founder, Aadhyanta Fund Management Limited',
    image: '/speakers/manojpoudel.png',
  },
  {
    id: 'ashish-luitel',
    name: 'Dr. Ashish Luitel',
    title: 'Lead, Public Sector and Regulated Cloud Security, N-able',
    image: '/speakers/ashishluitel.jpeg',
  },
  {
    id: 'bal-krishna-joshi',
    name: 'Bal Krishna Joshi',
    title: 'Founder & CEO, Xuno',
    image: '/speakers/balkrishnajoshi.jpeg',
  },
];

export function FeaturedSpeakersSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [flippedId, setFlippedId] = useState<string | null>(null);
  const [mobileShowAllSpeakers, setMobileShowAllSpeakers] = useState(false);
  const prefersHover = usePrefersFinePointerHover();
  const isMobileGrid = useMobileFeaturedSpeakersGrid();

  const needsMobileMoreSpeakers =
    isMobileGrid && speakers.length > MOBILE_SPEAKERS_INITIAL_COUNT;

  const visibleSpeakers =
    needsMobileMoreSpeakers && !mobileShowAllSpeakers
      ? speakers.slice(0, MOBILE_SPEAKERS_INITIAL_COUNT)
      : speakers;

  const hiddenMobileSpeakersCount = Math.max(
    0,
    speakers.length - MOBILE_SPEAKERS_INITIAL_COUNT,
  );

  const handleCardActivate = useCallback(
    (id: string) => {
      if (prefersHover) return;
      setFlippedId((current) => (current === id ? null : id));
    },
    [prefersHover],
  );

  const onCardKeyDown = useCallback(
    (id: string, e: KeyboardEvent) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      handleCardActivate(id);
    },
    [handleCardActivate],
  );

  return (
    <section
      id="speakers"
      ref={sectionRef}
      className="featured-speakers-section w-full py-20 px-6 lg:px-12"
    >
      <div className="w-full">
        <motion.h2
          className="text-3xl md:text-4xl font-serif mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
        >
          Featured Speakers
        </motion.h2>

        {/* Plain div: avoid opacity gating + Safari/WebKit often paints 3D flip incorrectly inside <button> */}
        <div
          className="featured-speakers-stage"
          aria-label="Speaker photos; tap a photo on touch devices to see name and title"
        >
          <ul className="featured-speakers-list" id="featured-speakers-list">
            {visibleSpeakers.map((speaker) => {
              const isFlipped = !prefersHover && flippedId === speaker.id;
              return (
                <li key={speaker.id} className="featured-speakers-item">
                  <div
                    role="button"
                    tabIndex={0}
                    className={`speaker-card${isFlipped ? ' is-flipped' : ''}`}
                    onClick={() => handleCardActivate(speaker.id)}
                    onKeyDown={(e) => onCardKeyDown(speaker.id, e)}
                    aria-pressed={isFlipped}
                    aria-label={`${speaker.name}, ${speaker.title}. ${
                      prefersHover ? 'Hover to flip.' : 'Tap to flip.'
                    }`}
                  >
                    <span className="speaker-card-inner">
                      <span className="speaker-card-front">
                        <img
                          src={speaker.image}
                          alt=""
                          width={176}
                          height={176}
                          loading="lazy"
                          decoding="async"
                          className="speaker-card-photo"
                        />
                      </span>
                      <span className="speaker-card-back">
                        <span className="speaker-card-back-text">
                          <span className="speaker-card-name">{speaker.name}</span>
                          <span className="speaker-card-title">{speaker.title}</span>
                        </span>
                      </span>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>

          {needsMobileMoreSpeakers ? (
            <div className="flex justify-center mt-10 md:hidden">
              <button
                type="button"
                className="border border-border bg-background px-6 py-3 text-sm font-medium tracking-wide text-foreground hover:border-foreground/25 hover:bg-muted/40 transition-colors duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                aria-expanded={mobileShowAllSpeakers}
                aria-controls="featured-speakers-list"
                onClick={() => {
                  setMobileShowAllSpeakers((open) => !open);
                }}
              >
                {mobileShowAllSpeakers
                  ? 'Show fewer speakers'
                  : `Show ${hiddenMobileSpeakersCount} more speakers`}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
