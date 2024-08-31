import { StaticImageData } from "next/image";

// Images
import ImgProblemSolving from "@/assets/images/problem-solving.png";
import ImgCreativity from "@/assets/images/creativity.png";
import ImgCommunication from "@/assets/images/communication.png";
import ImgAdaptation from "@/assets/images/adaptation.png";
import ImgInnovation from "@/assets/images/innovation.png";

// Icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiTypescript,
  SiGithub,
  SiChakraui,
  SiSass,
} from "react-icons/si";
import { DiGit } from "react-icons/di";

interface HardSkills {
  name: string;
  ICON: React.ComponentType<any>;
  color: string;
}

interface SoftSkills {
  name: string;
  image: StaticImageData;
}

const dataHardSkills: HardSkills[] = [
  {
    name: "HTML5",
    ICON: SiHtml5,
    color: "#DD4B25",
  },
  {
    name: "Css3",
    ICON: SiCss3,
    color: "#1A6FB4",
  },
  {
    name: "Java Script",
    ICON: SiJavascript,
    color: "#EFD81D",
  },
  {
    name: "React",
    ICON: SiReact,
    color: "#5ED3F3",
  },
  {
    name: "Next",
    ICON: SiNextdotjs,
    color: "#fff",
  },
  {
    name: "Styled Components",
    ICON: SiStyledcomponents,
    color: "#D06EAA",
  },
  {
    name: "Typescript",
    ICON: SiTypescript,
    color: "#2F74C0",
  },
  {
    name: "Git",
    ICON: DiGit,
    color: "#E84D31",
  },
  {
    name: "Github",
    ICON: SiGithub,
    color: "#302E2F",
  },
  {
    name: "Chakra ui",
    ICON: SiChakraui,
    color: "#63C3C6",
  },
  {
    name: "Sass",
    ICON: SiSass,
    color: "pink",
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
