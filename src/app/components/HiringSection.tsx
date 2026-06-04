import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Code2,
  GraduationCap,
  Lightbulb,
  Users,
} from "lucide-react";

interface HiringSectionProps {
  darkMode: boolean;
}

const highlights = [
  {
    title: "Craft First",
    desc: "We value what you've built over degrees. Reliable code speaks louder than resumes.",
    icon: Code2,
  },
  {
    title: "Growth Mindset",
    desc: "Curiosity and daily improvement matter more than perfect knowledge.",
    icon: Lightbulb,
  },
  {
    title: "Team Ownership",
    desc: "Everyone contributes to code, design, and product decisions.",
    icon: Users,
  },
  {
    title: "Quality Focus",
    desc: "We prioritize clean code, clear communication, and sustainable delivery.",
    icon: GraduationCap,
  },
];

export function HiringSection({ darkMode }: HiringSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="hiring"
      className={`relative overflow-hidden px-6 py-28 ${darkMode ? "bg-[#07111f]" : "bg-[#f3f7fb]"}`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute left-[8%] top-16 h-[300px] w-[300px] rounded-full blur-[120px] ${
            darkMode ? "bg-emerald-500/12" : "bg-emerald-200/80"
          }`}
        />
        <div
          className={`absolute bottom-0 right-[6%] h-[360px] w-[360px] rounded-full blur-[120px] ${
            darkMode ? "bg-sky-500/12" : "bg-sky-200/80"
          }`}
        />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] ${
              darkMode
                ? "border-white/12 bg-white/[0.04] text-emerald-200"
                : "border-emerald-200 bg-white text-emerald-700 shadow-sm"
            }`}
          >
            <GraduationCap size={13} />
            How We Hire
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className={`text-4xl font-black tracking-[-0.04em] md:text-6xl ${
              darkMode ? "text-white" : "text-slate-950"
            }`}
            style={{ fontFamily: "'Space Grotesk', 'Manpire', sans-serif" }}
          >
            Hiring built around
            <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              trust, transparency, and growth.
            </span>
          </motion.h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.28 + index * 0.08 }}
                whileHover={{ y: -4 }}
                className={`rounded-[24px] border p-5 ${
                  darkMode
                    ? "border-white/10 bg-white/[0.04] hover:border-white/20"
                    : "border-slate-200 bg-white shadow-sm hover:shadow-md"
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-sky-500 shadow-lg mb-4">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className={`mb-2 text-base font-bold ${darkMode ? "text-white" : "text-slate-950"}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-6 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}