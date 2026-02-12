'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, ShieldCheck, TrendingUp } from 'lucide-react';
import { Button } from './ui/Button';

interface HeroProps {
  onApply: () => void;
}

const TARGET_INTERNS = 1240;

export default function Hero({ onApply }: HeroProps) {
  const [activeInterns, setActiveInterns] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    let frame = 0;
    const totalFrames = 60;
    const timer = setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      setActiveInterns(Math.floor(progress * TARGET_INTERNS));
      if (frame >= totalFrames) {
        clearInterval(timer);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  const shownInterns = reduceMotion ? TARGET_INTERNS : activeInterns;

  return (
    <section className="relative overflow-hidden pb-24 pt-32">
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-[160px]" />

      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <motion.p
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
            >
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Horizon Intern 2026 Cohort is live
            </motion.p>

            <motion.h1
              className="text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.7, delay: 0.1 }}
            >
              Launch your tech career with a
              <span className="block text-gradient-animate"> premium internship experience</span>
            </motion.h1>

            <motion.p
              className="max-w-xl text-lg text-white/70"
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.7, delay: 0.2 }}
            >
              Horizon Intern pairs ambitious students with real product teams, verified mentors, and
              industry-grade project pipelines. Build proof, not just a resume.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.7, delay: 0.3 }}
            >
              <Button className="px-8 py-4 text-base" onClick={onApply}>
                Apply Now
              </Button>
              <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/70">
                Rolling reviews within 48 hours
              </div>
            </motion.div>

            <motion.div
              className="grid gap-6 sm:grid-cols-3"
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.7, delay: 0.4 }}
            >
              <div className="glass-card p-4">
                <div className="text-3xl font-semibold text-white">{shownInterns}</div>
                <div className="text-sm text-white/60">Active Interns</div>
              </div>
              <div className="glass-card p-4">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  Verified Mentors
                </div>
                <div className="text-lg font-semibold text-white">120+ experts</div>
              </div>
              <div className="glass-card p-4">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <TrendingUp className="h-4 w-4 text-cyan-300" />
                  Placement Impact
                </div>
                <div className="text-lg font-semibold text-white">3.6x faster</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="glass-card relative overflow-hidden p-8"
            initial={reduceMotion ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.7, delay: 0.35 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/20" />
            <div className="relative space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                  Cohort Snapshot
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Build proof-of-work with elite feedback loops.
                </h2>
              </div>
              <div className="space-y-4 text-white/70">
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>Portfolio-grade projects</span>
                  <span className="text-white">12+ per cohort</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>Weekly live reviews</span>
                  <span className="text-white">Every Friday</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <span>Certification signals</span>
                  <span className="text-white">Verified</span>
                </div>
              </div>
              <Button className="w-full" onClick={onApply}>
                Start My Application
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
