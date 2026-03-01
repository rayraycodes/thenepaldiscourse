import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function Marquee() {
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const content = [
    'Human Development',
    'AI Readiness',
    'Institutional Resilience',
    'Ethical Leadership',
    'Nepal 2035',
  ];

  const repeatedContent = [...content, ...content, ...content, ...content];

  return (
    <section
      className="mt-8 md:-mt-2 mb-8 md:mb-12 overflow-hidden border-y border-border py-6"
      aria-label="Key themes"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={
          prefersReducedMotion || isPaused
            ? { x: 0 }
            : {
                x: [0, -1000],
              }
        }
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
        style={{ willChange: 'transform' }}
      >
        {repeatedContent.map((text, index) => (
          <div key={index} className="flex items-center gap-12">
            <span
              className={`text-lg font-medium transition-all duration-[180ms] ${
                prefersReducedMotion || isPaused ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {text}
            </span>
            <span className="text-[#DC143C]" aria-hidden="true">
              •
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
