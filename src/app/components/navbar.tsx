import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between mx-24 px-5 py-4 bg-[#08221F] text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Image src="/Logo.png" width={100} height={100} alt="Logotipo" />
      </div>

      {/* Links para telas médias e maiores */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link
            href="#section1"
            className="block hover:text-[#FF6600] transition duration-150"
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            href="#section2"
            className="block hover:text-[#FF6600] transition duration-150"
          >
            Produtos
          </Link>
        </li>
        <li>
          <Link
            href="#section3"
            className="block hover:text-[#FF6600] transition duration-150"
          >
            Diferenciais
          </Link>
        </li>
        <li>
          <Link
            href="#section4"
            className="block hover:text-[#FF6600] transition duration-150"
          >
            Depoimentos
          </Link>
        </li>
        <li>
          <Link
            href="#section5"
            className="block hover:text-[#FF6600] transition duration-150"
          >
            Contato
          </Link>
        </li>
      </ul>

      {/* Botão de Comprar */}
      <div className="hidden md:block">
        <button className="relative overflow-hidden bg-[#0D6B4A] mx-auto text-white z-10 px-10 py-4 text-base text-center font-bold rounded-md transition-colors duration-300 gap-10 flex items-center justify-center group w-[140px]">
          Comprar!
          <span className="absolute inset-0 bg-[#FF6600] -z-10 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
        </button>
      </div>

      {/* Menu hambúrguer para mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu dropdown mobile */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-[#08221F] text-center space-y-4 py-4 md:hidden">
          <li>
            <Link
              href="#section1"
              className="block hover:text-[#FF6600] transition duration-150"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="#section2"
              className="block hover:text-[#FF6600] transition duration-150"
            >
              Produtos
            </Link>
          </li>
          <li>
            <Link
              href="#section3"
              className="block hover:text-[#FF6600] transition duration-150"
            >
              Diferenciais
            </Link>
          </li>
          <li>
            <Link
              href="#section4"
              className="block hover:text-[#FF6600] transition duration-150"
            >
              Depoimentos
            </Link>
          </li>
          <li>
            <Link
              href="#section5"
              className="block hover:text-[#FF6600] transition duration-150"
            >
              Contato
            </Link>
          </li>
          <li>
            <button className="bg-[#0D6B4A] text-white py-2 px-4 rounded hover:bg-[#FF6600] transition">
              Comprar
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
