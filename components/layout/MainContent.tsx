import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "./Footer";

export default function MainContent() {
  return (
    <main className="w-full pt-24 lg:w-[55%] lg:py-24">
      <div className="mx-auto max-w-[670px]">
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}