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
      { name: "Bootstrap", icon: "🅱️ " },
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
      // { name: "Django", icon: "🎯" },
      { name: "FastAPI", icon: "⚡" },
      // { name: "GraphQL", icon: "◈" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
  {
    label: "Mobile",
    gradient: "from-cyan-500 to-emerald-500",
    glow: "rgba(6,182,212,0.15)",
    techs: [
      { name: "React Native", icon: "📱" },
      // { name: "Flutter", icon: "🦋" },
      // { name: "iOS / Swift", icon: "🍎" },
      // { name: "Android / Kotlin", icon: "🤖" },
      // { name: "Expo", icon: "🚀" },
      { name: "PWA", icon: "🌐" },
    ],
  },
  {
    label: "Cloud & DevOps",
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.15)",
    techs: [
      { name: "AWS", icon: "☁️" },
      // { name: "Google Cloud", icon: "🌤️" },
      { name: "Azure", icon: "🔵" },
      { name: "Docker", icon: "🐳" },
      // { name: "Kubernetes", icon: "⚙️" },
      { name: "CI/CD", icon: "🔄" },
    ],
  },
  {
    label: "Databases",
    gradient: "from-yellow-500 to-orange-500",
    glow: "rgba(234,179,8,0.15)",
    techs: [
      { name: "PostgreSQL", icon: "🐘" },
      // { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🐬" },
      { name: "Redis", icon: "🔴" },
      // { name: "Firebase", icon: "🔥" },
      // { name: "Supabase", icon: "⚡" },
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

  return (
    <section id="techstack" className={`py-28 px-6 ${darkMode ? "bg-[#020010]" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide uppercase mb-6 ${
              darkMode
                ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-300"
                : "bg-indigo-50 border-indigo-200 text-indigo-700"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            Tech Stack
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-black tracking-tight mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Technologies We{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Master
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            We stay on the cutting edge — handpicking the right tools to build fast, reliable, and scalable products.
          </motion.p>
        </div>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techCategories.map((cat, ci) => (
            <CategoryCard key={cat.label} cat={cat} index={ci} darkMode={darkMode} inView={inView} />
          ))}
        </div>

        {/* Bottom marquee strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className={`mt-14 rounded-2xl border overflow-hidden ${
            darkMode ? "border-white/8 bg-white/[0.02]" : "border-gray-100 bg-gray-50"
          }`}
        >
          <div className={`px-6 py-3 border-b text-xs font-bold tracking-widest uppercase ${
            darkMode ? "border-white/8 text-gray-600" : "border-gray-100 text-gray-400"
          }`}>
            All Technologies
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            {techCategories.flatMap((c) => c.techs).map((t, i) => (
              <motion.span
                key={t.name + i}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.55 + i * 0.018 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold cursor-default transition-all duration-200 ${
                  darkMode
                    ? "bg-white/5 text-gray-400 border border-white/8 hover:border-white/20 hover:text-white"
                    : "bg-white text-gray-600 border border-gray-100 hover:border-gray-300 hover:text-gray-900 shadow-sm"
                }`}
              >
                <span>{t.icon}</span>
                {t.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CategoryCard({
  cat,
  index,
  darkMode,
  inView,
}: {
  cat: typeof techCategories[0];
  index: number;
  darkMode: boolean;
  inView: boolean;
}) {
  const ref = useRef(null);
  const cardInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative rounded-2xl border overflow-hidden p-6 transition-all duration-300 ${
        darkMode
          ? "bg-white/[0.03] border-white/10 hover:border-white/20"
          : "bg-gray-50 border-gray-100 hover:border-gray-200 hover:bg-white hover:shadow-lg"
      }`}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${cat.glow}, transparent 70%)` }}
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className={`px-3 py-1 rounded-lg text-xs font-bold tracking-widest uppercase bg-gradient-to-r ${cat.gradient} text-white`}>
          {cat.label}
        </div>
        <div className={`text-xs font-semibold ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
          {cat.techs.length} tools
        </div>
      </div>

      {/* Tech grid */}
      <div className="grid grid-cols-2 gap-2">
        {cat.techs.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -8 }}
            animate={cardInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.08 + i * 0.04 }}
            className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
              darkMode
                ? "bg-white/[0.04] text-gray-300 hover:bg-white/10"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-50"
            }`}
          >
            <span className="text-base leading-none">{tech.icon}</span>
            <span className="font-medium text-xs truncate">{tech.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Bottom gradient bar */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </motion.div>
  );
}
