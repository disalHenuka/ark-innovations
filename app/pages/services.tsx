"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Image from "next/image";
import "@/app/styles/service.css";

declare global {
  interface Window {
    FinisherHeader: any;
  }
}

export default function ServicesPage() {
  const finisherRef = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!window.FinisherHeader) return;

    const el = document.querySelector(".finisher-header") as HTMLElement | null;
    if (!el) return;

    // Always remove old canvas
    const existingCanvas = el.querySelector("canvas");
    if (existingCanvas) existingCanvas.remove();

    try {
      finisherRef.current = new window.FinisherHeader({
        className: "finisher-header",
        count: 14,
        size: {
          min: 37,
          max: 391,
          pulse: 0,
        },
        speed: {
          x: { min: 0.6, max: 0.6 },
          y: { min: 0.6, max: 0.6 },
        },
        colors: {
          background: "#ffffff",
          particles: ["#00959e"],
        },
        blending: "lighten",
        opacity: {
          center: 0.9,
          edge: 1,
        },
        skew: 0,
        shapes: ["c"],
      });
    } catch (err) {
      console.error("FinisherHeader init failed:", err);
    }

    // Cleanup on route leave
    return () => {
      const canvas = el.querySelector("canvas");
      if (canvas) canvas.remove();
      finisherRef.current = null;
    };
  }, [pathname]);

  return (
    <div className="services-page">
      {/* Load script once */}
      <Script
        src="/finisher-header.es5.min.js"
        strategy="afterInteractive"
      />

      {/* Animated background */}
      <div className="finisher-header"></div>

      {/* Content */}
      <div className="services-container">
        <div className="services-top">
          <div className="services-header">
            <h2 className="services-subtitle">OUR</h2>
            <h1 className="services-title">SERVICES</h1>
            <h3 className="services-headline">
              Strengthen Your Operations With Proven Experts
            </h3>
          </div>

          <div className="intro-text">
            <p>
              From executive search to large scale manpower supply, Ark
              Innovations (Pvt) Ltd provides the strategic staffing and dedicated
              outsourcing services required to maintain your competitive edge.
            </p>
          </div>
        </div>

        {/* Service 1: Recruitment & Talent Acquisition */}
        <div className="service-section service-1">
          <div className="service-image-container left">
            <Image
              src="/assets/service_1.jpg"
              alt="Recruitment Meeting"
              width={450}
              height={350}
              className="service-image"
            />
          </div>
          <div className="service-content right">
            <h4 className="service-heading">Recruitment & Talent Acquisition:</h4>
            <p className="service-description">
              We help businesses find the right talent for their teams through comprehensive recruitment strategies. 
              Our expert recruiters use advanced screening techniques and extensive networks to identify top candidates 
              who match your company culture and requirements.<br></br>
              From entry-level positions to executive roles, we streamline the hiring process to save you time and resources 
              while ensuring quality placements.
            </p>
          </div>
        </div>

        {/* Service 2: Manpower Supply */}
        <div className="service-section service-2">
          <div className="service-content left">
            <h4 className="service-heading">Manpower Supply:</h4>
            <p className="service-description">
              Reliable and skilled workforce solutions tailored to your business needs. We provide temporary, contract, 
              and permanent staffing solutions across various industries including construction, manufacturing, logistics, and more.<br></br>
              Our rigorous vetting process ensures that all workers meet safety standards, possess required certifications, 
              and are ready to contribute to your projects from day one.
            </p>
          </div>
          <div className="service-image-container left">
            <Image
              src="/assets/service_2.png"
              alt="Construction Workers"
              width={450}
              height={350}
              className="service-image"
            />
          </div>
        </div>

        {/* Service 3: Outsourcing Services */}
        <div className="service-section service-3">
          <div className="service-image-container left">
            <Image
              src="/assets/service_3.jpg"
              alt="Business Handshake"
              width={450}
              height={350}
              className="service-image"
            />
          </div>
          <div className="service-content right">
            <h4 className="service-heading">Outsourcing Services:</h4>
            <p className="service-description">
              Comprehensive outsourcing solutions to streamline your operations. We handle entire departments or specific 
              functions, allowing you to focus on core business activities while we manage the rest.<br></br>
              Whether it's administrative support, customer service, or specialized technical functions, our outsourcing 
              services reduce costs and improve efficiency.
            </p>
          </div>
        </div>

        {/* Service 2: Manpower Supply */}
        <div className="service-section service-2">
          <div className="service-content left">
            <h4 className="service-heading">Executive Search & Placement: </h4>
            <p className="service-description">
              Specialized recruitment for senior-level and executive positions. Our executive search team conducts thorough 
              assessments to identify leaders who can drive organizational growth and transformation.<br></br>
              We understand the critical importance of leadership roles and work discreetly to find candidates who align 
              with your strategic vision and company values.
            </p>
          </div>
          <div className="service-image-container left">
            <Image
              src="/assets/service_4.jpg"
              alt="Construction Workers"
              width={450}
              height={350}
              className="service-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}