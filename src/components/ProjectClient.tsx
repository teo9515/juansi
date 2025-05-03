"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

type Project = {
  id: string;
  name: string;
  type: string;
  description: string;
  images: string[];
};

type Props = {
  project: Project;
};

export default function ProjectClient({ project }: Props) {
  const [current, setCurrent] = useState(0);
  const totalImages = project.images.length;

  const nextImage = () => setCurrent((prev) => (prev + 1) % totalImages);
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + totalImages) % totalImages);

  return (
    <main className="min-h-screen w-full px-6 py-10 flex flex-col gap-12 items-center justify-center">
      {/* Botón volver */}
      <div className="w-full max-w-6xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition-all text-sm uppercase tracking-widest"
        >
          <FaArrowLeft className="w-4 h-4" />
          Volver
        </Link>
      </div>

      {/* Contenido */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full items-center">
        {/* Imagen con slider */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-lg group">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={project.images[current]}
                alt={`${project.name} - ${current + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Botones slider */}
          {totalImages > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 backdrop-blur-sm cursor-pointer"
              >
                <FaChevronLeft className="w-5 h-5 text-black" />
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 backdrop-blur-sm cursor-pointer"
              >
                <FaChevronRight className="w-5 h-5 text-black" />
              </button>
            </>
          )}
        </div>

        {/* Información del proyecto */}
        <div className="space-y-6 text-left">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {project.name}
            </h1>
            {project.type && (
              <p className="text-md text-gray-500 mt-2 uppercase tracking-wide">
                {project.type}
              </p>
            )}
          </div>
          <p className="text-lg text-gray-700">{project.description}</p>
        </div>
      </div>
    </main>
  );
}
