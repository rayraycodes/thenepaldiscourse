import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export function AgendaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="agenda" ref={ref} className="py-24 px-6 lg:px-12 bg-muted/20">
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
          <p className="text-2xl md:text-3xl font-serif text-muted-foreground">
            Watch this space.
          </p>
          <p className="text-lg text-muted-foreground">
            The detailed agenda of speakers, panels, and workshops will be released
            soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
