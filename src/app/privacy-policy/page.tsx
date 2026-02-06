'use client';

import { motion } from 'framer-motion';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </motion.h1>
          <p className="mt-4 max-w-2xl text-white/70">
            This policy explains how Horizon Intern collects, uses, and protects your information.
          </p>

          <div className="mt-10 space-y-6 text-sm text-white/70">
            <section className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white">Information We Collect</h2>
              <p className="mt-2">
                We collect information you submit through forms, including name, email, education
                details, and portfolio links. We may collect usage data to improve performance.
              </p>
            </section>
            <section className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white">How We Use Your Information</h2>
              <p className="mt-2">
                We use your data to evaluate applications, communicate updates, and improve the
                internship experience. We do not sell your personal information.
              </p>
            </section>
            <section className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white">Data Security</h2>
              <p className="mt-2">
                We implement reasonable security measures to protect your data, but no system is
                fully secure.
              </p>
            </section>
            <section className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white">Third-Party Services</h2>
              <p className="mt-2">
                We may use trusted third-party tools (e.g., forms or analytics) that process data
                under their own privacy policies.
              </p>
            </section>
            <section className="glass-card p-6">
              <h2 className="text-lg font-semibold text-white">Contact</h2>
              <p className="mt-2">For privacy inquiries, email: hello@horizonintern.com</p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
