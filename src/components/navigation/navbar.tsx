'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, User, Briefcase, Award, Calendar, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { EDITORIAL_EASE } from '@/components/motion/motion-primitives';

const NAV_LINKS = [
  { name: 'About', href: '/about', icon: User },
  { name: 'Work', href: '/work', icon: Briefcase },
  { name: 'Experience', href: '/experience', icon: Award },
  { name: 'Events', href: '/events', icon: Calendar },
  { name: 'Contact', href: '/contact', icon: Phone },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const showFullName = !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (open && event.target && !(event.target as Element).closest('nav')) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md backface-hidden transition-colors duration-300',
        scrolled
          ? 'border-border/80 bg-background/95'
          : 'border-border/50 bg-background/80',
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="relative flex min-w-[13rem] items-center font-display font-bold text-text tracking-tight min-h-[2.25rem] sm:min-w-[15rem]"
            onClick={() => setOpen(false)}
            aria-label="Emmanuel Mwamba, Home"
          >
            <motion.span
              layout
              className="relative inline-flex h-9 w-[13rem] items-center overflow-hidden sm:w-[15rem]"
            >
              <motion.span
                initial={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                animate={
                  showFullName
                    ? { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }
                    : { opacity: 0, x: -18, scale: 0.94, filter: 'blur(4px)' }
                }
                transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
                className="absolute left-0 inline-flex items-baseline gap-1.5 whitespace-nowrap text-lg sm:text-xl md:text-xl"
              >
                <span className="text-text">Emmanuel</span>
                <span className="text-accent">Mwamba</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 0, scale: 1, filter: 'blur(0px)' }}
                animate={
                  showFullName
                    ? { opacity: 0, x: 18, scale: 0.94, filter: 'blur(4px)' }
                    : { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }
                }
                transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
                className="absolute left-0 text-3xl leading-none text-accent"
              >
                EM
              </motion.span>
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href)) ||
                (link.href === '/experience' && pathname.startsWith('/credentials'));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'relative py-1 text-xs font-semibold uppercase tracking-wider transition-colors hover:text-text',
                    isActive ? 'text-text font-semibold' : 'text-muted',
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      transition={{ duration: 0.3, ease: EDITORIAL_EASE }}
                      className="absolute inset-x-0 -bottom-1 h-[2px] bg-accent"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setOpen((o) => !o)}
              className="text-text hover:text-accent transition-colors p-1.5"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? (
                <X size={20} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <Menu size={20} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: EDITORIAL_EASE }}
            className="md:hidden overflow-hidden border-t border-border/50 bg-background"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
              {NAV_LINKS.map((link, index) => {
                const Icon = link.icon;
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href)) ||
                  (link.href === '/experience' && pathname.startsWith('/credentials'));
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.04,
                      ease: EDITORIAL_EASE,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'flex items-center gap-3 px-2 py-4 text-sm font-semibold uppercase tracking-wider transition-colors hover:text-text hover:bg-[#141414] rounded-lg',
                        isActive ? 'text-accent font-semibold' : 'text-muted',
                      )}
                    >
                      <Icon size={18} strokeWidth={2} />
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
