import { useState } from "react";

function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [nameClicks, setNameClicks] = useState(0);
  const [showEgg, setShowEgg] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Certificates", href: "#certificates" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Fun", href: "#fun" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNameClick = () => {
    setNameClicks((prev) => {
      const next = prev + 1;
      if (next === 5) setShowEgg(true);
      return next;
    });
  };

  return (
    <>
      <nav className="sticky top-0 z-40 flex items-center justify-between bg-slate-800 text-white px-6 py-4 shadow-lg">
        <div
          className="font-bold text-xl cursor-pointer select-none hover:text-yellow-400 transition-colors duration-200"
          onClick={handleNameClick}
          title="Try clicking me 5 times 👀"
        >
          Edgardo Mangulabnan Jr.
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-4 font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            className="text-xl hover:scale-110 transition-transform duration-200"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            title="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="text-2xl sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col items-center gap-3 py-4 bg-slate-700 text-white sm:hidden z-30 relative">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-yellow-400 transition-colors duration-200 font-semibold"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            className="text-xl hover:scale-110 transition-transform duration-200"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
              setOpen(false);
            }}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      )}


      {showEgg && (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 gap-4">
          <p className="text-white text-2xl font-bold animate-bounce">
            🎉 You found the secret! 🎉
          </p>
          <img
            src="/src/assets/mnm-shaking-butt.gif"
            alt="chaos mode"
            className="w-72 rounded-xl shadow-2xl"
          />
          <button
            className="mt-4 px-6 py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition"
            onClick={() => {
              setShowEgg(false);
              setNameClicks(0);
            }}
          >
            Close ✖
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;