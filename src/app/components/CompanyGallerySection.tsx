import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Camera, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CompanyGallerySectionProps {
  darkMode: boolean;
}

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    title: "Collaboration Corner",
    desc: "Planning rooms and work zones shaped for calm decisions, crisp reviews, and strong delivery rhythm.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=900",
    title: "Team in Motion",
    desc: "Tight communication and shared ownership across design, product, and engineering.",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    title: "Fresh Thinking",
    desc: "Brainstorms, feedback loops, and problem-solving sessions that move ideas forward quickly.",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=900",
    title: "Company Culture",
    desc: "A people-first environment where growth, trust, and thoughtful craft stay visible in the work.",
    span: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    title: "Client Strategy",
    desc: "Sessions focused on turning ideas into clear roadmaps, sharper launches, and better outcomes.",
    span: "",
  },
];

export function CompanyGallerySection({ darkMode }: CompanyGallerySectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="gallery"
      className={`relative overflow-hidden px-6 py-28 ${darkMode ? "bg-[#081423]" : "bg-[#f8fafc]"}`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute left-10 top-12 h-[320px] w-[320px] rounded-full blur-[120px] ${
            darkMode ? "bg-cyan-500/12" : "bg-cyan-200/80"
          }`}
        />
        <div
          className={`absolute bottom-8 right-10 h-[380px] w-[380px] rounded-full blur-[120px] ${
            darkMode ? "bg-sky-500/12" : "bg-sky-200/80"
          }`}
        />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] ${
              darkMode
                ? "border-white/12 bg-white/[0.04] text-cyan-200"
                : "border-cyan-200 bg-white text-cyan-700 shadow-sm"
            }`}
          >
            <Camera size={13} />
            Life at NLD India
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
            A visual look at
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
              life and momentum at NLD.
            </span>
          </motion.h2>

          {/* <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.16 }}
            className={`mt-5 text-base leading-8 ${darkMode ? "text-slate-300" : "text-slate-600"}`}
          >
            The gallery uses an editorial-style collage so the culture section feels designed, not decorative. It gives
            the hiring story and company personality more presence on the page.
          </motion.p> */}
        </div>

        <div className="grid grid-cols-1 auto-rows-[220px] gap-5 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.22 + index * 0.08, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-[30px] border ${image.span} ${
                darkMode ? "border-white/10 bg-white/[0.04]" : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                  <Sparkles size={12} />
                  NLD Culture
                </div>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "'Space Grotesk', 'Manrope', sans-serif" }}
                >
                  {image.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-7 text-white/82">{image.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
