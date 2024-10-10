import { IconsTecnologys } from "./icon-tecnologys";

export interface Project {
  name: string;
  description: string;
  image: string;
  languages: (keyof typeof IconsTecnologys)[];
  url_site?: string;
  year: number;
  observations?: string
}

const dataProjects: Project[] = [
  {
    name: "Login Le Select",
    image: "/images/login-desafio.png",
    description:
      "Neste projeto, realizei um teste técnico para uma oportunidade de freelancer, onde desenvolvi um sistema de login completo com integração com uma API. Através dessa implementação que demonstrei habilidades em autenticação e gerenciamento de usuários. O sucesso desse projeto foi um fator decisivo que me permitiu conquistar meu primeiro trabalho como freelancer.",
    languages: ["react", "styled_components", "typescript" ],
    year: 2024,
    observations: "não terá link pois a api esta em produção"
  },
  {
    name: "Agendamento descomplicado",
    image: "/images/schedule-event.png",
    description:
      "Neste projeto, durante um curso, aprendi a integrar um sistema com o Google Agenda, criando um calendário dinâmico que exibe os horários de agendas criadas, além de conseguir marcar suas reuniões.",
    languages: ["next", "typescript", "prisma"],
    url_site: "https://schedule-event.vercel.app/",
    year: 2024,
  },
  {
    name: "Coffe Delivery",
    image: "/images/coffe-delivery.png",
    description:
      "Projeto de e-commerce para uma cafeteria. O objetivo foi criar uma plataforma intuitiva com foco de implementar uma interface funcional e intuitiva, com destaque para o sistema de validação de formulários e boas práticas de desenvolvimento.",
    languages: ["styled_components", "typescript", "react"],
    url_site: "https://coffe-delivery-ashen.vercel.app/",
    year: 2023,
  },
  {
    name: "Pomodoro",
    image: "/images/pomodoro.png",
    description:
      "Neste desafio, desenvolvi uma aplicação de timer Pomodoro para monitorar o tempo dedicado às atividades, incorporando um histórico detalhado das tarefas realizadas e seu status.",
    languages: ["styled_components", "typescript", "react"],
    url_site: "https://app-timer-pomodoro.vercel.app/",
    year: 2023,
  },
  {
    name: "Página Vai na Web",
    image: "/images/page-vnw.png",
    description:
      "Neste projeto, realizei um teste técnico para uma oportunidade em uma empresa, onde fui responsável pelo desenvolvimento completo do layout, assegurando uma estrutura de código organizada e eficiente. Segui rigorosamente o design fornecido, incorporando melhorias e toques adicionais para aprimorar a experiência do usuário. Este projeto não apenas destacou minha capacidade de traduzir conceitos visuais em implementações funcionais, mas também foi um fator crucial que me ajudou a conquistar meu primeiro emprego na área.",
    languages: ["html", "styled_components", "javascript"],
    url_site: "https://page-vnw.vercel.app/",
    year: 2022,
  },
];

export { dataProjects };
