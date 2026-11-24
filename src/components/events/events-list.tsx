'use client';

import { Event } from '@/data/events';
import { EventCard } from '@/components/events/event-card';
import { motion } from 'framer-motion';
import { EDITORIAL_EASE } from '@/components/motion/motion-primitives';

interface EventsListProps {
  events: Event[];
}

export function EventsList({ events }: EventsListProps) {
  if (events.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-text mb-4">
          No events yet
        </h2>
        <p className="text-muted">
          Event appearances and professional engagement updates will be added here as I attend
          and participate in genuine professional gatherings.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-border">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.6, delay: index * 0.12, ease: EDITORIAL_EASE }}
          whileHover={{ y: -4 }}
          className={
            index === 0
              ? 'lg:col-span-7 lg:border-r border-border lg:pr-7 py-7'
              : 'lg:col-span-5 lg:pl-7 py-7'
          }
        >
          <div className="mb-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
            <span className="text-accent">Story {event.number}</span>
            <span className="text-muted">
              {event.date} · {event.shortLocation}
            </span>
          </div>
          <EventCard event={event} feature={index === 0} />
        </motion.div>
      ))}
    </div>
  );
}
