import Link from 'next/link';
import { MapPin, Phone, Mail, Github, Linkedin, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FadeIn } from '@/components/motion/motion-primitives';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Experience', href: '/experience' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

const expertiseLinks = [
  { name: 'Software Development', href: '/services/software-development' },
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'IT Solutions', href: '/services/it-solutions' },
  { name: 'Business Automation', href: '/services/business-automation' },
  { name: 'Business Registration & Compliance', href: '/services/business-registration-compliance' },
];

const contactItems = [
  {
    icon: <MapPin size={16} strokeWidth={1.5} />,
    label: 'Ndola, Zambia',
    href: undefined,
  },
  {
    icon: <Phone size={16} strokeWidth={1.5} />,
    label: '+260966271989',
    href: 'tel:+260966271989',
  },
  {
    icon: <Mail size={16} strokeWidth={1.5} />,
    label: 'Shoot Me An Email',
    href: 'mailto:mwambaemmanuel005@gmail.com',
  },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://web.facebook.com/iRemainEmmanuel/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.438H7.078v-3.489h3.047V9.413c0-3.024 1.792-4.695 4.533-4.695 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.931-1.956 1.887v2.261h3.328l-.532 3.489h-2.796V24C19.612 23.094 24 18.099 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/iRemainEmmanuel',
    icon: <Github size={16} strokeWidth={1.5} />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/emmanuel-mwamba-677186301/',
    icon: <Linkedin size={16} strokeWidth={1.5} />,
  },
  {
    name: 'X',
    href: 'https://x.com/iRemainEmmanuel',
    icon: <X size={16} strokeWidth={1.5} />,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background">
      <FadeIn y={16} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block font-display text-xl font-bold text-text hover:text-accent transition-colors tracking-tight"
            >
              Emmanuel
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Software Developer | Startup Founder | Building Practical Technology Solutions
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-text transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted">
              My Expertise
            </h4>
            <ul className="space-y-2">
              {expertiseLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-accent transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              {contactItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex shrink-0 text-accent">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-muted hover:text-text transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm text-muted">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted">
            © {currentYear} Emmanuel. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-text/90">
            <span className="hover:text-accent transition-colors group cursor-pointer">
              #GodFearing
            </span>
            <span className="hover:text-accent transition-colors group cursor-pointer">
              #Developer
            </span>
            <span className="hover:text-accent transition-colors group cursor-pointer">
              #Innovator
            </span>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'p-2 rounded hover:bg-[#141414] transition-colors',
                  'text-text/90 hover:text-text',
                )}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
