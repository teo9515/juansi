"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const text = "Simetria Studio";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full bg-black text-white z-50 flex items-center justify-center"
        >
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-6xl font-bold flex space-x-1 tracking-widest"
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
