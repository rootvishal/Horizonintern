'use client';

import { motion } from 'framer-motion';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';

export default function TermsOfServicePage() {
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
            Terms of Service
          </motion.h1>
          <p className="mt-4 max-w-2xl text-white/70">
            By using Horizon Intern, you agree to the terms outlined below.
          </p>

          <div className="mt-10 space-y-6 text-sm text-white/70">
            <section className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white">Eligibility</h2>
              <p className="mt-2">
                You must provide accurate application information and be eligible to participate in
                internship programs in your region.
              </p>
            </section>
            <section className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white">Use of Services</h2>
              <p className="mt-2">
                You agree to use the platform for lawful purposes and not to misuse community or
                mentorship features.
              </p>
            </section>
            <section className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white">Program Changes</h2>
              <p className="mt-2">
                We may update cohorts, schedules, or content as needed. We will communicate major
                changes in advance.
              </p>
            </section>
            <section className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white">Limitation of Liability</h2>
              <p className="mt-2">
                Horizon Intern is not liable for indirect or consequential damages resulting from
                participation or reliance on program materials.
              </p>
            </section>
            <section className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white">Contact</h2>
              <p className="mt-2">For questions, email: hello@horizonintern.com</p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
