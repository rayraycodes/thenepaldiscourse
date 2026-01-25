import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import exampleImage from 'figma:asset/e6940fff033820f8eca805c49d509b32870892dd.png';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="cta"
      ref={ref}
      className="py-32 px-6 lg:px-12 relative overflow-hidden"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={exampleImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-[900px] mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-serif mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
        >
          Invest in Nepal's Strategic Future
        </motion.h2>

        <motion.p
          className="text-xl text-muted-foreground leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.52, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Your partnership positions your organization as a thought leader
          committed to AI-ready talent and strategic resilience in South Asia.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.52, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className="px-8 py-4 bg-[#DC143C] text-background font-medium transition-all duration-[180ms] hover:-translate-y-0.5 hover:shadow-lg ease-[cubic-bezier(0.16,1,0.3,1)]">
            Request Partnership Prospectus
          </button>
          <button className="px-8 py-4 border-2 border-[#DC143C] text-[#DC143C] font-medium transition-all duration-[180ms] hover:-translate-y-0.5 hover:shadow-md ease-[cubic-bezier(0.16,1,0.3,1)]">
            Apply to Attend
          </button>
        </motion.div>

        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.52, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          All proceeds directly fund travel and accommodation for Nepali ecosystem
          partners.
        </motion.p>
      </div>
    </section>
  );
}
