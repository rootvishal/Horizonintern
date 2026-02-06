'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  ShieldCheck,
  Sparkles,
  Gauge,
  Users,
  Globe,
} from 'lucide-react';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import ApplyModal from '../../components/ApplyModal';
import { Button } from '../../components/ui/Button';

const APPLY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf1Qw3rgi4aAFl7Rc1TCzd_ZSDrRlK6Ya-4hI1mniu7mz0qzA/viewform?usp=dialog';

const features = [
  {
    icon: Sparkles,
    title: 'Premium Mentorship',
    description: 'Weekly live reviews with senior engineers from product teams.',
  },
  {
    icon: Rocket,
    title: 'Project Engine',
    description: 'Real tasks pulled from active product backlogs, not tutorials.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Outcomes',
    description: 'Performance checks and verified certifications at completion.',
  },
  {
    icon: Gauge,
    title: 'Fast Feedback Loops',
    description: '48-hour review cycles to keep momentum high.',
  },
  {
    icon: Users,
    title: 'Cohort Community',
    description: 'Private peer network for collaboration and accountability.',
  },
  {
    icon: Globe,
    title: 'Global Hiring Signal',
    description: 'Portfolio-ready outputs aligned with modern hiring rubrics.',
  },
];

export default function FeaturesPage() {
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
              Premium features for serious builders
            </motion.p>
            <motion.h1
              className="mt-6 text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Why Horizon Intern feels
              <span className="block text-gradient-animate"> 10x more premium</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg text-white/70"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              We engineered every layer — from mentorship to verification — to help you deliver
              proof-of-work that recruiters trust.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button className="px-8 py-4" onClick={() => setIsApplyOpen(true)}>
                Apply Now
              </Button>
              <div className="glass-card px-6 py-4 text-sm text-white/70">
                94% of interns finish with a verified project portfolio
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                    <feature.icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="glass-card grid gap-8 p-10 md:grid-cols-3">
              {[
                { label: 'Mentor review cycles', value: 'Every 7 days' },
                { label: 'Average project submissions', value: '12+ per cohort' },
                { label: 'Interview readiness score', value: '4.8 / 5' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">{stat.value}</p>
                </div>
              ))}
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
