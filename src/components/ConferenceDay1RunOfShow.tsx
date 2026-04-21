import React from 'react';
import {
  ConferenceScheduleDaySection,
  type ScheduleSessionRow,
} from './ConferenceScheduleShared';

const DAY1_SESSIONS: ScheduleSessionRow[] = [
  {
    time: '8:00–9:00 a.m.',
    title: 'Breakfast and registration',
    summary:
      'Conference participants and panelists check in at registration and join for breakfast.',
  },
  {
    time: '9:00–9:15 a.m.',
    title: 'Welcome and acknowledgements',
    summary:
      'Setting the scene: background of the conference, objectives, the Four Pillars, and Strategic Foresight 2035.',
    moderator: 'Utsav Kharel (Harvard) and Salome Bhatta (Harvard)',
  },
  {
    time: '9:20–9:30 a.m.',
    title: 'Keynote — Hon’ble Finance Minister of Nepal',
    summary:
      'Dr. Swarnim Wagle shares his vision for the next ten years on human capital, artificial intelligence, and next-generation leadership.',
    panelists: 'Dr. Swarnim Wagle, Hon’ble Finance Minister of Nepal',
  },
  {
    time: '9:30–10:45 a.m.',
    track: 'Main plenary 1',
    title: 'Opening plenary — Human capital, AI, and next-generation leadership',
    summary:
      'Opening plenary framing two days of convening and Strategic Foresight 2035. Objective: ecosystem-level messaging and action plans across the four pillars.',
    summaryBullets: [
      'Current landscape and its underlying dynamics',
      'Emerging trends, frameworks, and shifts in AI and leadership',
      'Key challenges and opportunities shaping human capital development',
      'Intersections between technology, talent, and leadership for the future',
    ],
    moderator: 'Anup Kaphle (KMG)',
    panelists:
      'Dr. Sameer Maskey (FuseMachines); Dr. Peter Q. Blair (Harvard); Bhawani Rana (former president, FNCCI)',
  },
  {
    time: '10:45 a.m.–12:00 p.m.',
    track: 'Breakout 1A',
    title: 'From BPO to IPO — leveraging AI (emerging tech) for startup acceleration and economic leapfrogging',
    summary:
      'Objective: unpack challenges and opportunities for operating innovative enterprises in Nepal and map what it takes to scale and pivot ventures.',
    summaryBullets: [
      'Current BPO approaches, operational models, and policy bottlenecks',
      'Role of ecosystem actors shaping the innovation landscape',
      'New jobs and pathways for future human capital',
      'Policy and capital constraints affecting startup growth',
      'Opportunities for ecosystem-wide collaboration and disruptive change',
    ],
    moderator: 'Rumee Singh (Rumsan)',
    panelists:
      'Prasanna Dhungel (GrowByData); Bal Krishna Joshi (Xuno founder); Karvika Thapa (Kimbu Tech)',
  },
  {
    time: '10:45 a.m.–12:00 p.m.',
    track: 'Breakout 1B',
    title:
      'Future-proofing the curriculum — AI literacy and next-generation employment (from rote to resilience)',
    summary:
      'Objective: identify challenges to education outcomes in Nepal and practical ways to future-proof curricula.',
    summaryBullets: [
      'Current state of education outcomes: progress and persistent gaps',
      'Shift from rote to experience-based, human-centered learning in the AI age',
      'AI literacy and soft skills for workforce readiness',
      'Disconnects among education, economic utility, human capital, and social cohesion',
      'Lessons from global education systems relevant to Nepal',
    ],
    moderator: 'Dr. Arun Joshi (Leadership Academy Nepal)',
    panelists:
      'Sulav Budhathoki (ING Group of Education); William Wisser; Swastika Shrestha (Teach For Nepal)',
  },
  {
    time: '10:45 a.m.–12:00 p.m.',
    track: 'Breakout 1C',
    title: 'Financing the future — capital and policy pathways for resilience',
    summary:
      'Objective: explore innovative, sustainable financing models for climate adaptation and resilience.',
    summaryBullets: [
      'Global energy transitions and future outlook',
      'Current climate financing and investment models',
      'Socio-economic impacts of climate change in Nepal',
      'Limitations of existing financing approaches',
      'Policy and capital bottlenecks',
      'Opportunities for blended finance and partnership-driven models',
    ],
    moderator: 'Amelia VanderLaan (Harvard)',
    panelists:
      'David Sislen (IFC); Manoj Paudel (Aadhyanta Fund); Arun Banskota (BluEarth Renewables)',
  },
  {
    time: '12:00–12:40 p.m.',
    title: 'Recess and lunch',
    summary: 'Meal service and break.',
  },
  {
    time: '12:40–1:25 p.m.',
    track: 'Main plenary 2',
    title: 'Mobility and connectivity',
    summary:
      'Objective: map challenges and opportunities for infrastructure and connectivity in support of human capital.',
    summaryBullets: [
      'Current gaps between infrastructure, connectivity, and human development',
      'Role of mobility and connectivity in enabling growth and access',
      'Balancing infrastructure development with environmental sustainability',
      'Context-specific and inclusive infrastructure pathways',
    ],
    moderator: 'Bibek Raj Kandel',
    panelists:
      'David Sislen (World Bank Group); Michael Foley (Ncell CEO); Pukar C. Hamal (SecurityPal)',
  },
  {
    time: '1:30–2:45 p.m.',
    track: 'Breakout 2A',
    title: 'In conversation with Raju Lama',
    summary: 'A moderated conversation with Raju Lama.',
    moderator: 'Asmi Pokharel (Harvard Extension School)',
    panelists: 'Raju Lama',
  },
  {
    time: '1:30–2:45 p.m.',
    track: 'Breakout 2B',
    title: 'Global health and wellbeing',
    summary:
      'Objective: strengthen health systems and communities using digital health and AI toward equitable access, better outcomes, and health equity.',
    summaryBullets: [
      'Current gaps in access, quality, and service delivery, especially in underserved communities',
      'Practical use cases of telemedicine, AI, data systems, and digital platforms',
      'How digital tools can improve community engagement and health literacy',
      'Pathways to scale innovation and integrate into national health systems',
      'Barriers: infrastructure, workforce capacity, data governance, and digital divide',
      'Partnership opportunities across government, private sector, academia, and communities',
    ],
    moderator: 'To be confirmed',
    panelists:
      'Dr. Shreedhar Paudel (Harvard); Dr. Ramu Kharel (Brown University); Dr. Kirsten Meisinger (One Heart Worldwide); Dr. Basmaa Ali (Harvard)',
  },
  {
    time: '1:30–2:45 p.m.',
    track: 'Breakout 2C',
    title: 'From prediction to wisdom — human decision-making in the AI era',
    summary:
      'Objective: define pathways toward equitable AI access aligned with ethical frameworks.',
    summaryBullets: [
      'Ethical challenges in AI systems, including foundation models and automated decisions',
      'Governance frameworks, data privacy, and stewardship dilemmas',
      'Trade-offs between innovation and responsible data use',
      'Cultural and philosophical perspectives shaping human–AI interaction',
      'Inclusion, equity, and representation in global AI ethics frameworks',
    ],
    moderator: 'Rumee Singh (Rumsan)',
    panelists:
      'Ayushi Roy (Harvard Kennedy School); Dr. Sameer Maskey (FuseMachines); Rashik Adhikari (Renegade Insurance); Dr. Ashish Luitel',
  },
  {
    time: '2:45–4:00 p.m.',
    track: 'Main plenary 3',
    title: 'Strategic Foresight 2035 — ecosystem commitments',
    summary:
      'Strategic Foresight 2035 design lab with pillar co-chairs and selected participants.',
    summaryBullets: [
      'Summarize key insights from each pillar',
      'Draft the initial outline and priority questions for the Project 2035 report',
      'Invite institutions and individuals to commit to follow-up actions',
      'Agree on timeline and governance for the Project 2035 task force',
      'Close with shared commitments and a concrete work plan',
    ],
    moderator: 'Ang Sonam Sherpa (Harvard) and Dr. Arun Joshi (Leadership Academy Nepal)',
  },
  {
    time: '4:00–5:00 p.m.',
    title: 'High tea — end of Day 1',
    summary: 'Informal close; confirm timing with on-site staff.',
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
          Saturday&apos;s program is at{' '}
          <strong className="font-semibold text-[#2c1418]">Harvard University</strong>, Cambridge.
          Concurrent sessions share a time window—choose one breakout per block.
        </p>
      }
      sessions={DAY1_SESSIONS}
      tableCaption="The Nepal Discourse 2026 — Day 1: time, session, and moderator or panelists."
      scrollRegionLabel="Day 1 schedule. Scroll horizontally on narrow screens to read all columns."
      showVenueColumn={false}
    />
  );
}
