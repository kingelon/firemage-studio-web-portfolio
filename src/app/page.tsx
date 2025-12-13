import { PROJECTS } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto p-8 sm:p-20">
      {/* Header Section */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Vamsi <span className="text-zinc-500">/ Data Engineer</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl">
          Building high-performance data pipelines and intelligent systems.
          Focused on scalable architecture and evolving AI capabilities.
        </p>
      </section>

      {/* Projects Grid */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Active Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}