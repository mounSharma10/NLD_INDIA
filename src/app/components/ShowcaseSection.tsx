import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ArrowRight, FileText, ShoppingCart, FolderOpen, Ship, CheckSquare, Mail, Package } from "lucide-react";

interface ShowcaseSectionProps {
  darkMode: boolean;
}

const projects = [
  {
    id: "fluentia",
    name: "Fluentia",
    tagline: "Logistics Document & Customs Platform",
    icon: Ship,
    category: "Logistics · Web Platform",
    gradient: "from-violet-600 to-blue-600",
    accentBg: "rgba(139,92,246,0.08)",
    accentBorder: "rgba(139,92,246,0.25)",
    description:
      "An advanced, web-based platform tailored for logistics companies — reimagining how businesses handle documents and customs data with a seamless, scalable, and secure solution for international logistics operations.",
    points: [
      { label: "Document Handling", detail: "Upload, manage, and process documents effortlessly with structured workflows." },
      { label: "Customs Data Preparation", detail: "Organize and prepare customs data in an automated and fully compliant way." },
      { label: "Multi-channel Input", detail: "Accepts documents via drag-and-drop, SFTP, email, Web Upload, and APIs." },
    ],
    chips: ["Web Platform", "Logistics", "Automation", "Customs"],
  },
  {
    id: "orion",
    name: "Orion",
    tagline: "Order Management System",
    icon: Package,
    category: "E-Commerce · OMS",
    gradient: "from-blue-600 to-cyan-500",
    accentBg: "rgba(59,130,246,0.08)",
    accentBorder: "rgba(59,130,246,0.25)",
    description:
      "A robust Order Management System (OMS) built to provide businesses with a seamless order flow between webshops and fulfilment partners — minimizing manual effort and maximizing automation.",
    points: [
      { label: "Seamless Order Flow", detail: "Real-time synchronization between webshops and fulfillment partners." },
      { label: "Automation First", detail: "Minimizes manual effort with intelligent routing and status tracking." },
      { label: "Real-time Sync", detail: "Ensures accurate order and inventory data across all connected systems." },
    ],
    chips: ["OMS", "E-Commerce", "Real-time Sync", "Fulfillment"],
  },
  {
    id: "docuvibes",
    name: "DocuVibes",
    tagline: "Online Document Management System",
    icon: FolderOpen,
    category: "Enterprise · DMS",
    gradient: "from-cyan-500 to-emerald-500",
    accentBg: "rgba(6,182,212,0.08)",
    accentBorder: "rgba(6,182,212,0.25)",
    description:
      "An online Document Management System (DMS) designed to help organizations securely store, organize, and manage their documents efficiently — streamlining the entire document lifecycle.",
    points: [
      { label: "Structured Management", detail: "Company setup, user onboarding, permission controls, and document classification." },
      { label: "Advanced Search", detail: "Connector configuration, metadata management, and full-text search capabilities." },
      { label: "Centralized Control", detail: "Teams can access, manage, and control information from a single unified system." },
    ],
    chips: ["DMS", "Enterprise", "Permissions", "Search"],
  },
  {
    id: "clearport",
    name: "ClearPort",
    tagline: "Container Vessel Document Processing",
    icon: Ship,
    category: "Logistics · Document Processing",
    gradient: "from-emerald-500 to-teal-500",
    accentBg: "rgba(16,185,129,0.08)",
    accentBorder: "rgba(16,185,129,0.25)",
    description:
      "A document processing system focused on handling container vessel-related files — receiving documents from multiple sources and organizing them into structured containers for streamlined logistics workflows.",
    points: [
      { label: "Multi-source Intake", detail: "Receives documents via email, ZIP uploads, and other file transfer methods." },
      { label: "Structured Containers", detail: "Organizes vessel/container documents for easy management of large volumes." },
      { label: "Smart Routing", detail: "Supports splitting, processing, and routing for classification, extraction, and tracking." },
    ],
    chips: ["Shipping", "Document Processing", "Logistics", "Automation"],
  },
  {
    id: "vp",
    name: "VP",
    tagline: "Validation Portal",
    icon: CheckSquare,
    category: "AI · Human Validation",
    gradient: "from-yellow-500 to-orange-500",
    accentBg: "rgba(234,179,8,0.08)",
    accentBorder: "rgba(234,179,8,0.25)",
    description:
      "A Validation Portal where documents received from Fluentia are reviewed and validated by human operators — bridging AI-based data extraction with human accuracy verification.",
    points: [
      { label: "AI Data Extraction", detail: "Documents like invoices undergo AI-based extraction in the Capture Platform." },
      { label: "Human Validation", detail: "Validators verify AI-generated output for accuracy, reliability, and completeness." },
      { label: "Downstream Ready", detail: "Verified data is ready for further processing or downstream use in operations." },
    ],
    chips: ["AI Validation", "Human-in-loop", "Invoices", "Quality Control"],
  },
  {
    id: "immotion",
    name: "Immotion",
    tagline: "Intelligent Email Processing System",
    icon: Mail,
    category: "Automation · Email AI",
    gradient: "from-pink-500 to-rose-500",
    accentBg: "rgba(236,72,153,0.08)",
    accentBorder: "rgba(236,72,153,0.25)",
    description:
      "An email processing system designed to read and analyze client emails containing multiple store-related templates and issues — intelligently separating and automatically creating tickets for each.",
    points: [
      { label: "Intelligent Parsing", detail: "Identifies and separates different issues within a single email, even across multiple stores." },
      { label: "Auto Ticket Creation", detail: "Automatically creates individual tickets for each identified issue or complaint." },
      { label: "API Integration", detail: "Sends structured tickets to the client's API for streamlined resolution workflows." },
    ],
    chips: ["Email AI", "Ticket Automation", "Issue Tracking", "API"],
  },
  {
    id: "posis",
    name: "Posis",
    tagline: "Smart Point-of-Sale System",
    icon: ShoppingCart,
    category: "Retail · POS",
    gradient: "from-indigo-500 to-violet-500",
    accentBg: "rgba(99,102,241,0.08)",
    accentBorder: "rgba(99,102,241,0.25)",
    description:
      "A modern, intuitive Point-of-Sale system built for retail businesses — combining fast transaction processing, inventory tracking, and sales analytics in one unified platform.",
    points: [
      { label: "Fast Transactions", detail: "Optimized checkout flows that process sales quickly and accurately." },
      { label: "Inventory Sync", detail: "Real-time inventory tracking across all store locations and warehouses." },
      { label: "Sales Analytics", detail: "Actionable insights and reporting dashboards to drive better retail decisions." },
    ],
    chips: ["POS", "Retail", "Inventory", "Analytics"],
  },
];

