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
  SiTailwindcss,
  SiPrisma,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";

// Interfaces
export interface Icon {
  ICON: React.ComponentType<any>;
  color: string;
}

interface IconsTecnologys {
  html: Icon;
  css: Icon;
  javascript: Icon;
  typescript: Icon;
  react: Icon;
  next: Icon;
  tailwindcss: Icon;
  styled_components: Icon;
  git: Icon;
  github: Icon;
  chakra_ui: Icon;
  sass: Icon;
  prisma: Icon;
  react_navite: Icon
}

const IconsTecnologys: IconsTecnologys = {
  html: {
    color: "#DD4B25",
    ICON: SiHtml5,
  },
  css: {
    ICON: SiCss3,
    color: "#1A6FB4",
  },
  javascript: {
    ICON: SiJavascript,
    color: "#EFD81D",
  },
  next: {
    ICON: SiNextdotjs,
    color: "#fff",
  },
  react: {
    ICON: SiReact,
    color: "#5ED3F3",
  },
  tailwindcss: {
    ICON: SiTailwindcss,
    color: "#38BDF8",
  },
  styled_components: {
    ICON: SiStyledcomponents,
    color: "#D06EAA",
  },
  typescript: {
    ICON: SiTypescript,
    color: "#2F74C0",
  },
  chakra_ui: {
    ICON: SiChakraui,
    color: "#63C3C6",
  },
  git: {
    ICON: DiGit,
    color: "#E84D31",
  },
  github: {
    ICON: SiGithub,
    color: "#302E2F",
  },
  sass: {
    ICON: SiSass,
    color: "pink",
  },
  prisma: {
    ICON: SiPrisma,
    color: "#fff",
  },
  react_navite: {
    ICON: TbBrandReactNative,
    color: "#5ED3F3",
  }
};

export { IconsTecnologys };
