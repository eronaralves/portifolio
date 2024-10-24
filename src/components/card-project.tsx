
'use client'
import Image from "next/image";

// Ultils
import type { Project } from "@/ultils/data-projects";
import { IconsTecnologys } from "@/ultils/icon-tecnologys";

// Components
import { Separator } from "@/components/ui/separator";

interface ICardProject {
  project: Project
}

export function CardProject({ project }: ICardProject) {

  return (
    <div className="w-full flex flex-col-reverse md:flex-row flex-wrap md:flex-nowrap gap-8">
      <Separator className="md:hidden" />

      <a href={project.url_site} target="_blank" className="max-w-[512px] w-full md:min-w-[400px] h-52 md:h-72 flex justify-center rounded-lg transform transition-transform duration-300 hover:scale-105">
        <Image src={project.image} alt={project.description} width={512} height={300} className="w-full h-full object-cover rounded-md" />
      </a>

      <div className="w-full max-w-[514px] flex flex-col justify-between gap-5 md:gap-5">
        <div className="h-full flex flex-col justify-center">
          <h3 className="font-bold text-2xl md:text-3xl text-yellow-600">{project.name}</h3>
          <p className="max-h-full text-gray-secondary mt-5 h-[160px] overflow-y-scroll">{project.description}</p>
        </div>

        <div className="w-full flex justify-between items-center">
          <span className="text-sm text-gray-400">Feito em {project.year}</span>
          <div className="flex items-center gap-3">
            {project.languages.map(language => {
              const IconLanguage = IconsTecnologys[language].ICON

              return (
                <div key={language} className="p-1 rounded-lg bg-white"  title={language} >
                  <IconLanguage size={15} color={IconsTecnologys[language].color === "#fff" ? "#000" : IconsTecnologys[language].color} />
                </div>
              )
            })}
          </div>
        </div>

        {project.observations && <span className=" text-yellow-600 text-sm">Obs: {project.observations}</span>}
      </div>
    </div>
  )
}