const projects = [
  {
    title: "Shopping Gads",
    description: "Responsive e-commerce UI built with HTML, CSS, and Bootstrap.",
    tags: ["HTML", "CSS", "Bootstrap"],
    emoji: "🛒",
    link: "https://gadodobird1003.github.io/Shopping-Gads/",
  },
  {
    title: "Portfolio-ni-Gads",
    description: "HTML & CSS passion project for layout and design practice.",
    tags: ["HTML", "CSS"],
    emoji: "👤",
    link: "https://gadodobird1003.github.io/Portfolio-ni-Gads/",
  },
  {
    title: "Disaster Awareness Game",
    description: "Pygame-based educational game for disaster preparedness.",
    tags: ["Python", "Pygame"],
    emoji: "🌪️",
    link: "#",
  },
  {
    title: "Google Replica Home Page",
    description: "Faux Google homepage built with HTML and CSS.",
    tags: ["HTML", "CSS"],
    emoji: "🔍",
    link: "https://github.com/gaDODOBIRD1003/Google-Replica-Webpage",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 flex items-center justify-center px-6"
    >
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-4xl font-extrabold mb-10">
          My <span className="text-yellow-400">Projects</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-6 bg-gray-100 dark:bg-slate-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl mb-3">{project.emoji}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-200 dark:bg-slate-600 text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-sm text-yellow-400 font-semibold hover:underline"
                >
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;