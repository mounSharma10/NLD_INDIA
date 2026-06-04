import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ServicesSection } from "./components/ServicesSection";
import { ShowcaseSection } from "./components/ShowcaseSection";
import { TechStackSection } from "./components/TechStackSection";
import { HiringSection } from "./components/HiringSection";
import { CompanyGallerySection } from "./components/CompanyGallerySection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "dark" : ""}`}>
      <div
        className={`min-h-screen transition-colors duration-500 ${
          darkMode ? "bg-[#07111f] text-white" : "bg-[#f6f7fb] text-gray-900"
        }`}
        style={{ fontFamily: "'Manrope', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <HeroSection darkMode={darkMode} />
          <FeaturesSection darkMode={darkMode} />
          <ServicesSection darkMode={darkMode} />
          <ShowcaseSection darkMode={darkMode} />
          <TechStackSection darkMode={darkMode} />
          {/* <HiringSection darkMode={darkMode} /> */}
          <CompanyGallerySection darkMode={darkMode} />
          {/* <FAQSection darkMode={darkMode} /> */}
          <CTASection darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
