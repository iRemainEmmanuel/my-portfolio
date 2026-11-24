'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { EDITORIAL_EASE } from '@/components/motion/motion-primitives';

export function ContactInvite() {
  return (
    <section className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: EDITORIAL_EASE }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-6 tracking-tight">
          Have something in mind?
        </h2>
        <p className="text-lg text-muted leading-relaxed mb-12 max-w-xl mx-auto">
          Collaborations, business enquiries and professional connections.
        </p>
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-[#090909] font-semibold rounded-md hover:bg-accent-hover transition-colors"
          >
            <span className="text-sm font-bold uppercase tracking-wider">Get in touch</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
