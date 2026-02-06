'use client';

import { Modal } from './Modal';
import { Button } from './ui/Button';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  applyUrl: string;
}

export default function ApplyModal({ isOpen, onClose, applyUrl }: ApplyModalProps) {
  const handleApplyRedirect = () => {
    window.open(applyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Apply to Horizon Intern">
      <p className="text-sm text-white/70">
        You are about to continue to our Google Form to submit your application. It takes about 2
        minutes.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button className="flex-1" onClick={handleApplyRedirect}>
          Continue to Form
        </Button>
        <button
          className="flex-1 rounded-full border border-white/20 px-5 py-3 text-sm text-white/70 transition hover:border-white/50 hover:text-white"
          onClick={onClose}
        >
          Maybe later
        </button>
      </div>
    </Modal>
  );
}
