import { CalendarRange, ScanSearch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { type Project } from "@/sanity/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, startDate, endDate, description, url, image } = project;
  return (
    <div className="p-6 w-full sm:max-w-[90%] lg:max-w-[80%] backdrop-blur-sm flex flex-col sm:flex-row gap-6 group rounded-xl hover:bg-white/5 transition-colors">
      <div className="shrink-0 relative w-full sm:w-[220px] h-[220px] rounded-xl overflow-hidden">
        <Image
          src={image || '/default-bg.png'}
          alt={name}
          fill
          className="object-cover transition-all duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 220px"
        />
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-center sm:text-left">{name}</h1>

        <p className="text-sm text-gray-300 text-center sm:text-left line-clamp-3">
          {description}
        </p>

        <div className="mt-auto space-y-2">
          {startDate && endDate && (
            <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-400">
              <CalendarRange className="shrink-0 size-4" />
              <span>{startDate} ~ {endDate}</span>
            </div>
          )}

          {url && (
            <div className="flex items-center justify-center sm:justify-start gap-2 group/link">
              <ScanSearch className="shrink-0 size-4 text-lime-400 group-hover/link:text-lime-300" />
              <Link
                href={url}
                target="_blank"
                className="text-lime-400 group-hover/link:text-lime-300 transition-colors truncate max-w-[90%]"
                title={url}
              >
                {url}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
