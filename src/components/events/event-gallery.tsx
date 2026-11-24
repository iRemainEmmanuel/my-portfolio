'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, Maximize2 } from 'lucide-react';
import type { EventGalleryItem } from '@/data/events';
import { EDITORIAL_EASE, FadeIn, ScaleReveal } from '@/components/motion/motion-primitives';
import { cn } from '@/lib/utils';

interface EventGalleryProps {
  title: string;
  subtitle: string;
  items: EventGalleryItem[];
}

interface GalleryTileProps {
  item: EventGalleryItem;
  index: number;
  onOpen: (index: number) => void;
  className?: string;
  imgClassName?: string;
  featured?: boolean;
}

function GalleryTile({
  item,
  index,
  onOpen,
  className,
  imgClassName,
  featured = false,
}: GalleryTileProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      aria-label={`View photograph ${index + 1}: ${item.alt}`}
      className={cn(
        'group relative block w-full overflow-hidden rounded-lg bg-[#131313] text-left',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className,
      )}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading={featured ? 'eager' : 'lazy'}
        className={cn(
          'h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]',
          item.objectPosition ?? 'object-center',
          imgClassName,
        )}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#090909]/0 transition-colors duration-300 group-hover:bg-[#090909]/15"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#090909]/70 text-text/90 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
      >
        <Maximize2 size={14} strokeWidth={1.75} />
      </span>
    </button>
  );
}

