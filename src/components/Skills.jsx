const skills = [
  { name: "HTML", emoji: "🟠", level: 65, color: "bg-orange-500" },
  { name: "CSS / Tailwind", emoji: "🔵", level: 20, color: "bg-sky-400" },
  { name: "JavaScript", emoji: "🟡", level: 45, color: "bg-yellow-400" },
  { name: "React", emoji: "⚛️", level: 30, color: "bg-cyan-400" },
  { name: "Vite", emoji: "⚡", level: 75, color: "bg-purple-500" },
  { name: "Git", emoji: "🐙", level: 80, color: "bg-red-500" },
  { name: "Python", emoji: "🐍", level: 75, color: "bg-green-500" },
  { name: "Bootstrap", emoji: "🅱️", level: 45, color: "bg-indigo-500" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 flex items-center justify-center px-6"
    >
      <div className="w-full max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold mb-10">
          My <span className="text-yellow-400">Skills</span>
        </h2>

        <div className="flex flex-col gap-5">
          {skills.map((skill) => (
            <div key={skill.name} className="text-left">
              <div className="flex justify-between mb-1">
                <span className="font-semibold dark:text-white">
                  {skill.emoji} {skill.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3">
                <div
                  className={`${skill.color} h-3 rounded-full transition-all duration-700`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;