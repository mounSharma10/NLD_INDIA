import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import logoImage from "../assets/image.png";

interface FooterProps {
  darkMode: boolean;
}

const links = {
  Services: ["Web Development", "Mobile Apps", "AI Solutions", "Cloud & DevOps", "UI/UX Design"],
  Company: ["About Us", "Our Team", "Careers", "Blog", "Press Kit"],
  Resources: ["Case Studies", "Documentation", "API Reference", "Status Page", "Changelog"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"],
};

export function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`relative ${darkMode ? "bg-[#020010] border-t border-white/8" : "bg-gray-50 border-t border-gray-100"}`}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top section */}
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-11 h-11 rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 shadow-lg shadow-cyan-500/20">
                <img src={logoImage} alt="NLD India logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className={`font-bold text-base tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>NLD</span>
                <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent font-bold text-base"> India</span>
                <div className={`text-[10px] font-medium tracking-widest uppercase ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                  Digital Product Studio
                </div>
              </div>
            </div>

            <p className={`text-sm leading-relaxed mb-6 max-w-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              India's most trusted digital product studio. We build premium web, mobile, and AI solutions that scale.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <motion.button
                  key={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
                    darkMode
                      ? "bg-white/8 text-gray-400 hover:bg-white/15 hover:text-white"
                      : "bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-700 border border-gray-100"
                  }`}
                >
                  <Icon size={16} />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className={`text-xs font-bold tracking-widest uppercase mb-4 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <button className={`text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-1 group ${
                      darkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
                    }`}>
                      {item}
                      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className={`rounded-2xl p-6 border mb-12 ${
          darkMode ? "bg-white/[0.04] border-white/10" : "bg-white border-gray-100"
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className={`text-base font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Stay ahead of the curve
              </h4>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Get weekly insights on tech trends, case studies, and product tips.
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <input
                type="email"
                placeholder="your@email.com"
                className={`px-4 py-2.5 rounded-xl border text-sm outline-none w-56 transition-all focus:ring-2 focus:ring-violet-500/30 ${
                  darkMode
                    ? "bg-white/5 border-white/10 text-white placeholder-gray-600 focus:border-violet-500/50"
                    : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-violet-400"
                }`}
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-violet-500/20 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t ${
          darkMode ? "border-white/8" : "border-gray-100"
        }`}>
          <div className={`text-xs ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
            © 2026 Next Level Development India. Zirakpur, Punjab. All rights reserved.
          </div>
          <div className={`flex items-center gap-1 text-xs ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
            Made with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-red-500 mx-0.5"
            >
              ♥
            </motion.span>
            in India
            <span className="ml-1">🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
