'use client'

import BlogContent from "@/features/blog/components/blog-content"
import BlogHeader from "@/features/blog/components/blog-header"
import { type Blog } from "@/sanity/types"

export default function BlogClient({ blog }: { blog: Blog }) {
  return (
    <div className="mt-10 max-w-7xl mx-auto">
      <BlogHeader blog={blog} />
      <BlogContent content={blog.content} />
    </div>
  )
}
