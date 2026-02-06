'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, HeartHandshake, Shield, Sparkles } from 'lucide-react';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import ApplyModal from '../../components/ApplyModal';
import { Button } from '../../components/ui/Button';

const APPLY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf1Qw3rgi4aAFl7Rc1TCzd_ZSDrRlK6Ya-4hI1mniu7mz0qzA/viewform?usp=dialog';

const values = [
  {
    icon: Target,
    title: 'Proof over promises',
    description: 'Every intern ships measurable work tied to real product outcomes.',
  },
  {
    icon: HeartHandshake,
    title: 'Mentor-first learning',
    description: 'We pair every cohort with verified mentors who coach and review.',
  },
  {
    icon: Shield,
    title: 'Signal you can trust',
    description: 'Certification is performance-based, not participation-based.',
  },
];

const milestones = [
  { title: '2023', detail: 'Horizon Intern starts as a mentorship circle.' },
  { title: '2024', detail: 'First 1,000 interns complete verified tracks.' },
  { title: '2025', detail: 'Partnerships expand into 12 hiring networks.' },
  { title: '2026', detail: 'Premium cohorts launch with product-grade reviews.' },
];

export default function AboutPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <div className="min-h-screen text-white">
      <SiteNav onApply={() => setIsApplyOpen(true)} />

      <main>
        <section className="relative overflow-hidden pb-20 pt-28">
          <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-[160px]" />

          <div className="container mx-auto px-6">
            <motion.p
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="h-4 w-4 text-cyan-300" />
              The Horizon Intern Story
            </motion.p>
            <motion.h1
              className="mt-6 text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              We build
              <span className="block text-gradient-animate"> elite internship signals</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg text-white/70"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Horizon Intern exists to bridge the gap between student potential and hiring expectations.
              We obsess over credibility, feedback, and proof-of-work.
            </motion.p>
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button className="px-8 py-4" onClick={() => setIsApplyOpen(true)}>
                Join the cohort
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                    <value.icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{value.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="glass-card p-10">
              <h2 className="text-2xl font-semibold text-white">Milestones</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-4">
                {milestones.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm text-white/70">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter onApply={() => setIsApplyOpen(true)} />

      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        applyUrl={APPLY_URL}
      />
    </div>
  );
}
