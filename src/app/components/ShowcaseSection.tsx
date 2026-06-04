import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { Brain, FolderOpen, Mail, Package, ScanText, ShieldCheck, Ship, ShoppingCart, Sparkles, Workflow , Anchor} from "lucide-react";

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
    gradient: "from-violet-400 via-blue-400 to-cyan-300",
    description:
      "A modern logistics intelligence platform that transforms trade and customs documents into validated, structured, and actionable data. Fluentia combines AI-powered automation, secure processing, and enterprise-grade integrations for international operations.",
    chips: ["Web Platform", "Logistics", "Automation", "Customs"],
    points: [
      {
        label: "Smart Document Processing",
        detail: "Classifies logistics documents and extracts critical information with high accuracy and operational consistency.",
      },
      {
        label: "Customs Data Preparation",
        detail: "Structures customs workflows into reliable digital pipelines that support compliance and faster handling.",
      },
      {
        label: "Multi-Channel Intake",
        detail: "Receives and processes files through APIs, SFTP, email, and web uploads without adding workflow friction.",
      },
    ],
  },
  {
    id: "cp",
    name: "Capture Platform",
    tagline: "Document Intelligence Engine",
    icon: ScanText,
    category: "AI · Data Extraction",
    gradient: "from-cyan-300 via-sky-400 to-blue-500",
    description:
      "An AI-driven processing engine built to convert unstructured business documents into reliable structured data. Capture Platform reduces manual effort, improves speed, and creates integration-ready outputs for enterprise systems.",
    chips: ["AI Extraction", "OCR", "Invoices", "Automation"],
    points: [
      {
        label: "AI-Powered Recognition",
        detail: "Understands varied document formats through advanced OCR and intelligent recognition models.",
      },
      {
        label: "Smart Data Extraction",
        detail: "Identifies and extracts the business-critical values needed for downstream operations and reporting.",
      },
      {
        label: "Integration-Ready Output",
        detail: "Delivers clean, validated, and structured data that slots directly into enterprise workflows.",
      },
    ],
  },
  {
    id: "docuvibes",
    name: "DocuVibes",
    tagline: "Enterprise Document Management System",
    icon: FolderOpen,
    category: "Enterprise · DMS",
    gradient: "from-emerald-300 via-cyan-300 to-sky-400",
    description:
      "A refined document management environment built for businesses that need secure organization, smart retrieval, and modern operational visibility. DocuVibes brings structure and usability to document-heavy enterprise teams.",
    chips: ["DMS", "Enterprise", "Permissions", "Search"],
    points: [
      {
        label: "Structured Document Control",
        detail: "Organizes document flows with clear taxonomies, access rules, and searchable storage patterns.",
      },
      {
        label: "Automation-Ready Workflows",
        detail: "Supports routing, processing, and operational steps that reduce repetitive document handling work.",
      },
      {
        label: "Cross-System Accessibility",
        detail: "Connects documents with surrounding enterprise systems so teams work from one dependable source.",
      },
    ],
  },
  {
    id: "clearport",
    name: "ClearPort",
    tagline: "Container Vessel Document Processing",
    icon: Anchor,
    category: "Logistics · Document Processing",
    gradient: "from-emerald-400 via-teal-400 to-cyan-300",
    description:
      "A smart logistics document solution for container and vessel operations that helps teams receive, organize, and process large operational file volumes with greater speed and accuracy.",
    chips: ["Shipping", "Document Processing", "Logistics", "Automation"],
    points: [
      {
        label: "Multi-Source Intake",
        detail: "Collects files from email, ZIP uploads, APIs, and transfer channels into one streamlined processing flow.",
      },
      {
        label: "Automated Routing",
        detail: "Supports classification, extraction, and tracking through intelligent workflow orchestration.",
      },
      {
        label: "Operational Visibility",
        detail: "Keeps container and vessel documentation structured for easier processing and monitoring.",
      },
    ],
  },
  {
    id: "orion",
    name: "Orion",
    tagline: "Order Management System",
    icon: Package,
    category: "E-Commerce · OMS",
    gradient: "from-blue-400 via-cyan-300 to-violet-400",
    description:
      "A robust order management product designed to keep businesses synchronized across webshops and fulfillment partners. Orion minimizes manual effort and creates a cleaner, more automated order lifecycle.",
    chips: ["OMS", "E-Commerce", "Real-time Sync", "Fulfillment"],
    points: [
      {
        label: "Seamless Order Flow",
        detail: "Maintains dependable movement of order data between storefronts, partners, and internal systems.",
      },
      {
        label: "Automation-First Logic",
        detail: "Reduces operational overhead through smart routing, status management, and exception handling.",
      },
      {
        label: "Real-Time Synchronization",
        detail: "Keeps order and inventory data aligned across connected systems for greater reliability.",
      },
    ],
  },
  {
    id: "posis",
    name: "Posis",
    tagline: "Smart Point-of-Sale System",
    icon: ShoppingCart,
    category: "Retail · POS",
    gradient: "from-indigo-400 via-violet-400 to-pink-400",
    description:
      "A modern point-of-sale platform built for retail teams that need fast transactions, real-time inventory awareness, and decision-ready analytics in one elegant operating layer.",
    chips: ["POS", "Retail", "Inventory", "Analytics"],
    points: [
      {
        label: "Fast Transactions",
        detail: "Optimized checkout and transaction handling that keeps front-line retail experiences smooth and dependable.",
      },
      {
        label: "Inventory Synchronization",
        detail: "Maintains a reliable view of stock across stores and warehouses without manual reconciliation.",
      },
      {
        label: "Sales Intelligence",
        detail: "Turns store activity into usable analytics for better planning, visibility, and performance improvement.",
      },
    ],
  },
  {
    id: "immotion",
    name: "Immotion",
    tagline: "Intelligent Email Processing System",
    icon: Mail,
    category: "Automation · Email AI",
    gradient: "from-pink-400 via-rose-400 to-orange-300",
    description:
      "An AI-driven email processing system that reads client communication, separates issues, and transforms messages into structured tickets ready for operational resolution.",
    chips: ["Email AI", "Ticket Automation", "Issue Tracking", "API"],
    points: [
      {
        label: "Intelligent Email Analysis",
        detail: "Understands multiple requests or problems within a single email and separates them with precision.",
      },
      {
        label: "Automated Ticket Generation",
        detail: "Creates distinct tickets for each issue so service workflows stay organized and accountable.",
      },
      {
        label: "System Integration",
        detail: "Pushes structured ticket data into business platforms and service management tools through APIs.",
      },
    ],
  },
];

