import { useState } from "react";

const contacts = [
  { label: "Email", value: "mangulabnangado@gmail.com", href: "mailto:mangulabnangado@gmail.com", emoji: "📧" },
  { label: "School Email", value: "ejmangulabnan@student.apc.edu.ph", href: "mailto:ejmangulabnan@student.apc.edu.ph", emoji: "🏫" },
  { label: "LinkedIn", value: "linkedin.com/in/edgardo-mangulabnan-4a18531b4", href: "https://linkedin.com/in/edgardo-mangulabnan-4a18531b4", emoji: "💼" },
  { label: "GitHub", value: "github.com/gaDODOBIRD1003", href: "https://github.com/gaDODOBIRD1003", emoji: "🐙" },
  { label: "Facebook", value: "facebook.com/gaDODOBIRD03", href: "https://facebook.com/gaDODOBIRD03", emoji: "👥" },
  { label: "Phone", value: "+63 961 321 1623", href: "tel:+639613211623", emoji: "📞" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    // In a real app, you'd POST to an API here
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 flex items-center justify-center px-6"
    >
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Contact <span className="text-yellow-400">Me</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12">
          Want to collaborate or ask something? Hit me up 👇
        </p>

        <div className="grid lg:grid-cols-2 gap-10 text-left">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 p-4 rounded-xl bg-gray-100 dark:bg-slate-800 shadow hover:shadow-md hover:scale-[1.02] hover:bg-yellow-50 dark:hover:bg-slate-700 transition-all duration-200 group"
              >
                <span className="text-2xl">{c.emoji}</span>
                <div>
                  <p className="font-semibold group-hover:text-yellow-400 transition-colors duration-200">
                    {c.label}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm break-all">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Message Form */}
          <div className="flex flex-col gap-4 bg-gray-100 dark:bg-slate-800 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold dark:text-white">Send a Message</h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:text-white transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:text-white transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:text-white transition resize-none"
            />

            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 hover:scale-105 transition-all duration-200 shadow"
            >
              {sent ? "Sent! ✅" : "Send Message 🚀"}
            </button>

            {sent && (
              <p className="text-green-500 text-sm text-center font-medium">
                Thanks! I'll get back to you soon 😊
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;