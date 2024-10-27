import type { StaticImageData } from "next/image";
import { IconsTecnologys } from "./icon-tecnologys";

// Images
import LoginLeSelectImg from "@/assets/images/login-desafio.png"
import ScheduleEventImg from "@/assets/images/schedule-event.png"
import PokelistImg from "@/assets/images/background-pokelist.jpeg"
import CoffeDeliveryImg from "@/assets/images/coffe-delivery.png"
import PomodoroImg from "@/assets/images/pomodoro.png"
import PageVnwImg from "@/assets/images/page-vnw.png"


export interface Project {
  name: string;
  description: string;
  image: StaticImageData;
  languages: (keyof typeof IconsTecnologys)[];
  url_site?: string;
  year: number;
  observations?: string
}

const dataProjects: Project[] = [
  {
    name: "Login Le Select",
    image: LoginLeSelectImg,
    description:
      "Neste projeto, realizei um teste técnico para uma oportunidade de freelancer, onde desenvolvi um sistema de login completo com integração com uma API. Através dessa implementação que demonstrei habilidades em autenticação e gerenciamento de usuários. O sucesso desse projeto foi um fator decisivo que me permitiu conquistar meu primeiro trabalho como freelancer.",
    languages: ["react", "styled_components", "typescript" ],
    year: 2024,
    observations: "não terá link pois a api esta em produção"
  },
  {
    name: "Agendamento descomplicado",
    image: ScheduleEventImg,
    description:
      "Neste projeto, durante um curso, aprendi a integrar um sistema com o Google Agenda, criando um calendário dinâmico que exibe os horários de agendas criadas, além de conseguir marcar suas reuniões.",
    languages: ["next", "typescript", "prisma"],
    url_site: "https://schedule-event.vercel.app/",
    year: 2024,
  },
  {
    name: "Pokelist",
    image: PokelistImg,
    description:
      "Este projeto é uma Pokedex desenvolvida em React Native, onde os usuários podem buscar Pokémons consumindo dados de uma API de pokémons. A aplicação permite filtrar os Pokémon por nome, alternar o idioma entre português e inglês, e oferece suporte ao modo escuro para melhorar a experiência do usuário em diferentes condições de luminosidade.",
    languages: ["react_navite", "typescript"],
    url_site: "/videos/pokelist.mp4",
    year: 2023,
  },
  {
    name: "Coffe Delivery",
    image: CoffeDeliveryImg,
    description:
      "Projeto de e-commerce para uma cafeteria. O objetivo foi criar uma plataforma intuitiva com foco de implementar uma interface funcional e intuitiva, com destaque para o sistema de validação de formulários e boas práticas de desenvolvimento.",
    languages: ["styled_components", "typescript", "react"],
    url_site: "https://coffe-delivery-ashen.vercel.app/",
    year: 2023,
  },
  {
    name: "Pomodoro",
    image: PomodoroImg,
    description:
      "Neste desafio, desenvolvi uma aplicação de timer Pomodoro para monitorar o tempo dedicado às atividades, incorporando um histórico detalhado das tarefas realizadas e seu status.",
    languages: ["styled_components", "typescript", "react"],
    url_site: "https://app-timer-pomodoro.vercel.app/",
    year: 2023,
  },
  {
    name: "Página Vai na Web",
    image: PageVnwImg,
    description:
      "Neste projeto, realizei um teste técnico para uma oportunidade em uma empresa, onde fui responsável pelo desenvolvimento completo do layout, assegurando uma estrutura de código organizada e eficiente. Segui rigorosamente o design fornecido, incorporando melhorias e toques adicionais para aprimorar a experiência do usuário. Este projeto não apenas destacou minha capacidade de traduzir conceitos visuais em implementações funcionais, mas também foi um fator crucial que me ajudou a conquistar meu primeiro emprego na área.",
    languages: ["html", "styled_components", "javascript"],
    url_site: "https://page-vnw.vercel.app/",
    year: 2022,
  },
];

export { dataProjects };
