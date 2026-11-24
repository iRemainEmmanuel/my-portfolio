import Link from 'next/link';
import { FadeIn, ScaleReveal, StaggerGroup, StaggerItem } from '@/components/motion/motion-primitives';

export const metadata = {
  title: 'About',
  description:
    'About Emmanuel Mwamba, Software Developer and Startup Founder based in Ndola, Zambia.',
};

const interests = [
  'Faith, God & Spiritual Growth',
  'Entrepreneurship & Building Businesses',
  'Innovation & New Ideas',
  'Technology & Its Possibilities',
  'African Development & Economic Progress',
  'Leadership, Personal Growth & Purpose',
  'Business, Finance & Economics',
  'People, Ideas & Different Perspectives',
  'Creativity & Problem-Solving',
  'Learning, Discovery & Understanding',
];

const eictaServices = [
  'Web Development',
  'Custom Software Solutions',
  'IT Support and Business Automation',
  'Business Registration and Compliance Assistance',
];

const languages = [
  { name: 'English', level: 'Native' },
  { name: 'Bemba', level: 'Native' },
  { name: 'ChiNyanja', level: 'Fluent' },
  { name: 'ChiTumbuka', level: 'Conversational' },
];

export default function AboutPage() {
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
          <header className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-t border-border">
            <div className="py-8 lg:pr-10 lg:border-r border-border">
              <p className="label mb-5">About</p>
              <div className="relative w-40 h-40 lg:w-48 lg:h-48 overflow-hidden rounded-full border border-border bg-surface">
                <img src="/images/profile.png" alt="Emmanuel Mwamba" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="py-8 lg:pl-12 border-t lg:border-t-0 border-border">
              <p className="label mb-4">Emmanuel Mwamba</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] text-text">
                Software Developer &amp; Startup Founder
              </h1>
              <p className="mt-7 max-w-3xl text-lg sm:text-xl font-bold text-text/95 leading-relaxed">
                Building practical technology solutions for people, businesses and organisations.
              </p>
              <p className="mt-6 max-w-3xl text-base sm:text-lg text-muted leading-relaxed">
                I&apos;m Emmanuel Mwamba, a Software Developer and Startup Founder based in Ndola, Zambia.
              </p>
            </div>
          </header>
        </FadeIn>

        <FadeIn className="mt-20">
          <section className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-t border-border">
            <div className="py-8 lg:pr-10 lg:border-r border-border">
              <p className="label mb-3">Introduction</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">Useful, accessible software</h2>
            </div>
            <div className="py-8 lg:pl-12 space-y-5 border-t lg:border-t-0 border-border">
              <p className="max-w-3xl text-base sm:text-lg text-muted leading-relaxed">
                I design and develop software products, web applications and digital solutions that address real problems. My work is driven by a simple idea: technology should be useful, accessible and built around the needs of the people and businesses it serves.
              </p>
              <p className="max-w-3xl text-base sm:text-lg text-muted leading-relaxed">
                I&apos;m particularly interested in building products that address practical challenges in Zambia and across Africa, while contributing to a stronger culture of technology and innovation.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-20">
          <section className="border-y border-border py-8 sm:py-10">
            <p className="label mb-4">My faith &amp; identity</p>
            <blockquote className="max-w-4xl font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-text">
              &ldquo;I am first and foremost a Christian, devoted to following Jesus Christ.&rdquo;
            </blockquote>
            <p className="mt-6 max-w-2xl text-base text-muted leading-relaxed">
              My professional pursuits and entrepreneurial ambitions are important parts of my journey, but they do not define my entire identity. My faith comes first.
            </p>
          </section>
        </FadeIn>

        <FadeIn className="mt-20">
          <section className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-t border-border">
            <div className="py-8 lg:pr-10 lg:border-r border-border">
              <p className="label mb-3">My journey</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">From curiosity to practice</h2>
            </div>
            <div className="py-8 lg:pl-12 border-t lg:border-t-0 border-border">
              <p className="max-w-3xl text-base sm:text-lg text-muted leading-relaxed">
                My journey into software development began with curiosity about technology and how things work. That curiosity grew into a passion for creating software, understanding problems and turning ideas into functional products.
              </p>
              <p className="mt-5 max-w-3xl text-base sm:text-lg text-muted leading-relaxed">
                Today, I apply that interest through independent product development, business-focused solutions and projects for organisations. Each project gives me an opportunity to deepen my engineering skills and better understand how technology can create value beyond the screen.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-20">
          <section className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-t border-border">
            <div className="py-8 lg:pr-10 lg:border-r border-border">
              <p className="label mb-3">How I approach my work</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">Start with the problem</h2>
            </div>
            <div className="py-8 lg:pl-12 border-t lg:border-t-0 border-border">
              <p className="max-w-3xl text-base sm:text-lg text-muted leading-relaxed">
                I believe good software starts with understanding the problem. Before choosing technologies or designing features, I consider who the solution is for, what they need and what the software should help them achieve.
              </p>
              <p className="mt-5 max-w-3xl text-base sm:text-lg text-muted leading-relaxed">
                I value practical thinking, thoughtful engineering, usability and continuous improvement. My goal isn&apos;t simply to build software that works, but to build solutions that are useful, reliable and worth using.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-20">
          <section className="border-y border-border py-8 sm:py-10">
            <p className="label mb-3">Entrepreneurship &amp; product development</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-6">Thinking beyond code</h2>
            <p className="max-w-4xl text-base sm:text-lg text-muted leading-relaxed">
              Being a founder has shaped how I think about software. I look beyond development to consider the people a product serves, the problem it addresses, its sustainability and its potential to grow.
            </p>
            <p className="mt-5 max-w-4xl text-base sm:text-lg text-muted leading-relaxed">
              This perspective influences the products I work on, including ShopLink Lite, a WhatsApp-powered storefront for small businesses, and ShopLink Market, a multivendor marketplace currently in development.
            </p>
          </section>
        </FadeIn>

        <FadeIn className="mt-20">
          <section className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-t border-border">
            <div className="py-8 lg:pr-10 lg:border-r border-border">
              <p className="label mb-3">Areas of interest</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">What keeps me curious</h2>
            </div>
            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 py-4 lg:pl-12">
              {interests.map((interest, index) => (
                <StaggerItem key={interest} y={10} className="flex items-start gap-3 border-b border-border/70 py-4 text-sm text-text/85">
                  <span className="text-[9px] font-bold text-accent mt-1">{String(index + 1).padStart(2, '0')}</span>
                  {interest}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </section>
        </FadeIn>

        <FadeIn className="mt-20">
          <section className="border border-border bg-surface p-8 sm:p-10">
            <p className="label mb-3">EICTA Technologies</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">Founder &amp; CEO</h2>
            <p className="mt-2 text-sm text-accent font-semibold">Founded on 23 April 2024 · Ndola, Zambia</p>
            <p className="mt-6 max-w-4xl text-base text-muted leading-relaxed">
              EICTA Technologies is a software development, IT and business solutions business based in Ndola, Zambia. I founded EICTA with a vision of helping businesses make better use of technology through practical software, digital solutions and business support services.
            </p>
            <p className="mt-6 text-sm font-semibold text-text">The business focuses on:</p>
            <StaggerGroup className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted">
              {eictaServices.map((service) => (
                <StaggerItem key={service} y={10} className="flex items-start gap-2">
                  <span className="text-accent">&bull;</span>
                  {service}
                </StaggerItem>
              ))}
            </StaggerGroup>
            <p className="mt-6 max-w-4xl text-base text-muted leading-relaxed">
              My long-term vision is to grow EICTA Technologies into a technology business that develops impactful digital products and delivers solutions that help businesses and organisations operate, adapt and grow.
            </p>
          </section>
        </FadeIn>

        {/* Languages section */}
        <FadeIn className="mt-20 border-y border-border py-8 sm:py-10">
          <section className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] border-t border-border">
            <div className="py-8 lg:pr-10 lg:border-r border-border">
              <p className="label mb-3">Languages</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">
                Languages spoken
              </h2>
            </div>
            <div className="py-8 lg:pl-12 space-y-5 border-t lg:border-t-0 border-border">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-start justify-between gap-3 border-b border-border/70 py-4">
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-text">
                      {lang.name}
                    </h3>
                  </div>
                  <span className="text-sm font-semibold text-accent uppercase tracking-wider whitespace-nowrap">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-20 border-t border-border pt-8">
          <section>
            <p className="label mb-3">Beyond the code</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-6">Building with purpose</h2>
            <p className="max-w-4xl text-base sm:text-lg text-muted leading-relaxed">
              I&apos;m interested in the wider conversations around faith, entrepreneurship, innovation, business development and the role technology can play in Africa&apos;s growth. I value learning, collaboration and connecting with people who are building meaningful things.
            </p>
            <p className="mt-5 max-w-4xl text-base sm:text-lg text-muted leading-relaxed">
              I believe the future belongs to people who don&apos;t just identify problems, but are willing to build solutions.
            </p>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
