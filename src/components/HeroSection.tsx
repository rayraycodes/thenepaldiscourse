import { motion } from 'motion/react';
import { Calendar, MapPin, Users } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen hero-section-desktop flex flex-col items-center sm:justify-center md:justify-start pt-20 sm:pt-8 pb-8 md:pb-0"
    >
      <div className="max-w-[1000px] w-full px-6 lg:px-12 md:py-0">
        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.15] mb-8 max-w-[900px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.26, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Human Development, Artificial Intelligence, and the Next Generation of
          Leadership
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 md:mb-8 max-w-[800px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.26, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Join us at Harvard University and Massachusetts Institute of
          Technology (MIT) to forge a strategic foresight defining Nepal's
          competitive advantage in a world shaped by geopolitical flux and
          Artificial Intelligence.
        </motion.p>

        {/* Event Meta */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-8 py-8 md:py-6 border-y border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.26, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-start gap-4">
            <Calendar className="w-5 h-5 mt-1 text-[#DC143C]" />
            <div>
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-1">
                When
              </div>
              <div className="font-medium">April 25–26, 2026</div>
              <div className="text-sm text-muted-foreground">
                Two Full Days of Deliberation
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 mt-1 text-[#003893]" />
            <div>
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-1">
                Where
              </div>
              <div className="font-medium">Harvard University and MIT</div>
              <div className="text-sm text-muted-foreground">
                Cambridge, MA
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Users className="w-5 h-5 mt-1 text-[#DC143C]" />
            <div>
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-1">
                Who
              </div>
              <div className="font-medium">Thought Leaders</div>
              <div className="text-sm text-muted-foreground">
                Policymakers, Business Leaders, Tech CEOs, Academic Experts
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.26, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="https://calendar.gse.harvard.edu/en/36YmkP6/the-nepal-discourse-human-development-ai-and-the-next-generation-of-leadership-5a5YUc2TDOv/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#DC143C] text-background font-medium transition-all duration-[180ms] hover:-translate-y-0.5 hover:shadow-lg ease-[cubic-bezier(0.16,1,0.3,1)] inline-block text-center no-underline"
          >
            Register Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
