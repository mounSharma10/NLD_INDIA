import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { TrendingUp, Users, Award, Clock, Globe, Zap } from "lucide-react";

interface StatsSectionProps {
  darkMode: boolean;
}

const stats = [
  { icon: TrendingUp, value: 500, suffix: "+", label: "Projects Delivered", desc: "Across web, mobile & AI", gradient: "from-violet-500 to-blue-500" },
  { icon: Users, value: 200, suffix: "+", label: "Happy Clients", desc: "Startups to enterprises", gradient: "from-blue-500 to-cyan-500" },
  { icon: Award, value: 98, suffix: "%", label: "Client Satisfaction", desc: "Net Promoter Score", gradient: "from-cyan-500 to-emerald-500" },
  { icon: Clock, value: 10, suffix: "+", label: "Years Experience", desc: "Building digital products", gradient: "from-emerald-500 to-yellow-500" },
  { icon: Globe, value: 15, suffix: "+", label: "Countries Served", desc: "Global reach from India", gradient: "from-yellow-500 to-orange-500" },
  { icon: Zap, value: 99.9, suffix: "%", label: "Uptime SLA", desc: "Enterprise reliability", gradient: "from-orange-500 to-violet-500" },
];

function AnimatedNumber({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = target / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start * 10) / 10);
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, target]);

  const display = target % 1 !== 0 ? value.toFixed(1) : Math.floor(value);
  return <>{display}{suffix}</>;
}

export function StatsSection({ darkMode }: StatsSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={`relative py-28 px-6 overflow-hidden ${darkMode ? "bg-[#030012]" : "bg-gray-50"}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 ${
          darkMode ? "bg-violet-600" : "bg-violet-400"
        }`} />
        <div className={`absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 ${
          darkMode ? "bg-cyan-600" : "bg-cyan-400"
        }`} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide uppercase mb-6 ${
              darkMode
                ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-300"
                : "bg-yellow-50 border-yellow-200 text-yellow-700"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            By the Numbers
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-black tracking-tight mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            The Numbers That{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Define Us
            </span>
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`group relative rounded-2xl p-6 md:p-8 border overflow-hidden transition-all duration-300 ${
                  darkMode
                    ? "bg-white/[0.04] border-white/10 hover:border-white/20"
                    : "bg-white border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl"
                }`}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${stat.gradient.includes("violet") ? "rgba(139,92,246,0.08)" : stat.gradient.includes("blue") ? "rgba(59,130,246,0.08)" : stat.gradient.includes("cyan") ? "rgba(6,182,212,0.08)" : "rgba(16,185,129,0.08)"}, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>

                  {/* Value */}
                  <div className={`text-4xl md:text-5xl font-black mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    <AnimatedNumber target={stat.value} suffix={stat.suffix} inView={inView} />
                  </div>

                  <div className={`text-base font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {stat.label}
                  </div>
                  <div className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                    {stat.desc}
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>

        {/* Trust logos row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className={`text-sm font-medium mb-6 tracking-wide ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
            TRUSTED TECHNOLOGY PARTNERS
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {["AWS", "Google Cloud", "Microsoft Azure", "Vercel", "MongoDB", "Stripe"].map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.05 }}
                className={`text-sm font-bold tracking-widest uppercase ${
                  darkMode ? "text-gray-700 hover:text-gray-500" : "text-gray-300 hover:text-gray-400"
                } transition-colors duration-200 cursor-default`}
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
