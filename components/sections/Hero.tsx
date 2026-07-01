"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen pt-32">
      <Container>
        <div className="grid min-h-[calc(100vh-128px)] items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.2em] text-[#64ffda]">
              Hi, my name is
            </p>

            <h1 className="text-5xl font-extrabold leading-none tracking-tight text-[#ccd6f6] md:text-7xl xl:text-8xl">
              Mazen Eltokhy.
            </h1>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#8892b0] md:text-5xl xl:text-6xl">
              I build modern web experiences.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#8892b0]">
              I'm a Frontend Developer specializing in building fast,
              accessible, and responsive web applications using React,
              Next.js, TypeScript, and Tailwind CSS.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#projects" variant="outline">
                View Projects
              </Button>

              <Button href="#contact">
                Contact Me
              </Button>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="group relative flex h-72 w-72 items-center justify-center">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-[#64ffda]/10 blur-3xl transition-all duration-500 group-hover:bg-[#64ffda]/20" />

              {/* Circle */}
              <div className="relative flex h-full w-full items-center justify-center rounded-full border-2 border-[#64ffda] bg-[#112240] text-7xl font-bold text-[#64ffda] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_50px_rgba(100,255,218,.25)]">
                ME
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}