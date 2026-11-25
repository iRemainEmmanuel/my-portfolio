import Link from 'next/link';
import { FadeIn, ScaleReveal, StaggerGroup, StaggerItem } from '@/components/motion/motion-primitives';

export const metadata = {
  title: 'Apostle Kim Remuel Ministries',
  description:
    'Official Ministry Website & Appointment Management System developed for Apostle Kim Remuel Ministries.',
};

const features = [
  {
    title: 'Public Ministry Website',
    description: 'Official ministry pages, programmes, events, announcements and a digital resource library.',
  },
  {
    title: 'Member Accounts & Dashboard',
    description: 'Registration, authentication, protected member areas and account-based access to ministry resources.',
  },
  {
    title: 'Appointment Management',
    description: 'An organised workflow for requesting and managing selected ministry services and appointments.',
  },
  {
    title: 'Ministry Administration',
    description: 'Protected management pages, content controls and tools for organising ministry information and resources.',
  },
];

const plannedIntegrations = [
  'Google Calendar and Google Meet',
  'Email notifications',
  'WhatsApp communication',
  'Payment infrastructure for applicable services',
  'Additional administrative capabilities',
];

export default function ApostleKimRemuelPage() {
  return (
    <div className="py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-7xl">
        <FadeIn immediate y={12}>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 mb-14 text-[10px] font-bold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors"
          >
            <span aria-hidden="true">&larr;</span> Back to work
          </Link>
        </FadeIn>

        <FadeIn immediate delay={0.05}>
          <header className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-t border-border">
            <div className="py-8 lg:pr-10 lg:border-r border-border">
              <p className="text-[11px] font-bold tracking-widest text-accent mb-6 uppercase">
                In development · Independent build
              </p>
              <p className="label">Web Development · Custom Software Solutions</p>
              <p className="mt-16 hidden lg:block text-[10px] font-bold uppercase tracking-[0.35em] text-muted [writing-mode:vertical-rl] rotate-180">
                Full-stack web application
              </p>
            </div>
            <div className="py-8 lg:pl-12 border-t lg:border-t-0 border-border">
              <p className="label mb-4">Project 02 · Ministry technology</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] text-text">
                Apostle Kim Remuel Ministries
              </h1>
              <h2 className="mt-7 max-w-3xl font-display text-xl sm:text-2xl font-bold text-text/95 leading-relaxed">
                Official Ministry Website &amp; Appointment Management System
              </h2>
              <p className="mt-6 max-w-3xl text-base sm:text-lg text-muted leading-relaxed">
                A full-stack digital platform designed to establish the ministry&apos;s online presence and simplify how people connect with, access and engage with its services.
              </p>
            </div>
          </header>
        </FadeIn>

        <ScaleReveal immediate delay={0.12} className="mt-12 border border-border bg-surface overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="relative min-h-72 lg:min-h-[440px] bg-[#131313] border-b lg:border-b-0 lg:border-r border-border">
              <img
                src="/images/projects/apostle-kim-remuel.png"
                alt="Apostle Kim Remuel Ministries website"
                className="h-full w-full object-contain bg-[#131313]"
                loading="eager"
              />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">Project identity</p>
                <dl className="space-y-5 text-sm">
                  <div><dt className="text-muted">Ministry</dt><dd className="mt-1 font-semibold text-text">Apostle Kim Remuel Ministries</dd></div>
                  <div><dt className="text-muted">Project type</dt><dd className="mt-1 font-semibold text-text">Personal ministry website and booking/appointment system</dd></div>
                  <div><dt className="text-muted">My role</dt><dd className="mt-1 font-semibold text-text">Full-stack Developer</dd></div>
                  <div><dt className="text-muted">Status</dt><dd className="mt-1 font-semibold text-accent">Currently in development</dd></div>
                </dl>
              </div>
              <p className="mt-8 border-t border-border pt-5 text-xs text-muted leading-relaxed">
                Independently developed for Apostle Kim Remuel Ministries as a ministry-focused digital solution.
              </p>
            </div>
          </div>
        </ScaleReveal>

        <FadeIn className="mt-20">
          <section className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-t border-border">
            <div className="py-8 lg:pr-10 lg:border-r border-border">
              <p className="label mb-3">Project overview</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">More than a personal website</h2>
            </div>
            <div className="py-8 lg:pl-12 space-y-5 border-t lg:border-t-0 border-border">
              <p className="max-w-3xl text-base text-muted leading-relaxed">
                Apostle Kim Remuel Ministries is a custom-developed personal ministry website and booking/appointment system created to bring the ministry&apos;s online presence, appointment bookings and essential administrative activities into one connected platform.
              </p>
              <p className="max-w-3xl text-base text-muted leading-relaxed">
                Beyond a standard personal website, the project combines public-facing pages with authenticated user accounts, booking and appointment requests, ministry resources and administrative management tools.
              </p>
              <p className="max-w-3xl text-base text-muted leading-relaxed">
                The goal is to provide an accessible digital experience for visitors and a more organised way for the ministry to manage its online activities.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-20">
          <section className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-t border-border">
            <div className="py-8 lg:pr-10 lg:border-r border-border">
              <p className="label mb-3">The challenge</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">Connecting people and operations</h2>
            </div>
            <div className="py-8 lg:pl-12 border-t lg:border-t-0 border-border">
              <p className="max-w-3xl text-base text-muted leading-relaxed">
                Ministries need more than a website displaying basic information. They need accessible ways for people to discover their work, stay informed, access resources and request assistance.
              </p>
              <p className="mt-5 max-w-3xl text-base text-muted leading-relaxed">
                This platform is being developed to bring those experiences together while giving authorised ministry administrators tools to manage content and oversee platform activities.
              </p>
            </div>
          </section>
        </FadeIn>

        <section className="mt-20">
          <FadeIn className="mb-8 border-b border-border pb-5">
            <p className="label mb-2">Platform scope</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">Key features</h2>
          </FadeIn>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border">
            {features.map((feature, index) => (
              <StaggerItem key={feature.title}>
                <article className="group h-full border-r border-b border-border p-6 sm:p-8 min-h-52 hover:bg-surface transition-colors">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-accent">{String(index + 1).padStart(2, '0')}</p>
                      <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-text">{feature.title}</h3>
                    </div>
                    <span className="text-accent text-xl" aria-hidden="true">&gt;</span>
                  </div>
                  <p className="mt-5 text-sm text-muted leading-relaxed">{feature.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <FadeIn className="mt-20">
          <section className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-y border-border">
            <div className="py-8 lg:pr-10 lg:border-r border-border">
              <p className="label mb-3">My contribution</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">Building the system behind the experience</h2>
            </div>
            <div className="py-8 lg:pl-12 space-y-5 border-t lg:border-t-0 border-border">
              <p className="max-w-3xl text-base text-muted leading-relaxed">
                I am responsible for the technical design and development of the platform, including its frontend, application architecture, authentication, database integration, protected routes and core application workflows.
              </p>
              <p className="max-w-3xl text-base text-muted leading-relaxed">
                The work involves translating ministry requirements into a practical digital system, with consideration for usability, security, maintainability and future expansion.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-20">
          <section className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-y border-border">
            <div className="py-8 lg:pr-10 lg:border-r border-border">
              <p className="label mb-3">Roadmap</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">Planned integrations</h2>
            </div>
            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 py-4 lg:pl-12">
              {plannedIntegrations.map((integration, index) => (
                <StaggerItem key={integration} y={10} className="flex items-center gap-3 border-b border-border/70 py-4 text-sm text-text/85">
                  <span className="text-[9px] font-bold text-accent">{String(index + 1).padStart(2, '0')}</span>
                  {integration}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </section>
        </FadeIn>

        <FadeIn className="mt-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-border pt-8">
          <p className="text-sm text-muted">Independently developed for Apostle Kim Remuel Ministries · Currently in development</p>
          <a
            href="https://apostlekimremuel.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-accent text-[#090909] text-sm font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors"
          >
            Visit project <span aria-hidden="true">&rarr;</span>
          </a>
        </FadeIn>
      </div>
    </div>
  );
}
