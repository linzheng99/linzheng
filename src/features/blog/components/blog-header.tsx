import { type Blog } from "@/sanity/types";

import BlogCard from "./blog-card";
import BlogCoverImage from "./blog-cover-image";

export default function BlogHeader({ blog }: { blog: Blog }) {
  return (
    <div className="flex flex-col gap-8 items-center w-full">
      <div className="w-full max-h-[400px]">
        <BlogCoverImage url={blog.coverImage} />
      </div>
      <div className="w-full mb-8">
        <BlogCard blog={blog} />
      </div>
    </div>
  )
}
