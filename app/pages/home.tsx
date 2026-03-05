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
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
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

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};


/* =========================================================
   HERO SECTION
========================================================= */
function HeroSection() {
  const skylineFade = useScrollFade(0.05);
  const bgFade = useScrollFade(0.05);
  const leftFade = useScrollFade(0.1);
  const rightFade = useScrollFade(0.1);

  return (
    <section className="heroSection">

      {/* SKYLINE */}
      <motion.div
        ref={skylineFade.ref}
        variants={fadeInRightSlow}
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
        variants={fadeInBg}
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
          variants={fadeInLeft}
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
          variants={fadeInRight}
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
  const sectionFade = useScrollFade(0.15);
  const leftFade = useScrollFade(0.2);
  const rightFade = useScrollFade(0.2);

  return (
    <motion.section
      ref={sectionFade.ref}
      variants={scaleIn}
      initial="hidden"
      animate={sectionFade.isVisible ? "visible" : "hidden"}
      className="networkSectionParallax"
    >
      <div className="networkOverlay">
        <div className="networkContainer">

          {/* LEFT TEXT */}
          <motion.div
            ref={leftFade.ref}
            variants={fadeInLeft}
            initial="hidden"
            animate={leftFade.isVisible ? "visible" : "hidden"}
            className="networkLeftContent"
          >
            <h2 className="networkHeading">
              A Network of <span className="highlightText">Skilled</span> Professionals
              <br />
              Across Key Industries
            </h2>
            <p className="networkDescription">
              From construction to IT, healthcare to logistics, Ark Innovations
              connects businesses with a trusted network of industry-ready
              professionals ensuring the right talent, at the right time.
            </p>
            <ul className="networkList">
              <li>Pre-vetted industry professionals</li>
              <li>Scalable workforce solutions</li>
              <li>Multi-industry talent coverage</li>
            </ul>
            <Link href="/services">
              <button className="cta-button">Learn More</button>
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            ref={rightFade.ref}
            variants={fadeInRight}
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