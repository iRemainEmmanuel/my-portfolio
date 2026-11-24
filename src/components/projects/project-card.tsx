import Link from 'next/link';
import { Project } from '@/data/projects';
import { cn } from '@/lib/utils';

const statusStyles: Record<Project['status'], string> = {
  'Live': 'text-accent border-accent/20 bg-accent/5',
  'In development': 'text-muted border-[#333333]/40',
  'Completed': 'text-muted border-[#333333]/40',
};

interface ProjectCardProps {
  key?: React.Key;
  project: Project;
  variant?: 'default' | 'featured';
  index?: number;
}

export function ProjectCard({ project, variant = 'default', index }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.id}`}
      className="group block"
    >
      <article
        className={cn(
          'bg-surface border border-border rounded-lg overflow-hidden group',
          'group hover:border-accent/50 hover:bg-[#131313] transition-all duration-500 ease-out',
          variant === 'featured' ? 'p-6 sm:p-8' : 'p-8',
        )}
      >
        {variant === 'featured' && typeof index === 'number' && (
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
              Selected {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted">
              {project.category}
            </span>
          </div>
        )}
        <div className={cn('relative mb-5', variant === 'featured' ? 'aspect-[16/10]' : 'aspect-[4/3]')}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-contain bg-[#131313]"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full bg-[#131313] flex items-center justify-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                Image
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span
            className={cn(
              'text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded border',
              statusStyles[project.status],
            )}
          >
            {project.status}
          </span>
        </div>
        <h3 className="font-display text-xl font-bold text-text mb-2 tracking-tight group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <p className="text-sm sm:text-base text-muted leading-relaxed mb-8">
          {project.description}
        </p>
        <div className="pt-6 border-t border-border/50">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">
              {project.category}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
              Project Details &rarr;
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
