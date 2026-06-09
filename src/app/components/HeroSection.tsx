import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Braces, Cpu, Database, Play, Workflow , GitBranch , Code2, ShieldCheck} from "lucide-react";
import logoImage from "../assets/logo_final 1.png";

interface HeroProps {
  darkMode: boolean;
}

const floatingDots = [
  { left: "10%", top: "16%" },
  { left: "17%", top: "27%" },
  { left: "25%", top: "38%" },
  { left: "32%", top: "48%" },
  { left: "40%", top: "57%" },
  { left: "62%", top: "23%" },
  { left: "69%", top: "36%" },
  { left: "77%", top: "48%" },
  { left: "84%", top: "56%" },
  { left: "92%", top: "68%" },
  { left: "55%", top: "80%" },
];

const techOrbitItems = [
{ icon: Workflow, left: "10%", top: "22%", delay: 0.2 },
  { icon: Database, left: "5%", top: "46%", delay: 0.4 },
  { icon: Code2, left: "14%", top: "70%", delay: 0.6 },

  // RIGHT SIDE
  { icon: GitBranch, left: "84%", top: "18%", delay: 0.3 },
  { icon: ShieldCheck, left: "88%", top: "40%", delay: 0.5 },
  // { icon: Database, left: "86%", top: "62%", delay: 0.7 },
  { icon: Braces, left: "86%", top: "62%", delay: 0.9 },
];

