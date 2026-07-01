import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
  image,
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#112240] transition-all duration-300 hover:-translate-y-2 hover:border-[#64ffda]/40">
  <div className="group relative h-56 overflow-hidden">
  <Image
    src={image}
    alt={title}
    fill
    className="object-cover transition duration-500 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-[#0a192f]/30 transition duration-300 group-hover:bg-[#0a192f]/10" />
</div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-[#ccd6f6]">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-[#0a192f] px-3 py-1 text-sm text-[#64ffda]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-5 text-xl text-gray-400">
          <a href={github} target="_blank">
            <FaGithub className="transition hover:text-[#64ffda]" />
          </a>

          <a href={demo} target="_blank">
            <FiExternalLink className="transition hover:text-[#64ffda]" />
          </a>
        </div>
      </div>
    </div>
  );
}