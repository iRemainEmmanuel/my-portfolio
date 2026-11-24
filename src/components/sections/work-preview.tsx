'use client';

import Link from 'next/link';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { EDITORIAL_EASE } from '@/components/motion/motion-primitives';

export function WorkPreview() {
  const featured = projects.filter(
    (p) => p.status === 'Live' || p.status === 'In development',
  );

  return (
    <section className="py-24 border-y border-border/50 bg-surface/50 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EDITORIAL_EASE }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-14"
        >
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text mb-2 tracking-tight">
              Selected work
            </h2>
            <p className="label">Products &amp; projects</p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
          >
            View all<span aria-hidden="true"> &rarr;</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.12, ease: EDITORIAL_EASE }}
              whileHover={{ y: -4 }}
              className={index === 0 ? 'lg:col-span-8' : 'lg:col-span-4'}
            >
              <Link
                href={`/work/${project.id}`}
                className="group relative block h-full overflow-hidden border border-border bg-surface hover:border-accent/60 transition-colors min-h-[520px]"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 h-full w-full object-contain bg-[#131313]"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#131313]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/65 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="mb-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-accent">Project {String(index + 1).padStart(2, '0')}</span>
                    <span className="text-text/70">{project.status}</span>
                  </div>
                  <p className="label mb-2 text-text/60">{project.category}</p>
                  <h3
                    className={`font-display font-bold text-text group-hover:text-accent transition-colors ${
                      index === 0 ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'
                    }`}
                  >
                    {project.name}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm sm:text-base text-text/75 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-center text-muted mt-12">
            No verified projects to showcase yet.
          </p>
        )}
      </div>
    </section>
  );
}
