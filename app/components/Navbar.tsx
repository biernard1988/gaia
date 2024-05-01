"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="relative h-64">
      <div className="absolute inset-0">
        <Image
          src="/nav-bg.png"
          alt="Foto da Chacara Panoramica"
          fill
          className="object-cover object-center blur-[0.5px]"
          priority
        />
        <div className="absolute bg-black opacity-20 inset-0"></div>
      </div>

      <div className="relative container mx-auto flex flex-col justify-center items-center space-y-4 text-white px-4 z-10">
        <div className="hidden md:flex justify-evenly w-1/2 mt-5 text-xl uppercase font-extrabold">
          <Link
            className="hover:text-amber-400 transition-all hover:animate-pulse"
            href="#history"
          >
            História
          </Link>
          <Link
            className="hover:text-amber-400 transition-all hover:animate-pulse"
            href="#contact"
          >
            Contatos
          </Link>
          <Link
            className="hover:text-amber-400 transition-all hover:animate-pulse"
            href="#gallery"
          >
            Galeria
          </Link>
        </div>
        <Image
          src="/logo.png"
          alt="Logotipo da Chacara"
          width={200}
          height={200}
          priority
        />
        {/* Botão de menu para dispositivos móveis */}
        <div className="md:hidden absolute flex justify-end w-full">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-amber-200 focus:outline-none"
          >
            {navbarOpen ? <HiX size={40} /> : <HiMenu size={40} />}
          </button>
        </div>
        {/* Menu para dispositivos móveis */}
        {navbarOpen && (
          <div className="md:hidden absolute top-[6rem] left-[15rem] flex flex-col items-center space-y-4 bg-black opacity-70 border border-1 rounded p-6">
            <Link
              href="#history"
              className="text-xl hover:text-amber-400 transition-all hover:animate-pulse flex items-center"
            >
              <span className="ml-2">História</span>
            </Link>
            <Link
              href="#gallery"
              className="text-xl hover:text-amber-400 transition-all hover:animate-pulse flex items-center"
            >
              <span className="ml-2">Galeria</span>
            </Link>
            <Link
              href="#contact"
              className="text-xl hover:text-amber-400 transition-all hover:animate-pulse flex items-center"
            >
              <span className="ml-2">Contatos</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
