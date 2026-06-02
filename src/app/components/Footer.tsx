import { motion } from "motion/react";
import { ArrowUpRight, Linkedin } from "lucide-react";
import logoImage from "../assets/image.png";

interface FooterProps {
  darkMode: boolean;
}

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#showcase" },
  { label: "AI Solutions", href: "#ai-solutions" },
  { label: "Contact", href: "#cta" },
];

export function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`relative overflow-hidden border-t px-6 py-12 ${darkMode ? "border-white/10" : "border-slate-200/80"}`}>
      <div className="relative mx-auto max-w-7xl">
        <div className={`rounded-[32px] border p-6 md:p-8 ${
          darkMode ? "border-white/10 bg-white/[0.04]" : "border-white/75 bg-white/84 shadow-[0_20px_60px_rgba(148,163,184,0.14)]"
        }`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className={`absolute inset-0 rounded-2xl blur-xl ${darkMode ? "bg-cyan-400/25" : "bg-cyan-300/35"}`} />
                  <img src={logoImage} alt="NLD India logo" className="relative h-12 w-12 object-contain" />
                </div>
                <div>
                  <div className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-950"}`}>NLD India Software Pvt. Ltd.</div>                
                </div>
              </div>

              <p className={`mt-5 text-sm leading-7 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                We create premium digital products, AI workflows, and operational platforms for teams that care about
                 quality, and long-term trust.
              </p>
            </div>

            <div className="flex flex-col gap-5 lg:items-end">
              <div className="flex flex-wrap gap-2">
                {links.map((link) => (
                  <motion.button
                    key={link.label}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                      darkMode ? "bg-white/8 text-slate-200 hover:bg-white/12" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {link.label}
                    <ArrowUpRight size={14} />
                  </motion.button>
                ))}
              </div>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/company/nld-india-software-pvt-ltd/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                  darkMode ? "bg-white/8 text-slate-200 hover:bg-white/12" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Linkedin size={15} />
                LinkedIn
              </motion.a>

              <div className={`text-xs ${darkMode ? "text-slate-500" : "text-slate-400"}`}>© 2026 NLD India Software Pvt. Ltd.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
