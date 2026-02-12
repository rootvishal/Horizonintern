'use client';

import Image from 'next/image';
import Link from 'next/link';

interface SiteFooterProps {
  onApply?: () => void;
}

export default function SiteFooter({ onApply }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-sm text-white/60 md:flex-row">
        <div className="flex items-center gap-3 text-white/60">
          <span>© 2026 Horizon Intern. All rights reserved.</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-center md:items-end md:text-right">
          <p className="max-w-xs text-xs text-white/50">
            Fresh insights on internships, portfolios, and placements — updated weekly.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <span>Social:</span>
            <a
              href="https://www.linkedin.com/company/horizon-intern"
              className="text-white/70 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://chat.whatsapp.com/LIXRv78RDmUKCy5FSrpgH5"
              className="text-white/70 hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href="https://x.com/Horizon Intern"
              className="text-white/70 hover:text-white"
            >
              X
            </a>
            <a
              href="https://youtube.com/@Horizon Intern"
              className="text-white/70 hover:text-white"
            >
              YouTube
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
            <Link href="/blog" className="text-white/70 hover:text-white">
              Blog
            </Link>
            <Link href="/contact" className="text-white/70 hover:text-white">
              Contact
            </Link>
            <Link href="/faq" className="text-white/70 hover:text-white">
              FAQ
            </Link>
            <Link href="/campus-ambassadors" className="text-white/70 hover:text-white">
              Campus Ambassadors
            </Link>
            <Link href="/privacy-policy" className="text-white/70 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-white/70 hover:text-white">
              Terms of Service
            </Link>
            <button className="text-white/80 hover:text-white" onClick={onApply}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
