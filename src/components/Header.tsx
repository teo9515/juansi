"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

type HeaderProps = {
  scrollToProjects: () => void;
};

const Header = ({ scrollToProjects }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickProjects = () => {
    scrollToProjects();
    if (isOpen) toggleMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full px-6 md:px-[50px] py-6 flex justify-between items-center fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#F7F6F2] " : "bg-transparent"
      }`}
    >
      <h1
        className={`text-2xl md:text-3xl font-semibold tracking-widest ${
          scrolled ? "text-gray-800" : "text-[#F7F6F2]"
        }`}
      >
        Simetria Studio
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-5 lg:space-x-10 font-normal items-center">
        <button
          onClick={handleClickProjects}
          className={`text-[18px] lg:text-[18px] cursor-pointer hover:opacity-80 tracking-widest ${
            scrolled ? "text-gray-800" : "text-[#F7F6F2]"
          }`}
        >
          Proyectos
        </button>
        <Link
          href="/nosotros"
          className={`text-[18px] lg:text-[18px] hover:opacity-80 tracking-widest ${
            scrolled ? "text-gray-800" : "text-[#F7F6F2]"
          }`}
        >
          Nosotros
        </Link>
        <Link
          href="https://wa.me/573005306054?text=Hola%20sapa"
          target="_blank"
        >
          <FaWhatsapp
            className={`text-[24px] transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white hover:text-white/60"
            }`}
          />
        </Link>
        <Link href="https://www.instagram.com/simonsp_8/" target="_blank">
          <FiInstagram
            className={`text-[24px] transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white hover:text-white/60"
            }`}
          />
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
        <div className="absolute top-[80px] left-0 w-full text-white flex flex-col items-center space-y-6 py-6 md:hidden transition-all duration-300 z-40 bg-black/80">
          <div className="w-11/12 grid grid-cols-1 h-[220px] rounded-lg justify-self-center justify-items-center gap-3">
            <button
              onClick={handleClickProjects}
              className="text-[22px] flex items-center"
            >
              Proyectos
            </button>
            <Link
              href="/nosotros"
              className="text-[22px] flex items-center"
              onClick={toggleMenu}
            >
              Nosotros
            </Link>
            <Link
              href="https://wa.me/573005306054?text=Hola%20sapa"
              target="_blank"
              onClick={toggleMenu}
            >
              <FaWhatsapp className="text-white hover:text-green-400 text-[30px]" />
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
