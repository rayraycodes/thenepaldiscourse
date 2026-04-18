import {
  ConferenceScheduleDaySection,
  type ScheduleSessionRow,
} from './ConferenceScheduleShared';

/** Sunday lineup aligned with public sneak-peak PDF; times may be corrected by organizers. */
const DAY2_SESSIONS: ScheduleSessionRow[] = [
  {
    time: '9:45–11:00 a.m.',
    track: 'Breakout',
    title: 'Nepal and emerging industries',
    summary:
      'Industrial policy, entrepreneurship, and global linkages shaping Nepal’s next-stage economy.',
    moderator: 'Shuvangi Rana (MIT International Design Center)',
    panelists:
      'Dr. Biswash Gauchan (IIDS); Nishchal Banskota (Nepal Tea Collective); Subarna Basnet (MIT)',
    location: 'MIT, Cambridge (building announced on site)',
  },
  {
    time: '9:45–11:00 a.m.',
    track: 'Breakout',
    title:
      'The trust deficit — leading institutions in the age of digital mobilization and dissent',
    summary:
      'Institutional legitimacy, digital discourse, and diplomacy in a polarized information environment.',
    moderator: 'Hitesh Hathi (Harvard South Asia Institute)',
    panelists:
      'Ashish Luitel (N-able); Sharad Raj Aran (Embassy of Nepal, Washington, D.C.); additional speaker to be announced',
    location: 'MIT Room 45-102, Cambridge',
  },
  {
    time: '9:45–11:00 a.m.',
    track: 'Breakout',
    title: 'Next-generation leadership — navigating multipolarity and strategic autonomy',
    summary:
      'Youth leadership, governance, and Nepal’s place in a shifting global order.',
    moderator: 'Ang Sonam Sherpa (Cornerstone Research)',
    panelists:
      'Nishcal Rai (Member of Parliament, Nepal); Raksha Bam (youth activist); Pukar Bam (Member of Parliament, Nepal); Semanta Dahal (Abhinawa Law Chambers; Chair, Purak Asia)',
    location: 'MIT Room 45-230, Cambridge',
  },
  {
    time: '11:00 a.m.–12:15 p.m.',
    title: 'Designing Nepal’s AI skills strategy',
    summary:
      'Workforce development, public–private collaboration, and scalable models for AI literacy and deployment.',
    moderator: 'Dipta Shah (VikasaTech)',
    panelists:
      'Dr. Sanjay Manandhar (Zifino); Biswas Dhakal (F1Soft); Rumee Singh (Rumsan); Swastika Shrestha (Teach For Nepal)',
    location: 'MIT Room 45-230, Cambridge',
  },
  {
    time: '12:15–1:00 p.m.',
    title: 'Lunch / recess',
    summary: 'Meal service and break. Confirm timing and room with on-site volunteers.',
    location: 'MIT campus (details at registration)',
  },
  {
    time: '1:00–2:15 p.m.',
    title: 'Diaspora, migration, and representation',
    summary:
      'Voice, belonging, and policy interfaces between Nepali communities abroad and institutions at home.',
    panelists:
      'Mahendra Pandey (Humanity United); Dr. Bishnu Maya Pariyar (NJ Speaks); Samjhana Gurung Shrestha (Nepali Class Boston); Dhadiram Bhandari (Consul General of Nepal, New York)',
    location: 'MIT, Cambridge (building announced on site)',
  },
  {
    time: '1:00–2:25 p.m.',
    title: 'Remittance plus economy',
    summary:
      'Beyond remittance flows: investment, enterprise, and financial infrastructure for inclusive growth.',
    moderator: 'Prof. Tarun Khanna (Harvard Business School)',
    panelists:
      'Bhawani Rana; Hem Raj Dhakal (IME Group); Rahul Agrawal (Siddhartha Bank); Subash Sharma (F1Soft / eSewa)',
    location: 'MIT, Cambridge (building announced on site)',
  },
  {
    time: '1:30–2:45 p.m.',
    title: 'The cultural playbook — community and leadership through art and culture',
    summary:
      'Storytelling, creative industries, and cultural strategy as levers for leadership and cohesion.',
    moderator: 'Anup Kaphle (Kantipur Media Group)',
    panelists:
      'Kiran Bhakta Joshi (Incessant Rain Studios); Sophia L. Pandé (writer, art historian, filmmaker); additional speaker to be announced',
    location: 'Larsen Hall, Harvard Graduate School of Education (Cambridge)',
  },
  {
    time: '2:25–3:15 p.m.',
    title: 'Creating Nepal’s next billion-dollar company for our human capital',
    summary:
      'Scaling world-class companies from Nepal: talent, capital, and narrative for global competitiveness.',
    moderator: 'Dipta Shah (VikasaTech)',
    panelists:
      'Rahul Agrawal (Siddhartha Bank); Sambhav Swar Sirohiya (Kantipur Media Group); Biswas Dhakal (F1Soft)',
    location: 'MIT, Cambridge (building announced on site)',
  },
];

export function ConferenceDay2RunOfShow() {
  return (
    <ConferenceScheduleDaySection
      sectionId="schedule-day-2"
      headingId="day-2-heading"
      title="Day 2 run of show — Sunday, April 26, 2026"
      intro={
        <p className="itinerary-aaa-muted not-justify m-0 mb-4 max-w-none">
          Sunday&apos;s program is primarily at <strong className="font-semibold text-[#2c1418]">MIT</strong>, Cambridge; one session is at Larsen Hall on the Harvard Graduate School of Education campus—allow travel time if you switch venues. Specific rooms are listed in the venue column. Times and rooms may be adjusted; follow the conference program PDF, on-site signage, and organizer updates. Overlapping windows list concurrent options—choose one session per block.
        </p>
      }
      sessions={DAY2_SESSIONS}
      tableCaption="The Nepal Discourse 2026 — Day 2: time, session, people, and venue."
      scrollRegionLabel="Day 2 schedule. Scroll horizontally on narrow screens to read all columns."
    />
  );
}
