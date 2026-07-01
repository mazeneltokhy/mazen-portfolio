"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-stack e-commerce application built with Next.js featuring authentication, shopping cart, product management, and a responsive user interface.",
    image: "/images/projects/1-e-commerce.png",
    github: "https://github.com/mazeneltokhy/e-commerce",
    live: "https://e-commerce-pearl-mu-36.vercel.app/",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website showcasing my projects, skills, and experience with smooth animations and modern UI design.",
    image: "/images/projects/1-hello.png",
    github: "https://github.com/mazeneltokhy/DANIELS",
    live: "https://mazeneltokhy.github.io/DANIELS/",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Yummy Recipes",
    description:
      "A recipe discovery website that allows users to browse meals, search recipes, explore categories, and view detailed cooking instructions.",
    image: "/images/projects/1-yummy.png",
    github: "https://github.com/mazeneltokhy/yummy",
    live: "https://mazeneltokhy.github.io/yummy/",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    title: "MTI Website",
    description:
      "A modern university website built with React, featuring responsive layouts, interactive pages, and an improved user experience.",
    image: "/images/projects/1-mti.png",
    github: "https://github.com/mazeneltokhy/MTI",
    live: "https://mti-flame.vercel.app/",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {/* Mobile Title */}
      <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-[#0a192f]/80 px-6 py-4 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-200">
          Projects
        </h2>
      </div>

      <ul className="space-y-8">
        {projects.map((project) => (
          <motion.li
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="group"
          >
            <article className="grid gap-6 rounded-xl border border-transparent p-6 transition-all duration-300 hover:bg-slate-800/40 hover:border-slate-700 lg:grid-cols-[200px_1fr]">

              {/* Image */}
              <div className="h-32 overflow-hidden rounded-lg border border-slate-700 lg:h-28">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={220}
                  className="h-full w-full object-cover transition duration-500"
                />
              </div>

              {/* Content */}
              <div>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xl font-semibold text-slate-200 transition duration-300 group-hover:text-[#64ffda]  "
                >
                  {project.title}

                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex gap-4 text-xl text-slate-400">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-[#64ffda]"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-[#64ffda]"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </article>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}