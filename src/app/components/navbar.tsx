import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex md:flex-row flex-col items-center justify-between mx-24 px-5 py-4 gap-y-10 bg-[#08221F] text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Image src="/Logo.png" width={100} height={100} alt="Logotipo" />
      </div>

      {/* Links para telas médias e maiores */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link
            href="#inicio"
            className="block hover:text-[#FF6600] transition duration-150"
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            href="#produtos"
            className="block hover:text-[#FF6600] transition duration-150"
          >
            Produtos
          </Link>
        </li>
        <li>
          <Link
            href="#diferenciais"
            className="block hover:text-[#FF6600] transition duration-150"
          >
            Diferenciais
          </Link>
        </li>
        <li>
          <Link
            href="#depoimentos"
            className="block hover:text-[#FF6600] transition duration-150"
          >
            Depoimentos
          </Link>
        </li>
        <li>
          <Link
            href="#contato"
            className="block hover:text-[#FF6600] transition duration-150"
          >
            Contato
          </Link>
        </li>
      </ul>

      {/* Botão de Comprar */}
      <div className="hidden md:block">
        <a
          href="https://wa.me/5519998088587?text=Ol%C3%A1.%20Quero%20elevar%20o%20n%C3%ADvel%20da%20minha%20constru%C3%A7%C3%A3o!"
          target="_blank"
          className="relative overflow-hidden bg-[#0D6B4A] mx-auto text-white z-10 px-6 py-4 text-base text-center font-bold rounded-md transition-colors duration-300 gap-4 flex items-center justify-center group w-[220px]"
        >
          Comprar
          <span className="absolute right-4 transform translate-x-0 opacity-0 transition-all z-10 duration-300 group-hover:translate-x-2 group-hover:opacity-100">
            →
          </span>
          <span className="absolute inset-0 bg-[#FF6600] -z-10 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
        </a>
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
        <ul className="absolute top-20 left-0 w-full bg-[#08221F] text-center space-y-4 py-4 md:hidden">
          <li>
            <Link
              href="#inicio"
              className="block hover:text-[#FF6600] transition duration-150"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="#produtos"
              className="block hover:text-[#FF6600] transition duration-150"
            >
              Produtos
            </Link>
          </li>
          <li>
            <Link
              href="#diferenciais"
              className="block hover:text-[#FF6600] transition duration-150"
            >
              Diferenciais
            </Link>
          </li>
          <li>
            <Link
              href="#depoimentos"
              className="block hover:text-[#FF6600] transition duration-150"
            >
              Depoimentos
            </Link>
          </li>
          <li>
            <Link
              href="#contato"
              className="block hover:text-[#FF6600] transition duration-150"
            >
              Contato
            </Link>
          </li>
          <li>
            <a
              href="https://wa.me/5519998088587?text=Ol%C3%A1.%20Quero%20elevar%20o%20n%C3%ADvel%20da%20minha%20constru%C3%A7%C3%A3o!"
              target="_blank"
              className="relative overflow-hidden bg-[#0D6B4A] mx-auto text-white z-10 px-6 py-4 text-base text-center font-bold rounded-md transition-colors duration-300 gap-4 flex items-center justify-center group w-[220px]"
            >
              Comprar
              <span className="absolute right-4 transform translate-x-0 opacity-0 transition-all z-10 duration-300 group-hover:translate-x-2 group-hover:opacity-100">
                →
              </span>
              <span className="absolute inset-0 bg-[#FF6600] -z-10 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