export function ShowcaseSection({ darkMode }: ShowcaseSectionProps) {
  const [active, setActive] = useState(0);
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  const project = projects[active];
  const Icon = project.icon;

  return (
    <section id="showcase" className={`py-28 px-6 ${darkMode ? "bg-[#030012]" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide uppercase mb-6 ${
              darkMode
                ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-300"
                : "bg-cyan-50 border-cyan-200 text-cyan-700"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            Our Portfolio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-black tracking-tight mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Products We{"  "}
            <span className="bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
              Built
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className={`text-lg max-w-xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            Real products. Real impact. Explore the platforms NLD has designed and engineered from the ground up.
          </motion.p>
        </div>

        {/* Project tabs — scrollable pill row */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {projects.map((p, i) => (
            <motion.button
              key={p.id}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActive(i)}
              className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                active === i
                  ? `bg-gradient-to-r ${p.gradient} text-white shadow-lg`
                  : darkMode
                  ? "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200"
                  : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-100"
              }`}
            >
              {p.name}
            </motion.button>
          ))}
        </div>

        {/* Active project detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-3xl border overflow-hidden ${
              darkMode ? "border-white/10" : "border-gray-100"
            }`}
            style={{ background: darkMode ? `linear-gradient(135deg, rgba(255,255,255,0.04) 0%, ${project.accentBg} 100%)` : undefined }}
          >
            <div className="grid md:grid-cols-5">
              {/* Left panel — identity */}
              <div
                className={`md:col-span-2 p-8 md:p-10 flex flex-col justify-between border-r ${
                  darkMode ? "border-white/8" : "border-gray-100"
                }`}
                style={{ background: darkMode ? undefined : `linear-gradient(135deg, #ffffff 0%, ${project.accentBg} 100%)` }}
              >
                <div>
                  {/* Icon + category */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${project.gradient} shadow-xl`}>
                      <Icon size={26} className="text-white" />
                    </div>
                    <div>
                      <div className={`text-xs font-bold tracking-widest uppercase ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                        {project.category}
                      </div>
                    </div>
                  </div>

                  <h3 className={`text-3xl md:text-4xl font-black mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {project.name}
                  </h3>
                  <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.tagline}
                  </p>
                  <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    {project.description}
                  </p>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.chips.map((chip) => (
                    <span
                      key={chip}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold border ${
                        darkMode
                          ? "border-white/10 bg-white/5 text-gray-400"
                          : "border-gray-200 bg-white text-gray-500"
                      }`}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right panel — key features */}
              <div className={`md:col-span-3 p-8 md:p-10 ${darkMode ? "" : "bg-white"}`}>
                <div className={`text-xs font-bold tracking-widest uppercase mb-6 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                  Key Capabilities
                </div>

                <div className="space-y-5">
                  {project.points.map((point, i) => (
                    <motion.div
                      key={point.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className={`flex gap-4 p-5 rounded-2xl border transition-all duration-200 hover:scale-[1.01] ${
                        darkMode
                          ? "bg-white/[0.04] border-white/8 hover:border-white/15"
                          : "bg-gray-50 border-gray-100 hover:border-gray-200"
                      }`}
                    >
                      {/* Number badge */}
                      <div
                        className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center text-xs font-black text-white bg-gradient-to-br ${project.gradient} shadow-md`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <div className={`text-sm font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
                          {point.label}
                        </div>
                        <div className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          {point.detail}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot nav */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === i
                  ? "w-6 bg-violet-500"
                  : darkMode ? "w-1.5 bg-white/20" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })}
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3 ${
              darkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {/* Start Your Own Project
            <ArrowRight size={15} /> */}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
