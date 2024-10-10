// Interface
import { IconsTecnologys } from "./icon-tecnologys";

interface HardSkills {
  name: string;
  skill: keyof typeof IconsTecnologys;
}


export const dataHardSkills: HardSkills[] = [
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
    name: "Tailwind",
    skill: "tailwindcss",
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
  {
    name: "Prisma",
    skill: "prisma"
  }
];
