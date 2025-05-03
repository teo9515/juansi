"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Preloader from "../components/PreLoader";
import HeroImage from "@/components/HeroImage";
import ProjectGallery from "@/components/ProjectGallery";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 2500); // debe coincidir con el tiempo del preloader
    return () => clearTimeout(timeout);
  }, []);

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
              <Header />
              <HeroImage />
            </div>
            <div className="p-4">
              <ProjectGallery />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
