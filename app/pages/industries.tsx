"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "@/app/styles/industries.css";

// React Icons
import { MdConstruction } from "react-icons/md";
import {
  FaIndustry,
  FaTshirt,
  FaHandHoldingMedical,
  FaBriefcase,
} from "react-icons/fa";
import { FaComputer, FaLocationDot, FaTruckFast } from "react-icons/fa6";
import { PiPlantFill } from "react-icons/pi";



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
   ANIMATION VARIANTS (TYPED)
========================================================= */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};



/* =========================================================
   SINGLE CARD COMPONENT (ANIMATES WHEN VISIBLE)
========================================================= */
function AnimatedCard({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useScrollFade(0.2);

  return (
    <motion.div
      ref={ref}
      variants={cardVariant}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileHover={{ scale: 1.1, y: -8 }}
      transition={{ type: "spring", stiffness: 1260, damping: 18 }}
      className="industry-card"
    >
      {children}
    </motion.div>
  );
}



/* =========================================================
   PAGE COMPONENT
========================================================= */
export default function IndustriesPage() {
  const headerFade = useScrollFade(0.1);
  const gridFade = useScrollFade(0.15);
  const ctaFade = useScrollFade(0.3);

  return (
    <div className="industries-page">

      {/* Animated Background Rays */}
      <div className="bg-rays">
        <div className="ray ray-1"></div>
        <div className="ray ray-2"></div>
        <div className="ray ray-3"></div>
        <div className="ray ray-4"></div>
        <div className="ray ray-5"></div>
        <div className="ray ray-6"></div>
      </div>

      {/* Decorative Circles */}
      <div className="deco-circle circle-1"></div>
      <div className="deco-circle circle-2"></div>
      <div className="deco-circle circle-3"></div>
      <div className="deco-circle circle-4"></div>



      <div className="industries-container">

        {/* HEADER */}
        <motion.div
          ref={headerFade.ref}
          initial="hidden"
          animate={headerFade.isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          className="industries-top"
        >
          <div className="industries-header">
            <h2 className="industries-subtitle">serving</h2>
            <h1 className="industries-title">INDUSTRIES</h1>
            <h3 className="industries-headline">
              Your Trusted Partner for Industry-Specific Talent Acquisition
            </h3>
          </div>

          <div className="intro-text">
            <p>
              Tailored expertise and strategic staffing solutions across diverse
              industries, empowering your sector with the dedicated talent required
              to maintain your competitive edge.
            </p>
          </div>
        </motion.div>



        {/* GRID */}
        <div ref={gridFade.ref} className="industries-grid">

          <AnimatedCard>
            <h4 className="card-title">
              Construction &<br />Infrastructure
            </h4>
            <div className="card-icon"><MdConstruction /></div>
            <p className="card-description">
              Skilled workforce support for construction sites, infrastructure
              projects, civil engineering works, and large-scale development initiatives.
            </p>
          </AnimatedCard>


          <AnimatedCard>
            <h4 className="card-title">
              Manufacturing &<br />Industrial Operations
            </h4>
            <div className="card-icon"><FaIndustry /></div>
            <p className="card-description">
              Reliable manpower solutions for factories, production lines,
              machinery operations, quality control, and maintenance.
            </p>
          </AnimatedCard>


          <AnimatedCard>
            <h4 className="card-title">
              Apparel & Textile<br />Industry
            </h4>
            <div className="card-icon"><FaTshirt /></div>
            <p className="card-description">
              Dedicated staffing for garment manufacturing, textile production,
              quality inspection, and compliance operations.
            </p>
          </AnimatedCard>


          <AnimatedCard>
            <h4 className="card-title">
              Information<br />Technology
            </h4>
            <div className="card-icon"><FaComputer /></div>
            <p className="card-description">
              IT professionals and technical staff for software development,
              system operations, and digital transformation initiatives.
            </p>
          </AnimatedCard>


          <AnimatedCard>
            <h4 className="card-title">Hospitality & Tourism</h4>
            <div className="card-icon"><FaLocationDot /></div>
            <p className="card-description">
              Workforce solutions for hotels, resorts, travel services,
              and hospitality-focused business operations.
            </p>
          </AnimatedCard>


          <AnimatedCard>
            <h4 className="card-title">
              Healthcare &<br />Medical Services
            </h4>
            <div className="card-icon"><FaHandHoldingMedical /></div>
            <p className="card-description">
              Skilled professionals supporting hospitals, clinics,
              medical facilities, and healthcare providers.
            </p>
          </AnimatedCard>


          <AnimatedCard>
            <h4 className="card-title">
              Logistics, Warehousing<br />& Transportation
            </h4>
            <div className="card-icon"><FaTruckFast /></div>
            <p className="card-description">
              Efficient manpower for inventory management,
              warehousing operations, transportation, and supply chains.
            </p>
          </AnimatedCard>


          <AnimatedCard>
            <h4 className="card-title">
              Banking, Finance &<br />Corporate Services
            </h4>
            <div className="card-icon"><FaBriefcase /></div>
            <p className="card-description">
              Professional administrative and operational staff
              for corporate environments and financial institutions.
            </p>
          </AnimatedCard>


          <AnimatedCard>
            <h4 className="card-title">
              Agriculture, Plantations<br />& Agro-Processing
            </h4>
            <div className="card-icon"><PiPlantFill /></div>
            <p className="card-description">
              Skilled labor for agricultural production,
              harvesting, plantations, and agro-processing facilities.
            </p>
          </AnimatedCard>

        </div>



        {/* CTA */}
        <motion.div
          ref={ctaFade.ref}
          initial="hidden"
          animate={ctaFade.isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          className="bottom-cta"
        >
          <h3 className="cta-title">
            Can't find the <span className="highlight">industry</span> you need?
          </h3>

          <p className="cta-description">
            We work across multiple sectors and customize staffing solutions
            for your exact requirements.
          </p>

          <Link href="/contact">
            <button className="cta-button">Contact us</button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}