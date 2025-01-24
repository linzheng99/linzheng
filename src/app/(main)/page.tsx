import Link from "next/link";

import UserCard from "@/features/user/components/user-card";
import { getProjects } from "@/sanity/queries/project";

export default async function Home() {
  const projects = await getProjects()

  return (
    <div>
      <UserCard />
      <div>
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            {project.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
