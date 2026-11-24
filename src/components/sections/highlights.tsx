'use client';

import Link from 'next/link';
import { events } from '@/data/events';
import { motion } from 'framer-motion';
import { EDITORIAL_EASE } from '@/components/motion/motion-primitives';

export function Highlights() {
  return (
    <section className="py-24 border-y border-border/50 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EDITORIAL_EASE }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-14"
        >
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-2 tracking-tight">
              Latest professional highlights
            </h2>
            <p className="label">Beyond the screen</p>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
          >
            View all<span aria-hidden="true"> &rarr;</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: EDITORIAL_EASE }}
              whileHover={{ y: -4 }}
              className={index === 0 ? 'lg:col-span-8' : 'lg:col-span-4'}
            >
              <Link
                href={`/events/${event.id}`}
                className={`group grid border border-border bg-surface h-full overflow-hidden hover:border-accent/60 transition-colors ${
                  index === 0
                    ? 'grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] min-h-[520px]'
                    : 'grid-cols-1 min-h-[520px]'
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? 'min-h-80 lg:min-h-full' : 'min-h-72'
                  }`}
                >
                  {event.image ? (
                    <img
                      src={event.image}
                      alt={event.name}
                      className="absolute inset-0 h-full w-full object-contain bg-[#131313]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#131313]" />
                  )}
                  <span className="absolute left-4 top-4 bg-[#090909]/85 px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-accent">
                    {event.badge}
                  </span>
                </div>
                <div className="p-6 sm:p-7 lg:p-8 flex flex-col justify-end">
                  <p className="label mb-3">
                    {event.date} · {event.shortLocation}
                  </p>
                  <h3
                    className={`font-display font-bold text-text group-hover:text-accent transition-colors ${
                      index === 0 ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
                    }`}
                  >
                    {event.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {event.description}
                  </p>
                  <span className="mt-5 text-[10px] font-bold uppercase tracking-widest text-accent">
                    Explore experience <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
