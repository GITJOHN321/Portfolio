import {
  ReactSvg,
  NodeSvg,
  HtmlSvg,
  CssSvg,
  JsSvg,
  TailwindSvg,
  GitSvg,
  ViteSvg,
} from "./urlSvg";
import portfolioImage from "../assets/img/portada1.jpg";

export const data = {
  name: "Sebastian Rodriguez",
  email: "rodriguez.aza.john@gmail.com",
  cel: "+57 318 264 5363",
  ocupation: "full-stack developer",
  github: `https://github.com/GITJOHN321`,
  linkedIn: `https://www.linkedin.com/in/john-sebastian-rodriguez-aza/`
};

export const DataSvg = [
  {
    src: ReactSvg,
    title: "Reac Js",
  },
  {
    src: NodeSvg,
    title: "Node Js",
  },
  {
    src: HtmlSvg,
    title: "HTML5",
  },
  {
    src: CssSvg,
    title: "CSS",
  },
  {
    src: JsSvg,
    title: "Javascript",
  },
  {
    src: TailwindSvg,
    title: "Tailwind",
  },
  {
    src: GitSvg,
    title: "Git",
  },
  {
    src: ViteSvg,
    title: "Vite",
  },
];

export const DataProjects = [
  { 
    id:1,
    url: `https://github.com/GITJOHN321/Portfolio`,
    title: "personal portfolio",
    description: "This project is a personal portfolio made in react and tawilwindcss, using vite",
    image: portfolioImage
  },
  { 
    id:2,
    url: `https://github.com/GITJOHN321/Portfolio`,
    title: "personal portfolio",
    description: "This project is a personal portfolio made in react and tawilwindcss, using vite",
    image: portfolioImage
  },
];
