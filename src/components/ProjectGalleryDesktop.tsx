"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const ProjectGalleryDesktop: React.FC = () => {
  // función para decidir si un proyecto es horizontal
  const getSpan = (index: number) => {
    const horizontalIndexes = [2, 4, 6]; // puedes modificar el patrón aquí
    const columnsPerRow = 4;
    const colRemaining = columnsPerRow - (index % columnsPerRow);
    const canBeHorizontal = colRemaining >= 1;

    if (horizontalIndexes.includes(index) && canBeHorizontal) {
      return "col-span-2 row-span-1";
    }

    return "col-span-1 row-span-1";
  };

  // calcula el total de columnas ocupadas
  const totalColsUsed = projects.reduce((acc, _, index) => {
    const span = getSpan(index);
    return acc + (span.includes("col-span-2") ? 2 : 1);
  }, 0);

  const remainder = totalColsUsed % 4;
  const placeholdersNeeded = remainder === 0 ? 0 : 4 - remainder;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[420px] md:gap-8 gap-y-5 py-4">
      {projects.map((project, index) => {
        const classNames = getSpan(index);

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

      {/* Placeholders invisibles si se necesita para completar la última fila */}
      {Array.from({ length: placeholdersNeeded }).map((_, i) => (
        <div key={`placeholder-${i}`} className="invisible col-span-1" />
      ))}
    </div>
  );
};

export default ProjectGalleryDesktop;
