import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface TechStackSectionProps {
  darkMode: boolean;
}

const techCategories = [
  {
    label: "Frontend",
    gradient: "from-violet-600 to-blue-600",
    glow: "rgba(139,92,246,0.15)",
    techs: [
      { name: "Angular", icon: "🅰️" },
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Bootstrap", icon: "🅱️" },
      { name: "Tailwind CSS", icon: "🎨" },
    ],
  },
  {
    label: "Backend",
    gradient: "from-blue-600 to-cyan-500",
    glow: "rgba(59,130,246,0.15)",
    techs: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "FastAPI", icon: "⚡" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
  {
    label: "Mobile",
    gradient: "from-cyan-500 to-emerald-500",
    glow: "rgba(6,182,212,0.15)",
    techs: [
      { name: "React Native", icon: "📱" },
      { name: "PWA", icon: "🌐" },
    ],
  },
  {
    label: "Cloud & DevOps",
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.15)",
    techs: [
      { name: "AWS", icon: "☁️" },
      { name: "Azure", icon: "🔵" },
      { name: "Docker", icon: "🐳" },
      { name: "CI/CD", icon: "🔄" },
    ],
  },
  {
    label: "Databases",
    gradient: "from-yellow-500 to-orange-500",
    glow: "rgba(234,179,8,0.15)",
    techs: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MySQL", icon: "🐬" },
      { name: "Redis", icon: "🔴" },
    ],
  },
  {
    label: "AI & ML",
    gradient: "from-pink-500 to-violet-500",
    glow: "rgba(236,72,153,0.15)",
    techs: [
      { name: "Gemini", icon: "✨" },
      { name: "LangChain", icon: "🔗" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "PyTorch", icon: "🔥" },
      { name: "HuggingFace", icon: "🤗" },
      { name: "Scikit-learn", icon: "📊" },
    ],
  },
];

export function TechStackSection({ darkMode }: TechStackSectionProps) {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });
  const techs = techCategories.flatMap((category) => category.techs);

  return (
    <section id="techstack" className={`px-6 py-28 ${darkMode ? "bg-[#020010]" : "bg-white"}`}>
      <div className="mx-auto max-w-6xl">
        <div ref={headerRef} className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wide ${
              darkMode
                ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-300"
                : "border-indigo-200 bg-indigo-50 text-indigo-700"
            }`}
          >
            <motion.span
              animate={inView ? { scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] } : {}}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-indigo-500"
            />
            Tech Stack
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`mb-4 text-4xl font-black tracking-tight md:text-5xl ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Technologies We{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Master
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.55 }}
            className={`mx-auto max-w-2xl text-lg ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            We stay on the cutting edge - handpicking the right tools to build fast, reliable, and scalable products.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-wrap gap-2 p-4">
            {techs.map((tech, index) => (
              <motion.span
                key={`${tech.name}-${index}`}
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        scale: 1,
                        y: [0, index % 2 === 0 ? -2 : 2, 0],
                      }
                    : {}
                }
                transition={{
                  opacity: { delay: 0.42 + index * 0.02, duration: 0.35 },
                  scale: { delay: 0.42 + index * 0.02, duration: 0.35 },
                  y: {
                    delay: 0.55 + index * 0.015,
                    duration: 3.2 + (index % 4) * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.06,
                  y: -4,
                  boxShadow: darkMode
                    ? "0 12px 28px rgba(99,102,241,0.14)"
                    : "0 12px 24px rgba(99,102,241,0.12)",
                }}
                className={`relative inline-flex cursor-default items-center gap-1.5 overflow-hidden rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
                  darkMode
                    ? "border-white/8 bg-white/5 text-gray-400 hover:border-white/20 hover:text-white"
                    : "border-gray-100 bg-white text-gray-600 shadow-sm hover:border-gray-300 hover:text-gray-900"
                }`}
              >
                <motion.span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-y-0 -left-8 w-8 rotate-[18deg] ${
                    darkMode ? "bg-white/10" : "bg-white/80"
                  }`}
                  animate={inView ? { x: ["0%", "520%"] } : {}}
                  transition={{
                    delay: 1 + index * 0.05,
                    duration: 1.4,
                    repeat: Infinity,
                    repeatDelay: 5 + (index % 4) * 0.45,
                    ease: "easeInOut",
                  }}
                />

                <motion.span
                  className="relative z-10"
                  animate={inView ? { scale: [1, 1.08, 1] } : {}}
                  transition={{
                    delay: 0.65 + index * 0.015,
                    duration: 2.6 + (index % 3) * 0.25,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {tech.icon}
                </motion.span>

                <span className="relative z-10">{tech.name}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
