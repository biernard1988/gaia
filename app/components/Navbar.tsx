"use client"
import Image from "next/image"
import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import LinkWithoutId from "./LinkWithoutId"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="relative h-64" id="home">
      <div className="absolute inset-0">
        <Image
          src="/nav-bg.jpg"
          alt="Foto da Chácara Panorâmica"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute bg-black opacity-40 inset-0"></div>
      </div>

      <div className="relative container mx-auto flex flex-col justify-center items-center space-y-4 text-white px-4 z-10">
        <div className="hidden md:flex justify-evenly w-2/3 mt-5 text-xl uppercase font-semibold">
          <LinkWithoutId
            className="hover:text-amber-400 transition-all "
            href="#contact"
          >
            Contatos
          </LinkWithoutId>
          <LinkWithoutId
            className="hover:text-amber-400 transition-all "
            href="#media"
          >
            A Chácara
          </LinkWithoutId>
          <LinkWithoutId
            className="hover:text-amber-400 transition-all "
            href="#events"
          >
            Eventos
          </LinkWithoutId>
          <LinkWithoutId
            className="hover:text-amber-400 transition-all "
            href="#gallery"
          >
            Galeria
          </LinkWithoutId>
        </div>
        <Image
          src="/logo.png"
          alt="Logotipo da Chácara"
          width={200}
          height={200}
          priority
        />
        {/* Botão de menu para dispositivos móveis */}
        <div className="md:hidden absolute flex justify-end w-full">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-amber-200 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {navbarOpen ? <HiX size={40} /> : <HiMenu size={40} />}
          </button>
        </div>
        {/* Menu para dispositivos móveis */}
        {navbarOpen && (
          <div className="md:hidden absolute top-[7rem] left-[15rem] flex flex-col items-center space-y-4 bg-black opacity-70 border border-1 rounded p-5">
            <LinkWithoutId
              href="#media"
              className="text-xl hover:text-amber-400 transition-all hover:animate-pulse flex items-center"
              onClick={() => setNavbarOpen(false)}
            >
              <span className="ml-2">A Chácara</span>
            </LinkWithoutId>
            <LinkWithoutId
              href="#events"
              className="text-xl hover:text-amber-400 transition-all hover:animate-pulse flex items-center"
              onClick={() => setNavbarOpen(false)}
            >
              <span className="ml-2">Eventos</span>
            </LinkWithoutId>
            <LinkWithoutId
              href="#gallery"
              className="text-xl hover:text-amber-400 transition-all hover:animate-pulse flex items-center"
              onClick={() => setNavbarOpen(false)}
            >
              <span className="ml-2">Galeria</span>
            </LinkWithoutId>
            <LinkWithoutId
              href="#contact"
              className="text-xl hover:text-amber-400 transition-all hover:animate-pulse flex items-center"
              onClick={() => setNavbarOpen(false)}
            >
              <span className="ml-2">Contatos</span>
            </LinkWithoutId>
          </div>
        )}
      </div>
    </nav>
  )
}
