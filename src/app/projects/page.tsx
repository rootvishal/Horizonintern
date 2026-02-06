'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, BarChart3, ArrowUpRight } from 'lucide-react';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import ApplyModal from '../../components/ApplyModal';
import { Button } from '../../components/ui/Button';

const APPLY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf1Qw3rgi4aAFl7Rc1TCzd_ZSDrRlK6Ya-4hI1mniu7mz0qzA/viewform?usp=dialog';

const projects = [
  {
    icon: Layers,
    title: 'Pulse Analytics',
    description: 'Realtime KPI dashboard for a D2C growth team.',
    tags: ['Data Analytics', 'Next.js', 'Python'],
    impact: 'Improved decision velocity by 42%',
  },
  {
    icon: Cpu,
    title: 'Aether AI',
    description: 'Semantic search engine for knowledge bases.',
    tags: ['AI/ML', 'Vector DB', 'APIs'],
    impact: 'Reduced support time by 35%',
  },
  {
    icon: BarChart3,
    title: 'Nimbus CRM',
    description: 'Sales pipeline tracker with automation workflows.',
    tags: ['Web Dev', 'Automation', 'Product'],
    impact: 'Boosted conversions by 18%',
  },
];

export default function ProjectsPage() {
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
              Our Projects
            </motion.p>
            <motion.h1
              className="mt-6 text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Interns ship
              <span className="block text-gradient-animate"> production-grade work</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg text-white/70"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Every cohort contributes to real product initiatives. Below are sample case studies
              from recent tracks.
            </motion.p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="glass-card flex h-full flex-col justify-between p-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                      <project.icon className="h-6 w-6 text-cyan-300" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm text-white/70">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-sm text-white/70">
                    <span>{project.impact}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="glass-card flex flex-col gap-6 p-10 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Want to ship projects like these?
                </h2>
                <p className="mt-3 text-sm text-white/70">
                  Join the next cohort and work on product-grade tasks with mentor reviews.
                </p>
              </div>
              <Button className="px-8 py-4" onClick={() => setIsApplyOpen(true)}>
                Apply Now
              </Button>
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
