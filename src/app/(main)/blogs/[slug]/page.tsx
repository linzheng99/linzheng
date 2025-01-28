import { getBlogBySlug } from "@/sanity/queries/blog";

import BlogClient from "./client";

interface BlogPageProps {
  params: Promise<{
    slug: string
  }>
}


export default async function BlogSlugPage({ params }: BlogPageProps) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) {
    return <div>Blog not found</div>
  }

  return (
    <BlogClient blog={blog} />
  )
}
