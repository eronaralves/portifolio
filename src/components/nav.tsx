"use client"

import { useState } from "react"
import { Link } from 'react-scroll';

// Icons
import { Bookmark, House, Menu, User, Wrench, X } from "lucide-react"

export function Nav() {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false)

  return (
    <nav className="max-w-7xl mx-auto flex px-5 py-7 justify-between">
      <div>
        <span className="text-xl">Eronar</span>
        <span className="text-xl font-semibold text-yellow-primary">Alves</span>
      </div>

      <ul className="hidden text-yellow-primary text-lg gap-8 md:flex">
        <Link to="/" smooth={true} duration={500} className="transition-all duration-200 hover:text-yellow-500 cursor-pointer">Inicio</Link>
        <Link to="skills" smooth={true} duration={500} className="transition-all duration-200 hover:text-yellow-500 cursor-pointer">Habilidades</Link>
        <Link to="portifolio" smooth={true} duration={500} className="transition-all duration-200 hover:text-yellow-500 cursor-pointer">Porfólio</Link>
        <Link to="contact" smooth={true} duration={500} className="transition-all duration-200 hover:text-yellow-500 cursor-pointer">Contato</Link>
      </ul>

      {/* Mobile */}
      <div className="flex overflow-hidden md:hidden"> 
        <Menu size={35} onClick={() => setIsOpenMenuMobile(true)} />

        <div className={`bg-gray-950 fixed right-0 top-0 bottom-0 transition-all overflow-hidden ${isOpenMenuMobile ? 'w-[65%] h-[100%] duration-500' :  'w-0 h-0 p-0 right-[-20px]'}`}>
          <div className="w-full h-full overflow-scroll px-4 py-6 pb-15">
            <X size={35} className="ml-auto" onClick={() => setIsOpenMenuMobile(false)} />
          
            <ul className="flex flex-col gap-10 mt-10">
              <Link to="/" smooth={true} duration={500} className="flex items-center gap-3 transition-all duration-200 hover:text-yellow-500 cursor-pointer">
                <House />
                Inicio
              </Link>
              <Link to="skills" smooth={true} duration={500} className="flex items-center gap-3 transition-all duration-200 hover:text-yellow-500 cursor-pointer">
                <Wrench />
                Habilidades
              </Link>
              <Link to="portifolio" smooth={true} duration={500} className="flex items-center gap-3 transition-all duration-200 hover:text-yellow-500 cursor-pointer">
                <Bookmark /> 
                Porfólio
              </Link>
              <Link to="contact" smooth={true} duration={500} className="flex items-center gap-3 transition-all duration-200 hover:text-yellow-500 cursor-pointer">
                <User />
                Contato
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}