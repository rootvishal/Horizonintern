'use client';

import { motion } from 'framer-motion';
import { FileText, Code2, CheckCircle, Award } from 'lucide-react';

const steps = [
  { icon: FileText, title: 'Application', description: 'Submit your proof-of-work and goals.' },
  { icon: Code2, title: 'Project Phase', description: 'Ship real tasks with mentor guidance.' },
  { icon: CheckCircle, title: 'Verification', description: 'Pass review and performance checks.' },
  { icon: Award, title: 'Certification', description: 'Receive verified internship credentials.' },
];

export default function Process() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-center text-3xl font-semibold text-white sm:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Your Internship Journey
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-white/70"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          A transparent, high-signal process built for fast movers.
        </motion.p>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent md:block" />
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="glass-card relative flex h-full flex-col gap-4 p-6 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                  <step.icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-white/65">{step.description}</p>
                <div className="absolute -top-2 left-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)] md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
