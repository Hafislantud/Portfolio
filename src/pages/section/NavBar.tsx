import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F1C2E] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-[#F5E7C6]">
          Portfolio
        </a>

        <ul className="hidden md:flex space-x-8 text-lg text-white ">
          <li>
            <a href="#hero" className="hover:text-blue-500 ">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 ">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-500 ">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500 ">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 ">
              Contact
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-3xl">✖</span>
          ) : (
            <span className="text-3xl">☰</span>
          )}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-[#0F1C2E] text-center pb-4 space-y-4 text-lg">
          <li>
            <a href="#hero" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};
