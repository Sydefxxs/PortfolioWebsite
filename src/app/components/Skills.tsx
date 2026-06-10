import {
  SiPython, SiTypescript, SiJavascript, SiCplusplus, SiDotnet,
  SiHtml5, SiCss, SiReact, SiNextdotjs, SiNodedotjs, SiFlask,
  SiExpress, SiTailwindcss,
  SiGit, SiGithub, SiLinux, SiVercel, SiDocker, SiNpm,
  SiPostgresql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";
import Reveal from "./Reveal";

type Skill = { label: string; Icon: IconType; color: string };

const skillCategories: { title: string; skills: Skill[] }[] = [
  {
    title: "Languages",
    skills: [
      { label: "Python",     Icon: SiPython,     color: "#3776AB" },
      { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { label: "HTML5",      Icon: SiHtml5,      color: "#E34F26" },
      { label: "CSS",        Icon: SiCss,        color: "#1572B6" },
      { label: "Java",       Icon: FaJava,       color: "#ED8B00" },
      { label: "C#",         Icon: SiDotnet,     color: "#512BD4" },
      { label: "C++",        Icon: SiCplusplus,  color: "#00599C" },
      { label: "SQL",        Icon: SiPostgresql, color: "#336791" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { label: "React",        Icon: SiReact,       color: "#61DAFB" },
      { label: "Next.js",      Icon: SiNextdotjs,   color: "#ffffff" },
      { label: "Node.js",      Icon: SiNodedotjs,   color: "#339933" },
      { label: "Express",      Icon: SiExpress,     color: "#ffffff" },
      { label: "Flask",        Icon: SiFlask,       color: "#ffffff" },
      { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Tools & Infrastructure",
    skills: [
      { label: "Git",     Icon: SiGit,              color: "#F05032" },
      { label: "GitHub",  Icon: SiGithub,           color: "#ffffff" },
      { label: "npm",     Icon: SiNpm,              color: "#CB3837" },
      { label: "Linux",   Icon: SiLinux,            color: "#FCC624" },
      { label: "Vercel",  Icon: SiVercel,           color: "#ffffff" },
      { label: "Docker",  Icon: SiDocker,           color: "#2496ED" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <Reveal>
        <h2 className="text-sm font-mono text-indigo-400 tracking-widest uppercase mb-3">
          02. Skills
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Technologies I work with
        </h3>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, i) => (
          <Reveal
            key={category.title}
            delay={i * 120}
            className="bg-[#161616] border border-[#262626] rounded-xl p-6 hover:border-indigo-500/40 transition-colors"
          >
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">
              {category.title}
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {category.skills.map(({ label, Icon, color }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="p-2 rounded-lg bg-[#1e1e1e] group-hover:bg-[#262626] transition-colors">
                    <Icon style={{ color }} className="w-6 h-6 text-2xl" />
                  </div>
                  <span className="text-gray-500 text-xs text-center group-hover:text-gray-300 transition-colors">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
