import Link from 'next/link';
import { events } from '@/data/events';
import { EventsList } from '@/components/events/events-list';
import { FadeIn } from '@/components/motion/motion-primitives';

export const metadata = {
  title: 'Events',
  description:
    'Professional experiences and innovation milestones by Emmanuel Mwamba — BongoHive IGNITE RoadShow and ZICTA ICT Innovation Programme.',
};

export default function EventsPage() {
  return (
    <div className="py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-7xl">
        <FadeIn immediate>
          <header className="border-y-2 border-text py-6 mb-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="label mb-3">Professional Journal · Zambia</p>
                <h1 className="font-display text-5xl sm:text-7xl font-bold leading-none text-text">
                  Field Notes
                </h1>
              </div>
              <div className="hidden sm:block text-right">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                  Engagement Desk
                </p>
                <p className="mt-2 text-xs text-muted">
                  {events.length.toString().padStart(2, '0')} reported stories
                </p>
              </div>
            </div>
          </header>
        </FadeIn>

        <FadeIn immediate delay={0.08} className="mb-8 flex items-center justify-between">
          <p className="text-xs uppercase tracking-wider text-muted">
            Professional experiences &amp; innovation milestones
          </p>
          <Link
            href="/"
            className="text-[10px] font-bold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors"
          >
            &larr; Back to home
          </Link>
        </FadeIn>

        <EventsList events={events} />
      </div>
    </div>
  );
}
