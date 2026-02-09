"use client";

import Link from "next/link";
import "@/app/styles/industries.css";

// React Icons
import { MdConstruction } from "react-icons/md";
import { FaIndustry, FaTshirt, FaHandHoldingMedical, FaBriefcase } from "react-icons/fa";
import { FaComputer, FaLocationDot, FaTruckFast } from "react-icons/fa6";
import { PiPlantFill } from "react-icons/pi";

export default function IndustriesPage() {
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

      {/* Content */}
      <div className="industries-container">
        {/* Top Section */}
        <div className="industries-top">
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
              industries, empowering your specific sector with the dedicated
              talent required to maintain your competitive edge.
            </p>
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="industries-grid">
          {/* 1. Construction & Infrastructure */}
          <div className="industry-card">
            <h4 className="card-title">
              Construction &<br />Infrastructure
            </h4>
            <div className="card-icon">
              <MdConstruction />
            </div>
            <p className="card-description">
              Skilled workforce support for construction sites, infrastructure
              projects, civil engineering works, and large-scale development
              initiatives.
            </p>
          </div>

          {/* 2. Manufacturing & Industrial */}
          <div className="industry-card">
            <h4 className="card-title">
              Manufacturing &<br />Industrial Operations
            </h4>
            <div className="card-icon">
              <FaIndustry />
            </div>
            <p className="card-description">
              Reliable manpower solutions for factories, production lines,
              machinery operations, quality control, and industrial maintenance.
            </p>
          </div>

          {/* 3. Apparel & Textile */}
          <div className="industry-card">
            <h4 className="card-title">
              Apparel & Textile<br />Industry
            </h4>
            <div className="card-icon">
              <FaTshirt />
            </div>
            <p className="card-description">
              Dedicated staffing for garment manufacturing, textile production,
              quality inspection, and compliance operations.
            </p>
          </div>

          {/* 4. Information Technology */}
          <div className="industry-card">
            <h4 className="card-title">
              Information<br />Technology
            </h4>
            <div className="card-icon">
              <FaComputer />
            </div>
            <p className="card-description">
              IT professionals and technical support staff for software
              development, systems operations, and digital transformation.
            </p>
          </div>

          {/* 5. Hospitality & Tourism */}
          <div className="industry-card">
            <h4 className="card-title">Hospitality & Tourism</h4>
            <div className="card-icon">
              <FaLocationDot />
            </div>
            <p className="card-description">
              Workforce solutions for hotels, resorts, travel services, and
              hospitality-focused business operations.
            </p>
          </div>

          {/* 6. Healthcare */}
          <div className="industry-card">
            <h4 className="card-title">
              Healthcare &<br />Medical Services
            </h4>
            <div className="card-icon">
              <FaHandHoldingMedical />
            </div>
            <p className="card-description">
              Skilled professionals supporting hospitals, clinics, medical
              facilities, and healthcare service providers.
            </p>
          </div>

          {/* 7. Logistics */}
          <div className="industry-card">
            <h4 className="card-title">
              Logistics, Warehousing<br />& Transportation
            </h4>
            <div className="card-icon">
              <FaTruckFast />
            </div>
            <p className="card-description">
              Efficient manpower for warehousing, inventory management,
              transportation services, and supply chain operations.
            </p>
          </div>

          {/* 8. Banking & Corporate */}
          <div className="industry-card">
            <h4 className="card-title">
              Banking, Finance &<br />Corporate Services
            </h4>
            <div className="card-icon">
              <FaBriefcase />
            </div>
            <p className="card-description">
              Professional administrative and operational staff for banking,
              finance institutions, and corporate environments.
            </p>
          </div>

          {/* 9. Agriculture */}
          <div className="industry-card">
            <h4 className="card-title">
              Agriculture, Plantations<br />& Agro-Processing
            </h4>
            <div className="card-icon">
              <PiPlantFill />
            </div>
            <p className="card-description">
              Skilled labor solutions for agricultural production, plantations,
              harvesting, and agro-processing facilities.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bottom-cta">
          <div>
            <h3 className="cta-title">
              Can't find the <span className="highlight">industry</span> you are looking for?
            </h3>
          </div>
          <p className="cta-description">
            We work with businesses across many sectors. Contact us to discuss
            your specific industry needs.
          </p>
          <Link href="/contact">
            <button className="cta-button">Contact us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
