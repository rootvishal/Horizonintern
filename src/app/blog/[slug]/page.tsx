'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import SiteNav from '../../../components/SiteNav';
import SiteFooter from '../../../components/SiteFooter';

const posts = [
  {
    slug: 'standout-internship-portfolio-30-days',
    title: 'How to Build a Standout Internship Portfolio in 30 Days',
    summary:
      'A weekly plan to ship real projects, document outcomes, and create proof-of-work recruiters trust.',
    readTime: '6 min read',
    sections: [
      {
        heading: 'Week 1: Pick a problem worth solving',
        body:
          'Choose a focused problem in a domain you want to work in. Example: a habit tracker, a micro-CRM, or a student placement dashboard. Keep the scope narrow so you can ship fast.',
      },
      {
        heading: 'Week 2: Build MVP features with real data',
        body:
          'Add one core workflow end-to-end. Include authentication, CRUD, and a usable UI. Use realistic data or seed scripts so the app looks credible.',
      },
      {
        heading: 'Week 3: Add polish and documentation',
        body:
          'Improve UX, handle edge cases, and write a clean README. Add screenshots, a live demo link, and a short architecture section.',
      },
      {
        heading: 'Week 4: Capture outcomes and publish',
        body:
          'Write a 1-page case study: goal, approach, tradeoffs, and impact. Publish on GitHub, LinkedIn, or a blog.',
      },
      {
        heading: 'Portfolio checklist',
        body:
          'You should show a live demo, repo link, clear feature list, and a short “what I learned.” One strong project is better than five incomplete ones.',
      },
    ],
  },
  {
    slug: 'top-internship-interview-questions',
    title: 'Top 10 Internship Interview Questions (And How to Answer)',
    summary:
      'Prepare with structured responses that highlight impact, technical clarity, and team fit.',
    readTime: '7 min read',
    sections: [
      {
        heading: '1) Tell me about yourself',
        body:
          'Use a 30-second story: background, current focus, and the outcome you want. End with why this role fits.',
      },
      {
        heading: '2) Describe a project you’re proud of',
        body:
          'Explain problem, approach, and result. Share metrics: users, speed, revenue impact, or errors reduced.',
      },
      {
        heading: '3) What challenges did you face?',
        body:
          'Pick a real obstacle. Explain how you debugged, what you tried, and what you learned.',
      },
      {
        heading: '4) Why should we hire you?',
        body:
          'Tie your skills to their needs. Mention speed, ownership, and clarity in communication.',
      },
      {
        heading: '5) How do you learn new tech?',
        body:
          'Show a repeatable system: docs → quick prototype → small shipment → reflection.',
      },
    ],
  },
  {
    slug: 'internship-resume-checklist',
    title: 'Internship Resume Checklist: The 12-Point Audit That Works',
    summary:
      'A practical review template to tighten your resume and increase shortlisting rates.',
    readTime: '5 min read',
    sections: [
      {
        heading: 'Checklist essentials',
        body:
          'Use a one-page layout, high-contrast typography, and clear section headings. Avoid dense paragraphs.',
      },
      {
        heading: 'Impact > duties',
        body:
          'Rewrite bullets to show outcomes. Example: “Reduced build time by 28%” beats “Worked on build system.”',
      },
      {
        heading: 'Projects section',
        body:
          'Include 2–3 projects with stack, what you built, and the result. Link to demo or repo.',
      },
      {
        heading: 'Skills section',
        body:
          'List tools you can use without guidance. Avoid overly long skill lists.',
      },
    ],
  },
  {
    slug: 'web-dev-internship-roadmap',
    title: 'Web Dev Internships: Skills, Projects, and Tech Stack Roadmap',
    summary:
      'A curated map of skills and projects to align with modern frontend and full-stack roles.',
    readTime: '8 min read',
    sections: [
      {
        heading: 'Frontend core',
        body:
          'Master semantic HTML, modern CSS, and responsive design. Then add React + a routing framework like Next.js.',
      },
      {
        heading: 'Backend basics',
        body:
          'Build a REST API or GraphQL service. Use a relational database and authentication.',
      },
      {
        heading: 'Project ideas',
        body:
          'Ship a dashboard, a booking system, or a product launch page with analytics.',
      },
      {
        heading: 'Hiring signal',
        body:
          'Public demos with readable code and short case studies increase interview chances.',
      },
    ],
  },
  {
    slug: 'ai-ml-internship-prep-projects',
    title: 'AI/ML Internship Prep: Projects That Prove Real Ability',
    summary:
      'What hiring teams look for in AI interns and how to design projects that show depth.',
    readTime: '9 min read',
    sections: [
      {
        heading: 'Start with a focused problem',
        body:
          'Pick one applied domain: support automation, recommendations, or content classification.',
      },
      {
        heading: 'Show model lifecycle',
        body:
          'Include data prep, training, evaluation, and monitoring. A deployed demo helps a lot.',
      },
      {
        heading: 'Readable metrics',
        body:
          'Explain accuracy, precision/recall, and tradeoffs in plain language.',
      },
      {
        heading: 'Package it',
        body:
          'Publish a notebook plus an API endpoint, and add a short write-up.',
      },
    ],
  },
  {
    slug: 'python-internship-guide',
    title: 'Python Internship Guide: Build APIs, Automations, and Data Pipelines',
    summary:
      'A focused approach to mastering Python deliverables that companies need now.',
    readTime: '7 min read',
    sections: [
      {
        heading: 'Pick a backend framework',
        body:
          'FastAPI is widely used and lets you ship clean APIs quickly.',
      },
      {
        heading: 'Automations that matter',
        body:
          'Create scripts that move data between systems or generate reports.',
      },
      {
        heading: 'Data pipelines',
        body:
          'Demonstrate ETL skills and schedule jobs with cron or a task queue.',
      },
      {
        heading: 'Testing',
        body:
          'Write unit tests for APIs and ensure error handling is reliable.',
      },
    ],
  },
  {
    slug: 'data-analytics-internship-kpis',
    title: 'Data Analytics Internship: KPIs, Dashboards, and Storytelling',
    summary:
      'Turn raw data into business signals using the exact workflow expected in analytics roles.',
    readTime: '6 min read',
    sections: [
      {
        heading: 'Define KPIs first',
        body:
          'Pick 5–7 metrics that drive decisions: retention, conversion, and revenue per user.',
      },
      {
        heading: 'Dashboard design',
        body:
          'Keep the top metrics above the fold. Use simple charts with clear labels.',
      },
      {
        heading: 'Narrative',
        body:
          'Write a one-page insight summary explaining what changed and why.',
      },
    ],
  },
  {
    slug: 'land-remote-internship-no-experience',
    title: 'How to Land a Remote Internship (Without Prior Experience)',
    summary:
      'Strategies to build credibility fast, network smartly, and secure remote interviews.',
    readTime: '8 min read',
    sections: [
      {
        heading: 'Start with proof',
        body:
          'Build a small portfolio and show screenshots, demos, and code.',
      },
      {
        heading: 'Smart outreach',
        body:
          'Send short, specific messages to hiring teams with a link to your work.',
      },
      {
        heading: 'Interview prep',
        body:
          'Practice explaining decisions and tradeoffs, not just features.',
      },
    ],
  },
  {
    slug: 'internship-certification-credibility',
    title: 'Internship Certification: What Makes It Credible to Employers',
    summary:
      'Understand the difference between participation certificates and verified performance signals.',
    readTime: '5 min read',
    sections: [
      {
        heading: 'Verification matters',
        body:
          'Certificates are strongest when tied to reviewed work and assessments.',
      },
      {
        heading: 'What employers trust',
        body:
          'Clear rubric, mentor review, and public portfolio links increase credibility.',
      },
      {
        heading: 'Build a trail',
        body:
          'Include outcome metrics, mentor feedback, and a short summary of what you delivered.',
      },
    ],
  },
  {
    slug: 'internship-mistakes-to-avoid-2026',
    title: 'Internship Mistakes to Avoid in 2026',
    summary:
      'Common pitfalls that hurt applications — and what to do instead to stay competitive.',
    readTime: '6 min read',
    sections: [
      {
        heading: 'Mistake 1: Applying with no proof',
        body:
          'Even a small project beats a blank resume. Build and publish.',
      },
      {
        heading: 'Mistake 2: Generic outreach',
        body:
          'Personalize messages with context and demonstrate you understand the company.',
      },
      {
        heading: 'Mistake 3: Overloading your stack',
        body:
          'A tight stack with depth is better than listing everything.',
      },
      {
        heading: 'Mistake 4: Skipping the write-up',
        body:
          'Case studies show thought process. They convert interviews.',
      },
    ],
  },
];

export default function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen text-white">
      <SiteNav />

      <main className="pb-20 pt-28">
        <div className="container mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <motion.h1
            className="mt-6 text-balance text-4xl font-semibold text-white sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {post.title}
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-lg text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {post.summary}
          </motion.p>
          <p className="mt-4 text-sm text-white/50">{post.readTime}</p>

          <div className="mt-10 space-y-8">
            {post.sections.map((section) => (
              <motion.section
                key={section.heading}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
                <p className="mt-3 text-sm text-white/70">{section.body}</p>
              </motion.section>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