export function EventGallery({ title, subtitle, items }: EventGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = items.length;
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === null ? null : (prev - 1 + total) % total));
  }, [total]);

  const showNext = useCallback(() => {
    setActiveIndex((prev) => (prev === null ? null : (prev + 1) % total));
  }, [total]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      } else if (event.key === 'ArrowRight' && total > 1) {
        showNext();
      } else if (event.key === 'ArrowLeft' && total > 1) {
        showPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, total, close, showNext, showPrev]);

  if (total === 0) return null;

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null || total <= 1) return;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 45) {
      if (delta > 0) {
        showNext();
      } else {
        showPrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const [featured, ...supporting] = items;
  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <section className="mt-20" aria-label={title}>
      <FadeIn className="mb-8 border-b border-border pb-5">
        <p className="label mb-2">Documentation</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">
          {title}
        </h2>
        <p className="mt-2 text-sm text-muted">{subtitle}</p>
      </FadeIn>

      {/* 1 photograph: Large dominant editorial frame preserving natural aspect ratio */}
      {total === 1 && (
        <ScaleReveal>
          <div className="max-w-3xl">
            <button
              type="button"
              onClick={() => setActiveIndex(0)}
              aria-label={`View photograph: ${featured.alt}`}
              className="group relative block w-full overflow-hidden rounded-lg bg-[#131313] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <img
                src={featured.src}
                alt={featured.alt}
                className="max-h-[75vh] w-full object-contain bg-[#111111] transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#090909]/70 text-text/90 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
              >
                <Maximize2 size={14} strokeWidth={1.75} />
              </span>
            </button>
          </div>
        </ScaleReveal>
      )}

      {/* 2 photographs: Asymmetric 62/38 split */}
      {total === 2 && (
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-3 sm:gap-4 items-stretch">
          <ScaleReveal className="h-full">
            <GalleryTile
              item={featured}
              index={0}
              onOpen={setActiveIndex}
              featured
              className="aspect-[4/3] lg:h-full lg:min-h-[460px] lg:aspect-auto"
            />
          </ScaleReveal>
          <ScaleReveal delay={0.08} className="h-full">
            <GalleryTile
              item={supporting[0]}
              index={1}
              onOpen={setActiveIndex}
              className="aspect-[4/3] lg:h-full lg:min-h-[460px] lg:aspect-auto"
            />
          </ScaleReveal>
        </div>
      )}

      {/* 3 photographs: Dominant left (~63%) + 2 varied supporting photos stacked on right (~37%) */}
      {total === 3 && (
        <div className="grid grid-cols-1 lg:grid-cols-[1.68fr_1fr] gap-3 sm:gap-4 items-stretch">
          <ScaleReveal className="h-full">
            <GalleryTile
              item={featured}
              index={0}
              onOpen={setActiveIndex}
              featured
              className="aspect-[3/2] lg:h-full lg:min-h-[480px] lg:aspect-auto"
            />
          </ScaleReveal>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
            <ScaleReveal delay={0.07} className="h-full">
              <GalleryTile
                item={supporting[0]}
                index={1}
                onOpen={setActiveIndex}
                className="aspect-[4/3] lg:aspect-[16/10] lg:h-full"
              />
            </ScaleReveal>
            <ScaleReveal delay={0.14} className="h-full">
              <GalleryTile
                item={supporting[1]}
                index={2}
                onOpen={setActiveIndex}
                className="aspect-[4/3] lg:aspect-[16/9] lg:h-full"
              />
            </ScaleReveal>
          </div>
        </div>
      )}

      {/* 4 photographs: Dominant left (~62%) + varied editorial right column (2 portrait tiles over 1 wide tile) */}
      {total === 4 && (
        <div className="grid grid-cols-1 lg:grid-cols-[1.62fr_1fr] gap-3 sm:gap-4 items-stretch">
          <ScaleReveal className="h-full">
            <GalleryTile
              item={featured}
              index={0}
              onOpen={setActiveIndex}
              featured
              className="aspect-[4/3] lg:h-full lg:min-h-[540px] lg:aspect-auto"
            />
          </ScaleReveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <ScaleReveal delay={0.06} className="h-full">
              <GalleryTile
                item={supporting[0]}
                index={1}
                onOpen={setActiveIndex}
                className="aspect-[4/5] h-full"
              />
            </ScaleReveal>
            <ScaleReveal delay={0.11} className="h-full">
              <GalleryTile
                item={supporting[1]}
                index={2}
                onOpen={setActiveIndex}
                className="aspect-[4/5] h-full"
              />
            </ScaleReveal>
            <ScaleReveal delay={0.16} className="col-span-2 h-full">
              <GalleryTile
                item={supporting[2]}
                index={3}
                onOpen={setActiveIndex}
                className="aspect-[16/10] h-full"
              />
            </ScaleReveal>
          </div>
        </div>
      )}

      {/* 5+ photographs: Dominant left (~62%) + 2-column supporting mosaic on right (~38%) */}
      {total >= 5 && (
        <div className="grid grid-cols-1 lg:grid-cols-[1.62fr_1fr] gap-3 sm:gap-4 items-stretch">
          <ScaleReveal className="h-full">
            <GalleryTile
              item={featured}
              index={0}
              onOpen={setActiveIndex}
              featured
              className="aspect-[4/3] lg:h-full lg:min-h-[540px] lg:aspect-auto"
            />
          </ScaleReveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {supporting.map((item, idx) => (
              <ScaleReveal key={item.src} delay={0.05 + idx * 0.05} className="h-full">
                <GalleryTile
                  item={item}
                  index={idx + 1}
                  onOpen={setActiveIndex}
                  className={cn(
                    'h-full',
                    idx % 3 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]',
                  )}
                />
              </ScaleReveal>
            ))}
          </div>
        </div>
      )}

      {/* Full-screen Editorial Lightbox */}
      <AnimatePresence>
        {isOpen && activeItem && activeIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${title} lightbox`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: EDITORIAL_EASE }}
            onClick={close}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#090909]/95 backdrop-blur-md p-4 sm:p-6"
          >
            {/* Top bar: Counter + Close */}
            <div
              className="flex items-center justify-between text-text"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-muted tabular-nums">
                {activeIndex + 1} / {total}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close lightbox"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-surface/80 text-text hover:border-accent hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>

            {/* Center stage: Photograph + Prev/Next controls */}
            <div className="relative my-auto flex flex-1 items-center justify-center py-4">
              {total > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  aria-label="Previous photograph"
                  className="absolute left-0 sm:left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-[#090909]/80 text-text hover:border-accent hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <ArrowLeft size={20} strokeWidth={2} />
                </button>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.src}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
                  onClick={(e) => e.stopPropagation()}
                  className="flex max-h-[80vh] max-w-[92vw] sm:max-w-[82vw] flex-col items-center"
                >
                  <img
                    src={activeItem.src}
                    alt={activeItem.alt}
                    className="max-h-[76vh] max-w-full w-auto h-auto rounded-lg object-contain select-none"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>

              {total > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  aria-label="Next photograph"
                  className="absolute right-0 sm:right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-[#090909]/80 text-text hover:border-accent hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <ArrowRight size={20} strokeWidth={2} />
                </button>
              )}
            </div>

            {/* Bottom bar: Subtle caption when provided */}
            {activeItem.caption ? (
              <div
                className="mx-auto max-w-2xl text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-xs sm:text-sm text-text/80 leading-relaxed">
                  {activeItem.caption}
                </p>
              </div>
            ) : (
              <div className="h-4" aria-hidden="true" />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
