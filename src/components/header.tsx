"use client"

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Image from "next/image";

// Images
import PhotoProfile from "@/assets/images/perfil-eronar.png"

export function Header() {
  const [mensaeWelcome, setMensageWelcome] = useState<string | null>(null)

  useEffect(() => {
    const currentData = new Date()
    const hours = currentData.getHours()

    if(hours <= 11 && hours >= 4) {
      setMensageWelcome('Bom dia')
    } else if(hours >= 12 && hours < 18) {
      setMensageWelcome('Boa Tarde')
    } else if(hours >= 1 && hours < 4) {
      setMensageWelcome('Voce deve estar cansado, dorma um pouco')
    } else {
      setMensageWelcome('Boa Noite')
    }

  }, [])

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-between gap-12 relative xl:max-h-header xl:h-header xl:min-h-header">
      <div className="h-full max-w-[500px] w-full z-10 flex flex-col md:justify-center mt-6 xl:mt-0">
        <span className="font-extralight uppercase text-yellow-primary">{mensaeWelcome}</span>
        <h2 className="font-extrabold text-5xl md:text-7xl mt-1">
          Olá, Eu sou o 
          <strong className="text-yellow-primary tracking-wide"> Eronar Alves</strong>
        </h2>
        <p className="text-lg md:text-xl opacity-70 md:leading-8 mt-4">Desenvolvedor Front-end com foco em resolução de problemas, acessibilidade, escalabilidade e desempenho.</p>
        <a href="/Currículo_Eronar_Alves.pdf" download className="max-w-56 w-full flex justify-center items-center py-4 px-8 mt-8 rounded-full bg-yellow-primary font-medium">
          Meu currículo
        </a>
      </div>

      <Image src={PhotoProfile} alt="Perfil Eronar" className="w-full max-w-[700px] mx-auto object-contain xl:absolute right-0 bottom-0 xl:max-w-[70%] xl:max-h-[90%] md:h-full" />
    </div>
  )
}