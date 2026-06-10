import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <Reveal>
        <h2 className="text-sm font-mono text-indigo-400 tracking-widest uppercase mb-3">
          01. About Me
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          A little about me
        </h3>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Reveal className="space-y-4 text-gray-400 leading-relaxed">
          <p>
            I&apos;m Arath, a Computer Science student with a passion for building things that live on the internet.
            I enjoy creating elegant, user-friendly web applications from the frontend all the way to the backend.
          </p>
          <p>
            My journey into software started with curiosity — taking apart how things work and putting them back together
            in new ways. That curiosity has grown into a drive to build real, production-quality software.
          </p>
          <p>
            When I&apos;m not writing code, you&apos;ll find me exploring new technologies, contributing to projects,
            or working on ideas that solve real problems.
          </p>
          <p>
            I&apos;m actively looking for <span className="text-indigo-400">internship opportunities</span> where I can
            contribute, learn, and grow alongside experienced engineers.
          </p>
        </Reveal>

        {/* Quick facts */}
        <Reveal delay={150} className="bg-[#161616] border border-[#262626] rounded-lg p-6 space-y-4 hover:border-indigo-500/40 transition-colors">
          <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Quick Facts</h4>
          {[
            { label: "Status", value: "CS Student @ UTRGV" },
            { label: "Available", value: "Internship / Part-time" },
            { label: "Location", value: "Brownsville, Texas" },
            { label: "Email", value: "arathgarza23@gmail.com" },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <span className="text-indigo-400 mt-0.5">▹</span>
              <div>
                <span className="text-gray-500 text-sm">{label}: </span>
                <span className="text-gray-300 text-sm">{value}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
