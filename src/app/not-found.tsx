import Link from 'next/link';
import { FadeIn, StaggerGroup, StaggerItem } from '@/components/motion/motion-primitives';

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
};

const destinations = [
  { number: '01', name: 'Home', description: 'Return to the main overview.', href: '/' },
  { number: '02', name: 'About', description: 'Background, focus and EICTA Technologies.', href: '/about' },
  { number: '03', name: 'Work', description: 'Digital products and platforms I am building.', href: '/work' },
  { number: '04', name: 'Experience', description: 'Professional journey and recognition.', href: '/experience' },
  { number: '05', name: 'Events', description: 'BongoHive RoadShow and ZICTA ICT Innovation.', href: '/events' },
  { number: '06', name: 'Contact', description: 'Start a conversation or discuss a project.', href: '/contact' },
];

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-7xl">
        <FadeIn immediate y={12}>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 mb-14 text-[10px] font-bold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors"
          >
            <span aria-hidden="true">&larr;</span> Back to home
          </Link>
        </FadeIn>

        <FadeIn immediate delay={0.05}>
          <header className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-y border-border">
            <div className="py-8 lg:pr-10 lg:border-r border-border">
              <p className="text-[11px] font-bold tracking-widest text-accent mb-6 uppercase">
                404 · NOT FOUND
              </p>
              <p className="label">Navigation error</p>
              <p className="mt-16 hidden lg:block text-[10px] font-bold uppercase tracking-[0.35em] text-muted [writing-mode:vertical-rl] rotate-180">
                404. Page not found
              </p>
            </div>

            <div className="py-8 lg:pl-12 border-t lg:border-t-0 border-border">
              <p className="label mb-4">Error 404</p>
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] text-text">
                Page not found
              </h1>
              <h2 className="mt-7 max-w-2xl font-display text-xl sm:text-2xl font-bold text-text/95 leading-relaxed">
                The route you requested does not exist, may have been moved, or is no longer available.
              </h2>
              <p className="mt-5 max-w-2xl text-base text-muted leading-relaxed">
                Use the links below to return to the homepage or jump directly to another section of the site.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-accent text-[#090909] text-sm font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors"
                >
                  <span aria-hidden="true">&larr;</span> Back to home
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-border text-sm font-bold uppercase tracking-wider text-text hover:border-accent hover:text-accent transition-colors"
                >
                  Explore events <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </header>
        </FadeIn>

        <section className="mt-20">
          <FadeIn className="mb-8 border-b border-border pb-5">
            <p className="label mb-2">Directory</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">
              Where to go next
            </h2>
          </FadeIn>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
            {destinations.map((item) => (
              <StaggerItem key={item.href}>
                <Link
                  href={item.href}
                  className="group h-full border-r border-b border-border p-6 sm:p-8 flex flex-col justify-between gap-6 hover:bg-surface transition-colors"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                        {item.number}
                      </p>
                      <span
                        className="text-accent text-lg transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        &gt;
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-text group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      </div>
    </div>
  );
}
