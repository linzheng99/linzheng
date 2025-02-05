import { type Metadata } from "next";

import BlogBentoGrid from "@/features/blog/components/blog-bento-grid";
import BlogSign from "@/features/blog/components/blog-sign";
import { getBlogs } from "@/sanity/queries/blog";

export const metadata: Metadata = {
  title: "linzheng's - blogs",
  description: 'This is the blogs page',
};

export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <div className="mt-10 min-h-[100dvh]">
      <BlogSign />
      <div className="mt-10">
        <BlogBentoGrid blogs={blogs} />
      </div>
    </div>
  );
}
