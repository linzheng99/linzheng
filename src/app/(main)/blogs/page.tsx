import Link from "next/link";

import { getBlogs } from "@/sanity/queries/blog";

export default async function BlogPage() {
  const blogs = await getBlogs()
  return <div>{blogs.map((blog) => <Link key={blog.slug} href={`/blogs/${blog.slug}`}>{blog.title}</Link>)}</div>;
}

