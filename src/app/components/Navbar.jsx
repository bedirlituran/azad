"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaShoppingBag, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Ana Səhifə", href: "/" },
    { name: "Haqqımızda", href: "/about" },
    { name: "Məhsullar", href: "#", scrollTo: "ProductGrid" }, // <- scroll ID
    { name: "Stansiyalar", href: "/stations" },
    { name: "Əlaqə", href: "/contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4 shadow-md bg-white relative z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="flex space-x-1">
          <div className="w-2 h-6 bg-green-400"></div>
          <div className="w-2 h-6 bg-lime-400"></div>
          <div className="w-2 h-6 bg-yellow-400"></div>
        </div>
        <span className="font-bold text-lg sm:text-xl text-black">LOGO</span>
      </div>

      {/* Menu Links - hidden on small screens */}
      <ul className="hidden md:flex space-x-6 text-sm sm:text-base font-medium">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-1 text-gray-700 hover:text-green-500 cursor-pointer"
            onClick={() => item.scrollTo && handleScroll(item.scrollTo)}
          >
            {item.scrollTo ? (
              <span>{item.name}</span>
            ) : (
              <Link href={item.href}>{item.name}</Link>
            )}
            <span>↗</span>
          </li>
        ))}
      </ul>

      {/* Icons + Hamburger */}
      <div className="flex items-center space-x-4 md:space-x-6">
        <FaUser className="cursor-pointer text-sm sm:text-base" />
        <div className="relative">
          <FaShoppingBag className="cursor-pointer text-sm sm:text-base" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            0
          </span>
        </div>
        <FaSearch className="cursor-pointer text-sm sm:text-base" />

        {/* Hamburger icon for mobile */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-20">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-1 text-gray-700 hover:text-green-500 cursor-pointer"
              onClick={() => item.scrollTo ? handleScroll(item.scrollTo) : setMenuOpen(false)}
            >
              {item.scrollTo ? <span>{item.name}</span> : <Link href={item.href}>{item.name}</Link>}
              <span>↗</span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
