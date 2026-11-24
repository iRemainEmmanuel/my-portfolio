'use client';

import Link from 'next/link';
import {
  Code2,
  Layers,
  Settings2,
  Briefcase,
  FileText,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { EDITORIAL_EASE } from '@/components/motion/motion-primitives';

const capabilities = [
  {
    title: 'Software Development',
    description:
      'Custom software and digital products shaped around real workflows, constraints and business goals.',
    icon: Code2,
  },
  {
    title: 'Web Development',
    description:
      'Fast, responsive websites and web applications designed to work beautifully and scale with demand.',
    icon: Layers,
  },
  {
    title: 'IT Solutions',
    description:
      'Practical systems, connectivity and technology improvements that make daily operations more reliable.',
    icon: Settings2,
  },
  {
    title: 'Business Automation',
    description:
      'Digital workflows that remove repetitive work, reduce errors and give teams back valuable time.',
    icon: Briefcase,
  },
  {
    title: 'Business Registration & Compliance',
    description:
      'Guidance for establishing and operating a business with the right registration and compliance foundations.',
    icon: FileText,
  },
];

export function Capabilities() {
  return (
    <section id="what-i-do" className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EDITORIAL_EASE }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-18"
        >
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-2 tracking-tight">
              What I do
            </h2>
            <p className="label">Areas of work</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 border-t border-l border-border">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const slug = cap.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-|-$/g, '');
            const spans =
              index === 0
                ? 'md:col-span-7 md:row-span-2'
                : index === 1
                  ? 'md:col-span-5'
                  : index === 2
                    ? 'md:col-span-5'
                    : 'md:col-span-6';
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: EDITORIAL_EASE }}
                className={spans}
              >
                <Link
                  href={`/services/${slug}`}
                  className="group h-full min-h-44 md:min-h-52 border-r border-b border-border p-5 sm:p-6 flex flex-col justify-between hover:bg-surface transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center border border-border text-accent group-hover:border-accent group-hover:bg-accent group-hover:text-[#090909] transition-all">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-muted">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-text group-hover:text-accent transition-colors">
                      {cap.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm text-muted leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
