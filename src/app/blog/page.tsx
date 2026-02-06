'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PenLine, ArrowUpRight } from 'lucide-react';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import ApplyModal from '../../components/ApplyModal';
import { Button } from '../../components/ui/Button';

const APPLY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf1Qw3rgi4aAFl7Rc1TCzd_ZSDrRlK6Ya-4hI1mniu7mz0qzA/viewform?usp=dialog';

const blogs = [
  {
    slug: 'standout-internship-portfolio-30-days',
    title: 'How to Build a Standout Internship Portfolio in 30 Days',
    description:
      'A weekly plan to ship real projects, document outcomes, and create proof-of-work recruiters trust.',
    readTime: '6 min read',
  },
  {
    slug: 'top-internship-interview-questions',
    title: 'Top 10 Internship Interview Questions (And How to Answer)',
    description:
      'Prepare with structured responses that highlight impact, technical clarity, and team fit.',
    readTime: '7 min read',
  },
  {
    slug: 'internship-resume-checklist',
    title: 'Internship Resume Checklist: The 12-Point Audit That Works',
    description:
      'A practical review template to tighten your resume and increase shortlisting rates.',
    readTime: '5 min read',
  },
  {
    slug: 'web-dev-internship-roadmap',
    title: 'Web Dev Internships: Skills, Projects, and Tech Stack Roadmap',
    description:
      'A curated map of skills and projects to align with modern frontend and full-stack roles.',
    readTime: '8 min read',
  },
  {
    slug: 'ai-ml-internship-prep-projects',
    title: 'AI/ML Internship Prep: Projects That Prove Real Ability',
    description:
      'What hiring teams look for in AI interns and how to design projects that show depth.',
    readTime: '9 min read',
  },
  {
    slug: 'python-internship-guide',
    title: 'Python Internship Guide: Build APIs, Automations, and Data Pipelines',
    description:
      'A focused approach to mastering Python deliverables that companies need now.',
    readTime: '7 min read',
  },
  {
    slug: 'data-analytics-internship-kpis',
    title: 'Data Analytics Internship: KPIs, Dashboards, and Storytelling',
    description:
      'Turn raw data into business signals using the exact workflow expected in analytics roles.',
    readTime: '6 min read',
  },
  {
    slug: 'land-remote-internship-no-experience',
    title: 'How to Land a Remote Internship (Without Prior Experience)',
    description:
      'Strategies to build credibility fast, network smartly, and secure remote interviews.',
    readTime: '8 min read',
  },
  {
    slug: 'internship-certification-credibility',
    title: 'Internship Certification: What Makes It Credible to Employers',
    description:
      'Understand the difference between participation certificates and verified performance signals.',
    readTime: '5 min read',
  },
  {
    slug: 'internship-mistakes-to-avoid-2026',
    title: 'Internship Mistakes to Avoid in 2026',
    description:
      'Common pitfalls that hurt applications — and what to do instead to stay competitive.',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
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
              <PenLine className="h-4 w-4 text-cyan-300" />
              Horizon Intern Blog
            </motion.p>
            <motion.h1
              className="mt-6 text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Internship insights that
              <span className="block text-gradient-animate"> move your career forward</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg text-white/70"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              SEO-focused guides built to help you prepare, apply, and stand out in competitive
              internship pipelines.
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
                Updated weekly with internship playbooks
              </div>
            </motion.div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 md:grid-cols-2">
              {blogs.map((blog, index) => (
                <motion.article
                  key={blog.title}
                  className="glass-card flex h-full flex-col justify-between p-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div>
                    <h2 className="text-xl font-semibold text-white">{blog.title}</h2>
                    <p className="mt-3 text-sm text-white/70">{blog.description}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-sm text-white/60">
                    <span>{blog.readTime}</span>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-white/70 transition hover:text-white"
                    >
                      Read article
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
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
