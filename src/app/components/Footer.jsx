import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-[#6A0DAD] text-white py-12 overflow-hidden">
      {/* Ulduzlu fon */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Logo və Ad */}
        <h1 className="text-4xl font-extrabold mb-4 tracking-wider">LOGO</h1>

        {/* Açıklama */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
          Fosil yanacaq əvəzinə elektriklə çalışan bu avtomobillər, istixana
          qazı emissiyalarını azaltmaq və iqlim dəyişikliyi ilə mübarizə üçün
          əsas həll yollarından biri hesab olunur.
        </p>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          LOGO © Bütün hüquqlar qorunur — 2024
        </p>
      </div>
    </footer>
  );
}
