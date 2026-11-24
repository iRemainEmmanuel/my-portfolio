'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { EDITORIAL_EASE } from '@/components/motion/motion-primitives';

// Ease-out cubic for a slow, deliberate scroll
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToTop = () => {
    const start = window.scrollY;
    const startTime = performance.now();
    const duration = 900; // slow, deliberate scroll

    const animateScroll = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      window.scrollTo(0, start * (1 - eased));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animateScroll);
      } else {
        rafRef.current = null;
      }
    };

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animateScroll);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
          onClick={scrollToTop}
          className={cn(
            'fixed bottom-8 right-8 z-50 p-3 rounded-full bg-accent text-[#090909] hover:bg-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[#090909]',
            'shadow-lg shadow-accent/20',
          )}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
