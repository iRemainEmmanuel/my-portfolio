'use client';

import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 px-4">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-text leading-[1.05] mb-6 text-balance">
            Software Developer &amp; Founder
          </h1>

          <p className="text-lg sm:text-xl text-text/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            I turn ideas into software that solves real problems.
          </p>

          <p className="text-base sm:text-lg text-muted leading-relaxed mb-14 max-w-xl mx-auto">
            I am Emmanuel Mwamba, a Software Developer and Startup Founder from Zambia. I build
            digital products and practical software solutions for businesses and people.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/work"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-accent text-[#090909] font-semibold rounded-md overflow-hidden"
            >
              <span className="relative z-10 text-sm font-bold uppercase tracking-wider">
                Explore my work
              </span>
              <ArrowRight className="relative z-10 ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <span className="absolute inset-0 bg-[#090909]/20 group-hover:bg-[#090909]/30 transition-colors" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#262626] text-text font-semibold rounded-md hover:bg-[#141414] transition-colors"
            >
              <span className="text-sm font-bold uppercase tracking-wider">More about me</span>
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </Link>
          </div>

          <div className="mt-18 flex flex-col sm:flex-row items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-muted border-t border-border/50 pt-10">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <MapPin size={14} strokeWidth={1.5} className="text-accent" />
              <span>Ndola, Zambia</span>
            </div>
            <span>Available for collaborations</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
