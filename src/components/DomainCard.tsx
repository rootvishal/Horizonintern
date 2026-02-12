'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from './ui/Button';
import type { LucideIcon } from 'lucide-react';

interface DomainCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  onViewTasks: () => void;
}

export default function DomainCard({
  title,
  description,
  icon: Icon,
  index,
  onViewTasks,
}: DomainCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [canTilt, setCanTilt] = useState(
    typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches
  );
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => {
      setCanTilt(media.matches);
    };

    media.addEventListener('change', update);
    return () => {
      media.removeEventListener('change', update);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const tiltEnabled = canTilt && !reduceMotion;

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEnabled) return;

    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    if (rafRef.current !== null) {
      window.cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = window.requestAnimationFrame(() => {
      setTilt({ x: -y * 8, y: x * 8 });
    });
  };

  const handleLeave = () => {
    if (!tiltEnabled) return;
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: tiltEnabled
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : undefined,
      }}
      className="group glass-card relative flex h-full flex-col justify-between p-6 transition-transform duration-300 will-change-transform"
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="space-y-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
          <Icon className="h-6 w-6 text-cyan-300 transition duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_14px_rgba(59,130,246,0.9)]" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-white/65">{description}</p>
        </div>
      </div>
      <div className="mt-6">
        <Button className="w-full text-sm" onClick={onViewTasks}>
          View Tasks
        </Button>
      </div>
    </motion.div>
  );
}
