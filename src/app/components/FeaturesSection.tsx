import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { BriefcaseBusiness, Building2, Globe2, Users } from "lucide-react";

interface FeaturesSectionProps {
  darkMode: boolean;
}

const companyHighlights = [
  {
    icon: BriefcaseBusiness,
    label: "Founded",
    value: "3 Years Ago",
    desc: "From a promising startup to a well-structured IT solutions company.",
    gradient: "from-violet-600 to-blue-600",
  },
  {
    icon: Users,
    label: "Team Strength",
    value: "20+ Professionals",
    desc: "A collaborative team focused on quality delivery and balanced growth.",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    icon: Globe2,
    label: "Global Reach",
    value: "Worldwide Clients",
    desc: "Custom software solutions built for modern businesses across industries.",
    gradient: "from-cyan-500 to-emerald-500",
  },
  {
    icon: Building2,
    label: "Headquartered",
    value: "Zirakpur, Mohali",
    desc: "Powered by the strong technical talent pool of the Tricity region.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export function FeaturesSection({ darkMode }: FeaturesSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className={`relative py-28 px-6 overflow-hidden ${darkMode ? "bg-[#030012]" : "bg-gray-50"}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[680px] h-[320px] rounded-full blur-[110px] opacity-10 ${darkMode ? "bg-violet-500" : "bg-violet-300"
            }`}
        />
        <div
          className={`absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full blur-[120px] opacity-10 ${darkMode ? "bg-cyan-500" : "bg-cyan-200"
            }`}
        />
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide uppercase mb-6 ${darkMode
                ? "bg-blue-500/10 border-blue-500/30 text-blue-300"
                : "bg-blue-50 border-blue-200 text-blue-700"
              }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            What We Do
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl md:text-5xl font-black tracking-tight mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Building Modern Software With{" "}
            <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Global Standards
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-lg max-w-3xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            A refined introduction to NLD India Software Pvt. Ltd., our growth story, and the value we bring to clients around the world.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.18 }}
            className={`rounded-[32px] border p-7 md:p-10 ${darkMode
                ? "bg-white/[0.04] border-white/10"
                : "bg-white border-gray-100 shadow-sm"
              }`}
          >
            <div className={`text-xs font-bold tracking-[0.22em] uppercase mb-5 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
              Company Introduction
            </div>

            <div className="space-y-6">
              <p className={`text-base md:text-lg leading-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Founded in 2023, <span className={darkMode ? "text-white font-semibold" : "text-gray-900 font-semibold"}>NLD India Software Pvt. Ltd.</span> has steadily evolved from a promising startup into a growing and well-structured IT solutions company with a team of around 20 skilled professionals. Headquartered in Zirakpur (Mohali), the company has established streamlined workflows and a collaborative work culture that emphasizes both high-quality software delivery and a healthy work-life balance.
              </p>

              <p className={`text-base md:text-lg leading-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                As a subsidiary of <span className={darkMode ? "text-white font-semibold" : "text-gray-900 font-semibold"}>Next Level Development International BV, the Netherlands</span>, we design innovative and customized software solutions for clients across the globe, serving a wide range of industries. By leveraging the strong technical talent pool of the Tricity region, we continue to expand our capabilities while staying focused on innovation, quality, reliability, and client satisfaction.
              </p>

              <p className={`text-base md:text-lg leading-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                With a growing international presence and an expanding project portfolio, we deliver state-of-the-art IT solutions that align with modern business needs and global quality standards.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {companyHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.24 + index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className={`rounded-3xl border p-6 ${darkMode
                      ? "bg-white/[0.04] border-white/10 hover:border-white/20"
                      : "bg-white border-gray-100 hover:border-gray-200 shadow-sm"
                    }`}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg mb-5`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className={`text-xs font-bold tracking-[0.2em] uppercase mb-2 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                    {item.label}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>{item.value}</h3>
                  <p className={`text-sm leading-7 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
