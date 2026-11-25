import Link from 'next/link';
import { notFound } from 'next/navigation';
import { events } from '@/data/events';
import { EventGallery } from '@/components/events/event-gallery';
import {
  FadeIn,
  ScaleReveal,
  StaggerGroup,
  StaggerItem,
} from '@/components/motion/motion-primitives';

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((e) => e.id === slug);
  return event
    ? {
        title: event.name,
        description: event.heroIntro,
      }
    : { title: 'Event' };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((e) => e.id === slug);

  if (!event) notFound();

  const relatedEvent = events.find((e) => e.id === event.relatedEventId);

  return (
    <div className="py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-7xl">
        <FadeIn immediate y={12}>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 mb-14 text-[10px] font-bold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors"
          >
            <span aria-hidden="true">&larr;</span> Field notes &amp; events
          </Link>
        </FadeIn>

        {/* 01 · Hero header (mirrors expertise detail page layout) */}
        <FadeIn immediate delay={0.05}>
          <header className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-t border-border">
            <div className="py-8 lg:pr-10 lg:border-r border-border">
              <p className="text-[11px] font-bold tracking-widest text-accent mb-6 uppercase">
                {event.number} · {event.phase}
              </p>
              <p className="label">Field notes</p>
              <p className="mt-16 hidden lg:block text-[10px] font-bold uppercase tracking-[0.35em] text-muted [writing-mode:vertical-rl] rotate-180">
                {event.number}. {event.name}
              </p>
            </div>

            <div className="py-8 lg:pl-12 border-t lg:border-t-0 border-border">
              <p className="label mb-4">
                {event.dateLabel} · {event.location}
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] text-text">
                {event.name}
              </h1>
              <h2 className="mt-7 max-w-3xl font-display text-xl sm:text-2xl font-bold text-text/95 leading-relaxed">
                {event.headline}
              </h2>
              <p className="mt-6 max-w-3xl text-base sm:text-lg text-muted leading-relaxed">
                {event.heroIntro}
              </p>
            </div>
          </header>
        </FadeIn>

        {/* Hero visual / Recognition highlight */}
        <ScaleReveal immediate delay={0.14} className="mt-12 border border-border bg-surface overflow-hidden">
          {event.recognition ? (
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">
                    {event.recognition.label}
                  </p>
                  <h2 className="font-display text-4xl sm:text-5xl font-bold text-text leading-tight">
                    {event.recognition.headline}
                  </h2>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted">
                    {event.recognition.subline}
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 border-t border-border pt-8 gap-6">
                  {event.recognition.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-4xl sm:text-5xl font-bold text-accent leading-none">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm font-bold text-text uppercase tracking-wider">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-xs text-muted leading-relaxed">
                        {stat.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-border/70 pt-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-text mb-1">
                    {event.recognition.statusTitle}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {event.recognition.description}
                  </p>
                </div>
              </div>

              <div className="relative min-h-72 lg:min-h-full bg-[#131313]">
                <img
                  src={event.image}
                  alt={event.imageCaption}
                  className="h-full w-full object-contain bg-[#131313]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#090909]/90 via-[#090909]/40 to-transparent p-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text/90">
                    {event.imageCaption}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr]">
              <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[380px] bg-[#131313] border-b lg:border-b-0 lg:border-r border-border">
                <img
                  src={event.image}
                  alt={event.imageCaption}
                  className="h-full w-full object-contain bg-[#131313]"
                />
                <span className="absolute left-4 top-4 bg-[#090909]/85 px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-accent">
                  {event.date}
                </span>
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-3">
                    Programme context
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-text leading-snug">
                    {event.programme}
                  </h2>
                  <p className="mt-4 text-sm text-muted leading-relaxed">
                    {event.description}
                  </p>
                </div>
                <div className="mt-8 border-t border-border pt-5 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-muted">{event.shortLocation}</span>
                  <span className="text-accent">{event.badge}</span>
                </div>
              </div>
            </div>
          )}
        </ScaleReveal>

        {/* 02 · Overview: About the programme */}
        <FadeIn className="mt-20">
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-t border-border">
              <div className="py-8 lg:pr-10 lg:border-r border-border">
                <p className="label mb-3">Overview</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">
                  {event.aboutTitle}
                </h2>
              </div>
              <div className="py-8 lg:pl-12 space-y-5 border-t lg:border-t-0 border-border">
                {event.aboutContent.map((paragraph, index) => (
                  <p
                    key={index}
                    className="max-w-3xl text-base text-muted leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* 03 · Focus / Development areas (mirrors capabilities grid) */}
        <section className="mt-20">
          <FadeIn className="mb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 border-b border-border pb-5">
            <div>
              <p className="label mb-2">{event.areasLabel}</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">
                {event.areasTitle}
              </h2>
            </div>
            <p className="max-w-xl text-sm text-muted leading-relaxed">
              {event.areasIntro}
            </p>
          </FadeIn>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border">
            {event.areas.map((area) => (
              <StaggerItem key={area.number}>
                <article className="group h-full border-r border-b border-border p-6 sm:p-8 min-h-52 hover:bg-surface transition-colors">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                        {area.number}
                      </p>
                      <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-text">
                        {area.title}
                      </h3>
                    </div>
                    <span
                      className="text-accent text-xl transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      &gt;
                    </span>
                  </div>
                  <p className="mt-5 max-w-xl text-sm text-muted leading-relaxed">
                    {area.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        {/* 04 · Personal participation */}
        <FadeIn className="mt-20">
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-t border-border">
              <div className="py-8 lg:pr-10 lg:border-r border-border">
                <p className="label mb-3">Participation</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">
                  {event.participationTitle}
                </h2>
              </div>
              <div className="py-8 lg:pl-12 space-y-5 border-t lg:border-t-0 border-border">
                {event.participationContent.map((paragraph, index) => (
                  <p
                    key={index}
                    className="max-w-3xl text-base text-muted leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* 05 · Key takeaways / Experience & significance */}
        <FadeIn className="mt-20">
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-y border-border">
              <div className="py-8 lg:pr-10 lg:border-r border-border">
                <p className="label mb-3">{event.takeawaysLabel}</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">
                  {event.takeawaysTitle}
                </h2>
              </div>
              <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 py-4 lg:pl-12 gap-x-8">
                {event.takeaways.map((item, index) => (
                  <StaggerItem
                    key={index}
                    y={12}
                    className="flex items-start gap-3 border-b border-border/70 py-4 text-sm text-text/85 leading-relaxed"
                  >
                    <span className="text-[9px] font-bold text-accent mt-1 shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{item}</span>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </section>
        </FadeIn>

        {/* 06 · Event / Programme information */}
        <FadeIn className="mt-20">
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-y border-border">
              <div className="py-8 lg:pr-10 lg:border-r border-border">
                <p className="label mb-3">Record</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">
                  {event.detailsTitle}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 py-4 lg:pl-12 gap-x-8">
                {event.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex flex-col gap-1 border-b border-border/70 py-4"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                      {detail.label}
                    </span>
                    <span className="text-sm text-text/90">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* 07 · Editorial Asymmetric Gallery & Lightbox */}
        <EventGallery
          title={event.galleryTitle}
          subtitle={event.gallerySubtitle}
          items={event.gallery}
        />

        {/* 08 · Official references */}
        {event.references.length > 0 && (
          <section className="mt-20">
            <FadeIn className="mb-8">
              <p className="label mb-2">Official references</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">
                Programme sources
              </h2>
            </FadeIn>
            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-border">
              {event.references.map((ref) => (
                <StaggerItem key={ref.name}>
                  <a
                    href={ref.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group h-full border-r border-b border-border p-6 sm:p-8 flex flex-col justify-between gap-6 hover:bg-surface transition-colors"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-xl font-bold text-text group-hover:text-accent transition-colors">
                          {ref.name}
                        </h3>
                        <span
                          className="text-accent text-sm transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          &rarr;
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {ref.description}
                      </p>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted group-hover:text-accent transition-colors">
                      Visit official page
                    </p>
                  </a>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </section>
        )}

        {/* 09 · Closing reflection */}
        <FadeIn className="mt-20 border-t border-border pt-12">
          <p className="label mb-4">Closing reflection</p>
          <blockquote className="max-w-3xl border-l-2 border-accent pl-6 py-1 font-display text-xl sm:text-2xl font-bold text-text/95 leading-relaxed">
            {event.closingReflection}
          </blockquote>
        </FadeIn>

        {/* 10 · Related experience + navigation footer */}
        <FadeIn className="mt-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-border pt-8">
          {relatedEvent ? (
            <Link
              href={`/events/${relatedEvent.id}`}
              className="group flex flex-col gap-1.5"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                Related experience
              </span>
              <span className="font-display text-lg font-bold text-text group-hover:text-accent transition-colors">
                {relatedEvent.name}{' '}
                <span aria-hidden="true" className="text-accent">
                  &rarr;
                </span>
              </span>
              <span className="text-xs text-muted">
                {relatedEvent.date} · {relatedEvent.shortLocation}
              </span>
            </Link>
          ) : (
            <p className="text-sm text-muted">
              Explore more professional experiences and milestones.
            </p>
          )}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-border text-sm font-bold uppercase tracking-wider text-text hover:border-accent hover:text-accent transition-colors"
            >
              <span aria-hidden="true">&larr;</span> All events
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-accent text-[#090909] text-sm font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors"
            >
              Get in touch <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
