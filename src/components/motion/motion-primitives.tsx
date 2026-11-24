'use client';

import React from 'react';
import { motion, MotionConfig, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export const EDITORIAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-accent pointer-events-none"
      aria-hidden="true"
    />
  );
}

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      {children}
    </MotionConfig>
  );
}

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  immediate?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 20,
  x = 0,
  immediate = false,
}: FadeInProps) {
  const target = { opacity: 1, y: 0, x: 0 };

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      animate={immediate ? target : undefined}
      whileInView={immediate ? undefined : target}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration, delay, ease: EDITORIAL_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScaleRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  immediate?: boolean;
}

export function ScaleReveal({
  children,
  className,
  delay = 0,
  duration = 0.65,
  immediate = false,
}: ScaleRevealProps) {
  const target = { opacity: 1, scale: 1 };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={immediate ? target : undefined}
      whileInView={immediate ? undefined : target}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration, delay, ease: EDITORIAL_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  immediate?: boolean;
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  immediate = false,
}: StaggerGroupProps) {
  return (
    <motion.div
      initial="hidden"
      animate={immediate ? 'visible' : undefined}
      whileInView={immediate ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.08 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  y?: number;
}

export function StaggerItem({ children, className, y = 18 }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: EDITORIAL_EASE },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
