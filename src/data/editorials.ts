export type EditorialLanguage = 'en' | 'ne';

export type EditorialOutlet = 'Kathmandu Post' | 'Kantipur';

export interface EditorialEntry {
  /** Stable slug used for keys, anchor ids, and asset filenames. */
  id: string;
  /** Display byline (e.g., "Salome Bhatta", "Dr Shyam Poudel & Dr Bikalpa Paudel"). */
  authors: string;
  /** Outlet of the original-language version of the piece. */
  outlet: EditorialOutlet;
  /** Human-readable date of the original-language version (e.g., "Apr 24, 2026"). */
  publishedAt: string;
  /** ISO 8601 date string used for <time dateTime>. */
  publishedAtISO: string;
  /** Language the piece was originally written in. */
  originalLang: EditorialLanguage;
  /** Title in each language; the original-language title is the headline shown on the card. */
  title: { en?: string; ne?: string };
  /** Article URLs by language; only present languages render as live links. */
  links: { en?: string; ne?: string };
  /** When true, the English version is forthcoming and is rendered as muted "Coming soon". */
  englishComingSoon?: boolean;
  /** Path under /public to the thumbnail saved from the original-language outlet. */
  thumbnail: string;
  /** Alt text describing the thumbnail for screen readers. */
  thumbnailAlt: string;
}

/** Listed in the order the user wants them to appear on the page. */
export const EDITORIALS: EditorialEntry[] = [
  {
    id: 'nirupama-let-the-children-play',
    authors: 'Nirupama',
    outlet: 'Kantipur',
    publishedAt: 'Apr 20, 2026',
    publishedAtISO: '2026-04-20',
    originalLang: 'ne',
    title: {
      ne: 'खेल्न दिऔं बालबालिकालाई',
    },
    links: {
      ne: 'https://ekantipur.com/opinion/2026/04/20/let-the-children-play-17-46.html',
    },
    englishComingSoon: true,
    thumbnail: '/editorials/nirupama-let-the-children-play.jpg',
    thumbnailAlt: 'Cover image for the Kantipur opinion piece on letting children play.',
  },
  {
    id: 'nabin-effective-representation',
    authors: 'Nabin Poudel',
    outlet: 'Kantipur',
    publishedAt: 'Apr 19, 2026',
    publishedAtISO: '2026-04-19',
    originalLang: 'ne',
    title: {
      ne: 'संसद्‌मा प्रभावकारी प्रतिनिधित्वको राजनीतिक प्रश्न',
    },
    links: {
      ne: 'https://ekantipur.com/opinion/2026/04/19/the-political-question-of-effective-representation-in-parliament-19-55.html',
    },
    thumbnail: '/editorials/nabin-effective-representation.jpg',
    thumbnailAlt:
      'Cover image for the Kantipur opinion piece on effective parliamentary representation.',
  },
  {
    id: 'salome-doing-away-with-exams',
    authors: 'Salome Bhatta',
    outlet: 'Kathmandu Post',
    publishedAt: 'Apr 24, 2026',
    publishedAtISO: '2026-04-24',
    originalLang: 'en',
    title: {
      en: 'Doing away with exams, ushering in assessments',
    },
    links: {
      en: 'https://kathmandupost.com/columns/2026/04/24/doing-away-with-exams',
    },
    thumbnail: '/editorials/salome-doing-away-with-exams.jpg',
    thumbnailAlt:
      'Cover image for the Kathmandu Post opinion piece on rethinking exams as assessments.',
  },
  {
    id: 'sonam-violence-as-development',
    authors: 'Sonam Sherpa',
    outlet: 'Kathmandu Post',
    publishedAt: 'Apr 20, 2026',
    publishedAtISO: '2026-04-20',
    originalLang: 'en',
    title: {
      en: 'Violence as development, from Mukkumlung to Bojheni',
      ne: 'विकासका नाममा हिंसा : मुक्कुम्लुङदेखि बोझेनीसम्म',
    },
    links: {
      en: 'https://kathmandupost.com/columns/2026/04/20/violence-as-development-from-mukkumlung-to-bojheni',
      ne: 'https://ekantipur.com/opinion/2026/04/24/violence-in-the-name-of-development-from-mukkumlung-to-bozheni-10-35.html',
    },
    thumbnail: '/editorials/sonam-violence-as-development.png',
    thumbnailAlt:
      'Cover image for the Kathmandu Post opinion piece on violence as development from Mukkumlung to Bojheni.',
  },
  {
    id: 'shyam-bikalpa-from-scarcity-to-scale',
    authors: 'Dr Shyam Poudel & Dr Bikalpa Paudel',
    outlet: 'Kathmandu Post',
    publishedAt: 'Apr 24, 2026',
    publishedAtISO: '2026-04-24',
    originalLang: 'en',
    title: {
      en: "From scarcity to scale: Nepal\u2019s bid to become Global South\u2019s healthcare disruptor",
    },
    links: {
      en: 'https://kathmandupost.com/columns/2026/04/24/from-scarcity-to-scale-nepal-s-bid-to-become-global-south-s-healthcare-disruptor-1776995591',
    },
    thumbnail: '/editorials/shyam-bikalpa-from-scarcity-to-scale.jpg',
    thumbnailAlt:
      'Cover image for the Kathmandu Post opinion piece on Nepal\u2019s bid to become a Global South healthcare disruptor.',
  },
  {
    id: 'ashmita-investment-summit',
    authors: 'Ashmita Gautam',
    outlet: 'Kathmandu Post',
    publishedAt: 'Apr 25, 2026',
    publishedAtISO: '2026-04-25',
    originalLang: 'en',
    title: {
      en: "Promises versus reality: The discrepancy in Nepal\u2019s investment summits",
      ne: 'किन पूरा हुँदैन लगानी सम्मेलनका वाचा?',
    },
    links: {
      en: 'https://kathmandupost.com/columns/2026/04/25/promises-versus-reality-the-discrepancy-in-nepal-s-investment-summits',
      ne: 'https://ekantipur.com/opinion/2026/04/27/why-are-the-promises-of-the-investment-summit-not-being-fulfilled-08-17.html',
    },
    thumbnail: '/editorials/ashmita-investment-summit.jpg',
    thumbnailAlt:
      'Cover image for the Kathmandu Post opinion piece on the discrepancy in Nepal\u2019s investment summits.',
  },
];
