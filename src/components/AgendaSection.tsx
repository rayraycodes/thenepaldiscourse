import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';

export function AgendaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      id="agenda" 
      ref={ref} 
      className="py-24 px-6 lg:px-12"
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
      }}
    >
      <div className="max-w-[800px] mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-serif mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
        >
          Event Agenda
        </motion.h2>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.52, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg text-muted-foreground">
            View the sneakpeak PDF here:{' '}
            <Link
              to="/itinerary"
              className="text-foreground font-medium underline underline-offset-4 hover:opacity-90"
            >
              Open sneakpeakpdf
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
