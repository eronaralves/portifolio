import Image from "next/image";

// Components
import { Nav } from "@/components/nav"
import { Header } from "@/components/header"

// Ultils
import { dataHardSkills } from "@/ultils/data-hard-skills"
import { dataSoftSkills } from "@/ultils/data-soft-skills"
import { dataProjects } from "@/ultils/data-projects"
import { IconsTecnologys } from "@/ultils/icon-tecnologys";
import { Footer } from "@/components/footer";
import { CardProject } from "@/components/card-project";

export default function Home() {

  return (
    <div className="h-full w-full">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-8">
        <Nav />
        <Header />

        <section id="skills" className="mt-10 lg:mt-24">
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

        <section id="projects" className="my-10 lg:mt-24">
          <h2 className="text-yellow-primary font-bold text-3xl sm:text-4xl lg:text-5xl">Projetos</h2>
          <div className="w-full flex flex-wrap gap-20 md:gap-20 mt-10">
            {dataProjects.map(project => (
              <CardProject key={project.name} project={project} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
