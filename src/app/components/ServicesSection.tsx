import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, BarChart3, Brain, Cloud, Code2, Palette, Smartphone, Sparkles } from "lucide-react";

interface ServicesSectionProps {
  darkMode: boolean;
}

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web Platforms",
    category: "Engineering",
    desc: "High-conversion websites, admin systems, and SaaS products designed for speed, clarity, and product-market momentum.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    gradient: "from-sky-500 via-cyan-500 to-emerald-500",
    accent: "rgba(34,211,238,0.16)",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Products",
    category: "Intelligence",
    desc: "AI copilots, workflow automation, retrieval systems, and internal tools that turn complex operations into simple actions.",
    tags: ["OpenAI", "Python", "RAG", "Automation"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    accent: "rgba(16,185,129,0.16)",
  },
  {
    number: "03",
    icon: Palette,
    title: "Brand-Led UI/UX",
    category: "Design",
    desc: "Distinctive interfaces and design systems that sharpen positioning, improve trust, and make products feel undeniably premium.",
    tags: ["Figma", "Motion", "Design Systems", "UX Research"],
    gradient: "from-orange-400 via-rose-500 to-pink-500",
    accent: "rgba(251,113,133,0.14)",
  },
];

const upcomingServices = [
  {
    number: "01",
    icon: Smartphone,
    title: "Mobile Experiences",
    category: "Apps",
    desc: "Native-feeling iOS and Android apps with polished interaction design, reliable performance, and thoughtful onboarding flows.",
    tags: ["React Native", "Flutter", "Expo", "App Store Ops"],
    gradient: "from-cyan-500 via-sky-500 to-blue-500",
    accent: "rgba(56,189,248,0.16)",
  },
  {
    number: "02",
    icon: Cloud,
    title: "Cloud Systems",
    category: "Scale",
    desc: "Resilient infrastructure, deployment pipelines, observability, and backend architecture built to support growth without chaos.",
    tags: ["AWS", "Docker", "CI/CD", "Monitoring"],
    gradient: "from-blue-500 via-sky-500 to-cyan-500",
    accent: "rgba(59,130,246,0.16)",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Analytics Layers",
    category: "Insights",
    desc: "Executive dashboards, KPI pipelines, and decision-focused reporting that connect raw data to fast strategic action.",
    tags: ["Power BI", "Tableau", "ETL", "Warehouse"],
    gradient: "from-violet-500 via-fuchsia-500 to-rose-500",
    accent: "rgba(168,85,247,0.14)",
  },
];

type ServiceItem = typeof services[number];

export function ServicesSection({ darkMode }: ServicesSectionProps) {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      className={`relative overflow-hidden px-6 py-28 ${darkMode ? "bg-[#081423]" : "bg-[#f8fafc]"}`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full blur-[140px] ${
            darkMode ? "bg-cyan-500/10" : "bg-cyan-200/70"
          }`}
        />
        <div
          className={`absolute bottom-0 right-[-5%] h-[360px] w-[360px] rounded-full blur-[120px] ${
            darkMode ? "bg-emerald-500/10" : "bg-emerald-200/70"
          }`}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div
          ref={headerRef}
          className="mb-16 text-center"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] ${
                darkMode
                  ? "border-white/12 bg-white/[0.04] text-cyan-200"
                  : "border-cyan-200 bg-white text-cyan-700 shadow-sm"
              }`}
            >
              <Sparkles size={13} />
              Our Services
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
              Systems for brands
              <span className="block bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                that want modern gravity.
              </span>
            </motion.h2>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.16 }}
            className={`rounded-[28px] border p-6 md:p-7 ${
              darkMode ? "border-white/10 bg-white/[0.04]" : "border-slate-200 bg-white shadow-sm"
            }`}
          >
            <p className={`text-base leading-8 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              We blend strategy, interface design, and engineering execution so every launch feels faster, sharper,
              and more valuable than a standard agency build. The goal is not just shipping features. It is building
              product confidence.
            </p>
          </motion.div> */}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
              darkMode={darkMode}
              status="live"
            />
          ))}
        </div>
{/* comment */}
        {/* <div
          className={`mt-16 rounded-[32px] border p-6 md:p-8 ${
            darkMode ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-white/80 shadow-sm"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.22 }}
            className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div
                className={`mb-3 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] ${
                  darkMode
                    ? "border-white/12 bg-white/[0.04] text-emerald-200"
                    : "border-emerald-200 bg-white text-emerald-700 shadow-sm"
                }`}
              >
                <Sparkles size={13} />
                Upcoming Services
              </div>
              <h3
                className={`text-2xl font-black tracking-[-0.03em] md:text-4xl ${darkMode ? "text-white" : "text-slate-950"}`}
                style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
              >
                More capabilities, same service quality.
              </h3>
            </div>

            <p className={`max-w-2xl text-sm leading-7 md:text-base ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              These are planned offerings already shaped into the same productized format, so they read like real
              services instead of placeholders.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {upcomingServices.map((service, index) => (
              <ServiceCard
                key={`upcoming-${service.number}`}
                service={service}
                index={services.length + index}
                darkMode={darkMode}
                status="upcoming"
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  darkMode,
  status,
}: {
  service: ServiceItem;
  index: number;
  darkMode: boolean;
  status: "live" | "upcoming";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-[30px] border p-6 transition-all duration-300 ${
        darkMode
          ? "border-white/10 bg-white/[0.04] hover:border-white/18"
          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-[0_25px_70px_rgba(148,163,184,0.18)]"
      }`}
      style={{
        background: darkMode
          ? `linear-gradient(180deg, rgba(255,255,255,0.045) 0%, ${service.accent} 160%)`
          : undefined,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at top right, ${service.accent}, transparent 48%)` }}
      />

      <div className="relative z-10">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
              <Icon size={20} className="text-white" />
            </div>
            <div>
              {/* <div className={`text-xs font-semibold uppercase tracking-[0.26em] ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                {service.category}
              </div> */}
              <div
                className={`mt-1 text-2xl font-black text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text`}
                style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
              >
                {service.category}
              </div>
            </div>
          </div>

          <div
            className={`flex h-10 w-10 items-center justify-center rounded-2xl transition-all duration-300 ${
              status === "upcoming"
                ? darkMode
                  ? "bg-emerald-500/12 text-emerald-200 group-hover:bg-emerald-500/18"
                  : "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100"
                : darkMode
                  ? "bg-white/8 text-slate-300 group-hover:bg-white/14 group-hover:text-white"
                  : "bg-slate-100 text-slate-500 group-hover:bg-slate-900 group-hover:text-white"
            }`}
          >
            {/* {status === "upcoming" ? <ArrowUpRight size={17} /> : <Sparkles size={17} /> } */}
             <Sparkles size={17} />
          </div>
        </div>

        <h3
          className={`mb-3 text-2xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-950"}`}
          style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
        >
          {service.title}
        </h3>
        <p className={`mb-6 text-sm leading-7 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{service.desc}</p>

        {status === "upcoming" ? (
          <div className="mb-5">
            <span
              className={`inline-flex rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] ${
                darkMode ? "bg-emerald-500/10 text-emerald-200" : "bg-emerald-50 text-emerald-700"
              }`}
            >
              Coming Soon
            </span>
          </div>
        ) : null}

        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                darkMode ? "bg-white/8 text-slate-300" : "bg-slate-100 text-slate-600"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
