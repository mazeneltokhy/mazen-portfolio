"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {/* Mobile Title */}
      <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-[#0a192f]/80 px-6 py-4 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-200">
          Contact
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-xl"
      >
        <h2 className="text-3xl font-bold text-slate-200">
          Let's build something together.
        </h2>

        <p className="mt-6 leading-8 text-slate-400">
          I'm currently looking for Frontend Developer opportunities,
          internships, and freelance projects. If you have an idea or a
          project you'd like to discuss, feel free to reach out.
        </p>

        <a
          href="mailto:mazeneltokhy4@gmail.com?subject=Frontend%20Opportunity"
          className="inline-flex items-center gap-2 rounded-md border border-[#64ffda] px-5 py-3 text-[#64ffda] transition-all duration-300 hover:bg-[#64ffda] hover:text-[#0f172a]"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}