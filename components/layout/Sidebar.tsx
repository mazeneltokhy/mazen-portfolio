"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useActiveSection from "@/hooks/useActiveSection";

const navLinks = [
  { id: "about", name: "About", href: "#about" },
  { id: "experience", name: "Experience", href: "#experience" },
  { id: "projects", name: "Projects", href: "#projects" },
  { id: "contact", name: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const activeSection = useActiveSection();

  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[58%] lg:flex-col lg:justify-between lg:py-24">
      <div className="max-w-lg">
        <h1 className="text-5xl font-extrabold tracking-[-0.04em] text-slate-200 lg:text-6xl">
          Mazen Eltokhy
        </h1>
        <h2 className="mt-4 text-xl font-medium tracking-tight text-slate-300">
          Frontend Developer
        </h2>
        <p className="mt-6 max-w-sm text-base leading-7 text-slate-400">
          I build accessible, fast and modern web applications using React,
          Next.js and TypeScript.
        </p>

        <nav className="mt-20 hidden lg:block">
          <ul className="space-y-5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="group flex w-fit items-center py-2"
                >
                  <span
                    className={`mr-4 h-px transition-all duration-500 ${activeSection === link.id
                      ? "w-16 bg-[#64ffda]"
                      : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-[#64ffda]"
                      }`}
                  />

                  <span
                    className={`text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${activeSection === link.id
                      ? "text-[#64ffda]"
                      : "text-slate-500 group-hover:text-slate-200"
                      }`}
                  >
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-16 flex gap-6 text-2xl text-slate-500">
        <a
          href="https://github.com/mazeneltokhy"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 hover:-translate-y-1 hover:text-[#64ffda]"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/mazeneltokhy120"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 hover:-translate-y-1 hover:text-[#64ffda]"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="mailto:mazeneltokhy4@gmail.com?subject=Frontend%20Opportunity"
          className="transition-all duration-300 hover:-translate-y-1 hover:text-[#64ffda]"
          aria-label="Email"
        >
          <MdEmail />
        </a>
      </div>
    </aside>
  );
}