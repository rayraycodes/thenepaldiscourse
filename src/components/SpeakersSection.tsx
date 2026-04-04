import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GraduationCap, Briefcase, Users, Lightbulb } from 'lucide-react';

// Prayer flag colors: Blue (sky), Yellow (earth), Red (fire), Green (water)
const prayerFlagColors = [
  'rgba(0, 56, 147, 0.06)',   // Blue - sky
  'rgba(255, 215, 0, 0.06)',  // Yellow - earth
  'rgba(212, 24, 61, 0.06)',   // Red - fire
  'rgba(34, 139, 34, 0.06)',   // Green - water
];

const speakerCategories = [
  {
    icon: Lightbulb,
    title: 'Panelists',
    description: 'Leading Voices in Governance, Technology, and Global Affairs',
    color: prayerFlagColors[0], // Blue
  },
  {
    icon: GraduationCap,
    title: 'Harvard and MIT Academics',
    description:
      'Faculty from the Harvard Graduate School of Education, Harvard Kennedy School, and MIT',
    color: prayerFlagColors[1], // Yellow
  },
  {
    icon: Users,
    title: 'Senior Policymakers from Nepal',
    description: 'In national planning, education, and technology',
    color: prayerFlagColors[2], // Red
  },
  {
    icon: Briefcase,
    title: 'Business Leaders',
    description: 'Industry and Investment Leaders Across Nepal\'s Key Economic Sectors',
    color: prayerFlagColors[3], // Green
  },
];

export function SpeakersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="speaker-themes" ref={ref} className="py-24 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-serif mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
        >
          Strategic Speakers and Tangible Results
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {speakerCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="border border-border p-8 transition-all duration-[180ms] hover:scale-[1.01] hover:shadow-md hover:border-foreground/20 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ backgroundColor: category.color }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.52,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <category.icon className="w-10 h-10 mb-4 text-[#DC143C]" />
              <h3 className="text-xl font-medium mb-3">{category.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
