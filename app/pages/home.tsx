"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, easeOut } from "framer-motion";
import Link from "next/link";
import Footer from "../components/Footer";
import "@/app/styles/home.css";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut, delay: 0.6 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut, delay: 0.6 },
  },
};

const fadeRightSkyline = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: easeOut, delay: 0.6 },
  },
};

export default function HomePage() {
  const { scrollYProgress } = useScroll();

  // Hero parallax - moves slowly upward and fades out
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 0.6, 0]);

  // White overlay that covers hero with curved edge
  const overlayHeight = useTransform(scrollYProgress, [0, 0.25], ["0%", "100%"]);
  const overlayBorderRadius = useTransform(scrollYProgress, [0, 0.15, 0.25], ["0% 0% 50% 50%", "0% 0% 30% 30%", "0% 0% 0% 0%"]);

  // Network section - appears with slight zoom-in, stays stable when footer appears
  const networkScale = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.75, 0.95],
    [0.85, 1, 1, 1]
  );

  const networkOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.85, 1],
    [0, 1, 1, 0]
  );

  const networkY = useTransform(
    scrollYProgress,
    [0.15, 0.3],
    [40, 0]
  );

  // Footer - buttery smooth appearance
  const footerOpacity = useTransform(
    scrollYProgress,
    [0.8, 1],
    [0, 1]
  );

  return (
    <>
      {/* HERO SECTION WITH PARALLAX */}
      <motion.section
        className="heroSection"
        style={{
          y: heroY,
          opacity: heroOpacity
        }}
      >

        {/* SKYLINE - at the back */}
        <motion.div
          variants={fadeRightSkyline}
          initial="hidden"
          animate="visible"
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

        {/* BLUE ROTATED BACKGROUND PNG */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
                  <span className="buttonArrow"></span>
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
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
      </motion.section>

      {/* WHITE OVERLAY WITH CURVED/BLOATED EDGE */}
      <motion.div
        className="whiteOverlay"
        style={{
          height: overlayHeight,
          borderRadius: overlayBorderRadius
        }}
      />

      {/* NETWORK SECTION WITH PARALLAX ZOOM */}
      <motion.section
        className="networkSectionParallax"
        style={{
          scale: networkScale,
          opacity: networkOpacity,
          y: networkY
        }}
      >
        <div className="networkOverlay">
          <div className="networkContainer">
            <div className="networkLeftContent">
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
            </div>

            <div className="networkRightContent">
              <Image
                src="/assets/connect.png"
                alt="Network connection"
                width={450}
                height={450}
                className="networkImage"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* FOOTER WITH BUTTERY SMOOTH APPEARANCE */}
      <motion.div
        className="footerWrapper"
        style={{
          opacity: footerOpacity
        }}
      >
        <Footer />
      </motion.div>
    </>
  );
}