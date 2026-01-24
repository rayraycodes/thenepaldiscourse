import { motion } from 'motion/react';
import { Calendar, MapPin, Users } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 bg-gradient-to-b from-background via-background to-muted/20"
    >
      <div className="max-w-[1000px] w-full">
        {/* Eyebrow */}
        <motion.div
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18, delay: 0.2 }}
        >
          The Nepal Discourse
        </motion.div>

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
          className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-[800px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.26, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Join us at Harvard University to forge a strategic foresight report
          defining Nepal's competitive advantage in a world shaped by Artificial
          Intelligence and geopolitical flux.
        </motion.p>

        {/* Event Meta */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 py-8 border-y border-border"
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
                2 Full Days of Deliberation
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 mt-1 text-[#003893]" />
            <div>
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-1">
                Where
              </div>
              <div className="font-medium">Harvard University</div>
              <div className="text-sm text-muted-foreground">
                Cambridge, MA, USA
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Users className="w-5 h-5 mt-1 text-[#DC143C]" />
            <div>
              <div className="text-sm uppercase tracking-wide text-muted-foreground mb-1">
                Who
              </div>
              <div className="font-medium">Invitation-Only</div>
              <div className="text-sm text-muted-foreground">
                Policymakers, Business Leaders, Tech CEOs, Academic Experts
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.26, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className="px-8 py-4 bg-foreground text-background font-medium transition-all duration-[180ms] hover:-translate-y-0.5 hover:shadow-lg ease-[cubic-bezier(0.16,1,0.3,1)]">
            Request an Invitation
          </button>
          <button className="px-8 py-4 border-2 border-foreground font-medium transition-all duration-[180ms] hover:bg-foreground hover:text-background ease-[cubic-bezier(0.16,1,0.3,1)]">
            Become a Strategic Partner
          </button>
        </motion.div>
      </div>
    </section>
  );
}
