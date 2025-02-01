"use client";

import { format } from "date-fns";
import { CalendarRange } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { type Blog } from "@/sanity/types";

export default function BlogBentoGrid({ blogs }: { blogs: Blog[] }) {
  const router = useRouter();

  const items = blogs.map((blog) => ({
    title: blog.title,
    description: blog.description,
    header: <Skeleton url={blog.coverImage} />,
    iconText: format(blog.publishedAt, "yyyy-MM-dd"),
    slug: blog.slug,
  }));

  return (
    <BentoGrid className="mx-auto mb-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={<CalendarRange className="h-4 w-4" />}
          iconText={item.iconText}
          className="cursor-pointer"
          onClick={() => router.push(`/blogs/${item.slug}`)}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ url }: { url: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 relative">
    <Image src={url} alt="blog" fill className="object-cover rounded-xl" />
  </div>
);
