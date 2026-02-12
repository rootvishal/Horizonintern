import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Python Internship for Students | Horizon Intern',
  description:
    'Join the Python Internship for Students at Horizon Intern. Build automation scripts, API services, and tested project deliverables in a virtual internship format for 2026.',
  keywords: [
    'Python Internship for Students',
    'virtual Python internship 2026',
    'remote python internship with certificate',
    'python backend internship',
  ],
};

export default function PythonInternshipPage() {
  return (
    <main className="min-h-screen py-20 text-white">
      <div className="container mx-auto px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-300/80">Internship Track</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Python Internship for Students</h1>
        <p className="mt-6 max-w-3xl text-base text-white/75 sm:text-lg">
          Ship practical Python deliverables that hiring managers can review: data cleanup scripts,
          API endpoints, and quality checks with basic tests.
        </p>

        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          <article className="glass-card p-6">
            <h2 className="text-xl font-semibold">What You Build</h2>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>Data cleanup and transformation workflow</li>
              <li>Small REST API for real use-case logic</li>
              <li>Tested project outputs and documentation</li>
            </ul>
          </article>
          <article className="glass-card p-6">
            <h2 className="text-xl font-semibold">Who Should Apply</h2>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>College students or recent graduates</li>
              <li>Learners transitioning into backend roles</li>
              <li>Developers who need portfolio-ready proof</li>
            </ul>
          </article>
        </section>

        <section className="mt-10 space-y-6">
          <article className="glass-card p-6">
            <h2 className="text-2xl font-semibold">
              How to get a Python internship for students in 2026?
            </h2>
            <p className="mt-3 text-white/75">
              Start with basic Python and one small API or automation sample, then apply through
              Horizon Intern. Accepted students enter a virtual, mentor-reviewed internship, ship
              portfolio-ready backend tasks, and earn a Certificate of Completion after evaluations
              across one to six months.
            </p>
          </article>
          <article className="glass-card p-6">
            <h3 className="text-xl font-semibold">
              What are the requirements for the Python internship?
            </h3>
            <p className="mt-3 text-white/75">
              You should know core Python syntax, basic Git usage, and simple API concepts.
              Candidates are expected to complete weekly coding tasks, write minimal tests, and
              submit clean documentation. The program is fully virtual and includes a completion
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
            href="/internships/ai-ml"
            className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2 text-sm text-cyan-200 transition hover:bg-cyan-300/20"
          >
            View AI/ML Track
          </Link>
        </div>
      </div>
    </main>
  );
}
