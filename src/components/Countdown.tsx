import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const TARGET_DATE = new Date('2026-04-25T00:00:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const now = new Date();
  const difference = TARGET_DATE.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

interface TimeUnitProps {
  value: number;
  label: string;
}

function TimeUnit({ value, label }: TimeUnitProps) {
  const prevValue = useRef(value);
  const displayValue = String(value).padStart(2, '0');
  const hasChanged = prevValue.current !== value;
  
  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <div 
        className="relative bg-gradient-to-b from-muted/30 to-muted/50 border border-border/50 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 min-w-[72px] sm:min-w-[90px] md:min-w-[110px]"
      >
        <div className="absolute inset-x-0 top-1/2 h-px bg-border/30" />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={displayValue}
            className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tabular-nums tracking-tight text-center relative"
            initial={hasChanged ? { y: -8, opacity: 0 } : false}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {displayValue}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-3 text-xs sm:text-sm uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        setIsExpired(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits: TimeUnitProps[] = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Sec' },
  ];

  const ariaLabel = isExpired
    ? 'The conference has begun!'
    : `Countdown to conference: ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, and ${timeLeft.seconds} seconds remaining`;

  return (
    <section 
      className="py-16 md:py-20 px-6 lg:px-12"
      aria-label="Conference countdown"
    >
      <div className="max-w-[900px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 block">
            April 25–26, 2026
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-8 md:mb-12">
            {isExpired ? 'The Conference Has Begun' : 'Countdown to Conference Day'}
          </h2>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center items-start gap-3 sm:gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          role="timer"
          aria-live="polite"
          aria-atomic="true"
          aria-label={ariaLabel}
        >
          {timeUnits.map((unit, index) => (
            <div key={unit.label} className="flex items-start gap-3 sm:gap-4 md:gap-6">
              <TimeUnit
                value={unit.value}
                label={unit.label}
              />
              {index < timeUnits.length - 1 && (
                <div className="flex items-center h-[72px] sm:h-[88px] md:h-[104px]">
                  <span 
                    className="text-3xl sm:text-4xl md:text-5xl text-muted-foreground/40 font-light select-none" 
                    aria-hidden="true"
                  >
                    :
                  </span>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
