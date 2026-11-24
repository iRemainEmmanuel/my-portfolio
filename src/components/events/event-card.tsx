import Link from 'next/link';
import { Event } from '@/data/events';
import { cn } from '@/lib/utils';

interface EventCardProps {
  event: Event;
  feature?: boolean;
}

export function EventCard({ event, feature = false }: EventCardProps) {
  return (
    <Link
      href={`/events/${event.id}`}
      className={cn(
        'group block relative overflow-hidden border border-border bg-surface rounded-xl',
        'hover:border-accent/60 transition-all duration-500',
      )}
    >
      <div
        className={cn(
          'relative bg-[#131313] overflow-hidden',
          feature ? 'aspect-[16/10]' : 'aspect-[4/3]',
        )}
      >
        {event.image ? (
          <img
            src={event.image}
            alt={event.name}
            className="h-full w-full object-contain bg-[#131313]"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
              Photograph
            </span>
          </div>
        )}
        <span className="absolute left-4 top-4 bg-[#090909]/85 px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-accent">
          {event.badge}
        </span>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-muted mb-2.5">
          <span>{event.date}</span>
          <span aria-hidden="true">·</span>
          <span>{event.shortLocation}</span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-text mb-2.5 tracking-tight group-hover:text-accent transition-colors">
          {event.name}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-5">
          {event.description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-border/60">
          <span className="text-xs font-semibold text-text/90">
            {event.involvement}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-accent group-hover:text-accent-hover transition-colors">
            Explore experience <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
