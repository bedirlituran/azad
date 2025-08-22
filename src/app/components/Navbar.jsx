import React from "react";
import { FaUser, FaShoppingBag, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="flex space-x-1">
          <div className="w-2 h-6 bg-green-400"></div>
          <div className="w-2 h-6 bg-lime-400"></div>
          <div className="w-2 h-6 bg-yellow-400"></div>
        </div>
        <span className="font-bold text-lg text-black">EQUANT</span>
      </div>

      {/* Menu Links */}
      <ul className="flex space-x-8 text-sm font-medium">
        {["Home", "About Us", "Products", "Blog", "Contacts"].map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-1 text-gray-700 hover:text-green-500 cursor-pointer"
          >
            <span>{item}</span>
            <span>↗</span>
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex items-center space-x-6 text-gray-700">
        <FaUser className="cursor-pointer" />
        <div className="relative">
          <FaShoppingBag className="cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            0
          </span>
        </div>
        <FaSearch className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
