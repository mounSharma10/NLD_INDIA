import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GraduationCap,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

interface HiringSectionProps {
  darkMode: boolean;
}

const hiringTracks = [
  {
    title: "Experienced Builders",
    subtitle: "Full-stack, frontend, backend, QA, DevOps, product engineering",
    icon: Code2,
    gradient: "from-sky-500 via-cyan-500 to-emerald-500",
    points: [
      "We look for strong craft, product sense, and calm ownership in real delivery environments.",
      "Interview loops stay practical with portfolio review, technical depth, and work-style alignment.",
      "The strongest candidates show they can elevate the team, not just complete assigned tickets.",
    ],
  },
  {
    title: "Freshers With Potential",
    subtitle: "Training-friendly opportunities for sharp early-career talent",
    icon: GraduationCap,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    points: [
      "We hire freshers who have solid basics, curiosity, consistency, and a fast learning mindset.",
      "Shortlisted candidates go through guided assessments across problem-solving, communication, and coding fundamentals.",
      "Selected talent receives mentorship, structured feedback, and early project exposure from the start.",
    ],
  },
];

const processSteps = [
  {
    title: "Open Role Strategy",
    desc: "Every opening starts with clarity on outcomes, team fit, growth path, and the real product context behind the role.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Signal-First Review",
    desc: "We review resumes, shipped work, GitHub, case studies, and the signals that actually predict execution quality.",
    icon: Users,
  },
  {
    title: "Practical Evaluation",
    desc: "The interview loop is designed to feel challenging but fair, with more relevance and less performative trivia.",
    icon: Sparkles,
  },
  {
    title: "Confident Onboarding",
    desc: "Strong candidates get a clear runway into the team with ownership, support, and fast context transfer.",
    icon: CheckCircle2,
  },
];

const hiringSignals = [
  "Clear communication and delivery ownership",
  "Strong fundamentals with modern tooling awareness",
  "Ability to learn quickly inside real product constraints",
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
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] ${
                darkMode
                  ? "border-white/12 bg-white/[0.04] text-emerald-200"
                  : "border-emerald-200 bg-white text-emerald-700 shadow-sm"
              }`}
            >
              <Target size={13} />
              Hiring Experience
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className={`text-4xl font-black tracking-[-0.04em] md:text-6xl ${
                darkMode ? "text-white" : "text-slate-950"
              }`}
              style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
            >
              Hiring designed to feel
              <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                premium, honest, and growth-focused.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.16 }}
            className={`rounded-[30px] border p-6 ${
              darkMode ? "border-white/10 bg-white/[0.04]" : "border-slate-200 bg-white shadow-sm"
            }`}
          >
            <p className={`text-base leading-8 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              We hire for active project needs, future capability, and people who can raise the standard around them.
              The process is built to respect candidate time while still giving us a deep read on craft, mindset, and
              team fit.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`rounded-[34px] border p-6 md:p-8 ${
              darkMode ? "border-white/10 bg-white/[0.05]" : "border-slate-200 bg-white shadow-sm"
            }`}
          >
            <div className="grid gap-5 md:grid-cols-2">
              {hiringTracks.map((track, index) => {
                const Icon = track.icon;

                return (
                  <motion.div
                    key={track.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.28 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`relative overflow-hidden rounded-[28px] border p-6 ${
                      darkMode
                        ? "border-white/10 bg-[#0b1728]/90"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 opacity-40 bg-gradient-to-br ${track.gradient}`}
                      style={{ maskImage: "linear-gradient(160deg, rgba(0,0,0,0.28), transparent 60%)" }}
                    />
                    <div className="relative">
                      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${track.gradient} shadow-lg`}>
                        <Icon size={22} className="text-white" />
                      </div>
                      <h3
                        className={`mb-2 text-2xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-950"}`}
                        style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
                      >
                        {track.title}
                      </h3>
                      <p className={`mb-5 text-sm leading-6 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                        {track.subtitle}
                      </p>
                      <div className="space-y-3">
                        {track.points.map((point) => (
                          <div
                            key={point}
                            className={`flex gap-3 text-sm leading-7 ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                          >
                            <div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${track.gradient}`}>
                              <CheckCircle2 size={12} className="text-white" />
                            </div>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <div className="space-y-5">
    

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.28, duration: 0.6 }}
              className="space-y-4"
            >
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.38 + index * 0.08 }}
                    whileHover={{ x: 4 }}
                    className={`rounded-[26px] border p-5 ${
                      darkMode
                        ? "border-white/10 bg-white/[0.04] hover:border-white/18"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-500 shadow-lg">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <div className={`mb-1 text-xs font-bold uppercase tracking-[0.22em] ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                          Step {String(index + 1).padStart(2, "0")}
                        </div>
                        <h3 className={`mb-2 text-base font-bold ${darkMode ? "text-white" : "text-slate-950"}`}>{step.title}</h3>
                        <p className={`text-sm leading-7 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
