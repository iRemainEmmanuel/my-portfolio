import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FadeIn, StaggerGroup, StaggerItem } from '@/components/motion/motion-primitives';

interface Institution {
  name: string;
  description: string;
  href: string;
  logo: string;
}

interface Service {
  number: string;
  phase: string;
  title: string;
  headline: string;
  description: string;
  capabilities: { title: string; description: string }[];
  deliverables: string[];
  institutions?: Institution[];
}

const services: Record<string, Service> = {
  'software-development': {
    number: '01',
    phase: 'BUILD',
    title: 'Software Development',
    headline: 'Engineering software around real problems, not forcing problems into generic software.',
    description:
      'I develop custom software solutions and digital products designed around specific problems, workflows and business requirements. From initial concept and system architecture to development and deployment, I turn ideas into functional, reliable and maintainable software built to serve real needs and evolve over time.',
    capabilities: [
      { title: 'Product Discovery & Requirements Analysis', description: 'Understanding the problem, identifying user needs, defining functional requirements and translating ideas into clear software specifications.' },
      { title: 'Software Architecture & System Design', description: 'Designing application structures, system components, data flows and technical foundations that support functionality, security and future expansion.' },
      { title: 'Custom Software Engineering', description: 'Developing purpose-built applications with tailored features, business logic and functionality that address specific operational and user requirements.' },
      { title: 'Database Design & Management', description: 'Structuring data, designing database relationships and implementing reliable data storage, retrieval and management systems.' },
      { title: 'API Development & System Integration', description: 'Building and connecting application interfaces, integrating third-party services and enabling different systems to communicate and work together.' },
      { title: 'Security, Testing & Reliability', description: 'Implementing appropriate security controls, validating functionality, handling errors and testing software to improve reliability and protect application data.' },
      { title: 'Maintenance & Continuous Improvement', description: 'Writing maintainable code, resolving issues, improving existing functionality and evolving software as requirements change.' },
    ],
    deliverables: ['Custom business software', 'SaaS products', 'Management systems', 'Enterprise applications', 'Multi-user platforms', 'Digital business tools', 'Workflow-driven applications', 'Cloud-based systems'],
  },
  'web-development': {
    number: '02',
    phase: 'PUBLISH',
    title: 'Web Development',
    headline: 'Building digital experiences that work as beautifully as they look.',
    description:
      'I design and develop modern websites and web applications that help businesses establish their online presence, communicate their value and deliver meaningful digital experiences. From corporate websites to complex web platforms, I combine thoughtful design with reliable engineering to build for performance, usability and growth.',
    capabilities: [
      { title: 'Responsive Web Experiences', description: 'Websites that adapt seamlessly across desktops, tablets and mobile devices, with intuitive navigation and carefully considered interfaces.' },
      { title: 'Search Engine Optimisation', description: 'Search-friendly architecture, semantic HTML, metadata, structured content and technical SEO foundations that help websites become discoverable.' },
      { title: 'Performance & Accessibility', description: 'Optimised loading, efficient rendering, accessible interfaces and thoughtful implementation for a better experience across devices and network conditions.' },
      { title: 'Modern Frontend Engineering', description: 'Component-driven development, reusable architecture, maintainable code and modern frameworks for reliable digital experiences.' },
      { title: 'Backend & Integrations', description: 'Connecting interfaces to databases, APIs, authentication systems and third-party services to deliver functional web applications.' },
      { title: 'Deployment & Scalability', description: 'Production deployment, hosting configuration, domain integration and scalable foundations that support future growth.' },
    ],
    deliverables: ['Corporate websites', 'Business websites', 'Landing pages', 'Web applications', 'SaaS platforms', 'Portals & dashboards', 'E-commerce experiences'],
  },
  'it-solutions': {
    number: '03',
    phase: 'IMPROVE',
    title: 'IT Solutions',
    headline: 'Practical technology support that keeps people, systems and businesses connected.',
    description:
      'I help businesses assess, implement and improve the technology they rely on every day. From connectivity and device configuration to systems support and digital workflows, my approach focuses on dependable solutions that are appropriate for the organisation and practical to maintain.',
    capabilities: [
      { title: 'Technology Assessment', description: 'Evaluating existing equipment, software, connectivity and processes to identify risks, gaps and practical improvement opportunities.' },
      { title: 'Business Network Solutions', description: 'Supporting structured connectivity, routers, access points, network configuration and dependable connections across offices and teams.' },
      { title: 'Systems & Device Support', description: 'Assisting with computer setup, software installation, troubleshooting and the reliable operation of day-to-day technology.' },
      { title: 'Cloud Tools & Collaboration', description: 'Implementing cloud storage, email, shared workspaces and collaborative tools that help teams communicate and work efficiently.' },
      { title: 'Digital Security', description: 'Applying practical access controls, account protection, backup planning and security awareness to reduce operational risk.' },
      { title: 'Technology Implementation', description: 'Planning and coordinating technology deployments with attention to training, usability, continuity and long-term support.' },
    ],
    deliverables: ['IT assessments', 'Network setup', 'Device support', 'Cloud collaboration', 'Software setup', 'Digital security', 'System troubleshooting', 'Technology training'],
  },
  'business-automation': {
    number: '04',
    phase: 'STREAMLINE',
    title: 'Business Automation',
    headline: 'Making business operations smarter through connected systems and intelligent workflows.',
    description:
      'I help businesses rethink how everyday operations are managed by replacing repetitive manual processes with structured digital workflows. Through process analysis, system integration and automation, I develop solutions that improve operational efficiency, minimise errors and give teams more control over their work.',
    capabilities: [
      { title: 'Workflow Analysis & Design', description: 'Understanding existing business processes, identifying bottlenecks and designing structured workflows that simplify operations and eliminate unnecessary steps.' },
      { title: 'Process Automation', description: 'Automating repetitive tasks, routine operations and rule-based activities to reduce manual effort, improve consistency and free up valuable time.' },
      { title: 'System Integration', description: 'Connecting applications, databases and third-party services so information flows seamlessly between business systems without unnecessary duplication.' },
      { title: 'Automated Notifications & Approvals', description: 'Building automated alerts, reminders, task assignments and approval workflows that keep teams informed and business processes moving.' },
      { title: 'Data & Information Management', description: 'Streamlining how business information is collected, processed, organised and accessed through connected digital systems and centralised data structures.' },
      { title: 'Reporting & Operational Visibility', description: 'Developing automated reports, dashboards and performance tracking tools that make business information easier to understand.' },
      { title: 'Process Reliability & Optimisation', description: 'Implementing validation, error handling and monitoring mechanisms while continuously improving automated workflows.' },
    ],
    deliverables: ['Administrative workflows', 'Document processing', 'Data synchronisation', 'Customer onboarding', 'Task assignments', 'Approval processes', 'Business reporting', 'Communication workflows', 'Information management'],
  },
  'business-registration-compliance': {
    number: '05',
    phase: 'ESTABLISH',
    title: 'Business Registration & Compliance',
    headline: 'Helping entrepreneurs establish, formalise and navigate the requirements of doing business.',
    description:
      'Starting and operating a business involves more than having a great idea. I provide practical guidance and administrative assistance to entrepreneurs and businesses navigating registration, tax identification and statutory compliance processes in Zambia. From understanding registration requirements to preparing documentation and navigating relevant procedures, I help make business formalisation more straightforward and accessible.',
    capabilities: [
      { title: 'Business Registration Guidance', description: 'Helping entrepreneurs understand business structures, registration requirements and the steps involved in formalising a venture through PACRA.' },
      { title: 'Registration Documentation & Preparation', description: 'Assisting with identifying required documents, organising business information and preparing details for registration and related applications.' },
      { title: 'TPIN Registration Guidance', description: 'Guiding individuals and businesses through Taxpayer Identification Number registration with the Zambia Revenue Authority.' },
      { title: 'Tax Registration & Compliance Guidance', description: 'Helping businesses understand relevant tax registration requirements, basic obligations and the processes involved in maintaining compliance.' },
      { title: 'Statutory Registration Guidance', description: 'Assisting businesses in understanding applicable statutory registration requirements, including NAPSA employer registration.' },
      { title: 'Compliance Readiness', description: 'Helping entrepreneurs identify applicable registration and documentation requirements and prepare for relevant compliance processes.' },
      { title: 'Business Information Updates', description: 'Guidance on navigating relevant amendments, updating registration details and understanding post-registration requirements.' },
    ],
    deliverables: ['Business name registration', 'Company registration', 'TPIN registration & retrieval', 'NHIMA membership registration', 'NAPSA registration consultation', 'ZPPA registration', 'Documentation preparation', 'Business information amendments'],
    institutions: [
      { name: 'PACRA', description: 'Patents and Companies Registration Agency', href: 'https://www.pacra.org.zm/', logo: 'https://www.pacra.org.zm/logo-alt.svg' },
      { name: 'ZRA', description: 'Zambia Revenue Authority', href: 'https://www.zra.org.zm/', logo: 'https://www.zra.org.zm/wp-content/uploads/2023/09/ZRA-logo-01.png' },
      { name: 'NAPSA', description: 'National Pension Scheme Authority', href: 'https://www.napsa.co.zm/', logo: 'https://www.napsa.co.zm/wp-content/uploads/2021/10/napsa-logo.png' },
      { name: 'NHIMA', description: 'National Health Insurance Management Authority', href: 'https://www.nhima.co.zm/', logo: 'https://www.nhima.co.zm/wp-content/uploads/2020/02/NHIMA-LOGO.png' },
      { name: 'ZPPA', description: 'Zambia Public Procurement Authority', href: 'https://www.zppa.org.zm/', logo: 'https://www.zppa.org.zm/image/company_logo?img_id=21783&t=1786528607861' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services[params.slug];
  return service
    ? { title: service.title, description: service.description }
    : { title: 'Service' };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug];

  if (!service) notFound();

  return (
    <div className="py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-7xl">
        <FadeIn immediate y={12}>
          <Link
            href="/#what-i-do"
            className="inline-flex items-center gap-1.5 mb-14 text-[10px] font-bold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors"
          >
            <span aria-hidden="true">&larr;</span> My expertise
          </Link>
        </FadeIn>

        <FadeIn immediate delay={0.05}>
          <header className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-t border-border">
            <div className="py-8 lg:pr-10 lg:border-r border-border">
              <p className="text-[11px] font-bold tracking-widest text-accent mb-6">
                {service.number} · {service.phase}
              </p>
              <p className="label">My expertise</p>
              <p className="mt-16 hidden lg:block text-[10px] font-bold uppercase tracking-[0.35em] text-muted [writing-mode:vertical-rl] rotate-180">
                {service.number}. {service.title}
              </p>
            </div>

            <div className="py-8 lg:pl-12 border-t lg:border-t-0 border-border">
              <p className="label mb-4">{service.number}. {service.title}</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] text-text">
                {service.title}
              </h1>
              <h2 className="mt-7 max-w-3xl font-display text-xl sm:text-2xl font-bold text-text/95 leading-relaxed">
                {service.headline}
              </h2>
              <p className="mt-6 max-w-3xl text-base sm:text-lg text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          </header>
        </FadeIn>

        <section className="mt-20">
          <FadeIn className="mb-8 flex items-end justify-between border-b border-border pb-5">
            <div>
              <p className="label mb-2">Capabilities</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">What I bring to the table</h2>
            </div>
          </FadeIn>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border">
            {service.capabilities.map((capability, index) => (
              <StaggerItem key={capability.title}>
                <article className="group h-full border-r border-b border-border p-6 sm:p-8 min-h-52 hover:bg-surface transition-colors">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-text">
                        {capability.title}
                      </h3>
                    </div>
                    <span className="text-accent text-xl transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
                  </div>
                  <p className="mt-5 max-w-xl text-sm text-muted leading-relaxed">
                    {capability.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <FadeIn className="mt-20">
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-y border-border">
              <div className="py-8 lg:pr-10 lg:border-r border-border">
                <p className="label mb-3">Scope</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">
                  {service.number === '04' ? 'What I can automate' : service.number === '05' ? 'What I can assist with' : 'What I can build'}
                </h2>
              </div>
              <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 py-4 lg:pl-12">
                {service.deliverables.map((deliverable, index) => (
                  <StaggerItem
                    key={deliverable}
                    y={10}
                    className="flex items-center gap-3 border-b border-border/70 py-4 text-sm text-text/85"
                  >
                    <span className="text-[9px] font-bold text-accent">{String(index + 1).padStart(2, '0')}</span>
                    {deliverable}
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </section>
        </FadeIn>

        {service.institutions && (
          <section className="mt-20">
            <FadeIn className="mb-8">
              <p className="label mb-2">Relevant institutions</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">Working with the right authorities</h2>
            </FadeIn>
            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-border">
              {service.institutions.map((institution) => (
                <StaggerItem key={institution.name}>
                  <a
                    href={institution.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group h-full border-r border-b border-border p-6 min-h-44 flex flex-col justify-between hover:bg-surface transition-colors"
                  >
                    <div className="h-16 w-16 rounded-lg border border-border bg-white p-2.5 flex items-center justify-center">
                      <img src={institution.logo} alt={`${institution.name} logo`} className="h-full w-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-text group-hover:text-accent transition-colors">{institution.name}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted">{institution.description}</p>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </section>
        )}

        <FadeIn className="mt-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-border pt-8">
          <p className="text-sm text-muted">Have a project or opportunity in mind?</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-accent text-[#090909] text-sm font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors"
          >
            Discuss a project <span aria-hidden="true">&rarr;</span>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
