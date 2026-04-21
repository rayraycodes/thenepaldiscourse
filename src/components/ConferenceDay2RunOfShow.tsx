import React from 'react';
import {
  ConferenceScheduleDaySection,
  type ScheduleSessionRow,
} from './ConferenceScheduleShared';

/** Sunday at MIT — aligned with organizer Day II run-of-show; times may be finalized on site. */
const DAY2_SESSIONS: ScheduleSessionRow[] = [
  {
    time: '8:00–9:00 a.m.',
    title: 'Breakfast',
    summary: 'Morning registration and networking.',
  },
  {
    time: '9:00–9:40 a.m.',
    track: 'Main plenary 4',
    title: 'Creating Nepal’s unicorn — anchoring growth in human capital',
    summary:
      'Objective: explore how Nepal can build globally competitive, high-growth companies by investing in, developing, and leveraging human capital.',
    summaryBullets: [
      'Current startup ecosystem in Nepal and key barriers to scaling',
      'Role of talent, leadership, and skills in driving innovation and sustained growth',
      'Access to capital, markets, and global networks for scaling ventures',
      'Policy, institutional, and ecosystem support for inclusive, sustainable growth',
    ],
    moderator: 'Dipta Shah (53i Ventures)',
    panelists:
      'Biswas Dhakal (F1Soft); Sambhav Sirohiya (M&S Ventures); Pukar C. Hamal (SecurityPal)',
  },
  {
    time: '9:45–11:00 a.m.',
    track: 'Breakout 3A (Pillar II)',
    title: 'Next gen leadership — from advocacy to action',
    summary:
      'Objective: explore how change is initiated and driven across activism, politics, law, and civil society in Nepal.',
    summaryBullets: [
      'The life cycle of change: from street slogans through civil society and politics to the law of the land',
      'What change is necessary and who gets to decide',
      'How marginalized voices can navigate power structures and institute real change',
      'How to make lasting change that outlives governments',
      'What kind of leaders Nepal needs in the coming decade',
    ],
    moderator: 'Ang Sonam Sherpa (Harvard)',
    panelists:
      'Nishcal Rai (Member of Parliament, Nepali Congress); Semanta Dahal (Purak Asia); Pukar Bam (Member of Parliament, Rastriya Swatantra Party)',
  },
  {
    time: '9:45–11:00 a.m.',
    track: 'Breakout 3B (Pillar I)',
    title:
      'The trust deficit — leading institutions in the age of digital mobilization and dissent',
    summary:
      'Objective: examine the root causes of declining trust in institutions and develop a theory of change for more agile, future-ready institutions.',
    summaryBullets: [
      'Map the root causes of the trust deficit across institutions',
      'Identify how the ecosystem can restore trust and build resilient institutions',
      'Promote harmony while addressing dissent constructively',
      'Develop governance models that enable innovation and accountability',
      'Strengthen privacy, data security, and public safety safeguards',
    ],
    moderator: 'Hitesh Hathi (Harvard South Asia Institute)',
    panelists:
      'Ashish Luitel (Microsoft AI and Governance); Sharad Raj Aran (Embassy of Nepal, USA); Lino Alhering (Daraz, former MD)',
  },
  {
    time: '11:00 a.m.–12:15 p.m.',
    track: 'Main plenary 5',
    title: 'Designing Nepal’s AI skills strategy',
    summary:
      'National AI readiness: mapping strengths, gaps, and risks; priority sectors for AI-related skills; roles of ecosystem partners; scaling talent pipelines; and frameworks for evaluation and long-term adaptability.',
    moderator: 'Roshan Kr. Bhattarai (DLA Piper)',
    panelists: 'Dr. Sanjay Manandhar (MIT); Biswas Dhakal (F1Soft); Rumee Singh (Rumsan)',
  },
  {
    time: '12:15–1:00 p.m.',
    title: 'Lunch and recess',
    summary: 'Meal service and break.',
  },
  {
    time: '1:00–2:15 p.m.',
    track: 'Breakout 4A (Pillar IV)',
    title: 'Remittance-plus economy',
    summary:
      'From remittance dependence to productive investment: sustainability of remittances amid AI and workforce change, demand in key labor markets, competitiveness of Nepal’s human capital abroad, and channels into entrepreneurship and a remittance-plus growth model.',
    moderator: 'Dipta Shah (53i Ventures)',
    panelists:
      'Dr. Biswash Gauchan (IIDS); Bhawani Rana (FNCCI); Subash Sharma (eSewa); Rahul Agrawal (Siddhartha Bank)',
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
  },
  {
    time: '2:15–3:30 p.m.',
    track: 'Main plenary 6',
    title: 'Global Nepalis and the skills agenda',
    summary:
      'Diaspora networks, digital platforms, and remote work: emerging industries and economic shifts, remittances and skills in national development, opportunities from platforms and distributed work, and barriers to competitiveness.',
    moderator: 'Shubhangi Rana (MIT)',
    panelists:
      'Nishchal Banskota (Nepal Tea Collective); Subarna Basnet (MIT); Dr. Biswash Gauchan (IIDS); Kiran Bhakta Joshi (Incessant Rain)',
  },
  {
    time: '3:30–4:00 p.m.',
    title: 'Closing remarks',
    summary: 'Formal close to Day 2 and the convening segment at MIT.',
    moderator: 'Dr. Arun R. Joshi (Leadership Academy Nepal)',
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
          Cambridge. Concurrent sessions share a time window—choose one breakout per block.
        </p>
      }
      sessions={DAY2_SESSIONS}
      tableCaption="The Nepal Discourse 2026 — Day 2: time, session, and moderator or panelists."
      scrollRegionLabel="Day 2 schedule. Scroll horizontally on narrow screens to read all columns."
      showVenueColumn={false}
    />
  );
}
