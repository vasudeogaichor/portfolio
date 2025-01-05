import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import blogsFrontendImg from "@/public/blogsFrontend.png";
import quizPlatformImg from "@/public/quizPlatform.png";
import mongoHelperImg from "@/public/mongoHelper.png";

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
    title: "Quiz Platform (MERN)",
    description:
      "A web app for timed MCQ tests with CAT engine",
    tags: ["Javascript", "React.js", "Express.js", "MongoDB"],
    imageUrl: quizPlatformImg,
    deployedUrl: 'https://quizplatform.vercel.app'
  },
  {
    title: "Mongo Steam Helper (CLI Tool)",
    description:
      "CLI tool for streaming large amounts of MongoDB data",
    tags: ["Typescript", "mongodb", "ora", "commander", "enquirer", "node-notifier"],
    imageUrl: mongoHelperImg,
  },
  {
    title: "Blogs End to End (MERN)",
    description:
      "A conventional blogs app written in javascript, implemented with MERN stack, includes JWT auth, user register and login, password reset.",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Docker"],
    imageUrl: blogsFrontendImg,
    deployedUrl: 'http://vasudeogaichor.pythonanywhere.com/blogs',
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
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;