import FadeInAnimation from '@/components/FadeInAnimation';
import ProjectCard from '@/components/projects/ProjectCard';
import { PROJECTS } from '@/lib/constants';

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <FadeInAnimation>
        <section className="py-12">
          <h1 className="text-6xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-xl text-gray-400">I build crypto and AI products for real estate.</p>
        </section>
      </FadeInAnimation>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <FadeInAnimation key={project.slug} delay={0.2 * (index + 1)}>
            <ProjectCard {...project} />
          </FadeInAnimation>
        ))}
      </div>
    </div>
  );
}
