import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-[#6A0DAD] text-white py-12 overflow-hidden">
      {/* Background Stars Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Logo və Ad */}
        <h1 className="text-4xl font-extrabold mb-4 tracking-wider">EQUANT</h1>

        {/* Açıklama */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
          These vehicles, powered by electricity rather than fossil fuels, are
          heralded as a key solution to reducing greenhouse gas emissions and
          combating climate change.
        </p>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          Like-themes © All Rights Reserved - 2024 - Purchase
        </p>
      </div>
    </footer>
  );
}
