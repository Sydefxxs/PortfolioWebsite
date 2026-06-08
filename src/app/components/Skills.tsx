const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    title: "Tools & Infrastructure",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Vercel", "Docker"],
  },
  {
    title: "Concepts",
    skills: ["REST APIs", "Data Structures", "Algorithms", "OOP", "Agile"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-sm font-mono text-indigo-400 tracking-widest uppercase mb-3">
        02. Skills
      </h2>
      <h3 className="text-3xl sm:text-4xl font-bold text-white mb-12">
        Technologies I work with
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-[#161616] border border-[#262626] rounded-lg p-6 hover:border-indigo-500/50 transition-colors"
          >
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">
              {category.title}
            </h4>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-gray-400 text-sm">
                  <span className="text-indigo-400 text-xs">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
