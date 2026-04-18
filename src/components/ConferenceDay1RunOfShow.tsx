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
    summary: 'Opening framing: conference objectives, pillars, and Strategic Foresight 2035.',
    location: 'Askwith Hall, Harvard University',
  },
  {
    time: '9:20–9:30 a.m.',
    title: 'Special address by the Hon’ble Finance Minister',
    summary: 'Recorded message from Dr. Swarnim Wagle, Hon’ble Finance Minister.',
    location: 'Askwith Hall, Harvard University',
  },
  {
    time: '9:30–10:45 a.m.',
    title: 'Main plenary — Human capital, AI, and next-generation leadership',
    summary:
      'Opening plenary setting the tone for the convening across pillars: landscape, emerging trends, human capital, and where technology, talent, and leadership meet.',
    moderator: 'Anup Kaphle',
    panelists:
      'Dr. Sameer Maskey (FuseMachines); Dr. Peter Q. Blair (Harvard); Bhawani Rana (Prep)',
    location: 'Askwith Hall, Harvard University',
  },
  {
    time: '10:45 a.m.–12:00 p.m.',
    track: 'Breakout 1A',
    title: 'From BPO to IPO — AI and emerging tech for startup acceleration',
    summary:
      'Scaling ventures in Nepal: operating models, ecosystem actors, policy and capital constraints, and collaboration for economic leapfrogging.',
    moderator: 'Rumee Singh',
    panelists:
      'Prasanna Dhungel (GrowByData); Bal Krishna Joshi (Xuno); Karvika Thapa',
    location: 'Larsen G01, Harvard Graduate School of Education',
  },
  {
    time: '10:45 a.m.–12:00 p.m.',
    track: 'Breakout 1B',
    title: 'Future-proofing the curriculum for next-generation employment',
    summary:
      'From rote learning to resilient, human-centered education: outcomes, AI literacy, workforce readiness, and lessons from global systems relevant to Nepal.',
    moderator: 'Dr. Arun Joshi',
    panelists: 'Sulav Budathoki (ING); William Wisser; Swastika Shrestha (Teach For Nepal)',
    location: 'Larsen Hall, Harvard Graduate School of Education',
  },
  {
    time: '10:45 a.m.–12:00 p.m.',
    track: 'Breakout 1C',
    title: 'Financing the future — blended capital and climate resilience',
    summary:
      'Climate finance models, socio-economic impacts in Nepal, limits of current approaches, and partnership-driven blended finance pathways.',
    moderator: 'Amelia VanderLaan',
    panelists: 'David Sislen (IFC); Manoj Paudel (Aadhyanta Fund); Arun Banskota (Blue Earth)',
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
      'Infrastructure, access, and development: connectivity for growth, environmental balance, and inclusive, context-specific models.',
    moderator: 'Bibek Raj Kandel',
    panelists:
      'Sunita Dangol (video message); Michael Foley (Ncell); David Sislen (World Bank); Pukar C. Hamal (SecurityPal)',
    location: 'Askwith Hall and Longfellow Hall, Harvard University',
  },
  {
    time: '1:30–2:45 p.m.',
    track: 'Breakout 2A',
    title: 'In conversation with Raju Lama',
    moderator: 'Harvard student moderator',
    panelists: 'Raju Lama',
    location: 'Larsen Hall, Harvard Graduate School of Education',
  },
  {
    time: '1:30–2:45 p.m.',
    track: 'Breakout 2B',
    title: 'Global health and wellbeing',
    summary:
      'Access and equity in Nepal, innovations on the ground, scale and gaps, and how AI and cross-sector collaboration can improve outcomes.',
    moderator: 'Dr. Ramu Kharel',
    panelists:
      'Dr. Krishna Poudel (Nepal Health Insurance Board); Dr. Meisinger (Harvard); Dr. Bijay Acharya (UMass)',
    location: 'Larsen Hall, Harvard Graduate School of Education',
  },
  {
    time: '1:30–2:45 p.m.',
    track: 'Breakout 2C',
    title: 'From prediction to wisdom — human decision-making in the AI era',
    summary:
      'Ethics, governance, privacy, capacity in Nepal, inclusion in global AI ethics, and cultural perspectives on human–AI interaction.',
    moderator: 'Rupa Laxmi Shah (MIT RAISE)',
    panelists:
      'Dr. Ashish Luitel (University of Cumberland); Sameer Maskey (FuseMachines); Rashik Adhikari (Renegade Insurance)',
    location: 'Askwith Hall and Longfellow Hall, Harvard University',
  },
  {
    time: '2:45–4:00 p.m.',
    title: 'Strategic Foresight 2035 design lab and closing commitments',
    summary:
      'Facilitated working session with pillar co-chairs and participants: synthesize insights, outline priority questions for the Project 2035 report, invite concrete follow-up actions, and agree on timelines and governance for the task force.',
    moderator: 'Ang Sonam Sherpa and Dr. Arun Joshi',
    location: 'Askwith Hall and Longfellow Hall, Harvard University',
  },
];

export function ConferenceDay1RunOfShow() {
  return (
    <ConferenceScheduleDaySection
      sectionId="schedule-day-1"
      headingId="day-1-heading"
      title="Day 1 run of show — Saturday, April 25, 2026"
      intro={
        <>
          <p className="itinerary-aaa-muted not-justify m-0 mb-4 max-w-none">
            Saturday&apos;s program is at <strong className="font-semibold text-[#2c1418]">Harvard University</strong>, Cambridge. Specific rooms are listed in the venue column; times and rooms may be adjusted—follow on-site signage and organizer updates. Concurrent sessions share a time window—choose one breakout per block.
          </p>
          <p className="itinerary-aaa-muted not-justify m-0 mb-4 max-w-none">
            <strong className="font-semibold text-[#2c1418]">Optional:</strong> From 3:15–4:00 p.m.,
            VIPs and select speakers may join an MIT Media Lab tour instead of part of the closing
            block.
          </p>
        </>
      }
      sessions={DAY1_SESSIONS}
      tableCaption="The Nepal Discourse 2026 — Day 1: time, session, people, and venue."
      scrollRegionLabel="Day 1 schedule. Scroll horizontally on narrow screens to read all columns."
    />
  );
}
