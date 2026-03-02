import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { faqCategories, allFaqItems } from '../data/faq';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqItems.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
};

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="faq"
      ref={ref}
      className="py-24 px-6 lg:px-12"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[800px] mx-auto">
        <motion.h2
          id="faq-heading"
          className="text-3xl md:text-4xl font-serif mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
        >
          FAQs – The Nepal Discourse 2026
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.52, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="faq-section-spacing"
        >
          {faqCategories.map((category, index) => (
            <div key={category.title} className={index > 0 ? 'faq-category-spacing' : ''}>
              <h3 className="text-lg font-medium mb-6 text-[#DC143C]">
                {category.title}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="text-base font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="whitespace-pre-line faq-answer-text">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </motion.div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
