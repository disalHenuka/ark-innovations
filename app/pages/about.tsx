"use client";

import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import "@/app/styles/about.css";

// Custom hook for scroll-based fade in/out
function useScrollFade(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
}

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutPage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string>("about");

  // Scroll fade hooks
  const headerFade = useScrollFade(0.1);
  const sectionsFade = useScrollFade(0.15);
  const whyChooseFade = useScrollFade(0.2);
  const ctaFade = useScrollFade(0.3);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: aboutRef, id: "about" },
        { ref: expertiseRef, id: "expertise" },
        { ref: approachRef, id: "approach" },
      ];

      let closest = sections[0];
      let minDistance = Infinity;

      sections.forEach((section) => {
        if (!section.ref.current) return;
        const rect = section.ref.current.getBoundingClientRect();
        const distance = Math.abs(
          rect.top + rect.height / 2 - window.innerHeight / 2
        );
        if (distance < minDistance) {
          minDistance = distance;
          closest = section;
        }
      });

      if (minDistance < window.innerHeight * 0.6) {
        setActiveSection(closest.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const LiquidBackground = () => (
    <motion.div
      layoutId="liquid-bg"
      className="liquid-fill-shared"
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 2,
      }}
    />
  );

  return (
    <div className="about-page">
      {/* Seamless Scrolling Skyline Background */}
      <div className="skyline-background">
        <div className="skyline-scroll"></div>
      </div>

      {/* SVG Filter for Goo Effect - CRITICAL FOR LIQUID ANIMATION */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="about-container">
        {/* Header with Fade In */}
        <motion.div
          ref={headerFade.ref}
          initial="hidden"
          animate={headerFade.isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          className="about-header"
        >
          <h2 className="about-subtitle">About</h2>
          <h1 className="about-title">Ark Innovations Pvt (Ltd)</h1>
        </motion.div>

        {/* Sections with Liquid Animation + Fade In + Scale */}
        <motion.div
          ref={sectionsFade.ref}
          initial="hidden"
          animate={sectionsFade.isVisible ? "visible" : "hidden"}
          variants={fadeInScale}
          className="sections-wrapper"
        >
          {/* About Section */}
          <div
            ref={aboutRef}
            className={`about-section ${
              activeSection === "about" ? "active" : ""
            }`}
          >
            <div className="section-content">
              <p className="about-text">
                <strong>Ark Innovations (Pvt) Ltd</strong> is a trusted provider of
                recruitment, manpower, and outsourcing solutions, delivering
                comprehensive workforce services that help organizations operate
                efficiently and grow sustainably in competitive markets.
              </p>
              <p className="about-text">
                We believe that people are the foundation of every successful
                business. With a strong commitment to quality, integrity, and
                client satisfaction, Ark Innovations connects businesses with
                skilled professionals while offering strategic workforce support
                tailored to evolving industry demands.
              </p>
            </div>
            {activeSection === "about" && <LiquidBackground />}
          </div>

          {/* Expertise Section */}
          <div
            ref={expertiseRef}
            className={`expertise-section ${
              activeSection === "expertise" ? "active" : ""
            }`}
          >
            <div className="section-content">
              <h2 className="section-heading">Our Expertise</h2>
              <p className="section-text">
                At Ark Innovations, our experienced recruitment specialists focus
                on identifying, evaluating, and placing professionals who not only
                meet technical requirements but also align with the values and
                culture of our clients. We serve a diverse range of industries,
              </p>
              <button className="see-more-btn">see more &gt;</button>
            </div>
            {activeSection === "expertise" && <LiquidBackground />}
          </div>

          {/* Approach Section */}
          <div
            ref={approachRef}
            className={`approach-section ${
              activeSection === "approach" ? "active" : ""
            }`}
          >
            <div className="section-content">
              <h2 className="section-heading">Our Approach</h2>
              <p className="section-text">
                Our approach is built on understanding each client's unique
                business objectives. Through a rigorous screening and vetting
                process, we ensure that every placement meets high professional
                and ethical standards.
              </p>
            </div>
            {activeSection === "approach" && <LiquidBackground />}
          </div>
        </motion.div>

        {/* Why Choose Section with Stagger Animation + Liquid */}
        <motion.div
          ref={whyChooseFade.ref}
          initial="hidden"
          animate={whyChooseFade.isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          className="why-choose-section"
        >
          <h2 className="why-choose-title">
            Why <span className="highlight">Choose</span> Ark Innovations
          </h2>

          <motion.div
            initial="hidden"
            animate={whyChooseFade.isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
            className="features-grid"
          >
            {/* Card 1 */}
            <motion.div
              variants={cardVariant}
              className={`feature-card ${
                activeSection === "card-0" ? "active" : ""
              }`}
              whileHover={{ scale: 1.1, y: -8 }}
              transition={{ type: "spring", stiffness: 1260, damping: 18 }}
              onMouseEnter={() => setActiveSection("card-0")}
              onMouseLeave={() => {
                const sections = [aboutRef, expertiseRef, approachRef];
                const ids = ["about", "expertise", "approach"];
                sections.forEach((ref, i) => {
                  if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    const distance = Math.abs(
                      rect.top + rect.height / 2 - window.innerHeight / 2
                    );
                    if (distance < window.innerHeight * 0.6) {
                      setActiveSection(ids[i]);
                    }
                  }
                });
              }}
            >
              <div className="card-content-wrapper">
                <h3 className="feature-title">Industry Knowledge</h3>
                <p className="feature-description">
                  Our recruiters bring deep insights into industry-specific trends
                  and demands, allowing us to provide well-informed staffing
                  solutions.
                </p>
              </div>
              {activeSection === "card-0" && <LiquidBackground />}
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardVariant}
              className={`feature-card ${
                activeSection === "card-1" ? "active" : ""
              }`}
              onMouseEnter={() => setActiveSection("card-1")}
              onMouseLeave={() => {
                const sections = [aboutRef, expertiseRef, approachRef];
                const ids = ["about", "expertise", "approach"];
                sections.forEach((ref, i) => {
                  if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    const distance = Math.abs(
                      rect.top + rect.height / 2 - window.innerHeight / 2
                    );
                    if (distance < window.innerHeight * 0.6) {
                      setActiveSection(ids[i]);
                    }
                  }
                });
              }}
            >
              <div className="card-content-wrapper">
                <h3 className="feature-title">Quality Assurance</h3>
                <p className="feature-description">
                  We prioritize quality and reliability in every placement,
                  ensuring that our clients receive top-tier professionals who are
                  committed to delivering excellence in their roles.
                </p>
              </div>
              {activeSection === "card-1" && <LiquidBackground />}
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={cardVariant}
              className={`feature-card ${
                activeSection === "card-2" ? "active" : ""
              }`}
              onMouseEnter={() => setActiveSection("card-2")}
              onMouseLeave={() => {
                const sections = [aboutRef, expertiseRef, approachRef];
                const ids = ["about", "expertise", "approach"];
                sections.forEach((ref, i) => {
                  if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    const distance = Math.abs(
                      rect.top + rect.height / 2 - window.innerHeight / 2
                    );
                    if (distance < window.innerHeight * 0.6) {
                      setActiveSection(ids[i]);
                    }
                  }
                });
              }}
            >
              <div className="card-content-wrapper">
                <h3 className="feature-title">Comprehensive Support</h3>
                <p className="feature-description">
                  From recruitment and onboarding to payroll management and
                  ongoing workforce support, we offer a full spectrum of services
                  to meet our clients' diverse needs.
                </p>
              </div>
              {activeSection === "card-2" && <LiquidBackground />}
            </motion.div>

            {/* Card 4 */}
            <motion.div
              variants={cardVariant}
              className={`feature-card ${
                activeSection === "card-3" ? "active" : ""
              }`}
              onMouseEnter={() => setActiveSection("card-3")}
              onMouseLeave={() => {
                const sections = [aboutRef, expertiseRef, approachRef];
                const ids = ["about", "expertise", "approach"];
                sections.forEach((ref, i) => {
                  if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    const distance = Math.abs(
                      rect.top + rect.height / 2 - window.innerHeight / 2
                    );
                    if (distance < window.innerHeight * 0.6) {
                      setActiveSection(ids[i]);
                    }
                  }
                });
              }}
            >
              <div className="card-content-wrapper">
                <h3 className="feature-title">Long-Term Partnerships</h3>
                <p className="feature-description">
                  We build relationships founded on trust, transparency, and
                  mutual growth, making us a reliable partner for workforce
                  solutions and talent management.
                </p>
              </div>
              {activeSection === "card-3" && <LiquidBackground />}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* CTA Section with Fade In */}
      <motion.div
        ref={ctaFade.ref}
        initial="hidden"
        animate={ctaFade.isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        className="bottom-cta"
      >
        <h2 className="cta-title">Wanna join us?</h2>
        <p className="cta-description">
          Let us be your partner in building a workforce that drives your
          organization forward.
        </p>
        <Link href="/contact">
          <button className="cta-button">Contact us</button>
        </Link>
      </motion.div>
    </div>
  );
}