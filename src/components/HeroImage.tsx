"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = ["/3.jpg", "/4.jpg", "/20.jpg", "/21.jpg", "/22.jpg", "/23.jpg"]; // asegúrate de tenerlas en /public

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000); // cambia cada 10 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden saturate-70">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-10000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Imagen ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-4xl tracking-widest font-semibol text-center w-11/12">
              Diseño que trasciende el tiempo
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
