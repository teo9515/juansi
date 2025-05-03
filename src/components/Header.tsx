"use client";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full px-6 md:px-[50px] bg-transparent py-6 flex justify-between items-center absolute top-0 left-0 z-50">
      <h1 className="text-3xl md:text-4xl font-bold text-white">
        Simetría Studio
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-5 lg:space-x-10 text-white font-semibold items-center">
        <Link
          href="/projects"
          className="text-[18px] lg:text-[22px] hover:opacity-80"
        >
          Proyectos
        </Link>
        <Link
          href="/projects"
          className="text-[18px] lg:text-[22px] hover:opacity-80"
        >
          Nosotros
        </Link>
        <Link
          href="https://wa.me/573005306054?text=Hola%20sapa"
          target="_blank"
        >
          <FaWhatsapp className="text-white hover:text-green-400 text-[30px] transition-colors duration-300" />
        </Link>
        <Link href="https://www.instagram.com/simonsp_8/" target="_blank">
          <FiInstagram className="text-white hover:text-pink-500 text-[30px] transition-colors duration-300" />
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full  text-white flex flex-col items-center space-y-6 py-6 md:hidden transition-all duration-300 z-40">
          <div className="w-11/12 grid grid-cols-1 h-[220px] rounded-lg justify-self-center justify-items-center bg-black opacity-85 gap-3">
            <Link
              href="/projects"
              className="text-[22px] flex  items-center"
              onClick={toggleMenu}
            >
              Proyectos
            </Link>
            <Link
              href="/projects"
              className="text-[22px] flex  items-center"
              onClick={toggleMenu}
            >
              Nosotros
            </Link>
            <Link
              href="https://wa.me/573005306054?text=Hola%20sapa"
              target="_blank"
              onClick={toggleMenu}
            >
              <FaWhatsapp className="text-white hover:text-green-400 text-[30px] " />
            </Link>
            <Link
              href="https://www.instagram.com/simonsp_8/"
              target="_blank"
              onClick={toggleMenu}
            >
              <FiInstagram className="text-white hover:text-pink-500 text-[30px]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
