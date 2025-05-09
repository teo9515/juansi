"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const ProjectGalleryMobileTablet: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-0 sm:gap-6 py-4 ">
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col overflow-hidden">
          <Link
            href={`/projects/${project.id}`}
            className="relative block w-full aspect-square"
          >
            <Image
              src={project.images[0]}
              alt={project.name}
              fill
              className="object-cover transition-all duration-500 filter saturate-80"
            />
          </Link>
          <div className="py-1">
            <h3 className="font-medium text-lg tracking-widest">
              {project.name}
            </h3>
            <p className="text-sm text-neutral-600 tracking-widest ">
              {project.type}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGalleryMobileTablet;
