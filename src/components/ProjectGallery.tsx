"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const ProjectGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="relative group w-full h-[370px] overflow-hidden rounded-xl shadow-lg"
        >
          {/* Imagen de fondo */}
          <Image
            src={project.images[0]}
            alt={project.name}
            fill
            className="object-cover transition-all duration-500 group-hover:blur-sm"
          />

          {/* Degradado oscuro inferior solo en móviles */}
          <div className="md:hidden absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/2 to-transparent" />

          {/* Texto para pantallas grandes (hover) */}
          <div className="hidden md:flex absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center flex-col">
            <span className="text-black text-center text-2xl font-semibold">
              {project.name}
            </span>
            <span className="text-black text-center text-lg font-medium">
              {project.type}
            </span>
          </div>

          {/* Texto fijo en móviles */}
          <div className="md:hidden absolute bottom-4 left-4 right-4 z-20">
            <span className="block text-white text-lg font-semibold">
              {project.name}
            </span>
            <span className="block text-white text-sm font-medium">
              {project.type}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectGallery;
