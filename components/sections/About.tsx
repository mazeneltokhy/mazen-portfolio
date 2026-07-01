"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {/* Mobile Heading */}
      <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-[#0a192f]/80 px-6 py-4 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-200">
          About
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-5 max-w-[65ch] text-[17px] leading-7 text-slate-400"
      >
        <p>
          I'm a Frontend Developer passionate about building fast,
          responsive, and accessible web applications using{" "}
          <span className="font-medium text-slate-200">
            React, Next.js, TypeScript
          </span>{" "}
          and{" "}
          <span className="font-medium text-slate-200">
            Tailwind CSS
          </span>.
        </p>

        <p>
          I enjoy turning ideas into real products with clean code,
          reusable components, modern UI/UX principles, and excellent
          user experience.
        </p>

        <p>
          Currently, I'm focused on improving my skills, building
          production-ready projects, and looking for opportunities where
          I can grow as a Frontend Engineer while contributing to real
          products.
        </p>
      </motion.div>
    </section>
  );
}