export function ShowcaseSection({ darkMode }: ShowcaseSectionProps) {
  const [active, setActive] = useState(0);
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  const project = projects[active];
  const Icon = project.icon;

  return (
    <section id="showcase" className={`relative overflow-hidden px-6 py-28 ${darkMode ? "bg-[#030712]" : "bg-gray-50"}`}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute left-1/2 top-10 h-[360px] w-[760px] -translate-x-1/2 rounded-full blur-[150px] ${
            darkMode ? "bg-cyan-500/12" : "bg-cyan-200/70"
          }`}
        />
        <div
          className={`absolute left-[10%] top-[38%] h-[260px] w-[260px] rounded-full blur-[120px] ${
            darkMode ? "bg-violet-500/12" : "bg-violet-200/70"
          }`}
        />
        <div
          className={`absolute bottom-[-3%] right-[7%] h-[260px] w-[260px] rounded-full blur-[120px] ${
            darkMode ? "bg-pink-500/10" : "bg-pink-200/70"
          }`}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div ref={headerRef} className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] ${
              darkMode
                ? "border-cyan-400/20 bg-white/[0.05] text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)]"
                : "border-cyan-200 bg-white text-cyan-700 shadow-sm"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
            OUR PORTFOLIO
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className={`text-4xl font-black tracking-[-0.05em] md:text-6xl ${darkMode ? "text-white" : "text-gray-900"}`}
            style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
          >
            Products We{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              Built
            </span>
          </motion.h2>

          {/* <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18 }}
            className={`mx-auto mt-5 max-w-3xl text-sm leading-7 md:text-base ${darkMode ? "text-slate-400" : "text-slate-500"}`}
          >
            Real platforms, AI products, and enterprise systems designed with a high-trust product mindset and
            production-grade execution.
          </motion.p> */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.22 }}
          className="mb-8 flex justify-center"
        >
          <div
            className={`flex w-full max-w-6xl gap-3 overflow-x-auto rounded-full p-2 ${
              darkMode
                ? "bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                : "bg-white shadow-sm ring-1 ring-slate-200"
            }`}
          >
            {projects.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActive(index)}
                className={`relative min-w-fit rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  active === index
                    ? darkMode
                      ? "text-white shadow-[0_18px_50px_rgba(14,165,233,0.22)]"
                      : "text-slate-950 shadow-md"
                    : darkMode
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-500 hover:text-slate-900"
                }`}
                style={
                  active === index
                    ? {
                        background: darkMode
                          ? "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(10,14,26,0.12) 30%, transparent 100%), linear-gradient(90deg, rgba(34,211,238,0.42), rgba(168,85,247,0.38))"
                          : undefined,
                      }
                    : undefined
                }
              >
                <span className={`absolute inset-[1px] rounded-full ${active === index && darkMode ? "bg-[#09111e]/92" : "bg-transparent"}`} />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <item.icon size={15} />
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <div
            className={`pointer-events-none absolute left-1/2 top-1/2 h-[84%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[40px] blur-[90px] ${
              darkMode ? "bg-cyan-500/10" : "bg-cyan-100/80"
            }`}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-[32px] border ${
                darkMode
                  ? "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)] shadow-[0_30px_80px_rgba(2,8,23,0.55)]"
                  : "border-slate-200 bg-white shadow-[0_30px_80px_rgba(148,163,184,0.16)]"
              }`}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: darkMode
                    ? "linear-gradient(135deg, rgba(34,211,238,0.10) 0%, transparent 30%, transparent 70%, rgba(168,85,247,0.08) 100%)"
                    : "linear-gradient(135deg, rgba(207,250,254,0.6) 0%, rgba(255,255,255,0) 40%, rgba(245,243,255,0.6) 100%)",
                }}
              />

              <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
                <div
                  className={`relative p-7 md:p-10 lg:p-12 ${
                    darkMode ? "border-b border-white/8 lg:border-b-0 lg:border-r" : "border-b border-slate-200 lg:border-b-0 lg:border-r"
                  }`}
                >
                  <div className="mb-8 flex items-center gap-4">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br ${project.gradient} shadow-[0_20px_45px_rgba(59,130,246,0.28)]`}>
                      <Icon size={28} className="text-white" />
                    </div>

                    <div>
                      {/* <div
                        className={`mb-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${
                          darkMode ? "bg-white/[0.06] text-slate-300" : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <ShieldCheck size={13} />
                        {project.category}
                      </div> */}
                      {/* <div className={`text-xs uppercase tracking-[0.32em] ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                        Portfolio Highlight
                      </div> */}
                          <h3
                    className={`max-w-xl text-3xl font-black tracking-[-0.04em] md:text-5xl ${darkMode ? "text-white" : "text-slate-950"}`}
                    style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
                  >
                    {project.name}
                  </h3>
                    </div>
                  </div>

                  {/* <h3
                    className={`max-w-xl text-3xl font-black tracking-[-0.04em] md:text-5xl ${darkMode ? "text-white" : "text-slate-950"}`}
                    style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
                  >
                    {project.name}
                  </h3> */}

                  <p className={`mt-4 max-w-2xl text-lg leading-8 ${darkMode ? "text-slate-200" : "text-slate-700"}`}>
                    {project.tagline}
                  </p>

                  <p className={`mt-6 max-w-2xl text-sm leading-8 md:text-base ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.chips.map((chip) => (
                      <span
                        key={chip}
                        className={`rounded-full px-4 py-2 text-xs font-semibold ${
                          darkMode
                            ? "bg-white/[0.06] text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  {/* <div className="mt-10 flex items-center gap-3">
                    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${darkMode ? "bg-white/[0.05] text-white" : "bg-slate-900 text-white"}`}>
                      Enterprise-ready execution
                      <Brain size={15} />
                    </div>
                  </div> */}
                </div>

                <div className="relative p-7 md:p-10 lg:p-12">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <div>
                      <div className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                        Key Capabilities
                      </div>
                      {/* <h4
                        className={`mt-3 text-2xl font-black tracking-[-0.03em] ${darkMode ? "text-white" : "text-slate-950"}`}
                        style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
                      >
                        Connected product intelligence.
                      </h4> */}
                    </div>

                    <div className={`hidden rounded-2xl p-3 md:flex ${darkMode ? "bg-white/[0.05] text-cyan-200" : "bg-cyan-50 text-cyan-700"}`}>
                      <Workflow size={20} />
                    </div>
                  </div>

                  <div className="space-y-5">
                    {project.points.map((point, index) => (
                      <motion.div
                        key={point.label}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="group relative"
                      >
                        {index < project.points.length - 1 ? (
                          <div
                            className={`absolute left-[19px] top-14 h-[calc(100%+18px)] w-px $`}
                          />
                        ) : null}

                        <div
                          className={`relative flex gap-4 rounded-[24px] p-5 transition-all duration-300 ${
                            darkMode
                              ? "bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:bg-white/[0.06]"
                              : "bg-slate-50 hover:bg-white"
                          }`}
                        >
                          <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} text-sm font-black text-white shadow-[0_14px_30px_rgba(59,130,246,0.2)]`}>
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <div>
                            <div className={`text-base font-bold ${darkMode ? "text-white" : "text-slate-950"}`}>{point.label}</div>
                            <p className={`mt-2 text-sm leading-7 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{point.detail}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* <div
                    className={`mt-8 rounded-[24px] p-5 ${
                      darkMode
                        ? "bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(168,85,247,0.08))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                        : "bg-[linear-gradient(135deg,rgba(207,250,254,0.9),rgba(245,243,255,0.9))]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-1 rounded-2xl p-2 ${darkMode ? "bg-white/[0.08] text-cyan-200" : "bg-white text-cyan-700 shadow-sm"}`}>
                        <Sparkles size={16} />
                      </div>
                      <div>
                        <div className={`text-sm font-semibold ${darkMode ? "text-white" : "text-slate-950"}`}>
                          Designed to feel premium while solving operational complexity.
                        </div>
                        <p className={`mt-2 text-sm leading-7 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                          Each product is presented like a flagship build: clear value, polished interaction design,
                          and enterprise-grade functionality underneath.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
