
import BlogBentoGrid from "@/features/blog/components/blog-bento-grid";
import BlogSign from "@/features/blog/components/blog-sign";
import { getBlogs } from "@/sanity/queries/blog";

export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <div className="mt-10">
      <BlogSign />
      <div className="mt-10">
        <BlogBentoGrid blogs={blogs} />
      </div>
    </div>
  );
}