export function HeroSection({ darkMode }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCTA = () => {
    document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen overflow-hidden px-6 pt-28 ${darkMode ? "bg-[#08111f]" : "bg-[#f6f4fb]"
        }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 ${darkMode
              ? "bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.14),transparent_28%),radial-gradient(circle_at_72%_38%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_50%_60%,rgba(14,165,233,0.08),transparent_35%)]"
              : "bg-[radial-gradient(circle_at_18%_22%,rgba(168,85,247,0.14),transparent_28%),radial-gradient(circle_at_74%_42%,rgba(96,165,250,0.14),transparent_30%),radial-gradient(circle_at_50%_58%,rgba(125,211,252,0.14),transparent_35%)]"
            }`}
        />
        <div
          className={`absolute inset-0 ${darkMode ? "opacity-[0.08]" : "opacity-[0.07]"}`}
          style={{
            backgroundImage: `linear-gradient(${darkMode ? "rgba(255,255,255,0.75)" : "rgba(99,102,241,0.28)"} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? "rgba(255,255,255,0.75)" : "rgba(99,102,241,0.28)"} 1px, transparent 1px)`,
            backgroundSize: "58px 58px",
          }}
        />
        <div
          className={`absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] ${darkMode ? "bg-sky-500/10" : "bg-sky-300/26"
            }`}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className={`absolute left-1/2 top-1/2 hidden h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed lg:block ${darkMode ? "border-cyan-400/10" : "border-cyan-500/14"
            }`}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          className={`absolute left-1/2 top-1/2 hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border lg:block ${darkMode ? "border-violet-400/10" : "border-violet-500/12"
            }`}
        />
        <motion.div
          animate={{ x: ["-12%", "12%", "-12%"], opacity: [0.18, 0.42, 0.18] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute left-1/2 top-1/2 hidden h-[340px] w-[2px] -translate-x-1/2 -translate-y-1/2 lg:block ${darkMode
              ? "bg-gradient-to-b from-transparent via-cyan-300/50 to-transparent"
              : "bg-gradient-to-b from-transparent via-cyan-500/35 to-transparent"
            }`}
        />

        {mounted &&
          floatingDots.map((dot, index) => (
            <motion.div
              key={`${dot.left}-${dot.top}`}
              className={`absolute h-2 w-2 rounded-full ${darkMode ? "bg-violet-300/70" : "bg-violet-400/70"}`}
              style={{ left: dot.left, top: dot.top }}
              animate={{ y: [-6, 8, -6], opacity: [0.35, 0.9, 0.35] }}
              transition={{ duration: 3.2 + index * 0.18, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col items-center justify-center pb-24 text-center">
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {techOrbitItems.map(({ icon: Icon, left, top, delay }, index) => (
            <motion.div
              key={`${left}-${top}`}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{
                opacity: 1,
                x: [0, index % 2 === 0 ? 14 : -14, 0],
                y: [0, index % 2 === 0 ? -10 : 10, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay },
                x: { duration: 6 + index, repeat: Infinity, ease: "easeInOut", delay },
                y: { duration: 5.5 + index * 0.6, repeat: Infinity, ease: "easeInOut", delay },
              }}
              style={{ left, top }}
              className={`absolute rounded-[24px] border px-3 py-3 backdrop-blur-md ${darkMode
                  ? "border-white/10 bg-white/[0.05] text-slate-200 shadow-[0_12px_40px_rgba(15,23,42,0.28)]"
                  : "border-white/80 bg-white/70 text-slate-700 shadow-[0_14px_40px_rgba(59,130,246,0.12)]"
                }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${darkMode ? "bg-cyan-400/10 text-cyan-200" : "bg-cyan-500/10 text-cyan-700"
                    }`}
                >
                  <Icon size={20} />
                </span>
                {/* <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-bold tracking-[0.24em] ${
                    darkMode ? "bg-white/8 text-slate-300" : "bg-slate-900/[0.06] text-slate-500"
                  }`}
                >
                  {accent}
                </span> */}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl "
        >
          {/* <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`text-6xl font-black tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-[8rem] d-flex justify-center ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
            style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
          >
            <span className="bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              NLD India 
            </span>
          </motion.h1> */}
          <motion.div initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl flex items-center justify-center ">
            <img src={logoImage} alt="NLD India logo" className=" object-contain h-40 sm:h-40 md:h-48 lg:h-60 xl:h-68 2xl:h-80 w-auto " />
          </motion.div>
          <motion.h4
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`text-4xl font-black tracking-[-0.07em] sm:text-5xl md:text-6xl lg:text-[4rem] d-flex justify-center ${darkMode ? "text-white" : "text-slate-900"
              }`}
            style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
          >
            {/* <span className="bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              NLD India 
            </span> */}
          </motion.h4>

          <motion.div 
            initial={{ opacity: 0, scaleX: 0.7 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mx-auto mt-4 h-1 w-40 rounded-full bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500"
          />
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
             style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
            className={`  mx-auto mt-4 sm:mt-6 max-w-xs sm:max-w-2xl lg:max-w-4xl text-sm sm:text-base md:text-lg lg:text-[1.05rem] leading-7 sm:leading-8 md:leading-9 px-4 sm:px-6 lg:px-0 
              ${darkMode            
               ? "text-slate-300"             
               : "text-slate-600" } `} >
            {/* <span
              className={
                darkMode
                  ? "font-bold text-white"
                  : "font-bold text-slate-900"
              }
            >
            </span>{" "} */}
              Empowering global organizations
            to achieve sustainable growth through innovative software
            solutions that streamline business processes and enhance
            operational efficiency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {/* <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToCTA}
              className="inline-flex min-w-[226px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 px-8 py-4 text-base font-bold text-white shadow-[0_20px_40px_rgba(59,130,246,0.22)]"
            >
              Start Your Project
              <ArrowRight size={18} />
            </motion.button> */}

            {/* <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToServices}
              className={`inline-flex min-w-[214px] items-center justify-center gap-3 rounded-2xl border px-8 py-4 text-base font-bold ${darkMode
                  ? "border-white/12 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                  : "border-slate-200 bg-white/70 text-slate-700 shadow-sm hover:bg-white"
                }`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full ${darkMode ? "bg-white/10" : "bg-slate-100"
                  }`}
              >
                <Play size={12} className={darkMode ? "fill-white text-white" : "fill-slate-700 text-slate-700"} />
              </span>
              See Our Work
            </motion.button> */}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className={`flex flex-col items-center gap-4 ${darkMode ? "text-slate-500" : "text-slate-400"}`}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.28em]">Scroll</span>
            <div
              className={`flex h-10 w-6 items-start justify-center rounded-full border pt-1 ${darkMode ? "border-white/16" : "border-slate-300"
                }`}
            >
              <div className={`h-2.5 w-1 rounded-full ${darkMode ? "bg-slate-400" : "bg-slate-500"}`} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
