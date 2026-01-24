import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GraduationCap, Briefcase, Users, Lightbulb } from 'lucide-react';

const speakerCategories = [
  {
    icon: Lightbulb,
    title: 'Keynote Targets',
    description: 'Nepali tech pioneers and international policy leaders',
  },
  {
    icon: GraduationCap,
    title: 'Harvard Academics',
    description:
      'Faculty from Harvard Graduate School of Education, Harvard Kennedy School, Mittal Institute',
  },
  {
    icon: Users,
    title: 'Policy Stakeholders',
    description: 'Nepali policymakers in planning, IT, education',
  },
  {
    icon: Briefcase,
    title: 'Business Leaders',
    description: 'CEOs and executives from core Nepali industries and impact funds',
  },
];

export function SpeakersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="speakers" ref={ref} className="py-24 px-6 lg:px-12">
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
              className="bg-background border border-border p-8 transition-all duration-[180ms] hover:scale-[1.01] hover:shadow-md hover:border-foreground/20 ease-[cubic-bezier(0.16,1,0.3,1)]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.52,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <category.icon className="w-10 h-10 mb-4 text-[#003893]" />
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
