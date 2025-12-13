import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group border border-zinc-800 bg-zinc-900/50 p-6 rounded-lg hover:border-zinc-600 transition-colors duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className="text-xl font-bold mt-1 group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full border ${
          project.status === 'In Progress' 
            ? 'border-yellow-500/30 text-yellow-500 bg-yellow-500/10' 
            : 'border-green-500/30 text-green-500 bg-green-500/10'
        }`}>
          {project.status}
        </span>
      </div>
      
      <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.techStack.map((tech) => (
          <span 
            key={tech} 
            className="text-xs font-mono bg-zinc-800 text-zinc-300 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}