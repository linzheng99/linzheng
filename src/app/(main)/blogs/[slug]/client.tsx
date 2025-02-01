'use client'



import DottedSeparator from "@/components/dotted-separator"
import BlogContent from "@/features/blog/components/blog-content"
import BlogFooter from "@/features/blog/components/blog-footer"
import BlogHeader from "@/features/blog/components/blog-header"
import { type Blog } from "@/sanity/types"

export default function BlogSlugClient({ blog }: { blog: Blog }) {
  return (
    <div className="mt-10 mx-auto relative">
      <BlogHeader blog={blog} />
      <DottedSeparator className="my-6" color="#9cA3AF" />
      <BlogContent content={blog.content} />
      <DottedSeparator className="" color="#9cA3AF" />
      <BlogFooter />
    </div>
  )
}
