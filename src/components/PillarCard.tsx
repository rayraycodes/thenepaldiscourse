import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface Session {
  title: string;
  subtitle?: string;
}

interface PillarCardProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  targetOutcome: string;
  sessions: Session[];
  tone: 'sky' | 'fire' | 'earth';
  delay?: number;
  isInView: boolean;
}

export function PillarCard({
  number,
  title,
  subtitle,
  description,
  targetOutcome,
  sessions,
  tone,
  delay = 0,
  isInView,
}: PillarCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Soft, subtle backgrounds for each pillar:
  // - sky: blue
  // - fire: red
  // - earth: green
  // Use RGBA so underlying paper texture subtly shows through
  const toneColors: Record<'sky' | 'fire' | 'earth', string> = {
    sky: 'rgba(0, 56, 147, 0.06)', // light blue with transparency
    fire: 'rgba(212, 24, 61, 0.06)', // light red with transparency
    earth: 'rgba(0, 128, 0, 0.06)', // light green with transparency
  };

  const contentId = `${number.replace(/\s+/g, '-').toLowerCase()}-content`;
  const buttonId = `${number.replace(/\s+/g, '-').toLowerCase()}-toggle`;

  return (
    <motion.div
      className="border border-border overflow-hidden"
      style={{ backgroundColor: toneColors[tone] }}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.52, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        id={buttonId}
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-8 md:p-10 text-left transition-all duration-[180ms] hover:bg-muted/30 hover:shadow-md group relative overflow-hidden"
        aria-expanded={isExpanded}
        aria-controls={contentId}
      >
        {/* Subtle gradient fade at bottom when collapsed - suggests more content */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
        )}
        
        <div className="flex items-start justify-between gap-6 relative">
          <div className="flex-1">
            <div className="text-sm uppercase tracking-[0.2em] text-[#DC143C] mb-3">
              {number}
            </div>
            <h3 className="text-2xl md:text-3xl font-serif mb-2">{title}</h3>
            <div className="text-lg text-muted-foreground mb-6">{subtitle}</div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {description}
            </p>
            <div className="inline-block px-4 py-2 bg-muted/50 border border-border">
              <span className="text-sm font-medium">Target Outcome: </span>
              <span className="text-sm text-muted-foreground">
                {targetOutcome}
              </span>
            </div>
          </div>
          
          {/* Elegant expandable indicator - bottom right corner */}
          <div className="flex-shrink-0 flex flex-col items-end gap-2 pt-2">
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/20 group-hover:bg-muted/40 transition-colors duration-[180ms]"
            >
              <ChevronDown className="w-5 h-5 text-foreground" />
            </motion.div>
            {!isExpanded && (
              <div className="text-xs text-muted-foreground uppercase tracking-wide">
                {sessions.length} sessions
              </div>
            )}
          </div>
        </div>
        
        {/* Subtle bottom border that suggests expansion */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-foreground/20 transition-colors duration-[180ms]" />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.52, ease: [0.65, 0, 0.35, 1] }}
            className="border-t border-border"
            id={contentId}
            role="region"
            aria-labelledby={buttonId}
          >
            <div className="p-8 md:p-10 space-y-6 bg-muted/10">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Conference Sessions
                </div>
                <div className="text-xs text-muted-foreground">
                  {sessions.length} {sessions.length === 1 ? 'session' : 'sessions'}
                </div>
              </div>
              {sessions.map((session, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.26,
                    delay: index * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="pl-6 border-l-2 border-[#003893] py-3 hover:bg-muted/20 transition-colors duration-[180ms] rounded-r"
                >
                  <div className="font-medium mb-1 text-foreground">{session.title}</div>
                  {session.subtitle && (
                    <div className="text-sm text-muted-foreground mt-1">
                      {session.subtitle}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
