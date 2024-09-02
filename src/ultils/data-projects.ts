import { IconsTecnologys } from "./icon-tecnologys";

interface Project {
  name: string;
  description: string;
  image: string;
  languages: (keyof typeof IconsTecnologys)[];
  url_site: string;
  year: number;
}

const dataProjects: Project[] = [
  {
    name: "Login Le Select",
    image: "/images/login-desafio.png",
    description:
      "Projeto que fiz como um teste técnico para um freelancer, onde tive que desenvolver um login completo com integração com a API. E com esse isso consegui meu primeiro freelancer.",
    languages: ["react", "styled_components", "typescript"],
    url_site: "https://desafio-le-select.vercel.app/login",
    year: 2024,
  },
  {
    name: "Agendamento descomplicado",
    image: "/images/schedule-event.png",
    description:
      "Projeto que fiz em um curso, onde aprendi a como integrar com o Google Agenda e criar um calendário onde mostra os agendamentos criados.",
    languages: ["next", "typescript", "prisma"],
    url_site: "https://schedule-event.vercel.app/",
    year: 2024,
  },
  {
    name: "Coffe Delivery",
    image: "/images/coffe-delivery.png",
    description:
      "Projeto que fiz em um curso onde esta aprendendo a usar typescript. A ideia do projeto era simular um site de uma cafeteria onde tive contato com validações em formulário e boas práticas.",
    languages: ["styled_components", "typescript", "react"],
    url_site: "https://coffe-delivery-ashen.vercel.app/",
    year: 2023,
  },
  {
    name: "Pomodoro",
    image: "/images/pomodoro.png",
    description:
      "Projeto que fiz como um desafio, onde criei uma pomodoro para contar o horário das atividades, com o histórico das atividades e seu status.",
    languages: ["styled_components", "typescript", "react"],
    url_site: "https://app-timer-pomodoro.vercel.app/",
    year: 2023,
  },
  {
    name: "Página Vai na Web",
    image: "/images/page-vnw.png",
    description:
      "Projeto que fiz como um teste técnico para entrar em uma empresa, onde tive que desenvolver o layout inteiro deles e com uma boa estrutura de código, seguir o layout e alguns toques a mais que dei, consegui meu primeiro emprego. ",
    languages: ["html", "styled_components", "javascript"],
    url_site: "https://page-vnw.vercel.app/",
    year: 2022,
  },
];

export { dataProjects };
