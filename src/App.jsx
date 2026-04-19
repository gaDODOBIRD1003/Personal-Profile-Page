import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Fun from "./components/Fun";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div
      className={`${theme} min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300`}
    >
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <Home />
        <About />
        <Certificates />
        <Skills />
        <Projects />
        <Fun />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;