import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialsSectionProps {
  darkMode: boolean;
}

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CTO, FinPulse India",
    avatar: "RS",
    rating: 5,
    text: "Next Level Dev transformed our fintech platform completely. They delivered a product that handles 100K+ daily transactions flawlessly. Their team's depth of knowledge in React and Node.js is unmatched.",
    company: "FinPulse India",
    gradient: "from-violet-500 to-blue-500",
  },
  {
    name: "Priya Mehta",
    role: "Founder, StyleSphere",
    avatar: "PM",
    rating: 5,
    text: "The mobile app they built for us has a 4.9-star rating on the App Store. The animations, the UX — everything is just perfect. Our user retention went from 40% to 78% after launch.",
    company: "StyleSphere",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Arjun Patel",
    role: "VP Engineering, MediCore",
    avatar: "AP",
    rating: 5,
    text: "Their AI integration work saved us 6 months of development time. The team is responsive, technically brilliant, and they genuinely care about the product outcome. Highly recommend.",
    company: "MediCore",
    gradient: "from-cyan-500 to-emerald-500",
  },
  {
    name: "Sneha Kapoor",
    role: "Head of Digital, RetailMax",
    avatar: "SK",
    rating: 5,
    text: "We've worked with agencies across India and abroad — none come close to Next Level Dev's quality. They rebuilt our entire e-commerce platform in 3 months, delivering a 40% increase in conversion rate.",
    company: "RetailMax",
    gradient: "from-emerald-500 to-violet-500",
  },
  {
    name: "Vikram Nair",
    role: "CEO, LogistIQ",
    avatar: "VN",
    rating: 5,
    text: "Our logistics tracking system now processes 2M+ events per day without a hiccup. The cloud architecture they designed is exactly what we needed. Exceptional work.",
    company: "LogistIQ",
    gradient: "from-violet-500 to-pink-500",
  },
];

export function TestimonialsSection({ darkMode }: TestimonialsSectionProps) {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!auto) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [auto]);

  const prev = () => {
    setAuto(false);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setAuto(false);
    setCurrent((p) => (p + 1) % testimonials.length);
  };

  const getIndex = (offset: number) => (current + offset + testimonials.length) % testimonials.length;

  return (
    <section id="testimonials" className={`py-28 px-6 overflow-hidden ${darkMode ? "bg-[#020010]" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide uppercase mb-6 ${
              darkMode
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                : "bg-emerald-50 border-emerald-200 text-emerald-700"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Client Love
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-black tracking-tight mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Trusted by{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              India's Best
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            200+ companies chose us. Here's what they say.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-4 items-center">
            {/* Side card left */}
            <motion.div
              key={`left-${getIndex(-1)}`}
              className={`hidden md:block rounded-2xl p-6 border opacity-50 scale-95 transition-all duration-500 ${
                darkMode ? "bg-white/[0.03] border-white/8" : "bg-gray-50 border-gray-100"
              }`}
            >
              <TestimonialContent t={testimonials[getIndex(-1)]} darkMode={darkMode} compact />
            </motion.div>

            {/* Active card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-2xl p-8 border shadow-2xl ${
                  darkMode
                    ? "bg-gradient-to-br from-white/8 to-white/4 border-white/15 shadow-violet-900/30"
                    : "bg-white border-gray-100 shadow-gray-200/80"
                }`}
              >
                {/* Quote icon */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${testimonials[current].gradient}`}>
                  <Quote size={18} className="text-white fill-white" />
                </div>

                <p className={`text-base leading-relaxed mb-6 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                  "{testimonials[current].text}"
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white bg-gradient-to-br ${testimonials[current].gradient}`}>
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                      {testimonials[current].name}
                    </div>
                    <div className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>

                {/* Gradient glow */}
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${testimonials[current].gradient} opacity-10 -z-10 blur-sm`} />
              </motion.div>
            </AnimatePresence>

            {/* Side card right */}
            <motion.div
              key={`right-${getIndex(1)}`}
              className={`hidden md:block rounded-2xl p-6 border opacity-50 scale-95 transition-all duration-500 ${
                darkMode ? "bg-white/[0.03] border-white/8" : "bg-gray-50 border-gray-100"
              }`}
            >
              <TestimonialContent t={testimonials[getIndex(1)]} darkMode={darkMode} compact />
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                darkMode
                  ? "border-white/15 text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/10"
                  : "border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              <ChevronLeft size={18} />
            </motion.button>

            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAuto(false); setCurrent(i); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-violet-500"
                      : darkMode ? "w-1.5 bg-white/20" : "w-1.5 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                darkMode
                  ? "border-white/15 text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/10"
                  : "border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialContent({ t, darkMode, compact }: { t: typeof testimonials[0]; darkMode: boolean; compact?: boolean }) {
  return (
    <div>
      <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
        "{t.text}"
      </p>
      <div className="flex items-center gap-2">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br ${t.gradient}`}>
          {t.avatar}
        </div>
        <div>
          <div className={`text-xs font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>{t.name}</div>
          <div className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>{t.role}</div>
        </div>
      </div>
    </div>
  );
}
