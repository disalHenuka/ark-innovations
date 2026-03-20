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

// Custom hook to detect mobile viewport specifically for conditional dynamic animations
function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint}px)`);
    if (media.matches !== isMobile) {
      setIsMobile(media.matches);
    }
    const listener = () => setIsMobile(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [isMobile, breakpoint]);

  return isMobile;
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
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState<string>("about");
  const [enableInactiveExit, setEnableInactiveExit] = useState(false);

  // Scroll fade hooks
  const headerFade = useScrollFade(0.1);
  const aboutPanelFade = useScrollFade(0.15);
  const expertisePanelFade = useScrollFade(0.15);
  const approachPanelFade = useScrollFade(0.15);

  const whyChooseFade = useScrollFade(0.2);
  const card1Fade = useScrollFade(0.15);
  const card2Fade = useScrollFade(0.15);
  const card3Fade = useScrollFade(0.15);
  const card4Fade = useScrollFade(0.15);

  const ctaFade = useScrollFade(0.3);

  useEffect(() => {
    // Allow initial render to show all boxes, then let inactive ones fade/blur away
    // with the CSS delay (so it feels intentional, not "missing content").
    setEnableInactiveExit(true);

    const handleScroll = () => {
      const sections = [
        { ref: aboutPanelFade.ref, id: "about" },
        { ref: expertisePanelFade.ref, id: "expertise" },
        { ref: approachPanelFade.ref, id: "approach" },
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

  return (
    <div className="about-page">
      {/* Seamless Scrolling Skyline Background */}
      <div className="skyline-background">
        <div className="skyline-wrapper">
          <img src="/assets/blueskyline.png" alt="" className="skyline-image" />
          <img src="/assets/blueskyline.png" alt="" className="skyline-image" />
        </div>
      </div>

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

        {/* Sections separated out to individual Fade In Hooks */}
        <div className="sections-wrapper">
          {/* About Section */}
          <motion.div
            ref={aboutPanelFade.ref}
            initial="hidden"
            animate={aboutPanelFade.isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            className={`about-box about-section ${activeSection === "about"
                ? "is-active"
                : enableInactiveExit
                  ? "is-inactive"
                  : ""
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
          </motion.div>

          {/* Expertise Section */}
          <motion.div
            ref={expertisePanelFade.ref}
            initial="hidden"
            animate={expertisePanelFade.isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            className={`about-box expertise-section ${activeSection === "expertise"
                ? "is-active"
                : enableInactiveExit
                  ? "is-inactive"
                  : ""
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
          </motion.div>

          {/* Approach Section */}
          <motion.div
            ref={approachPanelFade.ref}
            initial="hidden"
            animate={approachPanelFade.isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            className={`about-box approach-section ${activeSection === "approach"
                ? "is-active"
                : enableInactiveExit
                  ? "is-inactive"
                  : ""
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
          </motion.div>
        </div>

        {/* Why Choose Section with Desktop-only Stagger Animation */}
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
            variants={isMobile ? undefined : staggerContainer}
            className="features-grid"
          >
            {/* Card 1 */}
            <motion.div
              ref={card1Fade.ref}
              variants={cardVariant}
              initial={isMobile ? "hidden" : undefined}
              animate={isMobile ? (card1Fade.isVisible ? "visible" : "hidden") : undefined}
              className="feature-card"
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ type: "spring", stiffness: 700, damping: 22 }}
            >
              <div className="card-content-wrapper">
                <h3 className="feature-title">Industry Knowledge</h3>
                <p className="feature-description">
                  Our recruiters bring deep insights into industry-specific trends
                  and demands, allowing us to provide well-informed staffing
                  solutions.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              ref={card2Fade.ref}
              variants={cardVariant}
              initial={isMobile ? "hidden" : undefined}
              animate={isMobile ? (card2Fade.isVisible ? "visible" : "hidden") : undefined}
              className="feature-card"
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ type: "spring", stiffness: 700, damping: 22 }}
            >
              <div className="card-content-wrapper">
                <h3 className="feature-title">Quality Assurance</h3>
                <p className="feature-description">
                  We prioritize quality and reliability in every placement,
                  ensuring that our clients receive top-tier professionals who are
                  committed to delivering excellence in their roles.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              ref={card3Fade.ref}
              variants={cardVariant}
              initial={isMobile ? "hidden" : undefined}
              animate={isMobile ? (card3Fade.isVisible ? "visible" : "hidden") : undefined}
              className="feature-card"
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ type: "spring", stiffness: 700, damping: 22 }}
            >
              <div className="card-content-wrapper">
                <h3 className="feature-title">Comprehensive Support</h3>
                <p className="feature-description">
                  From recruitment and onboarding to payroll management and
                  ongoing workforce support, we offer a full spectrum of services
                  to meet our clients' diverse needs.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              ref={card4Fade.ref}
              variants={cardVariant}
              initial={isMobile ? "hidden" : undefined}
              animate={isMobile ? (card4Fade.isVisible ? "visible" : "hidden") : undefined}
              className="feature-card"
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ type: "spring", stiffness: 700, damping: 22 }}
            >
              <div className="card-content-wrapper">
                <h3 className="feature-title">Long-Term Partnerships</h3>
                <p className="feature-description">
                  We build relationships founded on trust, transparency, and
                  mutual growth, making us a reliable partner for workforce
                  solutions and talent management.
                </p>
              </div>
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