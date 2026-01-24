import { useState } from 'react';
import { motion } from 'motion/react';

export function Marquee() {
  const [isPaused, setIsPaused] = useState(false);

  const content = [
    'Human Development',
    'AI Readiness',
    'Institutional Resilience',
    'Ethical Leadership',
    'Nepal 2035',
  ];

  const repeatedContent = [...content, ...content, ...content, ...content];

  return (
    <div
      className="overflow-hidden border-y border-border py-6 bg-muted/30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
        style={{ willChange: 'transform' }}
        {...(isPaused && { animate: { x: 0 } })}
      >
        {repeatedContent.map((text, index) => (
          <div key={index} className="flex items-center gap-12">
            <span
              className={`text-lg font-medium transition-all duration-[180ms] ${
                isPaused ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {text}
            </span>
            <span className="text-[#DC143C]">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
