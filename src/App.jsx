import { useState } from "react";
import Profile from "./assets/Profile.jpg";
import elmo from "./assets/elmo-burning-welcome-to-chaos.gif";
import mnm from "./assets/mnm-shaking-butt.gif";

function App() {
  const [open, setOpen] = useState(false);
  const [Theme, setTheme] = useState("dark");
  const [showFooterMeme, setShowFooterMeme] = useState(false);
  const [nameClicks, setNameClicks] = useState(0);
  const [showEgg, setShowEgg] = useState(false);

  return (
    <div
      className={`${Theme} min-h-screen text-slate-900 dark:bg-background dark:text-primary transition-all duration-300`}
    >
      {/* NAVBAR */}
      <div className="flex items-center justify-between bg-slate-800 text-white p-4">
        
        <div
          className="font-bold text-xl cursor-pointer"
          onClick={() => {
            setNameClicks(prev => {
              const newCount = prev + 1;

              if (newCount === 5) {
                setShowEgg(true);
              }

              return newCount;
            });
          }}
        >
          Edgardo Mangulabnan Jr.
        </div>

        {/* desktop nav */}
        <div className="font-bold hidden sm:flex gap-2">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>

          <button
            className="text-xl cursor-pointer hover:scale-105 duration-300"
            onClick={() =>
              setTheme(Theme === "light" ? "dark" : "light")
            }
          >
            {Theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* mobile button */}
        <button
          className="text-xl cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="flex flex-col items-center gap-2 p-4 sm:hidden dark:text-white">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>

          <button
            className="text-xl cursor-pointer hover:scale-105 duration-300"
            onClick={() =>
              setTheme(Theme === "light" ? "dark" : "light")
            }
          >
            {Theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      )}

      {/* PROFILE */}
      <div className="flex justify-center mt-6">
        <img
          className="w-64 h-64 rounded-full hover:scale-110 transition-all duration-300"
          src={Profile}
          alt="Profile"
        />
      </div>

      {/* ABOUT */}
      <section id="about" className="py-20 flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>

          <p className="text-lg dark:text-gray-300 leading-relaxed">
            Hi! I’m Edgardo Mangulabnan Jr., a BSIT-MI student passionate about web development,
            UI design, and building interactive systems. I enjoy learning modern tools like React,
            Vite, and Tailwind CSS, and I’m currently exploring full-stack development.
          </p>

          <p className="mt-4 dark:text-gray-300">
            When I’m not coding, I’m usually into music, gaming, and other simple hobbies that help me stay creative,
            balanced, and disciplined.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg font-medium">
            <div className="bg-white dark:bg-orange-700 p-4 rounded shadow hover:scale-105 transition">HTML</div>
            <div className="bg-white dark:bg-sky-400 text-black p-4 rounded shadow hover:scale-105 transition">CSS / Tailwind</div>
            <div className="bg-white dark:bg-javascriptyellow text-black p-4 rounded shadow hover:scale-105 transition">JavaScript</div>
            <div className="bg-white dark:bg-aquablue text-black p-4 rounded shadow hover:scale-105 transition">React</div>
            <div className="bg-white dark:bg-vite text-black p-4 rounded shadow hover:scale-105 transition">Vite</div>
            <div className="bg-white dark:bg-git text-black p-4 rounded shadow hover:scale-105 transition">Git</div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 flex items-center justify-center px-6">
        <div className="max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>

          <div className="grid sm:grid-cols-2 gap-6">

            <div className="p-6 bg-gray-200 dark:bg-slate-700 rounded-lg shadow hover:scale-105 duration-300 transition">
              <h3 className="text-xl font-bold mb-2">Shopping Gads</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Responsive e-commerce UI built with HTML, CSS, and Bootstrap.
              </p>
            </div>

            <div className="p-6 bg-gray-200 dark:bg-slate-700 rounded-lg shadow hover:scale-105 duration-300 transition">
              <h3 className="text-xl font-bold mb-2">Personal Profile Page</h3>
              <p className="text-gray-600 dark:text-gray-300">
                HTML & CSS passion project for layout and design practice.
              </p>
            </div>

            <div className="p-6 bg-gray-200 dark:bg-slate-700 rounded-lg shadow hover:scale-105 duration-300 transition">
              <h3 className="text-xl font-bold mb-2">Disaster Awareness Game</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pygame-based educational game for disaster preparedness.
              </p>
            </div>

            <div className="p-6 bg-gray-200 dark:bg-slate-700 rounded-lg shadow hover:scale-105 duration-300 transition">
              <h3 className="text-xl font-bold mb-2">Platform Game</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Simple platform game with obstacles and rewards.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl w-full">

          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Want to collaborate or ask something? Hit me up 👇
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left">

            <div className="p-4 rounded-lg bg-gray-200 dark:bg-slate-800 shadow hover:scale-105 transition">
              <p className="font-semibold">Email</p>
              <p className="text-gray-600 dark:text-gray-300">mangulabnangado@gmail.com</p>
            </div>
            
            <div className="p-4 rounded-lg bg-gray-200 dark:bg-slate-800 shadow hover:scale-105 transition">
              <p className="font-semibold">School Email</p>
              <p className="text-gray-600 dark:text-gray-300">ejmangulabnan@student.apc.edu.ph</p>
            </div>

            <div className="p-4 rounded-lg bg-gray-200 dark:bg-slate-800 shadow hover:scale-105 transition">
              <p className="font-semibold">LinkedIn</p>
              <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/edgardo-mangulabnan-4a18531b4</p>
            </div>

            <div className="p-4 rounded-lg bg-gray-200 dark:bg-slate-800 shadow hover:scale-105 transition">
              <p className="font-semibold">GitHub</p>
              <p className="text-gray-600 dark:text-gray-300">github.com/gaDODOBIRD1003</p>
            </div>

            <div className="p-4 rounded-lg bg-gray-200 dark:bg-slate-800 shadow hover:scale-105 transition">
              <p className="font-semibold">Facebook</p>
              <p className="text-gray-600 dark:text-gray-300">facebook.com/gaDODOBIRD03</p>
            </div>

            <div className="p-4 rounded-lg bg-gray-200 dark:bg-slate-800 shadow hover:scale-105 transition">
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600 dark:text-gray-300">+63 961 321 1623</p>
            </div>

          </div>

          <button className="mt-8 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Send Message
          </button>

        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="relative py-6 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300"
        onMouseEnter={() => setShowFooterMeme(true)}
        onMouseLeave={() => setShowFooterMeme(false)}
      >
        <span>©</span>

        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>

        <span>{new Date().getFullYear()}</span>

        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>

        <span>Gado Mangulabnan</span>

        {/* 🥚 FOOTER MEME POPUP */}
        {showFooterMeme && (
          <div className="absolute bottom-12 flex justify-center animate-bounce">
            <img
              src={elmo}
              alt="footer chaos"
              className="w-28 rounded-lg shadow-lg"
            />
          </div>
        )}
      </footer>

      {/* 🥚 EASTER EGG OVERLAY (IMPORTANT PART) */}
      {showEgg && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <img
            src={mnm}
            alt="chaos mode"
            className="w-96 rounded-lg shadow-lg animate-bounce"
          />

          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setShowEgg(false)}
          >
            ✖
          </button>
        </div>
      )}

    </div>
  );
}

export default App;