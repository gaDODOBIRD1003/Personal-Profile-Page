import { useState } from "react";
import elmo from "../assets/elmo-burning-welcome-to-chaos.gif";

function Footer() {
  const [showMeme, setShowMeme] = useState(false);

  return (
    <footer
      className="relative py-8 flex items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-slate-700 cursor-default"
      onMouseEnter={() => setShowMeme(true)}
      onMouseLeave={() => setShowMeme(false)}
    >
      <span>©</span>
      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
      <span>{new Date().getFullYear()}</span>
      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
      <span className="hover:text-yellow-400 transition-colors duration-200">
        Gado Mangulabnan
      </span>
      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
      <span>Made with ❤️ & React</span>

      {showMeme && (
        <div className="absolute bottom-16 flex justify-center animate-bounce pointer-events-none">
          <img
            src={elmo}
            alt="footer chaos"
            className="w-24 rounded-lg shadow-xl"
          />
        </div>
      )}
    </footer>
  );
}

export default Footer;