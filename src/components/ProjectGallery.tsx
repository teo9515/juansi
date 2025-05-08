"use client";

import { useState, useEffect } from "react";
import ProjectGalleryDesktop from "./ProjectGalleryDesktop";
import ProjectGalleryMobileTablet from "./ProjectGalleryMobileTablet";

const ProjectGallery: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 900); // Ajusta el punto de quiebre a 900px
    };

    // Ejecutar al montar el componente
    handleResize();

    // Escuchar los cambios de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpiar el listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isDesktop ? <ProjectGalleryDesktop /> : <ProjectGalleryMobileTablet />}
    </>
  );
};

export default ProjectGallery;
