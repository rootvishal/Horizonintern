'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

interface SiteNavProps {
  onApply?: () => void;
}

export default function SiteNav({ onApply }: SiteNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#05070d]/70 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo3.png"
            alt="Horizon Intern logo"
            width={64}
            height={64}
            priority
            className="h-10 w-auto scale-125"
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/features" className="transition hover:text-white">
            Features
          </Link>
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
          <Link href="/projects" className="transition hover:text-white">
            Our Projects
          </Link>
          <Link href="/campus-ambassadors" className="transition hover:text-white">
            Campus Ambassadors
          </Link>
        </nav>
        <div className="hidden md:block">
          <Button className="px-5 py-2 text-sm" onClick={onApply}>
            Apply Now
          </Button>
        </div>
        <button
          type="button"
          onClick={handleToggle}
          className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-white/30 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#05070d]/95 md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-6 py-6 text-sm text-white/80">
            <Link href="/" className="transition hover:text-white" onClick={handleClose}>
              Home
            </Link>
            <Link href="/features" className="transition hover:text-white" onClick={handleClose}>
              Features
            </Link>
            <Link href="/about" className="transition hover:text-white" onClick={handleClose}>
              About
            </Link>
            <Link href="/contact" className="transition hover:text-white" onClick={handleClose}>
              Contact
            </Link>
            <Link href="/projects" className="transition hover:text-white" onClick={handleClose}>
              Our Projects
            </Link>
            <Link
              href="/campus-ambassadors"
              className="transition hover:text-white"
              onClick={handleClose}
            >
              Campus Ambassadors
            </Link>
            <Button className="w-full" onClick={onApply}>
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
