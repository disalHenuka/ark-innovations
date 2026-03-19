"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Footer from "../components/Footer";
import "@/app/styles/home.css";


/* =========================================================
   SCROLL VISIBILITY HOOK
========================================================= */
function useScrollFade<T extends HTMLElement = HTMLDivElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
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
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

/* =========================================================
   MOBILE DETECTION HOOK
========================================================= */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile(); // run once on mount
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}


/* =========================================================
   ANIMATION VARIANTS
========================================================= */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const fadeInUpDelayed: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
  },
};

const fadeInUpSlow: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut", delay: 0.05 },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
  },
};

const fadeInRightSlow: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: "easeOut", delay: 0.05 },
  },
};

const fadeInBg: Variants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};


const fadeInSection: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

// Card stagger variants — delay increases per index
function cardVariant(delay: number): Variants {
  return {
    hidden: { opacity: 0, y: 30, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  };
}


/* =========================================================
   FEATURE CARD
========================================================= */
const featureCards = [
  {
    label: "Pre-vetted Industry Professionals",
    image: "/assets/card_vetting.png",
    alt: "Vetted professionals",
  },
  {
    label: "Scalable Workforce Solutions",
    image: "/assets/card_scalable.jpg",
    alt: "Scalable workforce",
  },
  {
    label: "Multi-industry Talent Coverage",
    image: "/assets/card_industries.jpg",
    alt: "Multi-industry coverage",
  },
];

function FeatureCard({
  label,
  image,
  alt,
  delay,
  isVisible,
}: {
  label: string;
  image: string;
  alt: string;
  delay: number;
  isVisible: boolean;
}) {
  return (
    <motion.div
      variants={cardVariant(delay)}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileHover={{ scale: 1.06, y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="feature-card"
    >
      <p className="feature-card-label">{label}</p>
      <div className="feature-card-image-wrapper">
        <Image
          src={image}
          alt={alt}
          fill
          className="feature-card-image"
        />
      </div>
    </motion.div>
  );
}


/* =========================================================
   HERO SECTION
========================================================= */
function HeroSection() {
  const isMobile = useIsMobile();
  const skylineFade = useScrollFade(0.05);
  const bgFade = useScrollFade(0.05);
  const leftFade = useScrollFade(0.1);
  const rightFade = useScrollFade(0.1);

  const leftVariant = isMobile ? fadeInUpDelayed : fadeInLeft;
  const rightVariant = isMobile ? fadeInUpDelayed : fadeInRight;
  const bgVariant = isMobile ? fadeInUpSlow : fadeInBg;
  const slowRightVariant = isMobile ? fadeInUpSlow : fadeInRightSlow;

  return (
    <section className="heroSection">

      {/* SKYLINE */}
      <motion.div
        ref={skylineFade.ref}
        variants={slowRightVariant}
        initial="hidden"
        animate={skylineFade.isVisible ? "visible" : "hidden"}
        className="skylineWrapper"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            src="/assets/skyline.png"
            alt="Industrial skyline"
            fill
            className="skyline"
          />
        </motion.div>
      </motion.div>

      {/* BACKGROUND SHAPE */}
      <motion.div
        ref={bgFade.ref}
        variants={bgVariant}
        initial="hidden"
        animate={bgFade.isVisible ? "visible" : "hidden"}
        className="backgroundShapeWrapper"
      >
        <Image
          src="/assets/background.png"
          alt="Background shape"
          fill
          priority
          className="backgroundShape"
        />
      </motion.div>

      <div className="heroContainer">

        {/* LEFT CONTENT */}
        <motion.div
          ref={leftFade.ref}
          variants={leftVariant}
          initial="hidden"
          animate={leftFade.isVisible ? "visible" : "hidden"}
          className="leftContent"
        >
          <Image
            src="/assets/logo.png"
            alt="Ark Innovations Logo"
            width={200}
            height={200}
            className="logo"
          />
          <h1 className="heading">
            <span className="heading-line">Connecting Talent.</span>
            <span className="heading-line">Empowering Business.</span>
          </h1>
          <p className="description">
            Ark Innovations (Pvt) Ltd provides recruitment, manpower supply,
            and outsourcing services that help businesses build capable,
            reliable teams.
          </p>
          <div className="buttonGroup">
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="primaryButton"
              >
                Get Started
                <span className="buttonArrow" />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="secondaryButton"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT WORKER */}
        <motion.div
          ref={rightFade.ref}
          variants={rightVariant}
          initial="hidden"
          animate={rightFade.isVisible ? "visible" : "hidden"}
          className="workerWrapper"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="workerImageContainer"
          >
            <Image
              src="/assets/worker.png"
              alt="Industrial Worker"
              fill
              className="workerImage"
              priority
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}


/* =========================================================
   NETWORK SECTION
========================================================= */
function NetworkSection() {
  const isMobile = useIsMobile();
  const sectionFade = useScrollFade(0.15);
  const headingFade = useScrollFade(0.2);
  const descFade = useScrollFade(0.2);
  const cardsFade = useScrollFade(0.25);
  const ctaFade = useScrollFade(0.2);
  const rightFade = useScrollFade(0.2);

  const leftVariant = isMobile ? fadeInUpDelayed : fadeInLeft;
  const rightVariant = isMobile ? fadeInUpDelayed : fadeInRight;

  return (
    <motion.section
      ref={sectionFade.ref}
      variants={fadeInSection}
      initial="hidden"
      animate={sectionFade.isVisible ? "visible" : "hidden"}
      className="networkSectionParallax"
    >
      <div className="networkOverlay">
        <div className="networkContainer">

          {/* LEFT TEXT + CARDS */}
          <div className="networkLeftContent">
            <motion.h2
              ref={headingFade.ref}
              variants={leftVariant}
              initial="hidden"
              animate={headingFade.isVisible ? "visible" : "hidden"}
              className="networkHeading"
            >
              A Network of <span className="highlightText">Skilled Professionals</span>
              <br />
              Across Key Industries
            </motion.h2>

            <motion.p
              ref={descFade.ref}
              variants={leftVariant}
              initial="hidden"
              animate={descFade.isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="networkDescription"
            >
              From construction to IT, healthcare to logistics, Ark Innovations
              connects businesses with a trusted network of industry-ready
              professionals ensuring the right talent, at the right time.
            </motion.p>

            {/* FEATURE CARDS */}
            <div ref={cardsFade.ref} className="feature-cards-row">
              {featureCards.map((card, i) => (
                <FeatureCard
                  key={card.label}
                  label={card.label}
                  image={card.image}
                  alt={card.alt}
                  delay={i * 0.12}
                  isVisible={cardsFade.isVisible}
                />
              ))}
            </div>

            <motion.div
              ref={ctaFade.ref}
              variants={fadeInUp}
              initial="hidden"
              animate={ctaFade.isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="ctaContainer"
            >
              <Link href="/services">
                <button className="cta-button">Learn More</button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            ref={rightFade.ref}
            variants={rightVariant}
            initial="hidden"
            animate={rightFade.isVisible ? "visible" : "hidden"}
            className="networkRightContent"
          >
            <Image
              src="/assets/connect.png"
              alt="Network connection"
              width={450}
              height={450}
              className="networkImage"
            />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}


/* =========================================================
   FOOTER SECTION
========================================================= */
function FooterSection() {
  const footerFade = useScrollFade(0.1);

  return (
    <motion.div
      ref={footerFade.ref}
      variants={fadeInUp}
      initial="hidden"
      animate={footerFade.isVisible ? "visible" : "hidden"}
      className="footerWrapper"
    >
      <Footer />
    </motion.div>
  );
}


/* =========================================================
   PAGE
========================================================= */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NetworkSection />
      <FooterSection />
    </>
  );
}