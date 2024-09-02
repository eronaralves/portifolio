import Image from "next/image";

// Icons
import { ArrowUpRight } from "lucide-react";

// Components
import { Nav } from "@/components/nav"
import { Header } from "@/components/header"

// Ultils
import { dataHardSkills, dataSoftSkills } from "@/ultils/data-skills"
import { dataProjects } from "@/ultils/data-projects"
import { IconsTecnologys } from "@/ultils/icon-tecnologys";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-8">
        <Nav />
        <Header />
        <section id="skills" className="mt-7 lg:mt-14">
          <div>
            <h2 className="text-yellow-primary font-bold text-3xl sm:text-4xl lg:text-5xl">Habilidades/Recursos</h2>
            <p className="max-w-[500px] text-base md:text-xl opacity-70 md:leading-8 mt-4">Estou em constante aprendizado, buscando aprimorar meus conhecimento.</p>
            
            <div className="w-full mt-10 grid grid-cols-2 md:flex flex-wrap md:justify-normal gap-10 md:gap-12">
              {dataHardSkills.map((HardSkill) =>  {
                const IconSkill = IconsTecnologys[HardSkill.skill].ICON

                return (
                  <div key={HardSkill.name} className="flex flex-col items-center gap-2 hover:opacity-70" style={{ color: IconsTecnologys[HardSkill.skill].color }} >
                    <IconSkill size={65} />
                    <span className="text-lg md:text-xl font-bold text-center">{HardSkill.name}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-12 md:mt-16">
            <h2 className="text-yellow-primary font-bold text-3xl sm:text-4xl lg:text-5xl">Soft Skills</h2>
            <div className="w-full mt-10 grid grid-cols-2 md:flex flex-wrap md:justify-normal gap-10 md:gap-12">
              {dataSoftSkills.map((softSkills) => (
                <div key={softSkills.name} className="flex flex-col items-center gap-2 hover:opacity-70">
                  <Image src={softSkills.image} alt={softSkills.name} className="w-full max-w-20 md:max-w-24" />
                  <span className="text-lg md:text-xl font-bold text-center">{softSkills.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="my-10 lg:mt-24
        ">
          <h2 className="text-yellow-primary font-bold text-3xl sm:text-4xl lg:text-5xl">Projetos</h2>
          <div className="w-full flex flex-wrap gap-14 md:gap-20 mt-10">
            {dataProjects.map(project => (
              <div key={project.name} className="w-full flex flex-col-reverse md:flex-row flex-wrap md:flex-nowrap gap-8" >
                <div className="w-full max-w-lg h-64 relative flex justify-center overflow-hidden w-lg px-5 md:px-10 pt-14 rounded-lg transform transition-transform duration-300 hover:scale-105 bg-gray-primary">
                  <a href={project.url_site} target="_blank" className="absolute right-3 top-3 p-1 rounded-md bg-[#3F4152] cursor-pointer transition-all duration-300 hover:bg-[#53566c]">
                    <ArrowUpRight />
                  </a>

                  <div className="w-full flex-1 flex flex-col items-center justify-end gap-3">
                    <div className="w-full flex items-center gap-3">
                      {project.languages.map(language => {
                        const IconLanguage = IconsTecnologys[language].ICON

                        return (
                          <div key={language} className="p-1 rounded-md bg-white"  title={language} >
                            <IconLanguage size={15} color={IconsTecnologys[language].color === "#fff" ? "#000" : IconsTecnologys[language].color} />
                          </div>
                        )
                      })}
                    </div>

                    <Image src={project.image} alt={project.description} width={351} height={100} className="w-full h-48 object-cover rounded-md" />
                  </div>
                </div>

                <div className="w-full max-w-[514px] flex flex-col justify-between gap-5 md:gap-2">
                  <div className="h-full flex flex-col justify-center">
                    <h3 className="font-bold text-2xl md:text-3xl text-yellow-600">{project.name}</h3>
                    <p className="text-gray-secondary mt-5">{project.description}</p>
                  </div>
                  <span className="text-sm text-gray-400">Feito em {project.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
