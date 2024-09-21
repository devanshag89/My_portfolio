import React from "react";
import { FaPalette, FaReact, FaCode } from "react-icons/fa";
import portfolio from "../images/portfolio.png";
import bankImage from "../images/bankImage.png";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Devansh Agrawal",
  title: "Programmer + Developer",
  social: {
    github: "https://github.com/devanshag89",
    dribbble: "https://github.com/BraydenTW",
    LinkedIn: "https://www.linkedin.com/in/devansh-agrawal-5484a7230?utm",
    email: "devanshagrawal511@gmail.com",
    phone: "9984758472",
    add: "336, Indeever Nagar, Barwasagar, Jhansi, U.P. (284201)"
  },
  about: {
    title: "My Background",
    description:
      "I'm an enthusiastic B.Tech Computer Science student with a strong interest in technology. Proficient in programming languages like C, Java, and Python, with hands-on experience in software projects. Quick learner with excellent problem-solving skills, eager to excel in the field.",
  },
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Design/UX",
      skillIcon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: "React tailwind portfolio",
      image: portfolio,
      description: "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: [
        "portfolio",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentw/react-tailwind-portfolio"
    },
    {
      title: "Bank Management System",
      description: "Full stack project built with PHP & MySQL",
      image: bankImage,
      tags: [
        "PHP",
        "MySQL",
        "HTML",
        "tailwindcss"
      ],
      link: "https://github.com/devanshag89/Bank-Project"
    },
    {
      title: "Bank Management System",
      description: "Full stack project built with PHP & MySQL",
      image: bankImage,
      tags: [
        "PHP",
        "MySQL",
        "HTML",
        "tailwindcss"
      ],
      link: "https://github.com/devanshag89/Bank-Project"
    }
  ],

  navbar:[
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Skills",
      path: "/skills",
    }
  ],
};
export default data;