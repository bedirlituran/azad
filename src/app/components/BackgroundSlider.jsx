"use client"
import React, { useEffect, useState } from 'react';

const images = [
  '/images/banner-01.jpg',
  '/images/bg-01.jpg',
];

const texts = [
  {
    title: "EQUANT",
    description: "These vehicles, powered by electricity."
  },
  {
    title: "EQUANT",
    description: "Sustainable energy solutions are vital for protecting the environment."
  }
];

const BackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // əvvəl animasiyanı sıfırla
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
        setAnimate(true); // yeni yazını animasiya et
      }, 100); // qısa gecikmə ilə dəyiş
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1500 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Yazılar aşağı sağda, animasiya ilə */}
      <div className="absolute bottom-30 right-12 z-30 text-right text-white max-w-md">
        <h1
          className={`text-5xl font-extrabold tracking-wider mb-2 transform transition-all duration-700 ease-out ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          {texts[currentIndex].title}
        </h1>
        <p
          className={`text-sm leading-relaxed transform transition-all duration-700 ease-out ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          {texts[currentIndex].description}
        </p>
      </div>
    </div>
  );
};

export default BackgroundSlider;
