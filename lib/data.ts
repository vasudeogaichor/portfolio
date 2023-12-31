import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import blogsAppFrontendImg from "@/public/blogsAppFrontend.png";
import blogsAppBackendImg from "@/public/blogsAppBackend.png";
import canvasAppImg from "@/public/canvasApp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Blogs End to End",
    description:
      "A conventional blogs app written in javascript, implemented with MERN stack, includes JWT auth, user register and login, password reset.",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Docker"],
    imageUrl: blogsAppFrontendImg,
  },
  {
    title: "Blogs (Backend only)",
    description:
      "A backend to perform CRUD operations on blogs entity, implemented with typescript and postgres.",
    tags: ["Node.js", "TypeScript", "Express.js", "Postgres", "Sequelize.js" ,"Docker"],
    imageUrl: blogsAppBackendImg,
  },
  {
    title: "Canvas Editor with React.js",
    description:
      "A canvas app to add and edit text and images, implemented with react-draggable library.",
    tags: ["React", "react-draggable"],
    imageUrl: canvasAppImg,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;