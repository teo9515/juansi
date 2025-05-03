"use client";

import { useEffect, useState } from "react";

const videos = ["/video1.mp4", "/video2.mp4"];

const VideoSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 10000); // cambia cada 10s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh]">
      {videos.map((video, index) => (
        <video
          key={video}
          src={video}
          autoPlay
          muted
          loop
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
};

export default VideoSlider;
