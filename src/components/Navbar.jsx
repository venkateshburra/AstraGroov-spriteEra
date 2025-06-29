import React, { useState } from "react";
import school_logo from "./images/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Academics",
    path: "/academics",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Contact us",
    path: "/contact",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#002855] w-full px-[32px] py-[8px]">
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="gap-[8px] flex items-center">
          <img
            src={school_logo}
            alt="logo"
            className="w-[35px] h-[35px] md:w-[65px] md:h-[65px] object-cover"
            width={65}
            height={65}
          />
          <h1 className="text-white text-[30px] md:text-[50px] font-thin font-kanit">
            AstraGroove
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-[20px] px-6 font-kanit">
          {navLinks.map((item) => (
            <a
              href={item.path}
              key={item.name}
              className="text-base font-medium text-white font-kanit"
            >
              {item.name}
            </a>
          ))}
          <button className="px-4 py-2 text-white bg-yellow-500 rounded-md">
            Admission
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl text-white lg:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Sliding Mobile Navigation */}
      <div
        className={`z-20 fixed top-0 right-0 h-full w-full bg-[#002855] shadow-lg transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute text-2xl text-white top-4 right-4"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <FiX />
        </button>
        <nav className="flex flex-col items-center gap-4 mt-16 font-kanit">
          {navLinks.map((item) => (
            <a
              href={item.path}
              key={item.name}
              className="text-base font-medium text-white"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
            >
              {item.name}
            </a>
          ))}
          <button
            className="px-4 py-2 mt-4 text-white bg-yellow-500 rounded-md"
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on button click
          >
            Admission
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;