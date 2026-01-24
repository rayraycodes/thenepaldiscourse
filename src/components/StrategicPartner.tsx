import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function StrategicPartner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 px-6 lg:px-12">
      <motion.div
        className="max-w-[1200px] mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Strategic Partner
        </div>
        <div className="text-3xl md:text-4xl font-serif">
          Leadership Academy Nepal
        </div>
      </motion.div>
    </section>
  );
}
