import Image from "next/image";
import Reveal from "./Reveal";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string | null;
  gradient: string;
  placeholder?: boolean;
};

const projects: Project[] = [
  {
    title: "Class Schedule Organizer",
    description:
      "Full-stack web app that lets students input course options and automatically suggests conflict-free schedules optimized around their availability. Built a relational schema and RESTful Flask routes with real-time schedule rendering.",
    tech: ["Python", "Flask", "SQL", "JavaScript"],
    github: "https://github.com/Sydefxxs",
    live: "",
    image: null,
    gradient: "from-indigo-900/60 via-purple-900/40 to-[#161616]",
  },
  {
    title: "Inventory Management System",
    description:
      "Console-based inventory tracker built on OOP principles — CRUD operations, low-stock alerts, and formatted sales reporting. Applied linked lists and sorting algorithms to manage and query records efficiently.",
    tech: ["C++", "OOP", "Data Structures"],
    github: "https://github.com/Sydefxxs",
    live: "",
    image: null,
    gradient: "from-cyan-900/60 via-blue-900/40 to-[#161616]",
  },
  {
    title: "Small Business Landing Pages",
    description:
      "Responsive landing pages for local small businesses with interactive JS to boost engagement and mobile usability. Worked directly with clients to turn business needs into clean, functional layouts on tight timelines.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Sydefxxs",
    live: "",
    image: null,
    gradient: "from-emerald-900/60 via-teal-900/40 to-[#161616]",
  },
  {
    title: "Portfolio Website",
    description:
      "This site — built with Next.js, TypeScript, and Tailwind CSS. Responsive, dark-themed, with scroll animations and a working contact form. Deployed on Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Sydefxxs/PortfolioWebsite",
    live: "https://arathgarza.com",
    image: null,
    gradient: "from-fuchsia-900/60 via-indigo-900/40 to-[#161616]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <Reveal>
        <h2 className="text-sm font-mono text-indigo-400 tracking-widest uppercase mb-3">
          03. Projects
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Things I&apos;ve built
        </h3>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            delay={i * 120}
            className="bg-[#161616] border border-[#262626] rounded-xl overflow-hidden flex flex-col hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-200 group"
          >
            {/* Image / gradient banner */}
            <div className="relative h-44 overflow-hidden">
              {project.placeholder && (
                <span className="absolute top-3 right-3 z-10 text-[10px] font-mono uppercase tracking-wider text-indigo-300 bg-indigo-500/15 border border-indigo-500/30 px-2 py-1 rounded-full">
                  Coming soon
                </span>
              )}
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div
                  className={`w-full h-full bg-gradient-to-b ${project.gradient} flex items-center justify-center`}
                >
                  <svg className="w-12 h-12 text-indigo-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-white font-semibold text-lg">{project.title}</h4>
                <div className="flex gap-3 ml-2 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live site"
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-center text-gray-500 text-sm">
        See more on{" "}
        <a
          href="https://github.com/Sydefxxs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline"
        >
          GitHub
        </a>
      </p>
    </section>
  );
}
