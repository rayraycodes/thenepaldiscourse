import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { TrendingDown, Cpu, Globe } from 'lucide-react';

const crisisCards = [
  {
    icon: TrendingDown,
    title: 'The Human Capital Exodus',
    description:
      'Close to a million bright, ambitious, and hardworking Nepalis depart each year in search of opportunity abroad. This brain drain reflects not merely individual aspiration, but a structural failure of domestic strategic investment. If sustained, this outflow threatens the country\'s long-term productivity, innovation, and strategic autonomy.',
  },
  {
    icon: Cpu,
    title: 'The AI Disruption Risk',
    description:
      'Skills rooted in rote instruction and routine execution are rapidly becoming obsolete in an AI-augmented global economy. Nepal\'s workforce remains largely unprepared for this transition, requiring proactive, national-scale investment in reskilling, digital literacy, and institutional reform.',
  },
  {
    icon: Globe,
    title: 'Geopolitical and Policy Vacuum',
    description:
      'A shifting geopolitical landscape demands strategic clarity and clear leadership. Without a deliberate and coordinated policy action, Nepal risks losing its competitive edge and agency over its own trajectory in the Asian century.',
  },
];

export function CrisisSection() {
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
          The Crisis: Why We Must Convene Now
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {crisisCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="border border-border p-8 transition-all duration-[180ms] hover:scale-[1.01] hover:shadow-lg hover:border-foreground/20 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.52,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <card.icon className="w-10 h-10 mb-6 text-[#DC143C]" />
              <h3 className="text-xl font-medium mb-4">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}