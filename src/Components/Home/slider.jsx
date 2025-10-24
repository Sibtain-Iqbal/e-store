"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const imgs = [
  "https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg",
  "https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg",
  "https://images.pexels.com/photos/1623016/pexels-photo-1623016.jpeg",
  "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
  "https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg",
  "https://images.pexels.com/photos/399159/pexels-photo-399159.jpeg",
  "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg",
];

function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imgs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {imgs.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover object-center "
            priority={index === current}
          />
        </div>
      ))}
    </div>
  );
}

export default Slider;
