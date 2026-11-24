'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { EDITORIAL_EASE } from '@/components/motion/motion-primitives';

export function AboutPreview() {
  return (
    <section className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: EDITORIAL_EASE }}
        className="mx-auto max-w-3xl"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-6 tracking-tight">
          A little about my work
        </h2>
        <p className="text-lg text-muted leading-relaxed mb-8">
          A concise professional introduction, my approach to technology and what drives my work.
        </p>
        <p className="text-lg sm:text-xl text-text/90 leading-relaxed mb-12">
          I build software that solves real business problems | grounded in practicality, shaped by
          entrepreneurship and focused on lasting impact.
        </p>
        <Link
          href="/about"
          className="group inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
        >
          Read my story
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
