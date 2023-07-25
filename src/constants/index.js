import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  python,
  tailwind,
  nodejs,
  mongodb,
  git,
  next,
  eth,
  threejs,
  java,

  blog,
  keeps, 

  pu,
  vit,
  lukes,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "eth",
    icon: eth,
  },
];


const projects = [
  {
    name: "bloG",
    description:
      "Your old school blog website where you can add your own content or read some kickass research blogs by other users. And maybe the site is also using the Chat-GPT API to do some cool stuff (using prompt engineering) depending upon the time in the future when you are reading this.",
    tags: [
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "EJS",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/PRIMTAA/blog-GIT",
  },
  {
    name: "keeperLITE",
    description:
    "Google forgot to provide a LITE version for their keeper app. Well worry not, i got them covered. Introducing to you all the very basic keeps app which is most likely not connected to any database :) making your data completely safe from any sort of hack and even you if you refresh the site. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: keeps,
    source_code_link: "https://github.com/PRIMTAA/keeperApp",
  },
  
];

const edus = [
  {
    edu:
      "Came across the world of Machine Learning, Data Science and BlockChain technology.",
    name: "Vellore Institute of Technology",
    place: "Vellore",
    degree: "Masters of Computer Application",
    image: vit,
  },
  {
    edu:
      "Started coding and got to know about core computer concepts like networking, OS and DBMS.",
    name: "SGGS, Panjab University",
    place: "Chandigarh",
    degree: "Bachelors of Computer Application",
    image: pu,
  },
  {
    edu:
      "Wrote my first hello world in 6th standard and took PCM with IT in my higher secondary years.",
    name: "St. Luke's. Sen. Sec. School",
    place: "Solan",
    degree: "Senior Secondary Education",
    image: lukes,
  },
];

export { services, technologies, projects, edus };