import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/projects/project-card';
import { FadeIn, StaggerGroup, StaggerItem } from '@/components/motion/motion-primitives';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Work',
  description:
    'Selected work by Emmanuel Mwamba | products and projects including ShopLink Lite and ShopLink Market.',
};

export default function WorkPage() {
  return (
    <div className="py-24 sm:py-32 px-4">
      <div className="mx-auto max-w-7xl">
        <FadeIn immediate className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-18">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-text mb-2 leading-tight">
              Work
            </h1>
            <p className="label">Products &amp; projects</p>
          </div>
        </FadeIn>

        <FadeIn immediate delay={0.1}>
          <p className="text-lg text-muted leading-relaxed mb-16 max-w-xl">
            A curated selection of software products and projects I have built. Each entry links to
            project details including the problem, solution, key features, my contribution and current
            status.
          </p>
        </FadeIn>

        <StaggerGroup immediate delay={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        {projects.length === 0 && (
          <p className="text-center text-muted mt-24">
            No verified projects to showcase yet. Check back as new work is added.
          </p>
        )}
      </div>
    </div>
  );
}
