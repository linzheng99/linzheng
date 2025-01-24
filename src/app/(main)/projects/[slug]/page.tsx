import { getProjectBySlug } from "@/sanity/queries/project";

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  console.log(slug)
  const project = await getProjectBySlug(slug)
  console.log(project)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  )
}
