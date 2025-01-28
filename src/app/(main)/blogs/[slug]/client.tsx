'use client'


import { Undo2 } from "lucide-react"
import Link from "next/link"

import DottedSeparator from "@/components/dotted-separator"
import BlogContent from "@/features/blog/components/blog-content"
import BlogFooter from "@/features/blog/components/blog-footer"
import BlogHeader from "@/features/blog/components/blog-header"
import { type Blog } from "@/sanity/types"

export default function BlogSlugClient({ blog }: { blog: Blog }) {
  return (
    <div className="mt-10 mx-auto relative">
      <Link href="/blogs" className="absolute top-[350px] left-0 w-10 h-10 bg-white/5 rounded-full border border-white/15 hover:border-white/25 transition-colors duration-300 items-center justify-center cursor-pointer hidden sm:flex">
        <Undo2 className="w-4 h-4" />
      </Link>
      <BlogHeader blog={blog} />
      <DottedSeparator className="my-6" color="#9cA3AF" />
      <BlogContent content={blog.content} />
      <DottedSeparator className="" color="#9cA3AF" />
      <BlogFooter />
    </div>
  )
}
