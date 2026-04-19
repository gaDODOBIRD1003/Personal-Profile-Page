function About() {
  return (
    <section
      id="about"
      className="py-24 flex items-center justify-center px-6"
    >
      <div className="max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          About <span className="text-yellow-400">Me</span>
        </h2>

        <p className="text-lg dark:text-gray-300 leading-relaxed">
          Hi! I'm <strong>Edgardo Mangulabnan Jr.</strong>, a BSIT-MI student passionate
          about web development, UI design, and building interactive systems. I enjoy
          learning modern tools like React, Vite, and Tailwind CSS, and I'm currently
          exploring full-stack development.
        </p>

        <p className="mt-4 dark:text-gray-300 leading-relaxed">
          When I'm not coding, I'm usually into music, gaming, and other simple hobbies
          that help me stay creative, balanced, and disciplined.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["🎵 Music", "🎮 Gaming", "💻 Coding", "🎨 UI Design", "📚 Learning"].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition-colors duration-200 cursor-default"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default About;