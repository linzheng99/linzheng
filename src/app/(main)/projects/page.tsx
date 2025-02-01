import ProjectCard from "@/features/project/components/project-card";
import ProjectSign from "@/features/project/components/project-sign";
import { getProjects } from "@/sanity/queries/project";

export default async function ProjectPage() {
  const projects = await getProjects();

  return (
    <div className="mt-10 w-full h-full">
      <ProjectSign />
      <div className="mt-10 flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  )
};

