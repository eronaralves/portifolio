import Image from "next/image";

// Components
import { Nav } from "@/components/nav"
import { Header } from "@/components/header"

// Ultils
import { dataHardSkills, dataSoftSkills } from "@/ultils/data-skills"

export default function Home() {
  return (
    <div className="h-full w-full">
      <Nav />
      <Header />
      <section id="skills" className="w-full max-w-7xl mx-auto px-5 md:px-8 mt-7 lg:mt-14">
        <div>
          <h2 className="text-yellow-primary font-bold text-2xl sm:text-4xl lg:text-5xl">Habilidades/Recursos</h2>
          <p className="max-w-[500px] text-base md:text-xl opacity-70 md:leading-8 mt-4">Estou em constante aprendizado, buscando aprimorar meus conhecimento.</p>
          
          <div className="w-full mt-10 grid grid-cols-2 md:flex flex-wrap md:justify-normal gap-10 md:gap-12">
            {dataHardSkills.map((HardSkill) => (
              <div key={HardSkill.name} className="flex flex-col items-center gap-2 hover:opacity-70" style={{ color: HardSkill.color }} >
                <HardSkill.ICON size={65} />
                <span className="text-lg md:text-xl font-bold text-center">{HardSkill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <h2 className="text-yellow-primary font-bold text-2xl sm:text-4xl lg:text-5xl">Soft Skills</h2>
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
    </div>
  );
}
