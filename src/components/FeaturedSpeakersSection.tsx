import {
  useCallback,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent,
  type SyntheticEvent,
} from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FINE_POINTER_HOVER_MQ = '(hover: hover) and (pointer: fine)';
/** Below Tailwind `lg` (1024px): 2-col grid — collapse long roster before desktop 6-col */
const NARROW_SPEAKERS_GRID_MQ = '(max-width: 1023px)';
const SPEAKERS_PREVIEW_COUNT = 10;
/** Planned lineup size; remaining slots shown under the section title */
const FEATURED_SPEAKERS_PLANNED_TOTAL = 40;

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

function subscribeNarrowSpeakersGrid(onChange: () => void) {
  const mq = window.matchMedia(NARROW_SPEAKERS_GRID_MQ);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

function getNarrowSpeakersGridSnapshot() {
  return window.matchMedia(NARROW_SPEAKERS_GRID_MQ).matches;
}

/** True when featured speaker grid uses narrow (2-col) layout — not desktop 6-col */
function useNarrowFeaturedSpeakersGrid() {
  return useSyncExternalStore(
    subscribeNarrowSpeakersGrid,
    getNarrowSpeakersGridSnapshot,
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
  {
    id: 'karvika-thapa',
    name: 'Karvika Thapa',
    title: 'CEO, Kimbu Tech',
    image: '/speakers/karvikathapa.png',
  },
  {
    id: 'prasanna-dhungel',
    name: 'Prasanna Dhungel',
    title: 'Co-Founder, Grow by Data',
    image: '/speakers/prasannadhungel.png',
  },
  {
    id: 'semanta-dahal',
    name: 'Semanta Dahal',
    title: 'Advocate and Partner, Abhinawa Law Chambers',
    image: '/speakers/semantadahal.png',
  },
  {
    id: 'michael-p-foley',
    name: 'Michael P. Foley',
    title: 'CEO, Ncell',
    image: '/speakers/michaelpfoley.jpg',
  },
  {
    id: 'sharad-raj-aran',
    name: 'Sharad Raj Aran',
    title: 'Embassy of Nepal, USA',
    image: '/speakers/sharadaryan.jpg',
  },
  {
    id: 'hitesh-hathi',
    name: 'Hitesh Hathi',
    title: 'Executive Director, Harvard South Asia Institute',
    image: '/speakers/hiteshhathi.jpg',
  },
  {
    id: 'rakshya-bam',
    name: 'Rakshya Bam',
    title: 'Youth Activist',
    image: '/speakers/rakshyabam.png',
  },
  {
    id: 'rumee-singh',
    name: 'Rumee Singh',
    title: 'Moderator | CEO & Co-Founder, Rumsan',
    image: '/speakers/rumee.png',
  },
  {
    id: 'sulav-budathoki',
    name: 'Sulav Budathoki',
    title: 'Chairman, CEO, ING Group',
    image: '/speakers/sulav.png',
  },
  {
    id: 'kiran-bhakta-joshi',
    name: 'Kiran Bhakta Joshi',
    title: 'Founder/CEO, Incessant Rain Studios',
    image: '/speakers/kiranbhaktajoshi.png',
  },
  {
    id: 'nishcal-rai',
    name: 'Nishcal Rai',
    title: 'Member of Parliament, Government of Nepal',
    image: '/speakers/nishcalrai.png',
  },
  {
    id: 'swastika-shrestha',
    name: 'Swastika Shrestha',
    title: 'CEO, Teach for Nepal',
    image: '/speakers/swastikashrestha.jpg',
  },
  {
    id: 'samjhana-gurung-shrestha',
    name: 'Samjhana Gurung Shrestha',
    title: 'Program Lead, Nepali Class Boston',
    image: '/speakers/samjhana.png',
  },
  {
    id: 'arun-r-joshi',
    name: 'Dr. Arun R. Joshi',
    title: 'CEO, Leadership Academy Nepal; Distinguished Fellow, IIDS',
    image: '/speakers/arunjoshi.png',
  },
  {
    id: 'bishnu-maya-pariyar',
    name: 'Dr. Bishnu Maya Pariyar',
    title: 'Co-Founder, NJ Speaks',
    image: '/speakers/bishnu-maya-pariyar.jpg',
  },
  {
    id: 'william-wisser',
    name: 'Dr. William Wisser',
    title: 'Director, Teaching Learning Lab, HGSE',
    image: '/speakers/william-wisser.jpg',
  },
];

/** Fallback when a headshot file is missing from /public/speakers/ */
const SPEAKER_PHOTO_PLACEHOLDER = '/speakers/speaker-photo-placeholder.svg';

function onSpeakerPhotoError(e: SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget;
  if (img.dataset.fallbackApplied === '1') return;
  img.dataset.fallbackApplied = '1';
  img.src = SPEAKER_PHOTO_PLACEHOLDER;
}

export function FeaturedSpeakersSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [flippedId, setFlippedId] = useState<string | null>(null);
  const [narrowGridShowAllSpeakers, setNarrowGridShowAllSpeakers] = useState(false);
  const prefersHover = usePrefersFinePointerHover();
  const isNarrowGrid = useNarrowFeaturedSpeakersGrid();

  const previewCount = Math.min(SPEAKERS_PREVIEW_COUNT, speakers.length);
  const hiddenSpeakersCount = Math.max(0, speakers.length - previewCount);

  const needsShowMoreSpeakers =
    isNarrowGrid && hiddenSpeakersCount > 0;

  const visibleSpeakers =
    needsShowMoreSpeakers && !narrowGridShowAllSpeakers
      ? speakers.slice(0, previewCount)
      : speakers;

  const upcomingSpeakersSlots = Math.max(
    0,
    FEATURED_SPEAKERS_PLANNED_TOTAL - speakers.length,
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
          className={`text-3xl md:text-4xl font-serif text-center ${
            upcomingSpeakersSlots > 0 ? 'mb-4' : 'mb-12 md:mb-16'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
        >
          Featured Speakers
        </motion.h2>
        {upcomingSpeakersSlots > 0 ? (
          <motion.p
            className="text-center text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12 md:mb-16 px-1"
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.48, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            {upcomingSpeakersSlots} more speaker{upcomingSpeakersSlots !== 1 ? 's' : ''} will be
            announced — {speakers.length} of {FEATURED_SPEAKERS_PLANNED_TOTAL} confirmed so far.
          </motion.p>
        ) : null}

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
                          onError={onSpeakerPhotoError}
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

          {needsShowMoreSpeakers ? (
            <div className="featured-speakers-more-wrap lg:hidden">
              <button
                type="button"
                className="featured-speakers-more-btn"
                aria-expanded={narrowGridShowAllSpeakers}
                aria-controls="featured-speakers-list"
                onClick={() => {
                  setNarrowGridShowAllSpeakers((open) => !open);
                }}
              >
                <span className="featured-speakers-more-btn__row">
                  <span className="featured-speakers-more-btn__label">
                    {narrowGridShowAllSpeakers
                      ? 'Show fewer speakers'
                      : `Show ${hiddenSpeakersCount} more ${hiddenSpeakersCount === 1 ? 'speaker' : 'speakers'}`}
                  </span>
                  <ChevronDown
                    className={`featured-speakers-more-btn__chevron${narrowGridShowAllSpeakers ? ' featured-speakers-more-btn__chevron--open' : ''}`}
                    size={20}
                    strokeWidth={2}
                    aria-hidden
                  />
                </span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
