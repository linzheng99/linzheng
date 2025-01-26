import { format } from "date-fns";
import { CalendarRange, ScrollText } from "lucide-react";

import { type Blog } from "@/sanity/types";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold text-center">{blog.title}</h1>
      <p className="text-md text-gray-300 line-clamp-3">{blog.description}</p>
      <div className="flex items-center ml-auto gap-4">
        <p className="text-sm text-gray-300 flex items-center gap-1">
          <ScrollText className="w-4 h-4" />
          {blog.category}
        </p>
        <p className="text-sm text-gray-300 flex items-center gap-1">
          <CalendarRange className="w-4 h-4" />
          {format(new Date(blog.publishedAt), 'yyyy-MM-dd')}
        </p>
      </div>
    </div>
  )
}
