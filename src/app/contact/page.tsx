import Link from 'next/link';
import { Github, Linkedin, X } from 'lucide-react';
import { FadeIn } from '@/components/motion/motion-primitives';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Emmanuel Mwamba | Software Developer | Founder.',
};

export default function ContactPage() {
  const contacts = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.438H7.078v-3.489h3.047V9.413c0-3.024 1.792-4.695 4.533-4.695 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.931-1.956 1.887v2.261h3.328l-.532 3.489h-2.796V24C19.612 23.094 24 18.099 24 12.073z" />
        </svg>
      ),
      label: 'Facebook',
      href: 'https://web.facebook.com/iRemainEmmanuel/',
    },
    {
      icon: <Github size={18} strokeWidth={1.5} />,
      label: 'GitHub',
      href: 'https://github.com/iRemainEmmanuel',
    },
    {
      icon: <Linkedin size={18} strokeWidth={1.5} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/emmanuel-mwamba-677186301/',
    },
    {
      icon: <X size={18} strokeWidth={1.5} />,
      label: 'X',
      href: 'https://x.com/iRemainEmmanuel',
    },
  ];

  return (
    <div className="py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-left mb-16">
          <FadeIn immediate y={12}>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors"
            >
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </FadeIn>
        </div>

        <FadeIn immediate delay={0.05}>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-text mb-6 leading-tight">
            Have a project, idea or opportunity in mind?
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-16 mx-auto">
            Collaborations, business enquiries and professional connections.
          </p>
        </FadeIn>

        <FadeIn immediate delay={0.14}>
          <form
            action="#"
            method="post"
            className="space-y-6"
            noValidate
          >
            <div>
              <label htmlFor="name" className="label block mb-2 text-left">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 bg-surface border border-border rounded-md text-text focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="label block mb-2 text-left">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-surface border border-border rounded-md text-text focus:outline-none focus:border-accent transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="label block mb-2 text-left">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-surface border border-border rounded-md text-text focus:outline-none focus:border-accent transition-colors"
                placeholder="Tell me about your project or opportunity"
              />
            </div>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-[#090909] font-semibold rounded-md text-sm uppercase tracking-wider hover:bg-accent-hover transition-colors"
              >
                Send message
              </button>
            </div>
          </form>
        </FadeIn>

        <FadeIn immediate delay={0.2} className="mt-20">
          <p className="label mb-5">Connect online</p>
          <div className="flex items-center justify-center gap-3">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.label}
                title={contact.label}
                className="flex h-12 w-12 items-center justify-center border-y border-border text-muted hover:border-accent hover:text-accent transition-colors"
              >
                {contact.icon}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
