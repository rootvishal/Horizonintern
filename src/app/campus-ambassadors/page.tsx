'use client';

import { motion } from 'framer-motion';
import {
  Megaphone,
  Users,
  BadgeDollarSign,
  ClipboardCheck,
  Link,
  Award,
} from 'lucide-react';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import { Button } from '../../components/ui/Button';

const APPLY_URL = 'https://forms.gle/hXKpmg4cG3AaRMMZ8';

const highlights = [
  {
    icon: Megaphone,
    title: 'Be the campus voice',
    description:
      'Lead Horizon Intern awareness on your campus through events, clubs, and peer networks.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Earn per signup',
    description:
      'Get a unique referral code and earn a fixed reward for every verified registration.',
  },
  {
    icon: Award,
    title: 'Offer letter + recognition',
    description:
      'Receive a program offer letter, LinkedIn recognition, and top-performer shoutouts.',
  },
];

const responsibilities = [
  {
    icon: ClipboardCheck,
    title: 'Share verified opportunities',
    detail: 'Post official Horizon Intern openings and cohort updates on LinkedIn.',
  },
  {
    icon: Users,
    title: 'Drive campus adoption',
    detail: 'Host info sessions, promote workshops, and onboard new registrants.',
  },
  {
    icon: Link,
    title: 'Distribute referral code',
    detail: 'Share your unique code and guide students through registration.',
  },
];

const steps = [
  'Apply via the form and share your campus details.',
  'Get your offer letter and onboarding kit within 3 business days.',
  'Receive your referral code and promotion assets.',
  'Earn rewards as students register using your code.',
];

export default function CampusAmbassadorsPage() {
  const handleApply = () => {
    window.location.href = APPLY_URL;
  };

  return (
    <div className="min-h-screen text-white">
      <SiteNav onApply={handleApply} />

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
              <Megaphone className="h-4 w-4 text-cyan-300" />
              Campus Ambassador Program
            </motion.p>
            <motion.h1
              className="mt-6 text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Build your campus
              <span className="block text-gradient-animate"> internship network with Horizon Intern</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg text-white/70"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Represent Horizon Intern at your college. Share opportunities, distribute your referral
              code, and earn rewards for every verified registration.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button className="px-8 py-4" onClick={handleApply}>
                Apply to be a Campus Ambassador
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                    <item.icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              className="glass-card grid gap-6 p-8 md:grid-cols-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {responsibilities.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                    <item.icon className="h-5 w-5 text-cyan-300" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.detail}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="glass-card grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="text-2xl font-semibold text-white">How it works</h2>
                <p className="mt-3 text-sm text-white/70">
                  You represent Horizon Intern on campus, drive signups, and earn rewards based on
                  verified registrations linked to your unique code.
                </p>
                <div className="mt-6 grid gap-3">
                  {steps.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70"
                    >
                      <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs text-white/80">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-white">Ready to lead?</h3>
                <p className="mt-3 text-sm text-white/70">
                  Apply now and receive your onboarding kit, referral code, and offer letter.
                </p>
                <div className="mt-6">
              <Button className="w-full" onClick={handleApply}>
                    Apply for Program
                  </Button>
                </div>
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
                  Rewards are credited for verified registrations only. Terms shared after selection.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter onApply={handleApply} />
    </div>
  );
}
