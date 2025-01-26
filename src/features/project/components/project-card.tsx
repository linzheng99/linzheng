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
    <div className="p-4 sm:w-[70%] backdrop-blur-sm flex flex-col sm:flex-row gap-4 group rounded-xl">
      <div className="flex justify-center items-center">
        <Image
          src={image || '/default-bg.png'}
          alt={name}
          width={200}
          height={200}
          className="object-cover aspect-square rounded-xl group-hover:scale-110 transition-all duration-300 group-hover:rotate-3"
        />
      </div>
      <div className="flex flex-col items-center sm:items-start gap-2">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-sm text-gray-300">{description}</p>
        <div className="flex flex-col items-center gap-2 mt-auto sm:ml-auto">
          {
            startDate && endDate && (
              <span className="text-sm text-gray-300 flex items-center gap-2 sm:ml-auto">
                <CalendarRange className="size-4 text-gray-300" />
                {startDate} ~ {endDate}
              </span>
            )
          }
          {url && (
            <div className="flex items-center gap-2 sm:ml-auto">
              <ScanSearch className="size-4 text-lime-300" />
              <Link href={url} target="_blank" className="text-lime-300 hover:underline">{url}</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
