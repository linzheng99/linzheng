import { type MetadataRoute } from 'next'

import { getBlogs } from '@/sanity/queries/blog'
const baseUrl = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_URL : "http://localhost:3000"

export default async function sitemap() {
  const staticMap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/share`,
      lastModified: new Date(),
    },
  ] satisfies MetadataRoute.Sitemap

  const blogs = await getBlogs()

  const dynamicMap = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.publishedAt,
  })) satisfies MetadataRoute.Sitemap

  return [...staticMap, ...dynamicMap]
}

export const runtime = 'edge'
export const revalidate = 3600
