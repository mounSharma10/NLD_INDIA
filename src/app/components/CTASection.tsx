import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, CheckCircle, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";

interface CTASectionProps {
  darkMode: boolean;
}

const contactCards = [
  { icon: Mail, title: "Email", value: "hello@nextleveldev.in" },
  { icon: Phone, title: "Phone", value: "+91 98765 43210" },
  { icon: MapPin, title: "Location", value: "Zirakpur, Punjab, India" },
];

export function CTASection({ darkMode }: CTASectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", project: "", budget: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="cta"
      className={`relative overflow-hidden px-6 py-28 ${darkMode ? "bg-[#081423]" : "bg-[#f8fafc]"}`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.12, 1], rotate: [0, 6, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -left-24 top-0 h-[520px] w-[520px] rounded-full blur-[140px] ${
            darkMode ? "bg-sky-500/12" : "bg-sky-200/75"
          }`}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, -6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className={`absolute -right-24 bottom-0 h-[520px] w-[520px] rounded-full blur-[140px] ${
            darkMode ? "bg-emerald-500/12" : "bg-emerald-200/75"
          }`}
        />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
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
           Get in Touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`text-4xl font-black tracking-[-0.05em] md:text-6xl ${
              darkMode ? "text-white" : "text-slate-950"
            }`}
            style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
          >
            Ask your inquiry.
            {/* <span className="block bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              of your product.
            </span> */}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18 }}
            className={`mt-5 text-base leading-8 md:text-lg ${darkMode ? "text-slate-300" : "text-slate-600"}`}
          >
          share yur career with us.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className={`rounded-[34px] border p-6 md:p-8 ${
              darkMode ? "border-white/10 bg-white/[0.05]" : "border-slate-200 bg-white shadow-sm"
            }`}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[360px] flex-col items-center justify-center text-center"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500">
                  <CheckCircle size={32} className="text-white" />
                </div>
                <h3
                  className={`text-3xl font-bold ${darkMode ? "text-white" : "text-slate-950"}`}
                  style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
                >
                  Message received
                </h3>
                <p className={`mt-3 max-w-md text-sm leading-7 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                  We&apos;ll review your note and respond with next steps, recommended scope, and a likely timeline.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3
                      className={`text-2xl font-bold tracking-tight ${darkMode ? "text-white" : "text-slate-950"}`}
                      style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
                    >
                      Tell us what you&apos;re building
                    </h3>
                    <p className={`mt-2 text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                      A few details are enough to start the conversation.
                    </p>
                  </div>
                  <div
                    className={`hidden rounded-2xl px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] md:block ${
                      darkMode ? "bg-white/8 text-slate-300" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    24h reply
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { key: "name", label: "Your Name", placeholder: "Rahul Sharma", type: "text" },
                    { key: "email", label: "Email Address", placeholder: "rahul@company.com", type: "email" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className={`mb-2 block text-xs font-semibold uppercase tracking-[0.2em] ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className={`w-full rounded-2xl border px-4 py-3.5 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-cyan-400/30 ${
                          darkMode
                            ? "border-white/10 bg-[#0b1728] text-white placeholder:text-slate-500 focus:border-cyan-400/50"
                            : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-cyan-400"
                        }`}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className={`mb-2 block text-xs font-semibold uppercase tracking-[0.2em] ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    Project Brief
                  </label>
                  <textarea
                    required
                    placeholder="Website redesign, AI workflow, mobile app, hiring microsite, or something bigger."
                    value={form.project}
                    onChange={(e) => setForm({ ...form, project: e.target.value })}
                    rows={5}
                    className={`w-full rounded-[24px] border px-4 py-3.5 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-cyan-400/30 ${
                      darkMode
                        ? "border-white/10 bg-[#0b1728] text-white placeholder:text-slate-500 focus:border-cyan-400/50"
                        : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-cyan-400"
                    }`}
                  />
                </div>

          

                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300"
                >
                  <Send size={16} />
                  Send project inquiry
                  <ArrowRight size={16} />
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="space-y-5"
          >
           

            {contactCards.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.45 + index * 0.08 }}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-4 rounded-[26px] border p-5 ${
                    darkMode
                      ? "border-white/10 bg-white/[0.04] hover:border-white/18"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-500 shadow-lg">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-[0.2em] ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                      {contact.title}
                    </div>
                    <div className={`mt-1 text-sm font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      {contact.value}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
