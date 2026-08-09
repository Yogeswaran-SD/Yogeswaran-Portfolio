import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-16 sm:py-20 px-4 max-w-7xl mx-auto"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 py-6 sm:py-10 text-center tracking-tight">
        My Projects
      </h1>
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-6 sm:gap-8 mt-6">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
