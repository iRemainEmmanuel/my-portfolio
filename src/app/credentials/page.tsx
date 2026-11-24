import Link from 'next/link';
import { FadeIn } from '@/components/motion/motion-primitives';

export const metadata = {
  title: 'Credentials',
  description:
    'Education and professional certifications of Emmanuel Mwamba, Software Developer and Startup Founder based in Ndola, Zambia.',
};

const education = [
  {
    institution: 'Zambia University College of Technology',
    qualification: 'Bachelor of Software Engineering',
    status: 'Currently Pursuing',
    date: 'Present',
    location: 'Ndola, Zambia',
    description: 'Pursuing a Bachelor of Software Engineering degree.',
  },
  {
    institution: "Mungwi Boys' Provincial STEM Secondary School",
    qualification: 'Secondary Education',
    status: 'Completed',
    date: '2021 – 2023',
    location: 'Mungwi, Zambia',
    description: 'Completed secondary education.',
  },
];

const certifications = [
  {
    name: 'AI Software Development',
    issuer: 'Northrise University',
    date: '20–24 June 2026 · Completed',
    location: 'Online',
    description:
      'Training in artificial intelligence and software development, covering machine learning fundamentals and AI-driven application development.',
  },
  {
    name: 'Full-Stack Web Development',
    issuer: 'Udemy',
    date: 'Started 2025 · In Progress',
    location: 'Online',
    description:
      'Comprehensive full-stack web development training covering frontend and backend technologies for building complete web applications.',
  },
  {
    name: 'Graphic Design',
    issuer: 'Udemy',
    date: 'Started 2025 · In Progress',
    location: 'Online',
    description:
      'Graphic design training using Adobe Photoshop, Adobe Illustrator and Adobe InDesign for visual communication and digital design.',
  },
  {
    name: 'Web Design and Creation with WordPress',
    issuer: 'Shumba Training Center',
    date: 'Started 2025 · In Progress',
    location: 'Online',
    description:
      'Web design and creation training using WordPress, covering website building, theme customization and content management.',
  },
  {
    name: 'Certificate in Theology',
    issuer: 'God of Covenant Bible Institute',
    date: '15 December 2025 · Completed',
    location: 'Online',
    description:
      'Theological studies training covering biblical foundations, Christian doctrine and ministry practice.',
  },
];

export default function CredentialsPage() {
  return (
    <div className="py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-5xl">
        <FadeIn immediate y={12}>
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 mb-14 text-[10px] font-bold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors"
          >
            <span aria-hidden="true">&larr;</span> Back to experience
          </Link>
        </FadeIn>

        <FadeIn immediate className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-20">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-text mb-2 leading-tight">
              Credentials
            </h1>
            <p className="label">Education &amp; certifications</p>
          </div>
        </FadeIn>

        {/* Education Section */}
        <FadeIn className="mb-24 border-b border-border pb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12">
            <div>
              <p className="label mb-3">Education</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">
                Academic background
              </h2>
            </div>
          </div>

          <div className="space-y-16">
            {education.map((edu, index) => (
              <div key={edu.institution} className="relative pl-12 sm:pl-20 mb-16 lg:mb-24">
                <div
                  className="absolute left-4 sm:left-[calc(50%-1px)] top-0 bottom-0 w-[1px] bg-[#1a1a1a]"
                  aria-hidden="true"
                />
                <div
                  className="absolute left-4 sm:left-[calc(50%-5px)] top-2 w-4 h-4 rounded-full bg-accent border-2 border-[#090909] z-10"
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <h3 className="font-display text-xl sm:text-xl font-bold text-text tracking-tight">
                      {edu.qualification}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent whitespace-nowrap">
                      {edu.status}
                    </span>
                  </div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-accent mb-2">
                    {edu.institution}
                  </h4>
                  <div className="flex flex-wrap gap-3 text-[10px] font-semibold uppercase tracking-wider text-muted mb-4">
                    <span>{edu.date}</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-sm text-text/90 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Certifications Section */}
        <FadeIn className="mb-8 border-b border-border pb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12">
            <div>
              <p className="label mb-3">Certifications &amp; Training</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">
                Professional certifications
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="border border-border rounded-lg bg-surface p-6 sm:p-8 hover:border-accent/50 transition-colors"
              >
                <h3 className="font-display text-lg sm:text-xl font-bold text-text mb-2">
                  {cert.name}
                </h3>
                <h4 className="font-display text-sm sm:text-base font-bold text-accent mb-3">
                  {cert.issuer}
                </h4>
                <div className="flex flex-wrap gap-3 text-[10px] font-semibold uppercase tracking-wider text-muted mb-4">
                  <span>{cert.date}</span>
                  <span>{cert.location}</span>
                </div>
                <p className="text-sm text-text/90 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}