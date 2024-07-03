import React from "react";
import { FaPalette, FaReact, FaCode } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Devansh Agrawal",
  title: "Full Stack Web Developer",
  social: {
    github: "https://github.com/devanshag89",
    dribbble: "https://github.com/BraydenTW",
    LinkedIn: "https://www.linkedin.com/in/devansh-agrawal-5484a7230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "devanshagrawal511@gmail.com",
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
      description: "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: [
        "template",
        "portfolio",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentw/react-tailwind-portfolio"
    },
    {
      title: "Bank Management System",
      description: "Full stack project built with PHP & MySQL",
      tags: [
        "PHP",
        "MySQL",
        "HTML",
        "tailwindcss"
      ],
      link: "https://github.com/devanshag89/Bank-Project"
    }
  ]
};
export default data;