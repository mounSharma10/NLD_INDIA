import { motion } from "motion/react";
import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";
import logoImage from "../assets/image.png";

interface FooterProps {
  darkMode: boolean;
}

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#showcase" },
  { label: "Contact", href: "#cta" },
];

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nld-india-software-pvt-ltd/posts/?feedView=all",
  },
];

export function Footer({ darkMode }: FooterProps) {
  return (
    <footer
      className={`relative overflow-hidden border-t ${
        darkMode ? "border-white/10 bg-[#020010]" : "border-gray-200/80 bg-white"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute left-1/2 top-0 h-32 w-[28rem] -translate-x-1/2 rounded-full blur-3xl ${
            darkMode ? "bg-cyan-500/10" : "bg-cyan-100"
          }`}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-11 w-11 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-lg shadow-cyan-500/10">
              <img src={logoImage} alt="NLD India logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <div className={`text-base font-bold tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
                NLD India Software Pvt Ltd.
              </div>
              {/* <div className={`text-[11px] uppercase tracking-[0.28em] ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                Digital Product Studio
              </div> */}
            </div>
          </div>

          <p className={`text-sm leading-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            We design and build thoughtful digital products for modern businesses.
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 md:items-end">
          <div className="flex flex-wrap gap-2">
            {quickLinks.map((link) => (
              <motion.button
                key={link.label}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                  darkMode
                    ? "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white"
                }`}
              >
                {link.label}
                <ArrowUpRight size={14} />
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                aria-label={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 ${
                  darkMode
                    ? "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-900 hover:text-white"
                }`}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          <div className={`text-xs ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
            © 2026 NLD India Software Pvt Ltd.
          </div>
        </div>
      </div>
    </footer>
  );
}
