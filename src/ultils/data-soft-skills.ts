import type { StaticImageData } from "next/image";

// Images
import ImgProblemSolving from "@/assets/images/problem-solving.png";
import ImgCreativity from "@/assets/images/creativity.png";
import ImgCommunication from "@/assets/images/communication.png";
import ImgAdaptation from "@/assets/images/adaptation.png";
import ImgInnovation from "@/assets/images/innovation.png";


interface SoftSkills {
  name: string;
  image: StaticImageData;
}

export const dataSoftSkills: SoftSkills[] = [
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