"use client";

import { motion } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
const experiences = [
  {
    period: "2025",
    title: "Frontend Intern · Codveda Technologies",
    description:
      "Built responsive user interfaces using React and Next.js. Worked with reusable components, REST APIs, Git, and modern frontend development practices.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git"],
  },
  {
    period: "2025",
    title: "Frontend Development Trainee · Route Academy",
    description:
      "Completed an intensive Frontend Development training program covering HTML, CSS, JavaScript, Bootstrap, React, Git, and modern web development practices. Built multiple real-world frontend projects throughout the training.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React",
      "Git",
    ],
    certificate: "/certificates/route-certificate.pdf",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {/* Mobile Title */}
      <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-[#0a192f]/80 px-6 py-4 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-200">
          Experience
        </h2>
      </div>

      <ul className="group/list">
        {experiences.map((experience) => (
          <motion.li
            key={experience.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="group relative overflow-hidden rounded-xl border border-transparent p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#64ffda]/20 hover:bg-[#112240]/70 hover:shadow-[0_0_40px_rgba(100,255,218,.08)] lg:grid lg:grid-cols-[120px_1fr] lg:gap-4">

              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-[#64ffda]/5 via-transparent to-transparent" />

              {/* Date */}
              <header className="pt-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
                {experience.period}
              </header>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-slate-200 transition-colors duration-300 ">
                  {experience.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {experience.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {"certificate" in experience && experience.certificate && (
                  <a
                    href={experience.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-[#64ffda]"
                  >
                    <span>View Route Certificate</span>

                    <HiOutlineArrowTopRightOnSquare
                      className="text-[18px]  transition-transform duration-300 "
                    />
                  </a>
                )}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}