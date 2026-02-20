"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import "@/app/styles/about.css";

export default function AboutPage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: aboutRef, id: 'about' },
        { ref: expertiseRef, id: 'expertise' },
        { ref: approachRef, id: 'approach' }
      ];

      let closest = sections[0];
      let minDistance = Infinity;

      sections.forEach(section => {
        if (!section.ref.current) return;
        const rect = section.ref.current.getBoundingClientRect();
        // Calculate distance from center of viewport
        const distance = Math.abs((rect.top + rect.height / 2) - (window.innerHeight / 2));
        if (distance < minDistance) {
          minDistance = distance;
          closest = section;
        }
      });

      // Only update if the closest section is actually within reasonable view range (e.g., half viewport height)
      // This allows the cards to "hold" the state when we are far below the main sections.
      if (minDistance < window.innerHeight * 0.6) {
        setActiveSection(closest.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // This is the single liquid element that travels between sections
  const LiquidBackground = () => (
    <motion.div
      layoutId="liquid-bg"
      className="liquid-fill-shared"
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 2
      }}
    />
  );

  return (
    <div className="about-page">
      {/* 1. The SVG Filter (Hidden but necessary) */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
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
        <div className="about-header">
          <h2 className="about-subtitle">About</h2>
          <h1 className="about-title">Ark Innovations Pvt (Ltd)</h1>
        </div>

        {/* 2. Container with the Goo Filter applied */}
        <div className="sections-wrapper goo-container">

          {/* About Section */}
          <div ref={aboutRef} className={`about-section ${activeSection === 'about' ? 'active' : ''}`}>
            <div className="section-content">
              <p className="about-text">
                <strong>Ark Innovations (Pvt) Ltd</strong> is a trusted provider of
                recruitment, manpower, and outsourcing solutions, delivering
                comprehensive workforce services that help organizations operate
                efficiently and grow sustainably in competitive markets.
              </p>
              <p className="about-text">
                We believe that people are the foundation of every successful
                business. With a strong commitment to quality, integrity, and client
                satisfaction, Ark Innovations connects businesses with skilled
                professionals while offering strategic workforce support tailored to
                evolving industry demands.
              </p>
            </div>
            {activeSection === 'about' && <LiquidBackground />}
          </div>

          {/* Expertise Section */}
          <div ref={expertiseRef} className={`expertise-section ${activeSection === 'expertise' ? 'active' : ''}`}>
            <div className="section-content">
              <h2 className="section-heading">Our Expertise</h2>
              <p className="section-text">
                At Ark Innovations, our experienced recruitment specialists focus on
                identifying, evaluating, and placing professionals who not only meet
                technical requirements but also align with the values and culture of
                our clients. We serve a diverse range of industries,
              </p>
              <button className="see-more-btn">see more &gt;</button>
            </div>
            {activeSection === 'expertise' && <LiquidBackground />}
          </div>

          {/* Approach Section */}
          <div ref={approachRef} className={`approach-section ${activeSection === 'approach' ? 'active' : ''}`}>
            <div className="section-content">
              <h2 className="section-heading">Our Approach</h2>
              <p className="section-text">
                Our approach is built on understanding each client's unique business
                objectives. Through a rigorous screening and vetting process, we
                ensure that every placement meets high professional and ethical
                standards.
              </p>
            </div>
            {activeSection === 'approach' && <LiquidBackground />}
          </div>


        </div>

        {/* Why Choose Section - Kept outside sections-wrapper to avoid text distortion from goo filter */}
        <div className="why-choose-section">
          <h2 className="why-choose-title">
            Why <span className="highlight">Choose</span> Ark Innovations
          </h2>

          <div className="features-grid">
            <div
              className={`feature-card ${activeSection === 'card-0' ? 'active' : ''}`}
              onMouseEnter={() => setActiveSection('card-0')}
            >
              <div className="card-content-wrapper">
                <h3 className="feature-title">Industry Knowledge</h3>
                <p className="feature-description">
                  Our recruiters bring deep insights into industry-specific trends
                  and demands, allowing us to provide well-informed staffing
                  solutions.
                </p>
              </div>
              {activeSection === 'card-0' && <LiquidBackground />}
            </div>

            <div
              className={`feature-card ${activeSection === 'card-1' ? 'active' : ''}`}
              onMouseEnter={() => setActiveSection('card-1')}
            >
              <div className="card-content-wrapper">
                <h3 className="feature-title">Quality Assurance</h3>
                <p className="feature-description">
                  We prioritize quality and reliability in every placement,
                  ensuring that our clients receive top-tier professionals who are
                  committed to delivering excellence in their roles.
                </p>
              </div>
              {activeSection === 'card-1' && <LiquidBackground />}
            </div>

            <div
              className={`feature-card ${activeSection === 'card-2' ? 'active' : ''}`}
              onMouseEnter={() => setActiveSection('card-2')}
            >
              <div className="card-content-wrapper">
                <h3 className="feature-title">Comprehensive Support</h3>
                <p className="feature-description">
                  From recruitment and onboarding to payroll management and ongoing
                  workforce support, we offer a full spectrum of services to meet
                  our clients' diverse needs.
                </p>
              </div>
              {activeSection === 'card-2' && <LiquidBackground />}
            </div>

            <div
              className={`feature-card ${activeSection === 'card-3' ? 'active' : ''}`}
              onMouseEnter={() => setActiveSection('card-3')}
            >
              <div className="card-content-wrapper">
                <h3 className="feature-title">Long-Term Partnerships</h3>
                <p className="feature-description">
                  We build relationships founded on trust, transparency, and mutual
                  growth, making us a reliable partner for workforce solutions and
                  talent management.
                </p>
              </div>
              {activeSection === 'card-3' && <LiquidBackground />}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bottom-cta">
        <h2 className="cta-title">Wanna join us?</h2>
        <p className="cta-description">
          Let us be your partner in building a workforce that drives your
          organization forward.
        </p>
        <Link href="/contact">
          <button className="cta-button">Contact us</button>
        </Link>
      </div>
    </div>
  );
}