import { useState } from "react";

const questions = [
  {
    q: "It's 2AM. You're debugging. What's your vibe?",
    options: [
      { label: "Console.log EVERYTHING 🔥", points: { frontend: 2, chaotic: 3 } },
      { label: "Methodical breakpoints only 🧠", points: { backend: 3, methodical: 3 } },
      { label: "Google it and pray 🙏", points: { chaotic: 2, frontend: 1 } },
      { label: "Sleep. Future me will handle it 😴", points: { chaotic: 3 } },
    ],
  },
  {
    q: "Pick your coding soundtrack:",
    options: [
      { label: "Lo-fi hip hop 🎵", points: { frontend: 2, methodical: 1 } },
      { label: "Death metal 🤘", points: { chaotic: 3, backend: 1 } },
      { label: "Total silence 🤫", points: { backend: 3, methodical: 2 } },
      { label: "Whatever's trending 🎧", points: { frontend: 3, chaotic: 1 } },
    ],
  },
  {
    q: "What does your variable naming look like?",
    options: [
      { label: "camelCaseAllTheWay", points: { frontend: 2, methodical: 2 } },
      { label: "x, y, z, xx, xyz2", points: { chaotic: 3 } },
      { label: "snake_case_forever", points: { backend: 3, methodical: 1 } },
      { label: "SCREAMING_CONSTANTS_ONLY", points: { backend: 2, chaotic: 1 } },
    ],
  },
];

const results = {
  frontend: {
    title: "Frontend Wizard 🧙‍♂️",
    desc: "You live for beautiful UIs, pixel-perfect designs, and making things look *chef's kiss*. CSS is your spellbook.",
    color: "text-cyan-400",
  },
  backend: {
    title: "Backend Architect 🏗️",
    desc: "Logic, order, structure. You think in systems, love databases, and hate magic numbers.",
    color: "text-green-400",
  },
  chaotic: {
    title: "Chaotic Coder ⚡",
    desc: "It works and that's all that matters. Ship fast, break things, refactor never. You are the main character.",
    color: "text-yellow-400",
  },
  methodical: {
    title: "The Methodical Dev 📐",
    desc: "Clean code, clean commits, clean desk. You write documentation for fun. People both fear and admire you.",
    color: "text-purple-400",
  },
};

function Fun() {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({ frontend: 0, backend: 0, chaotic: 0, methodical: 0 });
  const [result, setResult] = useState(null);

  const handleAnswer = (points) => {
    const newScores = { ...scores };
    Object.entries(points).forEach(([key, val]) => {
      newScores[key] = (newScores[key] || 0) + val;
    });
    setScores(newScores);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      const top = Object.entries(newScores).sort((a, b) => b[1] - a[1])[0][0];
      setResult(top);
    }
  };

  const reset = () => {
    setCurrent(0);
    setScores({ frontend: 0, backend: 0, chaotic: 0, methodical: 0 });
    setResult(null);
  };

  return (
    <section
      id="fun"
      className="py-24 flex items-center justify-center px-6"
    >
      <div className="max-w-xl w-full text-center">
        <h2 className="text-4xl font-extrabold mb-2">
          Something <span className="text-yellow-400">Fun</span> 🎉
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10">
          Which type of developer are you? Take the quiz!
        </p>

        {!result ? (
          <div className="bg-gray-100 dark:bg-slate-700 rounded-2xl p-8 shadow-lg">
            {/* Progress */}
            <div className="flex gap-2 mb-6 justify-center">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full flex-1 transition-all duration-300 ${
                    i <= current ? "bg-yellow-400" : "bg-gray-300 dark:bg-slate-500"
                  }`}
                />
              ))}
            </div>

            <p className="text-sm text-gray-400 dark:text-gray-400 mb-2">
              Question {current + 1} of {questions.length}
            </p>
            <h3 className="text-xl font-bold mb-6 dark:text-white">
              {questions[current].q}
            </h3>

            <div className="flex flex-col gap-3">
              {questions[current].options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleAnswer(opt.points)}
                  className="w-full px-4 py-3 text-left bg-white dark:bg-slate-600 rounded-xl hover:bg-yellow-400 hover:text-black font-medium transition-all duration-200 shadow hover:shadow-md hover:scale-[1.02]"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-gray-100 dark:bg-slate-700 rounded-2xl p-10 shadow-lg animate-pulse-once">
            <div className="text-6xl mb-4">🎊</div>
            <h3 className={`text-3xl font-extrabold mb-4 ${results[result].color}`}>
              {results[result].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {results[result].desc}
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 hover:scale-105 transition-all duration-200"
            >
              Try Again 🔁
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Fun;