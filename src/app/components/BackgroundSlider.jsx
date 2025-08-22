"use client"
import React, { useEffect, useState } from 'react';

const images = [
  '/images/banner-01.jpg',
  '/images/bg-01.jpg',
];
const texts = [
  {
    title: "Sürətli Şarj",
    description: "Elektrikli avtomobilinizi cəmi bir neçə dəqiqəyə doldurun."
  },
  {
    title: "Ağıllı Enerji",
    description: "Daha az xərc, daha çox yol – ekoloji təmiz güc."
  },
  {
    title: "Hər Yerdə Şarj",
    description: "Şəhərdə və yolda – enerji məntəqələri həmişə yanınızda."
  },
  {
    title: "Yaşıl Texnologiya",
    description: "Təmiz enerji ilə həm gələcəyi, həm də büdcənizi qoruyun."
  }
];

const BackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
        setAnimate(true);
      }, 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
            index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Yazılar aşağı sağda, animasiya ilə */}
      <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 lg:bottom-24 right-4 sm:right-8 lg:right-12 z-30 text-right text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-2">
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wider mb-2 transform transition-all duration-700 ease-out ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          {texts[currentIndex].title}
        </h1>
        <p
          className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed transform transition-all duration-700 ease-out ${
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
