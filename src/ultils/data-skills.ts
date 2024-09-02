import { StaticImageData } from "next/image";

// Images
import ImgProblemSolving from "@/assets/images/problem-solving.png";
import ImgCreativity from "@/assets/images/creativity.png";
import ImgCommunication from "@/assets/images/communication.png";
import ImgAdaptation from "@/assets/images/adaptation.png";
import ImgInnovation from "@/assets/images/innovation.png";

// Interface
import { IconsTecnologys } from "./icon-tecnologys";

interface HardSkills {
  name: string;
  skill: keyof typeof IconsTecnologys;
}

interface SoftSkills {
  name: string;
  image: StaticImageData;
}

const dataHardSkills: HardSkills[] = [
  {
    name: "HTML5",
    skill: "html",
  },
  {
    name: "Css3",
    skill: "css",
  },
  {
    name: "Java Script",
    skill: "javascript",
  },
  {
    name: "React",
    skill: "react",
  },
  {
    name: "Next",
    skill: "next",
  },
  {
    name: "Styled Components",
    skill: "styled_components",
  },
  {
    name: "Typescript",
    skill: "typescript",
  },
  {
    name: "Git",
    skill: "git",
  },
  {
    name: "Github",
    skill: "github",
  },
  {
    name: "Chakra ui",
    skill: "chakra_ui",
  },
  {
    name: "Sass",
    skill: "sass",
  },
];

const dataSoftSkills: SoftSkills[] = [
  {
    name: "Solução de problemas",
    image: ImgProblemSolving,
  },
  {
    name: "Creatividade",
    image: ImgCreativity,
  },
  {
    name: "Comunicação",
    image: ImgCommunication,
  },
  {
    name: "Adaptação",
    image: ImgAdaptation,
  },
  {
    name: "Inovação",
    image: ImgInnovation,
  },
];

export { dataHardSkills, dataSoftSkills };
