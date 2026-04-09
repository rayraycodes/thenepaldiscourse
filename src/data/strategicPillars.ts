export type PillarTone = 'sky' | 'fire' | 'earth' | 'ocean';

export interface StrategicPillarSession {
  title: string;
  subtitle?: string;
}

export interface StrategicPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  targetOutcome: string;
  tone: PillarTone;
  sessions: StrategicPillarSession[];
}

/** Same four pillars as the home Strategic Framework — single source of truth. */
export const STRATEGIC_PILLARS: StrategicPillar[] = [
  {
    number: 'Pillar I',
    title: 'AI and Future of Work',
    subtitle: 'The AI Imperative and Future of Work',
    description:
      'Move beyond fear of automation to identify actionable investment areas where Nepal can gain a competitive edge, including ethical AI development, specialized BPO, and data services.',
    targetOutcome: 'A strategy for co-investment in National AI-Readiness initiatives',
    tone: 'sky',
    sessions: [
      { title: 'Special Speaker Dialogue: AI and the Future of the Workforce' },
      {
        title: 'Breakout 1: From BPO to IPO',
        subtitle: 'Leveraging AI for Startup Acceleration',
      },
      {
        title: 'Breakout 2: Future-Proofing the Curriculum',
        subtitle: 'AI Literacy and Soft Skills',
      },
      {
        title: 'Breakout 3: AI, Migration, and Remittance',
        subtitle: 'New Policies for Human Capital',
      },
    ],
  },
  {
    number: 'Pillar II',
    title: 'Next Generation Leadership',
    subtitle: 'Leadership in a Changing World Order',
    description:
      'Develop ethical and intellectual standards for leadership capable of navigating geopolitical uncertainty, economic shifts, and digital power dynamics.',
    targetOutcome: 'Framework for ethical governance and risk mitigation',
    tone: 'fire',
    sessions: [
      {
        title: 'Special Speaker Dialogue: Leadership in a Changing World Order',
      },
      {
        title: 'Breakout 1: The Himalayan Dream',
        subtitle: 'Strategic Autonomy in Multipolarity',
      },
      {
        title: 'Breakout 2: The Trust Deficit',
        subtitle: 'Institutional Leadership in the Digital Age',
      },
      {
        title: 'Breakout 3: Next Generation Leadership',
        subtitle: 'Decision-Making Under Digital Duress',
      },
    ],
  },
  {
    number: 'Pillar III',
    title: 'Resilient Institutions',
    subtitle: 'Human Development and Institutional Resilience',
    description:
      "Redesign Nepal's institutions to produce critical thinkers, ethical citizens, and resilient leaders who are incentivized to stay and build domestically.",
    targetOutcome: 'Recommendations to minimize talent exodus',
    tone: 'earth',
    sessions: [
      {
        title: 'Special Speaker Dialogue: Human Development and Institutional Resilience',
      },
      {
        title: 'Breakout I: Sports, Arts and Culture',
        subtitle:
          'The Cultural Playbook – Building Community and Leadership Through Art & Sports',
      },
      {
        title: 'Breakout II: Health & Wellbeing',
        subtitle: 'Leveraging AI and Digital Health for Universal Coverage',
      },
      {
        title: 'Breakout III: From Prediction to Wisdom',
        subtitle: 'Human Decision-Making in the AI Era',
      },
      {
        title: 'Breakout IV: Infrastructure',
        subtitle: 'Mobility and Connectivity',
      },
    ],
  },
  {
    number: 'Pillar IV',
    title: 'Diaspora and the Building of a Global Nepal',
    subtitle: 'Digital Ecosystems, Diaspora, and the Global Nepali Future',
    description:
      'Connect the realities of digital transformation and global mobility to create pathways for diaspora engagement and co-creation.',
    targetOutcome: 'Co-creation with diaspora for global success',
    tone: 'ocean',
    sessions: [
      {
        title: 'Special Speaker Dialogue: Nepal and Emerging Industries',
      },
      { title: 'Breakout 1: Remittance Plus Economy' },
      {
        title: 'Breakout 2: Diaspora and Voting Rights',
      },
      {
        title: 'Breakout 3: Investing in Nepal',
        subtitle: 'Pathways of Partnerships',
      },
    ],
  },
];
