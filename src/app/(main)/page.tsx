
import { TextGenerateEffect } from "@/components/text-generate-effect";
import BlogBentoGrid from "@/features/blog/components/blog-bento-grid";
import UserCard from "@/features/user/components/user-card";
import { getBlogs } from "@/sanity/queries/blog";

export default async function Home() {
  const blogs = await getBlogs(6);
  const words = 'Little by little, every day.'
  const words1 = '每 天 进 步 一 点 点 .'
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <UserCard />
        <div className="flex flex-col items-center justify-center pb-20">
          <TextGenerateEffect duration={2} filter={false} words={words} />
          <TextGenerateEffect duration={2} filter={false} words={words1} delay={2} />
        </div>
      </div>
      <BlogBentoGrid blogs={blogs} />
    </div>
  );
}
