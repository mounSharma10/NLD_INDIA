import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface FAQSectionProps {
  darkMode: boolean;
}

const faqs = [
  {
    q: "What types of projects does Next Level Development India handle?",
    a: "We specialize in full-stack web applications, mobile apps (iOS & Android), AI/ML integrations, cloud infrastructure, UI/UX design, and digital marketing. From MVPs to enterprise-scale platforms — we handle projects of all sizes.",
  },
  {
    q: "How long does it typically take to build a web application?",
    a: "A typical MVP takes 6–12 weeks, a mid-size web application takes 3–6 months, and enterprise platforms may take 6–12 months. We follow agile methodology with 2-week sprints so you see progress consistently throughout the project.",
  },
  {
    q: "Do you offer post-launch support and maintenance?",
    a: "Absolutely. We offer flexible maintenance packages including bug fixes, feature enhancements, performance monitoring, security updates, and 24/7 uptime monitoring. Our support SLA guarantees response within 4 hours for critical issues.",
  },
  {
    q: "What is your development process and how do you ensure quality?",
    a: "We follow a rigorous process: Discovery → Architecture → Design → Agile Development → QA Testing → Staging → Production Launch. We maintain 95%+ test coverage, conduct code reviews, and use automated CI/CD pipelines for every project.",
  },
  {
    q: "Can you work with our existing team or codebase?",
    a: "Yes! We excel at integrating with existing teams and codebases. Whether you need us to add capacity to your dev team, take over legacy code, or build new services that integrate with your existing systems — we adapt seamlessly.",
  },
  {
    q: "How do you handle project pricing and billing?",
    a: "We offer three models: Fixed Price (for well-defined scope), Time & Materials (for evolving requirements), and Dedicated Team (for ongoing development). We provide detailed quotes with milestone-based billing so you always know what you're paying for.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "Frontend: React, Next.js, Vue.js, Angular. Backend: Node.js, Python (Django/FastAPI), Go. Mobile: React Native, Flutter. Cloud: AWS, GCP, Azure. Databases: PostgreSQL, MongoDB, Redis. AI: OpenAI, LangChain, TensorFlow, PyTorch.",
  },
  {
    q: "Do you sign NDAs and protect our intellectual property?",
    a: "Yes, we sign NDAs before any project discussions and all code, designs, and intellectual property developed for you remain fully yours. We have strict security policies, and all team members are under confidentiality agreements.",
  },
];

function FAQItem({ faq, index, darkMode }: { faq: typeof faqs[0]; index: number; darkMode: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
        open
          ? darkMode
            ? "border-violet-500/30 bg-violet-500/5"
            : "border-violet-200 bg-violet-50/50"
          : darkMode
          ? "border-white/10 bg-white/[0.03] hover:border-white/20"
          : "border-gray-100 bg-white hover:border-gray-200"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
      >
        <span className={`text-sm md:text-base font-semibold pr-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 0 : 0 }}
          className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
            open
              ? "bg-gradient-to-br from-violet-600 to-blue-600 text-white"
              : darkMode
              ? "bg-white/8 text-gray-400"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className={`px-5 md:px-6 pb-5 md:pb-6 text-sm leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}>
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection({ darkMode }: FAQSectionProps) {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="faq" className={`py-28 px-6 ${darkMode ? "bg-[#020010]" : "bg-gray-50"}`}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide uppercase mb-6 ${
              darkMode
                ? "bg-pink-500/10 border-pink-500/30 text-pink-300"
                : "bg-pink-50 border-pink-200 text-pink-700"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
            FAQ
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-black tracking-tight mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Got{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Questions?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            Everything you need to know about working with us.
          </motion.p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} darkMode={darkMode} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className={`mt-12 text-center p-6 rounded-2xl border ${
            darkMode ? "bg-white/[0.03] border-white/10" : "bg-white border-gray-100"
          }`}
        >
          <p className={`text-sm mb-3 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            Still have questions? We'd love to talk.
          </p>
          <button
            onClick={() => document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
