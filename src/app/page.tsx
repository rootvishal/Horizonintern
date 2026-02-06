'use client';

import { useState } from 'react';
import {
  Brain,
  Code2,
  BarChart3,
  TerminalSquare,
  ArrowUpRight,
} from 'lucide-react';
import Hero from '../components/Hero';
import DomainCard from '../components/DomainCard';
import Process from '../components/Process';
import { Button } from '../components/ui/Button';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import ApplyModal from '../components/ApplyModal';
import { Modal } from '../components/Modal';

const APPLY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf1Qw3rgi4aAFl7Rc1TCzd_ZSDrRlK6Ya-4hI1mniu7mz0qzA/viewform?usp=dialog';

const domains = [
  {
    title: 'Web Dev',
    description: 'Craft production-grade UIs, build APIs, and deploy modern stacks.',
    icon: Code2,
    tasks: [
      'Build a responsive landing page',
      'Create a small dashboard UI',
      'Connect a simple API',
    ],
  },
  {
    title: 'AI/ML',
    description: 'Prototype intelligent models and integrate them into products.',
    icon: Brain,
    tasks: [
      'Train a basic classifier',
      'Build a simple prediction API',
      'Write a short model report',
    ],
  },
  {
    title: 'Python',
    description: 'Automate workflows, design data pipelines, and build services.',
    icon: TerminalSquare,
    tasks: [
      'Write a data cleanup script',
      'Create a small REST API',
      'Add basic unit tests',
    ],
  },
  {
    title: 'Data Analytics',
    description: 'Turn raw data into decisions through dashboards and insights.',
    icon: BarChart3,
    tasks: [
      'Clean a dataset in Python',
      'Create a simple KPI dashboard',
      'Summarize insights in 1 page',
    ],
  },
];

export default function Home() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isTasksOpen, setIsTasksOpen] = useState(false);
  const [selectedDomainIndex, setSelectedDomainIndex] = useState(0);

  const openTasks = (index: number) => {
    setSelectedDomainIndex(index);
    setIsTasksOpen(true);
  };

  return (
    <div className="min-h-screen text-white">
      <SiteNav onApply={() => setIsApplyOpen(true)} />

      <main>
        <Hero onApply={() => setIsApplyOpen(true)} />

        <section id="domains" className="relative py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                  Available Domains
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  Choose your specialization
                </h2>
              </div>
              <p className="max-w-xl text-white/60">
                Each track is curated with real product deliverables and mentor-led reviews.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {domains.map((domain, index) => (
                <DomainCard
                  key={domain.title}
                  title={domain.title}
                  description={domain.description}
                  icon={domain.icon}
                  index={index}
                  onViewTasks={() => openTasks(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="apply" className="py-24">
          <div className="container mx-auto px-6">
            <div className="glass-card flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">Ready to apply?</h2>
                <p className="mt-2 text-sm text-white/70">
                  Apply in minutes and join the next Horizon Intern cohort.
                </p>
              </div>
              <Button className="px-7 py-3" onClick={() => setIsApplyOpen(true)}>
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

      <Modal
        isOpen={isTasksOpen}
        onClose={() => setIsTasksOpen(false)}
        title={`${domains[selectedDomainIndex].title} Tasks`}
      >
        <ul className="space-y-3 text-sm text-white/70">
          {domains[selectedDomainIndex].tasks.map((task) => (
            <li key={task} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              {task}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button className="w-full" onClick={() => setIsApplyOpen(true)}>
            Apply for this track
          </Button>
        </div>
      </Modal>
    </div>
  );
}
