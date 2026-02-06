'use client';

import { motion } from 'framer-motion';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';

const faqs = [
  {
    question: 'Who can apply to Horizon Intern?',
    answer:
      'Any student or early-career professional who wants hands-on experience in Web Dev, AI/ML, Python, or Data Analytics.',
  },
  {
    question: 'How long is the internship?',
    answer:
      'Cohorts typically run for 6–8 weeks, with flexible weekly tasks and mentor reviews.',
  },
  {
    question: 'Is the internship remote?',
    answer:
      'Yes. Horizon Intern is remote-first with asynchronous support and weekly live reviews.',
  },
  {
    question: 'Do I get a certificate?',
    answer:
      'Yes. Certification is issued after task verification and mentor review.',
  },
  {
    question: 'How fast will I hear back after applying?',
    answer:
      'Most applicants receive updates within 48 hours.',
  },
  {
    question: 'Can I switch tracks after applying?',
    answer:
      'Yes, you can request a track change before your project phase starts.',
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen text-white">
      <SiteNav />

      <main className="pb-24 pt-28">
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-4xl font-semibold text-white sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Clear answers to help you move fast with confidence.
          </p>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <motion.div
                key={faq.question}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-lg font-semibold text-white">{faq.question}</h2>
                <p className="mt-2 text-sm text-white/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
