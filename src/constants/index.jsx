import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "HTML, CSS, Tailwind, JavaScript, TypeScript, React, Framer Motion, Git, Python, ";

  export const PROJECTS = [
    {
      id: 1,
      title: "SwadExpress",
      description:
        "A full-featured food delivery application with user authentication and checkout.",
      imgSrc: project1,
      link: "https://swad-express.vercel.app/",
    },
    {
      id: 2,
      title: "Claculator",
      description:
        "A simple calculator application with basic arithmetic operations.",
      imgSrc: project2,
      link: "https://calculator-three-olive-82.vercel.app/",
    },
    {
      id: 3,
      title: "Dice Game",
      description:
        "A simple dice game where users can roll dice and if the they guess the correct number, points are added else points are deducted.",
      imgSrc: project3,
      link: "https://dice-game-lac-psi.vercel.app/",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase projects and skills.",
      imgSrc: project4,
      link: "https://portfolio-psi-ebon-25.vercel.app/",
    },
    {
      id: 5,
      title: "Todo List",
      description: "A simple todo list application to manage tasks and deadlines.",
      imgSrc: project5,
      link: "https://to-do-list-murex-chi.vercel.app/",
    },
    {
      id: 6,
      title: "E-commerce filter",
      description:
        "An e-commerce filter component for product filtering and searching.",
      imgSrc: project6,
      link: "https://ecommercefilteration.vercel.app/",
    },
    {
      id: 7,
      title: "Nike brand page",
      description: "A Nike brand page showcasing products and features.",
      imgSrc: project7,
      link: "https://nike-brand-page-orcin.vercel.app/",
    },
    {
      id: 8,
      title: "Just Chill",
      description: "Movie screening website",
      imgSrc: project8,
      link: "https://just-chill-peach.vercel.app/",
    }
  ];

export const ABOUT =
  "I'm a frontend developer driven by the goal of building responsive, interactive, and visually appealing web interfaces. With a strong foundation in HTML, CSS, and Tailwind, I design clean and consistent layouts. I develop dynamic user experiences using JavaScript, TypeScript, and React, and enhance them with smooth animations through Framer Motion. I follow modern development practices, using Git for version control and maintaining clean, scalable code. I'm always exploring new tools and techniques to stay current and deliver the best user experiences possible."

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/pratyush-chouksey/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
  
  {
    href: "https://github.com/Pratyush-Chouksey",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://leetcode.com/u/jVQTsqY7xG/",
    icon: < TbBrandLeetcode fontSize={26} className="hover:opacity-80" />,
  }
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "pratyush.chouksey1983@gmail.com",
  phone: "+91 9359853665",
};
