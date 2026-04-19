import { useState } from "react";

import reactEssentials from "../assets/CertificateOfCompletion_React Essential Training.pdf";

import awsCloud from "../assets/aws-academy-graduate-cloud-architecting-training-ba.png";
import awsFoundations from "../assets/aws-academy-graduate-cloud-foundations-training-bad.png";
import scrumBadge from "../assets/scrum-foundation-professional-certification-sfpc.png";
import lifelong from "../assets/lifelong-learning.png";

import teamCollab from "../assets/Certificate_Essentials of Team Collaboration.pdf";
import grit from "../assets/Certificate_Grit How Teams Persevere to Accomplish Great Goals.pdf";
import effectiveListening from "../assets/CertificateOfCompletion_Effective Listening.pdf";
import python from "../assets/CertificateOfCompletion_Python for NonProgrammers.pdf";
import codeCombat from "../assets/CodeCombat - Coding games to learn Python and JavaScript.pdf";
import scrum from "../assets/Scrum_Certificate_Mangulabnan.pdf";

const certificates = [
{
    title: "React Essential Training",
    issuer: "LinkedIn Learning",
    date: "2026",
    badge: null,
    link: reactEssentials,
    emoji: "⚛️",
},
  {
    title: "AWS Academy Graduate – Cloud Architecting",
    issuer: "Amazon Web Services",
    date: "2025",
    badge: awsCloud,
    link: null,
    emoji: "☁️",
  },
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2025",
    badge: awsFoundations,
    link: null,
    emoji: "☁️",
  },
  {
    title: "Scrum Foundation Professional Certification",
    issuer: "CertiProf",
    date: "2022",
    badge: scrumBadge,
    link: scrum,
    emoji: "🏆",
  },
  {
    title: "Lifelong Learning",
    issuer: "CertiProf",
    date: "2022",
    badge: lifelong,
    link: null,
    emoji: "📚",
  },
  {
    title: "Essentials of Team Collaboration",
    issuer: "LinkedIn Learning",
    date: "2022",
    badge: null,
    link: teamCollab,
    emoji: "🤝",
  },
  {
    title: "Grit: How Teams Persevere to Accomplish Great Goals",
    issuer: "LinkedIn Learning",
    date: "2022",
    badge: null,
    link: grit,
    emoji: "💪",
  },
  {
    title: "Effective Listening",
    issuer: "LinkedIn Learning",
    date: "2022",
    badge: null,
    link: effectiveListening,
    emoji: "👂",
  },
  {
    title: "Python for Non-Programmers",
    issuer: "LinkedIn Learning",
    date: "2022",
    badge: null,
    link: python,
    emoji: "🐍",
  },
  {
    title: "Coding Games to Learn Python and JavaScript",
    issuer: "CodeCombat",
    date: "2022",
    badge: null,
    link: codeCombat,
    emoji: "🎮",
  },
];

function Certificates() {
  const [filter, setFilter] = useState("All");

  const issuers = ["All", ...new Set(certificates.map((c) => c.issuer))];
  const filtered = filter === "All" ? certificates : certificates.filter((c) => c.issuer === filter);

  return (
    <section id="certificates" className="py-24 flex items-center justify-center px-6">
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Certificates & <span className="text-yellow-400">Badges</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Proof that I actually studied 📚
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {issuers.map((issuer) => (
            <button
              key={issuer}
              onClick={() => setFilter(issuer)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                filter === issuer
                  ? "bg-yellow-400 text-black scale-105"
                  : "bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-slate-600"
              }`}
            >
              {issuer}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert) => (
            <div
              key={cert.title}
              className="group flex flex-col justify-between p-6 bg-gray-100 dark:bg-slate-700 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
            >
              <div>
                {cert.badge ? (
                  <img
                    src={cert.badge}
                    alt={cert.title}
                    className="w-20 h-20 object-contain mb-4 rounded-lg"
                  />
                ) : (
                  <div className="text-5xl mb-4">{cert.emoji}</div>
                )}
                <h3 className="text-base font-bold mb-1 group-hover:text-yellow-400 transition-colors duration-200 dark:text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{cert.date}</p>
              </div>

              <div className="mt-5">
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-4 py-1.5 bg-yellow-400 text-black text-sm font-bold rounded-full hover:bg-yellow-300 hover:scale-105 transition-all duration-200"
                  >
                    View Certificate 📄
                  </a>
                ) : (
                  <span className="inline-block px-4 py-1.5 bg-gray-200 dark:bg-slate-600 text-gray-400 text-sm font-bold rounded-full">
                    Badge Only
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;