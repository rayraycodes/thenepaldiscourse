import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STRATEGIC_PILLARS } from '../data/strategicPillars';
import { PillarCard } from './PillarCard';

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
          {STRATEGIC_PILLARS.map((pillar, index) => (
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