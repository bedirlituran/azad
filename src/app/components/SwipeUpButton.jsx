"use client"
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const SwipeUpButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-green-400 text-white p-4 rounded-full cursor-pointer z-[9999] shadow-lg 
        hover:bg-green-500 hover:scale-110 hover:rotate-12 transition-transform duration-300 ease-in-out"
      >
        <FaArrowUp size={22} />
      </button>
    )
  );
};

export default SwipeUpButton;
