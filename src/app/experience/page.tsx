import Link from 'next/link';
import { FadeIn } from '@/components/motion/motion-primitives';

export const metadata = {
  title: 'Experience',
  description:
    'Professional experience and recognition of Emmanuel Mwamba | Software Developer and Startup Founder based in Ndola, Zambia.',
};

interface ExperienceEntry {
  role: string;
  company: string;
  date: string;
  location: string;
  employmentType?: string;
  description: string;
  highlights?: string[];
  type: string;
}

const professionalExperiences: ExperienceEntry[] = [
  {
    role: 'Founder & CEO',
    company: 'EICTA Technologies',
    date: '23 April 2024.',
    location: 'Ndola, Zambia',
    description:
      'Founded and lead EICTA Technologies, a software development, IT and business solutions business based in Ndola, Zambia. Responsible for business direction, product development and delivering technology-driven solutions across web development, custom software, IT support, business automation and business registration and compliance assistance.',
    type: 'entrepreneurship',
  },
  {
    role: 'Frontend Developer',
    company: 'Kena Business',
    employmentType: 'Part-time',
    date: 'December 2025 – February 2026',
    location: 'Nigeria · Remote',
    description:
      'Contributed to the development of Kena, a business management and operations platform, as part of a distributed product development team.',
    highlights: [
      'Contributed to frontend development using React and Tailwind CSS.',
      'Translated Figma designs and product requirements into responsive, functional user interfaces.',
      'Used GitHub workflows, including feature branches and pull requests, to develop, review and submit frontend contributions.',
      'Collaborated with developers and product team members to implement assigned features and refine the platform through feedback.',
      'Participated in product discussions, development planning and team activities.',
      'Contributed to a SaaS product focused on helping businesses manage operations, customers, transactions and day-to-day workflows.',
    ],
    type: 'employment',
  },
  {
    role: 'Web Development Intern',
    company: 'Codveda Technologies',
    employmentType: 'Internship',
    date: 'September 2025 – October 2025',
    location: 'India · Remote',
    description:
      'Completed a remote web development internship focused on developing and maintaining web applications. Gained practical exposure to professional development workflows, implementation of web solutions and collaborative software development.',
    type: 'employment',
  },
];

const recognitions: ExperienceEntry[] = [
  {
    role: 'ZICTA ICT Innovation Programme',
    company: 'ZICTA',
    date: '2025',
    location: 'Zambia',
    description:
      'Shortlisted among the top 100 innovators from more than 500 applicants in the 2025 ZICTA ICT Innovation Programme, a national initiative supporting the development and advancement of innovative ICT solutions in Zambia.',
    type: 'recognition',
  },
  {
    role: 'Founder of the Year Awards',
    company: 'Founder of the Year Awards (FOYA)',
    date: '2025 · Southern Africa',
    location: 'Southern Africa',
    description:
      'Nominated for the Founder of the Year Awards, recognising entrepreneurial achievements and contributions to the African business ecosystem.',
    type: 'nomination',
  },
];

function ExperienceTimelineItem({
  exp,
  immediate = false,
  delay = 0,
}: {
  exp: ExperienceEntry;
  immediate?: boolean;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay} immediate={immediate}>
      <div className="relative pl-12 sm:pl-20 mb-16 lg:mb-24">
        {/* Timeline connector line */}
        <div
          className="absolute left-4 sm:left-[calc(50%-1px)] top-0 bottom-0 w-[1px] bg-[#1a1a1a]"
          aria-hidden="true"
        />

        {/* Timeline marker */}
        <div
          className="absolute left-4 sm:left-[calc(50%-5px)] top-2 w-4 h-4 rounded-full bg-accent border-2 border-[#090909] z-10"
          aria-hidden="true"
        />

        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <h3 className="font-display text-xl sm:text-xl font-bold text-text tracking-tight">
              {exp.role}
            </h3>
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent whitespace-nowrap">
              {exp.type}
            </span>
          </div>
          <h4 className="font-display text-base sm:text-lg font-bold text-accent mb-2">
            {exp.company}
          </h4>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted mb-4">
            {exp.employmentType && (
              <>
                <span className="border border-border px-2 py-0.5 text-text/90">
                  {exp.employmentType}
                </span>
                <span aria-hidden="true" className="text-border">&middot;</span>
              </>
            )}
            <span>{exp.date}</span>
            <span aria-hidden="true" className="text-border">&middot;</span>
            <span>{exp.location}</span>
          </div>
          <p className="text-sm text-text/90 leading-relaxed">
            {exp.description}
          </p>
          {exp.highlights && exp.highlights.length > 0 && (
            <div className="mt-5 pt-5 border-t border-border/60">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3">
                Key Responsibilities &amp; Contributions
              </p>
              <ul className="space-y-2.5 text-sm text-text/85 leading-relaxed">
                {exp.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-accent shrink-0" aria-hidden="true">
                      &bull;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export default function ExperiencePage() {
  return (
    <div className="py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-5xl">
        <FadeIn immediate className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-20">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-text mb-2 leading-tight">
              Experience
            </h1>
            <p className="label">Professional journey &amp; recognition</p>
          </div>
        </FadeIn>

        {/* Professional Experience Section */}
        <section className="mb-20 border-b border-border pb-4">
          <FadeIn immediate className="mb-12">
            <p className="label mb-3">Career</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">
              Professional Experience
            </h2>
          </FadeIn>

          <div className="space-y-16">
            {professionalExperiences.map((exp, index) => (
              <ExperienceTimelineItem
                key={`${exp.company}-${exp.role}`}
                exp={exp}
                immediate={index === 0}
                delay={index === 0 ? 0.08 : 0}
              />
            ))}
          </div>
        </section>

        {/* Recognition & Achievements Section */}
        <section>
          <FadeIn className="mb-12">
            <p className="label mb-3">Honours</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">
              Recognition &amp; Achievements
            </h2>
          </FadeIn>

          <div className="space-y-16">
            {recognitions.map((exp) => (
              <ExperienceTimelineItem
                key={`${exp.company}-${exp.role}`}
                exp={exp}
              />
            ))}
          </div>
        </section>

        {/* Credentials callout */}
        <FadeIn className="mt-20 border-y border-border py-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="label mb-2">Credentials</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text tracking-tight">
                Education &amp; Certifications
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted leading-relaxed">
                Academic background, technical training and professional certifications supporting my engineering and founder work.
              </p>
            </div>
            <Link
              href="/credentials"
              className="inline-flex shrink-0 items-center justify-center gap-3 px-7 py-4 bg-accent text-[#090909] text-sm font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors"
            >
              View credentials <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
