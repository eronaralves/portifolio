"use client"

import { useState } from "react"
import { Link } from 'react-scroll';

// Icons
import { Bookmark, House, Menu, User, Wrench, X } from "lucide-react"

export function Nav() {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false)

  const menuItems = [
    {
      label: 'Inicio',
      href: '/',
      icon: House,
    },
    {
      label: 'Habilidades',
      href: 'skills',
      icon: Wrench
    },
    {
      label: 'Projetos',
      href: 'projects',
      icon: Bookmark
    },
    {
      label: 'Contatos',
      href: 'contacts',
      icon: User
    },
  ]

  return (
    <nav className="h-[80px] flex justify-between items-center" id="/" >
      <div>
        <span className="text-xl">Eronar</span>
        <span className="text-xl font-semibold text-yellow-primary">Alves</span>
      </div>

      <ul className="hidden text-yellow-primary text-lg gap-8 sm:flex">
        {menuItems.map(item => (
          <Link key={item.href} to={item.href} smooth={true} duration={500} className="transition-all duration-200 hover:text-yellow-500 cursor-pointer">
            {item.label}
          </Link>
        ))}
      </ul>

      {/* Mobile */}
      <div className="fixed right-5 z-50 sm:hidden"> 
        <Menu size={30} onClick={() => setIsOpenMenuMobile(true)} />

        <div className={`bg-dark-primary fixed right-0 top-0 bottom-0 transition-all overflow-hidden ${isOpenMenuMobile ? 'w-[100%] h-[100%] duration-500' :  'w-0 h-0 p-0 right-[-20px]'}`}>
          <div className="w-full h-full overflow-scroll px-4 py-6 pb-15">
            <X size={35} className="ml-auto" onClick={() => setIsOpenMenuMobile(false)} />
          
            <ul className="flex flex-col gap-10 mt-10">
              {menuItems.map(link => {
                const IconLink = link.icon

                return (
                  <Link key={link.href} to={link.href} onClick={() => setIsOpenMenuMobile(false)} smooth={true} duration={500} className="flex items-center gap-3 transition-all duration-200 hover:text-yellow-500 cursor-pointer">
                    <IconLink />
                    {link.label}
                  </Link>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}