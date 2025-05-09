"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const ProjectGalleryDesktop: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[420px] xl:auto-rows-[480px] 2xl:auto-rows-[520px] md:gap-8 xl:gap-x-16 gap-y-5 py-4">
      {projects.map((project, index) => {
        let classNames = "col-span-1 row-span-1";

        // Primera fila: 2 verticales, 1 horizontal (ocupando 2 columnas)
        if (index === 0 || index === 1) {
          classNames = "col-span-1 row-span-1"; // Verticales
        } else if (index === 2) {
          classNames = "col-span-2 row-span-1"; // Horizontal
        }

        // Segunda fila: 4 verticales
        else if (index >= 3 && index <= 6) {
          classNames = "col-span-1 row-span-1"; // Verticales
        }

        // Tercera fila: 1 horizontal (ocupando 2 columnas), 2 verticales
        else if (index === 7) {
          classNames = "col-span-2 row-span-1"; // Horizontal
        } else if (index === 8 || index === 9) {
          classNames = "col-span-1 row-span-1"; // Verticales
        }

        // Cuarta fila: 4 verticales
        else if (index >= 10 && index <= 13) {
          classNames = "col-span-1 row-span-1"; // Verticales
        }

        return (
          <div key={project.id} className={`${classNames} group flex flex-col`}>
            <Link
              href={`/projects/${project.id}`}
              className="relative block overflow-hidden shadow-lg w-full h-full"
            >
              <Image
                src={project.images[0]}
                alt={project.name}
                fill
                className="object-cover transition-all duration-1000 filter saturate-45 group-hover:saturate-100"
              />
            </Link>

            {/* Texto que aparece en hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-1.5 px-1">
              <h3 className=" font-medium text-sm tracking-widest">
                {project.name}
              </h3>
              <p className="text-sm text-neutral-600 tracking-widest">
                {project.type}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectGalleryDesktop;
