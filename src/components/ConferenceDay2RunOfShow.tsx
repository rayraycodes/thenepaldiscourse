import {
  ConferenceScheduleDaySection,
  type ScheduleSessionRow,
} from './ConferenceScheduleShared';

/** Sunday at MIT — aligned with organizer Day II run-of-show; times may be finalized on site. */
const DAY2_SESSIONS: ScheduleSessionRow[] = [
  {
    time: '8:00–9:00 a.m.',
    title: 'Breakfast',
    summary: 'Morning registration and networking; confirm room with on-site staff.',
    location: 'MIT (details at registration)',
  },
  {
    time: '9:00–9:40 a.m.',
    title: 'Main plenary — Creating Nepal’s unicorn: anchoring growth in human capital',
    summary:
      'How Nepal can build globally competitive, high-growth companies by investing in human capital: startup ecosystem barriers, talent and leadership for innovation, access to capital and global networks, and policy and institutional support for inclusive growth.',
    moderator: 'Anup Kaphle (KMG)',
    panelists:
      'Dipta Shah (53i Ventures); Biswas Dhakal (F1Soft); Sambhav Sirohiya (M&S Ventures); Pukar C. Hamal (SecurityPal)',
    location: 'Schwarzman Building, MIT',
  },
  {
    time: '9:45–11:00 a.m.',
    track: 'Breakout 3A',
    title: 'Next-generation leadership — navigating multipolarity and strategic autonomy',
    summary:
      'Nepal in a shifting world order: from rule-based expectations toward multipolarity, implications for emerging democracies, balancing relations with India, China, and wider partners, and pathways to strategic autonomy and long-term national interests.',
    moderator: 'Ang Sonam Sherpa (Harvard)',
    panelists:
      'Nishcal Rai (Member of Parliament, Nepali Congress); Semanta Dahal (Purak Asia); Pukar Bam (Member of Parliament, Rastriya Swatantra Party)',
    location: 'Schwarzman Building, MIT',
  },
  {
    time: '9:45–11:00 a.m.',
    track: 'Breakout 3B',
    title:
      'The trust deficit — leading institutions in the age of digital mobilization and dissent',
    summary:
      'Institutional legitimacy and public trust: root causes of declining trust, digital platforms and information flows, leadership through dissent and polarization, innovation with accountability and data security, and pathways toward transparent, inclusive governance.',
    moderator: 'Hitesh Hathi (Harvard South Asia Institute)',
    panelists:
      'Ashish Luitel (Microsoft AI and Governance); Sharad Raj Aran (Embassy of Nepal, USA)',
    location: 'MIT (breakout room)',
  },
  {
    time: '11:00 a.m.–12:15 p.m.',
    title: 'Main plenary — Designing Nepal’s AI skills strategy',
    summary:
      'National AI readiness: mapping strengths, gaps, and risks; priority sectors for AI-related skills; roles of ecosystem partners; scaling talent pipelines; and frameworks for evaluation and long-term adaptability.',
    moderator: 'Roshan Bhattarai (DLA Piper)',
    panelists: 'Dr. Sanjay Manandhar (MIT); Biswas Dhakal (F1Soft); Rumee Singh (Rumsan)',
    location: 'Schwarzman Building, MIT',
  },
  {
    time: '12:15–1:00 p.m.',
    title: 'Lunch and recess',
    summary: 'Meal service and break; confirm venue with volunteers.',
    location: 'MIT campus (details at registration)',
  },
  {
    time: '1:00–2:15 p.m.',
    track: 'Breakout 4A',
    title: 'Remittance-plus economy',
    summary:
      'From remittance dependence to productive investment: sustainability of remittances amid AI and workforce change, demand in key labor markets, competitiveness of Nepal’s human capital abroad, and channels into entrepreneurship and a remittance-plus growth model.',
    moderator: 'Dipta Shah',
    panelists:
      'Dr. Biswash Gauchan (IIDS); Bhawani Rana (FNCCI); Subash Sharma (eSewa); Rahul Agrawal (Siddhartha Bank)',
    location: 'Schwarzman Building, MIT',
  },
  {
    time: '1:00–2:15 p.m.',
    track: 'Breakout 4B',
    title: 'Diaspora, migration, and representation',
    summary:
      'Diaspora voting rights and global practice; how migration shapes political and social representation; identity and equity in diaspora communities; technology and legal frameworks for participation.',
    moderator: 'Dadhiram Bhandari (Nepal Consulate)',
    panelists:
      'Mahendra Pandey (migrant rights activist); Dr. Bishnu Maya Pariyar; Samjhana Gurung (Boston)',
    location: 'MIT (breakout room)',
  },
  {
    time: '2:15–3:30 p.m.',
    title: 'Closing plenary — Global Nepalis and the skills agenda (Pillar IV)',
    summary:
      'Diaspora networks, digital platforms, and remote work: emerging industries and economic shifts, remittances and skills in national development, opportunities from platforms and distributed work, and barriers to competitiveness.',
    moderator: 'Shuvangi Rana (MIT)',
    panelists:
      'Nishchal Banskota (Nepal Tea Collective); Subarna Basnet (MIT); Dr. Biswash Gauchan (IIDS); Kiran Bhakta Joshi (Incessant Rain)',
    location: 'Schwarzman Building, MIT',
  },
  {
    time: '3:30–4:00 p.m.',
    title: 'Closing remarks',
    summary: 'Formal close to Day 2 and the convening segment at MIT.',
    moderator: 'Dr. Arun R. Joshi (Leadership Academy Nepal)',
    location: 'Schwarzman Building, MIT',
  },
];

export function ConferenceDay2RunOfShow() {
  return (
    <ConferenceScheduleDaySection
      sectionId="schedule-day-2"
      headingId="day-2-heading"
      title="Day 2 — Sunday, April 26, 2026"
      intro={
        <p className="itinerary-aaa-muted not-justify m-0 mb-4 max-w-none">
          Sunday&apos;s program is at <strong className="font-semibold text-[#2c1418]">MIT</strong>,
          Cambridge. Most sessions are in the Schwarzman Building; breakouts may use
          additional MIT rooms—confirm on-site. Times and rooms may be adjusted; follow the conference
          on-site signage and organizer updates. Concurrent sessions share a time window—choose
          one breakout per block.
        </p>
      }
      sessions={DAY2_SESSIONS}
      tableCaption="The Nepal Discourse 2026 — Day 2: time, session, people, and venue."
      scrollRegionLabel="Day 2 schedule. Scroll horizontally on narrow screens to read all columns."
    />
  );
}
