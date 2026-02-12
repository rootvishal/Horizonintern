import type { Metadata } from 'next';
import HomePageClient from '../components/HomePageClient';

export const metadata: Metadata = {
  title: 'Free AI/ML Internship with Certificate | Horizon Intern',
  description:
    'Join Horizon Intern for Free AI/ML Internship with Certificate, Python Internship for Students, and Virtual Internships 2026 with mentor feedback and real projects.',
  keywords: [
    'Free AI/ML Internship with Certificate',
    'Python Internship for Students',
    'Virtual Internships 2026',
    'online internship for college students',
    'AI internship for beginners',
    'remote internship with certificate',
    'Horizon Intern',
  ],
  openGraph: {
    title: 'Horizon Intern | Virtual Internships 2026',
    description:
      'Apply for AI/ML, Python, Web Development, and Data Analytics internships with verified mentors and certificate outcomes.',
    type: 'website',
  },
};

export default function Home() {
  return <HomePageClient />;
}
