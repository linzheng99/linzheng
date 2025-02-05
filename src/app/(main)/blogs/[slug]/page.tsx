import { type Metadata } from "next";

import { getBlogBySlug } from "@/sanity/queries/blog";

import BlogClient from "./client";

interface BlogPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `linzheng's - ${slug}`,
  };
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
