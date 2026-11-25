'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { EDITORIAL_EASE } from '@/components/motion/motion-primitives';
import {
  SERVICE_PRESETS,
  buildWhatsAppUrl,
} from '@/lib/contact-intents';

const SERVICE_OPTIONS = Object.values(SERVICE_PRESETS);

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.46 0 .1 5.36.1 11.96c0 2.1.55 4.16 1.6 5.97L0 24l6.24-1.64a11.93 11.93 0 005.82 1.48h.01c6.6 0 11.96-5.36 11.96-11.96 0-3.2-1.25-6.2-3.51-8.4zM12.07 21.82h-.01a9.9 9.9 0 01-5.05-1.38l-.36-.22-3.7.97.99-3.61-.24-.37a9.89 9.89 0 01-1.52-5.25c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 012.9 7.02c0 5.47-4.46 9.85-9.94 9.85zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
  </svg>
);

export function ContactForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service') ?? '';
  const containerRef = useRef<HTMLDivElement>(null);

  const initialServicePreset = useMemo(() => {
    if (serviceParam && SERVICE_PRESETS[serviceParam]) {
      return SERVICE_PRESETS[serviceParam];
    }
    return null;
  }, [serviceParam]);

  const [selectedService, setSelectedService] = useState<string>(
    initialServicePreset?.key ?? '',
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [subject, setSubject] = useState(initialServicePreset?.subject ?? '');
  const [message, setMessage] = useState(initialServicePreset?.message ?? '');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [sentDetails, setSentDetails] = useState<{
    name: string;
    email: string;
    whatsapp: string;
    subject: string;
    whatsappUrl: string;
  } | null>(null);

  useEffect(() => {
    if (initialServicePreset) {
      setSelectedService(initialServicePreset.key);
      setSubject(initialServicePreset.subject);
      setMessage(initialServicePreset.message);
    } else {
      setSelectedService('');
      setSubject('');
      setMessage('');
    }
  }, [initialServicePreset]);

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    if (!value) {
      setSubject('');
      setMessage('');
    }
  };

  const whatsappUrl = useMemo(() => {
    const parts: string[] = [];
    if (name.trim()) {
      parts.push(`Name: ${name.trim()}`);
    }
    if (subject.trim()) {
      parts.push(`Topic: ${subject.trim()}`);
    }
    const body = message.trim();
    if (body && parts.length > 0) {
      return buildWhatsAppUrl(`${body}\n\n${parts.join('\n')}`);
    }
    if (body) {
      return buildWhatsAppUrl(body);
    }
    if (parts.length > 0) {
      return buildWhatsAppUrl(parts.join('\n'));
    }
    return buildWhatsAppUrl();
  }, [name, subject, message]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in your name, email and message, or reach out via WhatsApp.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');
    const submittedName = name.trim();
    const submittedEmail = email.trim();
    const submittedWhatsapp = whatsapp.trim();
    const submittedSubject = subject.trim() || 'Website Enquiry';
    const submittedService =
      selectedService && SERVICE_PRESETS[selectedService]
        ? SERVICE_PRESETS[selectedService].label
        : '';
    const submittedWhatsAppUrl = whatsappUrl;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: submittedName,
          email: submittedEmail,
          whatsapp: submittedWhatsapp,
          service: submittedService,
          subject: submittedSubject,
          message: message.trim(),
          company,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as { error?: string };

      if (response.ok) {
        setSentDetails({
          name: submittedName,
          email: submittedEmail,
          whatsapp: submittedWhatsapp,
          subject: submittedSubject,
          whatsappUrl: submittedWhatsAppUrl,
        });
        setStatus('success');
        setName('');
        setEmail('');
        setWhatsapp('');
        setSubject('');
        setMessage('');
        setSelectedService('');
        setCompany('');
        containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        setErrorMessage(
          data.error || 'Unable to send your message right now. Please try again or reach out via WhatsApp.',
        );
        setStatus('error');
      }
    } catch {
      setErrorMessage('Unable to send your message right now. Please try again or reach out via WhatsApp.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setSentDetails(null);
  };

  const activeContextLabel =
    initialServicePreset && selectedService === initialServicePreset.key
      ? initialServicePreset.label
      : null;

  return (
    <div ref={containerRef} className="text-left">
      <AnimatePresence mode="wait">
        {status === 'success' && sentDetails ? (
          <motion.div
            key="contact-success"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
            className="border border-accent/40 bg-surface rounded-lg p-8 sm:p-10 text-center"
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-accent/15 text-accent">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-3">
              Message Sent
            </p>

            <h1 className="font-display text-3xl sm:text-4xl font-bold text-text tracking-tight">
              Thank you, {sentDetails.name}.
            </h1>

            <p className="mt-4 max-w-md mx-auto text-sm sm:text-base text-muted leading-relaxed">
              Your message regarding <span className="text-text font-medium">{sentDetails.subject}</span> has been delivered. I will reply to{' '}
              <span className="text-text font-medium">{sentDetails.email}</span>
              {sentDetails.whatsapp ? (
                <>
                  {' '}or WhatsApp you at <span className="text-text font-medium">{sentDetails.whatsapp}</span>
                </>
              ) : null}{' '}
              shortly.
            </p>

            <div className="mt-8 pt-6 border-t border-border/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-accent text-[#090909] font-bold rounded-md text-xs uppercase tracking-wider hover:bg-accent-hover transition-colors"
              >
                Send another message
              </button>
              <a
                href={sentDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-border bg-background text-text font-bold rounded-md text-xs uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
              >
                <WhatsAppIcon size={15} />
                <span>Follow up on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="contact-form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: EDITORIAL_EASE }}
            className="space-y-6"
          >
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-text mb-6 leading-tight">
                Have a project, idea or opportunity in mind?
              </h1>
              <p className="text-lg text-muted leading-relaxed mx-auto">
                Collaborations, business enquiries and professional connections. Send an email below or continue directly on WhatsApp.
              </p>
            </div>

            {activeContextLabel && (
              <div className="flex flex-wrap items-center justify-between gap-3 border border-accent/30 bg-accent/5 px-4 py-3 rounded-md">
                <p className="text-xs text-text/90">
                  <span className="font-bold uppercase tracking-widest text-accent mr-2">Prefilled for:</span>
                  <span>{activeContextLabel}</span>
                </p>
                <button
                  type="button"
                  onClick={() => handleServiceChange('')}
                  className="text-[10px] font-bold uppercase tracking-widest text-muted hover:text-text transition-colors"
                >
                  Clear
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Hidden honeypot field to block automated spam */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="service" className="label block mb-2 text-left">
                  Service or area of interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={selectedService}
                  onChange={(e) => handleServiceChange(e.target.value)}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-md text-text focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">General enquiry / collaboration</option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option.key} value={option.key}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="label block mb-2 text-left">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
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
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-md text-text focus:outline-none focus:border-accent transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="whatsapp" className="label block mb-2 text-left">
                    WhatsApp Number <span className="text-muted/70 normal-case font-normal">(Optional)</span>
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-md text-text focus:outline-none focus:border-accent transition-colors"
                    placeholder="+260 9XX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="label block mb-2 text-left">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-md text-text focus:outline-none focus:border-accent transition-colors"
                    placeholder="What is this regarding?"
                  />
                </div>
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
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-md text-text focus:outline-none focus:border-accent transition-colors"
                  placeholder="Tell me about your project or opportunity"
                />
              </div>

              {status === 'error' && (
                <p role="alert" className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-md px-4 py-3">
                  {errorMessage || 'Please fill in your name, email and message, or reach out via WhatsApp.'}
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex flex-1 items-center justify-center gap-2 px-7 py-3.5 bg-accent text-[#090909] font-bold rounded-md text-xs sm:text-sm uppercase tracking-wider hover:bg-accent-hover transition-colors disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send via Email'}
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2.5 px-7 py-3.5 border border-border bg-surface text-text font-bold rounded-md text-xs sm:text-sm uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
                >
                  <WhatsAppIcon size={16} />
                  <span>Send via WhatsApp</span>
                </a>
              </div>

              <p className="text-center text-xs text-muted">
                Prefer WhatsApp? Clicking <strong className="text-text/80 font-medium">Send via WhatsApp</strong> opens a chat directly.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
