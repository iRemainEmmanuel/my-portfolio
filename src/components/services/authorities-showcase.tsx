'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EDITORIAL_EASE, FadeIn } from '@/components/motion/motion-primitives';
import { cn } from '@/lib/utils';

export interface AuthorityItem {
  name: string;
  description: string;
  scope: string;
  stage: string;
  summary: string;
  highlights: string[];
  href: string;
  logo: string;
  logoBg?: string;
}

interface AuthoritiesShowcaseProps {
  institutions: AuthorityItem[];
}

export function AuthoritiesShowcase({ institutions }: AuthoritiesShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = institutions[activeIndex] ?? institutions[0];

  if (!active) return null;

  return (
    <section className="mt-24" aria-label="Relevant institutions">
      <FadeIn className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-border pb-6">
        <div>
          <p className="label mb-2">Relevant institutions</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text leading-tight">
            Working with the right authorities
          </h2>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted tabular-nums">
          <span className="text-accent">{String(activeIndex + 1).padStart(2, '0')}</span> /{' '}
          {String(institutions.length).padStart(2, '0')} · Statutory bodies
        </p>
      </FadeIn>

      {/* Mobile compact pill selector */}
      <div className="mb-4 flex flex-wrap gap-2 lg:hidden" role="tablist" aria-label="Statutory authorities">
        {institutions.map((item, index) => {
          const isSelected = index === activeIndex;
          return (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'px-4 py-2.5 text-xs font-bold uppercase tracking-wider border transition-colors',
                isSelected
                  ? 'border-accent bg-accent text-[#090909]'
                  : 'border-border bg-surface/60 text-muted hover:text-text hover:border-border/80',
              )}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      {/* Architectural split stage */}
      <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] border border-border bg-background overflow-hidden">
        {/* Left: Interactive Authority Rail (desktop) */}
        <div
          className="hidden lg:flex flex-col divide-y divide-border border-r border-border"
          role="tablist"
          aria-label="Statutory authorities"
        >
          {institutions.map((item, index) => {
            const isSelected = index === activeIndex;
            return (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={cn(
                  'group relative flex flex-1 items-center justify-between gap-4 px-7 py-6 text-left transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-accent',
                  isSelected ? 'bg-surface' : 'hover:bg-surface/40',
                )}
              >
                {isSelected && (
                  <motion.span
                    layoutId="authority-active-bar"
                    transition={{ duration: 0.3, ease: EDITORIAL_EASE }}
                    className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent"
                    aria-hidden="true"
                  />
                )}

                <div className="flex items-center gap-5 min-w-0">
                  <span
                    className={cn(
                      'text-[10px] font-bold uppercase tracking-widest tabular-nums transition-colors',
                      isSelected ? 'text-accent' : 'text-muted',
                    )}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="min-w-0">
                    <p
                      className={cn(
                        'font-display text-2xl font-bold tracking-tight transition-colors',
                        isSelected ? 'text-text' : 'text-text/70 group-hover:text-text',
                      )}
                    >
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-[11px] text-muted truncate">
                      {item.scope}
                    </p>
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className={cn(
                    'text-sm transition-all duration-300',
                    isSelected
                      ? 'text-accent translate-x-0 opacity-100'
                      : 'text-muted -translate-x-1 opacity-40 group-hover:opacity-80',
                  )}
                >
                  &rarr;
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Active Authority Spotlight Stage */}
        <div
          role="tabpanel"
          aria-label={active.name}
          className="relative flex flex-col justify-between p-7 sm:p-10 lg:p-12 bg-surface/35 min-h-[420px] overflow-hidden"
        >
          {/* Subtle oversized editorial index watermark */}
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute -top-6 right-5 font-display text-[9rem] sm:text-[11rem] font-bold leading-none text-text/[0.035]"
          >
            {String(activeIndex + 1).padStart(2, '0')}
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: EDITORIAL_EASE }}
              className="relative z-10 flex h-full flex-col justify-between gap-10"
            >
              <div>
                {/* Top row: Stage label + Logo showcase */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-border/80">
                  <div
                    className={cn(
                      'h-20 w-44 sm:w-48 rounded-lg border border-border px-4 py-3 flex items-center justify-center',
                      active.logoBg ?? 'bg-[#EAE7E0]',
                    )}
                  >
                    <img
                      src={active.logo}
                      alt={`${active.name} logo`}
                      className="max-h-14 max-w-full w-auto object-contain"
                    />
                  </div>
                  <div className="sm:text-right">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                      {active.stage}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted">
                      {active.scope}
                    </p>
                  </div>
                </div>

                {/* Title & description */}
                <div className="mt-8">
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-text tracking-tight">
                    {active.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-accent/90">
                    {active.description}
                  </p>
                  <p className="mt-5 max-w-xl text-sm sm:text-base text-muted leading-relaxed">
                    {active.summary}
                  </p>
                </div>

                {/* Key registration/compliance touchpoints */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {active.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border bg-background/70 px-3 py-1.5 text-[11px] font-medium text-text/85"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer bar: clean portal action without exposing raw URL */}
              <div className="flex items-center justify-between border-t border-border/70 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                  Republic of Zambia
                </span>
                <a
                  href={active.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors"
                >
                  <span>Official portal</span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    &#8599;
                  </span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
