import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { PillarCard } from './PillarCard';

const pillars = [
  {
    number: 'Pillar I',
    title: 'AI and Future of Work',
    subtitle: 'The AI Imperative and Future of Work',
    description:
      'Move beyond fear of automation to identify actionable investment areas where Nepal can gain a competitive edge, including ethical AI development, specialized BPO, and data services.',
    targetOutcome: 'A strategy for co-investment in National AI-Readiness initiatives',
    tone: 'sky' as const,
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
    title: 'Adaptive Leadership',
    subtitle: 'Leadership in a Changing World Order',
    description:
      'Develop ethical and intellectual standards for leadership capable of navigating geopolitical uncertainty, economic shifts, and digital power dynamics.',
    targetOutcome: 'Framework for ethical governance and risk mitigation',
    tone: 'fire' as const,
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
        title: 'Breakout 3: Adaptive Leadership',
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
    tone: 'earth' as const,
    sessions: [
      {
        title:
          'Special Speaker Dialogue: Human Capital and Institutional Resilience',
      },
      {
        title: 'The Human Filter',
        subtitle: 'Truth in the Age of Algorithms',
      },
      {
        title: 'The Cultural Playbook',
        subtitle: 'Leadership Through Art and Sports',
      },
      {
        title: 'Financing the Future',
        subtitle: 'Climate Resilience Pathways',
      },
      {
        title: 'From Rote to Resilience',
        subtitle: 'Human-Centric Education Reform',
      },
      {
        title: 'Leveraging AI and Digital Health',
        subtitle: 'Universal Coverage Strategies',
      },
    ],
  },
  {
    number: 'Pillar IV',
    title: 'Diaspora',
    subtitle: 'Connects the realities of digital transformation and global mobility',
    description:
      'Connect the realities of digital transformation and global mobility to create pathways for diaspora engagement and co-creation.',
    targetOutcome: 'Co-creation with diaspora for global success',
    tone: 'ocean' as const,
    sessions: [
      {
        title: 'Remittance Plus Diaspora',
      },
      {
        title: 'Investing in Nepal',
      },
      {
        title: 'Skills for Global Mastery',
      },
      {
        title: 'Pathways of Partnerships',
      },
    ],
  },
];

export function StrategicFramework() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
        >
          Our Strategic Framework: Four Pillars of the Discourse
        </motion.h2>

        <div className="space-y-6">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.number}
              {...pillar}
              delay={index * 0.1}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}