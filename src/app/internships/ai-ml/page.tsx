import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free AI/ML Internship with Certificate | Horizon Intern',
  description:
    'Apply for a Free AI/ML Internship with Certificate at Horizon Intern. Build ML projects, ship model APIs, and get mentor-reviewed outcomes in 2026.',
  keywords: [
    'Free AI/ML Internship with Certificate',
    'AI ML internship for students',
    'virtual AI internship 2026',
    'machine learning internship remote',
  ],
};

export default function AIMLInternshipPage() {
  return (
    <main className="min-h-screen py-20 text-white">
      <div className="container mx-auto px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Internship Track</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
          Free AI/ML Internship with Certificate
        </h1>
        <p className="mt-6 max-w-3xl text-base text-white/75 sm:text-lg">
          Work on practical machine learning tasks with mentor feedback. Build models, expose
          predictions through APIs, and present final evidence of impact.
        </p>

        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          <article className="glass-card p-6">
            <h2 className="text-xl font-semibold">What You Build</h2>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>Classification or regression model project</li>
              <li>Prediction API with deployment-ready structure</li>
              <li>One-page model performance report</li>
            </ul>
          </article>
          <article className="glass-card p-6">
            <h2 className="text-xl font-semibold">Who Should Apply</h2>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>Students with Python fundamentals</li>
              <li>Learners building AI portfolio projects</li>
              <li>Candidates targeting data or ML roles in 2026</li>
            </ul>
          </article>
        </section>

        <section className="mt-10 space-y-6">
          <article className="glass-card p-6">
            <h2 className="text-2xl font-semibold">
              How to get a free AI/ML internship in 2026?
            </h2>
            <p className="mt-3 text-white/75">
              Apply to Horizon Intern&apos;s AI/ML track, submit one Python project, and complete
              the screening form. Selected students join a mentor-guided virtual cohort, build
              deployable model tasks, and receive a Certificate of Completion after review, usually
              within one to six months.
            </p>
          </article>
          <article className="glass-card p-6">
            <h3 className="text-xl font-semibold">
              What are the requirements for the AI/ML internship?
            </h3>
            <p className="mt-3 text-white/75">
              Students need basic Python, data handling fundamentals, and commitment to weekly
              deliverables. You should be ready to complete model training, API integration, and a
              short final report. The internship runs virtually and awards a verified completion
              certificate.
            </p>
          </article>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            Back to Home
          </Link>
          <Link
            href="/internships/python"
            className="rounded-full border border-indigo-300/40 bg-indigo-300/10 px-5 py-2 text-sm text-indigo-200 transition hover:bg-indigo-300/20"
          >
            View Python Track
          </Link>
        </div>
      </div>
    </main>
  );
}
