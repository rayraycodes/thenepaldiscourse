export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    title: 'General FAQs',
    items: [
      {
        id: 'what-is',
        question: 'What is The Nepal Discourse 2026?',
        answer:
          'The Nepal Discourse 2026 is a Harvard-based strategic convening on Four Key Pillars: Artificial Intelligence and Future of Work, Institutional Resilience, the Next Generation of Leadership, and Diaspora. The conference culminates in the development of Strategic Foresight 2035: Nepal\'s Human Capital Strategic Foresight Report, a long-term roadmap for national resilience and competitiveness.',
      },
      {
        id: 'when-where',
        question: 'When and where will the conference take place?',
        answer:
          'The conference will be held on April 25–26, 2026, at Harvard University in Cambridge, Massachusetts, structured as two full days of high-level deliberation and strategic dialogue.',
      },
      {
        id: 'organizers',
        question: 'Who is organizing the conference?',
        answer:
          'The event is organized by Nepali students under the banner of the recognized Harvard student organizations: Nepali Student Organization HGSE with support from the Himalayan Caucus and the Harvard Undergraduate Nepali Student Association (HUNSA).',
      },
      {
        id: 'open-to-public',
        question: 'Is the event open to the public?',
        answer:
          'The Nepal Discourse is an invitation-only conference. Participation requires either a formal invitation or a form submission through the official Request an Invitation process form on our website.',
      },
      {
        id: 'core-themes',
        question: 'What are the core themes of the conference?',
        answer:
          'The conference is organized around four strategic pillars:\n\n• AI and the Future of Work\n• Leadership in a Changing World Order\n• Human Development and Institutional Resilience\n• Diaspora, Digital Ecosystems, and the Global Nepali Future',
      },
    ],
  },
  {
    title: 'Strategic FAQs',
    items: [
      {
        id: 'what-makes-different',
        question: 'What makes The Nepal Discourse different from other AI or policy conferences?',
        answer:
          'Unlike conventional conferences focused on networking or panel discussions, The Nepal Discourse is explicitly designed to produce a formal strategic foresight document together with Nepali ecosystem leaders. Every session contributes to a structured national roadmap under Strategic Foresight 2035.',
      },
      {
        id: 'strategic-foresight-2035',
        question: 'What is Strategic Foresight 2035?',
        answer:
          'Strategic Foresight 2035 is the conference\'s principal output. It is a long-term strategic foresight report synthesizing panel discussions, breakout outputs, and expert contributions into an actionable framework for Nepal\'s human capital transformation in an AI-driven era.',
      },
      {
        id: 'ai-beyond-panels',
        question: 'How does Artificial Intelligence feature beyond discussion panels?',
        answer:
          'AI is embedded both substantively and operationally. The conference includes a dedicated AI & Future of Work movement, curriculum reform discussions, and tools to build future-ready approaches to inform the Foresight Report.',
      },
      {
        id: 'brain-drain',
        question: 'How does the conference address Nepal\'s brain drain challenge?',
        answer:
          'The conference identifies human capital exodus as a central structural crisis. Panels across AI, education reform, institutional resilience, and diaspora engagement are designed to generate strategies for talent retention and domestic opportunity creation.',
      },
      {
        id: 'diaspora-engagement',
        question: 'How is diaspora engagement integrated into national strategy?',
        answer:
          'Day Two includes a dedicated focus on Global Nepalis and the Remittance-Plus-Skills Agenda, shifting the conversation from remittance dependence to long-term knowledge, capital, and institutional co-creation.',
      },
      {
        id: 'tangible-outcomes',
        question: 'What tangible outcomes will emerge from the conference?',
        answer:
          'The conference produces:\n\n• A Long-Term Foresight Report 2035\n• Documented strategic recommendations\n• Ecosystem commitments for post-conference follow-up\n• Yearly gathering to reflect and recalibrate',
      },
    ],
  },
  {
    title: 'Governance & Continuity FAQs',
    items: [
      {
        id: 'intellectual-rigor',
        question: 'How will intellectual rigor be ensured?',
        answer:
          'Each breakout session produces structured outputs that feed directly into Foresight 2035. Sessions are recorded and synthesized, and a dedicated research continuity committee manages post-conference drafting, review, and publication.',
      },
      {
        id: 'national-alignment',
        question: 'Is the conference aligned with national institutions in Nepal?',
        answer:
          'Yes. The Foresight framework includes engagement with national stakeholders, including institutions such as the Nepal Planning Commission, private sector leaders, and policymakers, ensuring policy relevance beyond academic dialogue.',
      },
      {
        id: 'report-release',
        question: 'Will the Foresight Report 2035 be publicly released?',
        answer:
          'Yes. The conference formally commits to releasing a public Foresight Report 2035, along with a shorter dissemination document to share findings with ecosystem partners, institutions, and global stakeholders.',
      },
      {
        id: 'governance-structure',
        question: 'What governance structure follows the conference?',
        answer:
          'The conference transitions into a sustained initiative through the Research Continuity & Project 2035 Working Groups Committee. This body oversees authorship, working groups, research questions, report publication, and long-term institutional follow-through.',
      },
    ],
  },
];

// Flattened list for FAQ schema (SEO)
export const allFaqItems: FAQItem[] = faqCategories.flatMap((cat) => cat.items);
