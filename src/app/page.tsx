"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Preloader from "../components/PreLoader";
import HeroImage from "@/components/HeroImage";
import ProjectGallery from "@/components/ProjectGallery";

// Función de scroll con animación personalizada
const smoothScrollTo = (target: HTMLElement, duration = 1200) => {
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + start;
  const distance = end - start;
  let startTime: number | null = null;

  const easeInOutExpo = (t: number) =>
    t === 0
      ? 0
      : t === 1
      ? 1
      : t < 0.5
      ? Math.pow(2, 20 * t - 10) / 2
      : (2 - Math.pow(2, -20 * t + 10)) / 2;

  const animate = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutExpo(progress);
    window.scrollTo(0, start + distance * ease);

    if (elapsed < duration) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 2500); // Debe coincidir con el tiempo del preloader
    return () => clearTimeout(timeout);
  }, []);

  // Función que se pasa al Header para hacer scroll
  const handleScrollToProjects = () => {
    if (projectsRef.current) {
      smoothScrollTo(projectsRef.current, 2000); // Desplaza hacia la sección de proyectos con animación
    }
  };

  return (
    <>
      <AnimatePresence>{!showContent && <Preloader />}</AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="min-h-screen flex flex-col">
              <Header scrollToProjects={handleScrollToProjects} />
              <HeroImage />
            </div>

            {/* Sección de proyectos, referenciada para el scroll */}
            <div
              className="py-4 w-11/12 grid justify-self-center"
              ref={projectsRef}
            >
              <ProjectGallery />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
