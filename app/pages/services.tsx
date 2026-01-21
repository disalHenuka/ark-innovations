"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";
import Image from "next/image";
import "@/app/styles/service.css";

declare global {
  interface Window {
    FinisherHeader: any;
  }
}

export default function ServicesPage() {
  const finisherInstanceRef = useRef<any>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    const initFinisher = () => {
      const el = document.getElementsByClassName("finisher-header")?.[0] as HTMLElement | undefined;
      if (!el) return;

      // Remove existing canvas if present
      const existing = el.querySelector("#finisher-canvas");
      if (existing) existing.remove();

      if (window.FinisherHeader && !finisherInstanceRef.current) {
        try {
          finisherInstanceRef.current = new window.FinisherHeader({
            className: "finisher-header",
            count: 14,
            size: {
              min: 37,
              max: 391,
              pulse: 0,
            },
            speed: {
              x: {
                min: 0.6,
                max: 0.6,
              },
              y: {
                min: 0.6,
                max: 0.6,
              },
            },
            colors: {
              background: "#ffffff",
              particles: ["#00959e"],
            },
            blending: "lighten",
            opacity: {
              center: 0.7,
              edge: 1,
            },
            skew: 0,
            shapes: ["c"],
          });
        } catch (error) {
          console.error("Error initializing FinisherHeader:", error);
        }
      }
    };

    // If script is already loaded, initialize immediately
    if (scriptLoadedRef.current && window.FinisherHeader) {
      initFinisher();
    }

    // Initialize on window load as well (fallback)
    const handleLoad = () => {
      if (window.FinisherHeader) {
        initFinisher();
      }
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      // Cleanup on unmount
      if (finisherInstanceRef.current) {
        const el = document.getElementsByClassName("finisher-header")?.[0] as HTMLElement | undefined;
        if (el) {
          const canvas = el.querySelector("#finisher-canvas");
          if (canvas) canvas.remove();
        }
        finisherInstanceRef.current = null;
      }
    };
  }, []);

  const handleScriptLoad = () => {
    scriptLoadedRef.current = true;
    const el = document.getElementsByClassName("finisher-header")?.[0] as HTMLElement | undefined;
    if (!el) return;

    const existing = el.querySelector("#finisher-canvas");
    if (existing) existing.remove();

    if (window.FinisherHeader) {
      try {
        finisherInstanceRef.current = new window.FinisherHeader({
          className: "finisher-header",
          count: 14,
          size: {
            min: 37,
            max: 391,
            pulse: 0,
          },
          speed: {
            x: {
              min: 0.6,
              max: 0.6,
            },
            y: {
              min: 0.6,
              max: 0.6,
            },
          },
          colors: {
            background: "#ffffff",
            particles: ["#00959e"],
          },
          blending: "lighten",
          opacity: {
            center: 0.7,
            edge: 1,
          },
          skew: 0,
          shapes: ["c"],
        });
      } catch (error) {
        console.error("Error initializing FinisherHeader:", error);
      }
    }
  };

  return (
    <div className="services-page">
      <Script
        src="/finisher-header.es5.min.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
        id="finisher-header-script"
      />

      {/* Animated Header Background */}
      <div className="finisher-header"></div>

      {/* Main Content */}
      <div className="services-container">
        {/* Header Section */}
        <div className="services-header">
          <h2 className="services-subtitle">OUR</h2>
          <h1 className="services-title">SERVICES</h1>
          <h3 className="services-headline">
            Strengthen Your Operations With Proven Experts
          </h3>
        </div>

        {/* Intro Text */}
        <div className="intro-text">
          <p>
            From executive search to large scale manpower supply, Ark
            Innovations (Pvt) Ltd provides the strategic staffing and dedicated
            outsourcing services required to maintain your competitive edge.
          </p>
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
              We specialize in sourcing and placing highly qualified
              professionals across various sectors, providing customized
              recruitment solutions that meet both short-term project needs and
              long-term staffing requirements.
            </p>
          </div>
        </div>

        {/* Service 2: Manpower Supply */}
        <div className="service-section service-2">
          <div className="service-content left">
            <h4 className="service-heading">Manpower Supply:</h4>
            <p className="service-description">
              Our manpower solutions are designed to supply skilled personnel
              tailored to industry-specific demands, including sectors such as
              information technology, engineering, finance, healthcare, and
              construction.
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
              src="/assets/service_1.jpg"
              alt="Business Handshake"
              width={450}
              height={350}
              className="service-image"
            />
          </div>
          <div className="service-content right">
            <h4 className="service-heading">Outsourcing Services:</h4>
            <p className="service-description">
              We offer end-to-end outsourcing solutions, including HR functions,
              payroll management, administrative support, and more, enabling
              businesses to streamline operations and focus on core growth
              activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}