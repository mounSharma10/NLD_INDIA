import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Menu, X } from "lucide-react";
import logoImage from "../assets/image.png";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#showcase" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Hiring", href: "#hiring" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#cta" },
];

export function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? darkMode
              ? "bg-[#081120]/72 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/30"
              : "bg-white/75 backdrop-blur-2xl border-b border-slate-200/80 shadow-xl shadow-slate-200/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2.5 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <img src={logoImage} alt="NLD India logo" className=" object-contain w-11 h-11" />
              {/* <div className="relative w-11 h-11 rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 shadow-lg shadow-cyan-500/20">
              </div> */}
              <div>
                <span
                  className={`font-bold text-base tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}
                  style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
                >
                 NLD 
                </span>
                <span
                  className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent font-bold text-base tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
                >
                  {" "}India
                </span>
                {/* <div className={`text-[10px] font-medium tracking-widest uppercase ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  India
                </div> */}
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  onClick={() => handleNav(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    darkMode
                      ? "text-slate-300 hover:text-white hover:bg-white/10"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-900/5"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
                  darkMode
                    ? "bg-white/10 text-amber-300 hover:bg-white/15"
                    : "bg-slate-900/5 text-slate-600 hover:bg-slate-900/10"
                }`}
              >
                {darkMode ? <Sun size={17} /> : <Moon size={17} />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleNav("#cta")}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 text-white text-sm font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Get Started
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden w-9 h-9 rounded-xl flex items-center justify-center ${
                  darkMode ? "bg-white/10 text-white" : "bg-slate-900/5 text-slate-700"
                }`}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={`fixed top-[72px] left-4 right-4 z-40 rounded-2xl overflow-hidden ${
              darkMode
                ? "bg-[#0b1728]/95 backdrop-blur-2xl border border-white/10"
                : "bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-2xl"
            }`}
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNav(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    darkMode ? "text-slate-300 hover:text-white hover:bg-white/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-900/5"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleNav("#cta")}
                className="mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 text-white text-sm font-semibold"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
