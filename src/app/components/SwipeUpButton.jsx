"use client"
import React from 'react';

const SwipeUpButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={scrollToTop}
      className="fixed bottom-10 right-10 bg-green-400 text-green-900 px-4 py-6 rounded-full text-sm cursor-pointer z-20 hover:bg-black/80 transition"
    >
      ⬆ Yuxarı sürüşdür
    </div>
  );
};

export default SwipeUpButton;
