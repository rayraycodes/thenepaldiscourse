import {
  ConferenceScheduleDaySection,
  type ScheduleSessionRow,
} from './ConferenceScheduleShared';

const DAY1_SESSIONS: ScheduleSessionRow[] = [
  {
    time: '8:00–9:00 a.m.',
    title: 'Breakfast and registration',
    summary: 'Check in, collect your badge and materials, and connect with volunteers.',
    location: 'Askwith Hall, Harvard University',
  },
  {
    time: '9:00–9:15 a.m.',
    title: 'Welcome and acknowledgements',
    summary:
      'Setting the scene: background of the conference, objectives, the Four Pillars, and Strategic Foresight 2035.',
    location: 'Askwith Hall, Harvard University',
  },
  {
    time: '9:20–9:30 a.m.',
    title: 'Keynote — Hon’ble Finance Minister of Nepal',
    summary:
      'Dr. Swarnim Wagle shares his vision for the next ten years on human capital, artificial intelligence, and next-generation leadership.',
    panelists: 'Dr. Swarnim Wagle, Hon’ble Finance Minister of Nepal',
    location: 'Askwith Hall, Harvard University',
  },
  {
    time: '9:30–10:45 a.m.',
    title: 'Main plenary — Human capital, AI, and next-generation leadership',
    summary:
      'Opening plenary framing two days of convening and Strategic Foresight 2035: ecosystem-level action across pillars—current landscape and dynamics, emerging trends in AI and leadership, human capital opportunities and constraints, and where technology, talent, and leadership intersect.',
    moderator: 'Anup Kaphle (KMG)',
    panelists:
      'Dr. Sameer Maskey (FuseMachines); Dr. Peter Q. Blair (Harvard); Bhawani Rana (Former President, FNCCI)',
    location: 'Askwith Hall, Harvard University',
  },
  {
    time: '10:45 a.m.–12:00 p.m.',
    track: 'Breakout 1A',
    title: 'From BPO to IPO — leveraging AI for startup acceleration and economic leapfrogging',
    summary:
      'Operating and scaling innovative enterprises in Nepal: BPO models and bottlenecks, ecosystem actors, jobs for future human capital, policy and capital constraints, and collaboration for systemic change.',
    moderator: 'Rumee Singh (Rumsan)',
    panelists:
      'Prasanna Dhungel (GrowByData); Bal Krishna Joshi (Xuno founder); Karvika Thapa (Kimbu Tech)',
    location: 'Larsen G01, Harvard Graduate School of Education',
  },
  {
    time: '10:45 a.m.–12:00 p.m.',
    track: 'Breakout 1B',
    title:
      'Future-proofing the curriculum — AI literacy and next-generation employment (from rote to resilience)',
    summary:
      'Education outcomes in Nepal, human-centered learning with AI, AI literacy and soft skills for work, links between education and the economy, and lessons from global systems relevant to Nepal.',
    moderator: 'Dr. Arun Joshi (Leadership Academy Nepal)',
    panelists: 'Sulav Budathoki (ING Group); William Wisser; Swastika Shrestha (Teach For Nepal)',
    location: 'Larsen Hall, Harvard Graduate School of Education',
  },
  {
    time: '10:45 a.m.–12:00 p.m.',
    track: 'Breakout 1C',
    title: 'Financing the future — capital and policy pathways for resilience',
    summary:
      'Global energy transitions and climate finance, socio-economic impacts in Nepal, limits of current approaches, policy and capital bottlenecks, and blended finance and partnership models.',
    moderator: 'Amelia VanderLaan (Harvard)',
    panelists:
      'David Sislen (IFC); Manoj Paudel (Aadhyanta Fund); Arun Banskota (Blue Earth Renewables)',
    location: 'Askwith Hall, Harvard University',
  },
  {
    time: '12:00–12:40 p.m.',
    title: 'Recess and lunch',
    summary: 'Meal service and break. On-site staff can confirm the lunch venue.',
    location: 'To be announced at registration',
  },
  {
    time: '12:40–1:25 p.m.',
    title: 'Main plenary — Mobility and connectivity',
    summary:
      'Infrastructure and connectivity for human capital: gaps versus development goals, mobility for growth and access, environmental balance, and inclusive, context-specific models.',
    moderator: 'Bibek Raj Kandel',
    panelists:
      'David Sislen (World Bank Group); Sunita Dangol (Kathmandu Metropolitan City); Michael Foley (Ncell CEO); Pukar C. Hamal (SecurityPal)',
    location: 'Askwith Hall and Longfellow Hall, Harvard University',
  },
  {
    time: '1:30–2:45 p.m.',
    track: 'Breakout 2A',
    title: 'In conversation with Raju Lama',
    summary: 'A moderated conversation with Raju Lama.',
    moderator: 'Asmi Pokharel (Harvard Extension School)',
    panelists: 'Raju Lama',
    location: 'Larsen Hall, Harvard Graduate School of Education',
  },
  {
    time: '1:30–2:45 p.m.',
    track: 'Breakout 2B',
    title: 'Global health and wellbeing',
    summary:
      'Health access and delivery in Nepal, innovations and lessons, scale and gaps in the wellbeing ecosystem, AI and emerging technology for outcomes, and cross-sector collaboration for equity.',
    moderator: 'Dr. Ramu Kharel (Brown University)',
    panelists: 'To be confirmed; Dr. Meisinger (Harvard); Dr. Bijay Acharya (UMass)',
    location: 'Larsen Hall, Harvard Graduate School of Education',
  },
  {
    time: '1:30–2:45 p.m.',
    track: 'Breakout 2C',
    title: 'From prediction to wisdom — human decision-making in the AI era',
    summary:
      'Equitable AI access and ethics: foundation models and automated decisions, governance and data stewardship, innovation versus responsible use, cultural and philosophical dimensions, and inclusion in global AI ethics frameworks.',
    moderator: 'Ayushi Roy (Harvard Kennedy School)',
    panelists:
      'Dr. Ashish Luitel (University of Cumberland); Sameer Maskey (FuseMachines); Rashik Adhikari (Renegade Insurance)',
    location: 'Askwith Hall and Longfellow Hall, Harvard University',
  },
  {
    time: '2:45–4:00 p.m.',
    title: 'Strategic Foresight 2035 design lab — ecosystem commitments',
    summary:
      'Facilitated working session with pillar co-chairs and selected participants: synthesize pillar insights, draft the initial outline and priority questions for the Project 2035 report, invite institutions and individuals to commit to follow-up actions, and align on timeline and governance for the task force—closing with commitments and a concrete workplan.',
    moderator: 'Ang Sonam Sherpa (Harvard) and Dr. Arun Joshi (Leadership Academy Nepal)',
    location: 'Askwith Hall and Longfellow Hall, Harvard University',
  },
  {
    time: '4:00–5:00 p.m.',
    title: 'High tea — end of Day 1',
    summary: 'Informal close at Askwith; confirm timing with on-site staff.',
    location: 'Askwith Hall, Harvard University',
  },
  {
    time: '4:00–8:00 p.m.',
    title: 'The Nepal Discourse Experience — exclusive sessions',
    summary:
      'Curated speakers and VIP patron pass holders; evening programming at MIT (per organizer schedule).',
    location: 'MIT',
  },
];

export function ConferenceDay1RunOfShow() {
  return (
    <ConferenceScheduleDaySection
      sectionId="schedule-day-1"
      headingId="day-1-heading"
      title="Day 1 — Saturday, April 25, 2026"
      intro={
        <p className="itinerary-aaa-muted not-justify m-0 mb-4 max-w-none">
          Saturday&apos;s program is at <strong className="font-semibold text-[#2c1418]">Harvard University</strong>, Cambridge. Specific rooms are listed in the venue column; times and rooms may be adjusted—follow on-site signage and organizer updates. Concurrent sessions share a time window—choose one breakout per block.
        </p>
      }
      sessions={DAY1_SESSIONS}
      tableCaption="The Nepal Discourse 2026 — Day 1: time, session, people, and venue."
      scrollRegionLabel="Day 1 schedule. Scroll horizontally on narrow screens to read all columns."
    />
  );
}
