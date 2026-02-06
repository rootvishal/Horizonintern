'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import ApplyModal from '../../components/ApplyModal';
import { Button } from '../../components/ui/Button';

const APPLY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf1Qw3rgi4aAFl7Rc1TCzd_ZSDrRlK6Ya-4hI1mniu7mz0qzA/viewform?usp=dialog';

const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@Horizon Intern.in',
    note: 'Response within 24 hours',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 940 528 0071',
    note: 'Mon–Fri, 10am–5pm',
  },
  {
    icon: MapPin,
    title: 'HQ',
    value: 'Pune, India',
    note: 'Remote-first teams',
  },
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/Horizon Intern' },
  { label: 'Instagram', href: 'https://instagram.com/Horizon Intern' },
  { label: 'X', href: 'https://x.com/Horizon Intern' },
  { label: 'YouTube', href: 'https://youtube.com/@Horizon Intern' },
];

export default function ContactPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  return (
    <div className="min-h-screen text-white">
      <SiteNav onApply={() => setIsApplyOpen(true)} />

      <main>
        <section className="relative overflow-hidden pb-16 pt-28">
          <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-[160px]" />

          <div className="container mx-auto px-6">
            <motion.p
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <MessageCircle className="h-4 w-4 text-cyan-300" />
              Let’s talk
            </motion.p>
            <motion.h1
              className="mt-6 text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Get in touch with
              <span className="block text-gradient-animate"> the Horizon Intern team</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg text-white/70"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Questions about cohorts, partnerships, or tasks? Drop a note and we’ll reach out.
            </motion.p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {contactCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                    <card.icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{card.value}</p>
                  <p className="mt-3 text-xs text-white/50">{card.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-6">
            <motion.div
              className="glass-card grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <h2 className="text-2xl font-semibold text-white">Send a message</h2>
                <p className="mt-3 text-sm text-white/70">
                  We typically respond within one business day. Share your goals and we’ll guide
                  you to the right cohort.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                    Partnerships
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                    Mentors
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                    Campus leads
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">Socials</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 transition hover:border-white/40 hover:text-white"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 outline-none transition focus:border-cyan-400/60"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 outline-none transition focus:border-cyan-400/60"
                />
                <input
                  type="text"
                  placeholder="Your focus area"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 outline-none transition focus:border-cyan-400/60"
                />
                <textarea
                  placeholder="Tell us about your goals"
                  className="min-h-[120px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 outline-none transition focus:border-cyan-400/60"
                />
                <Button className="w-full" type="submit">
                  Send message
                </Button>
              </form>
            </motion.div>
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
