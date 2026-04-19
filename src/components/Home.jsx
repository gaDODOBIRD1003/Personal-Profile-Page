import Profile from "../assets/Profile.jpg";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20"
    >
      {/* Profile Image */}
      <img
        src={Profile}
        alt="Edgardo Mangulabnan Jr."
        className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover shadow-2xl ring-4 ring-yellow-400 hover:scale-105 hover:ring-8 transition-all duration-300 mb-6"
      />

      {/* Name & Title */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-2">
        Hi, I'm{" "}
        <span className="text-yellow-400">Gado</span> 👋
      </h1>

      <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-300 max-w-xl mt-2 mb-8">
        BSIT-MI Student · Web Developer · UI Enthusiast
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 hover:scale-105 transition-all duration-200 shadow-lg"
        >
          View My Work 🚀
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-200"
        >
          Contact Me 📬
        </a>
      </div>

      {/* Scroll hint */}
      <div className="mt-16 animate-bounce text-gray-400 dark:text-gray-500 text-sm flex flex-col items-center gap-1">
        <span>Scroll down</span>
        <span className="text-xl">↓</span>
      </div>
    </section>
  );
}

export default Home;