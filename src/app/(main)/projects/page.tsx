import { type Metadata } from "next";

import ProjectCard from "@/features/project/components/project-card";
import ProjectSign from "@/features/project/components/project-sign";
import { getProjects } from "@/sanity/queries/project";

export const metadata: Metadata = {
  title: "linzheng's - projects",
  description: 'This is the projects page',
};

export default async function ProjectPage() {
  const projects = await getProjects();

  return (
    <div className="mt-10 w-full h-full">
      <ProjectSign />
      <div className="my-10 flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  )
};

