import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FileText, Globe2, TrendingUp } from 'lucide-react';

export function Project2035Section() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12">
      <div className="max-w-[900px] mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
        >
          The Project 2035 Report
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground leading-relaxed mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.52, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          The conference culminates in Project 2035: Nepal's Human Capital
          Strategic Foresight Report.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: FileText, text: 'Actionable policy roadmap' },
            { icon: Globe2, text: 'Global public dissemination' },
            { icon: TrendingUp, text: "Long-term reference for Nepal's strategic resilience" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.52,
                delay: 0.2 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <item.icon className="w-8 h-8 mb-4 text-[#DC143C]" />
              <p className="text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
