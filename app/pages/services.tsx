"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Image from "next/image";
import { motion } from "framer-motion";
import "@/app/styles/service.css";

declare global {
  interface Window {
    FinisherHeader: any;
  }
}

// Calculates scroll progress [0→1] for an element through the viewport
function useScrollProgress(ref: React.RefObject<HTMLDivElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      // progress 0 = bottom of el at bottom of viewport
      // progress 1 = top of el at top of viewport
      const total = winH + rect.height;
      const current = winH - rect.top;
      const raw = current / total;
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    onScroll(); // run once on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);

  return progress;
}

// Maps a value from one range to another
function interpolate(
  val: number,
  inputRange: number[],
  outputRange: number[]
): number {
  for (let i = 0; i < inputRange.length - 1; i++) {
    if (val <= inputRange[i + 1]) {
      const t =
        (val - inputRange[i]) / (inputRange[i + 1] - inputRange[i]);
      return outputRange[i] + t * (outputRange[i + 1] - outputRange[i]);
    }
  }
  return outputRange[outputRange.length - 1];
}

function ServiceCard({
  id,
  className,
  imagePosition,
  imageSrc,
  imageAlt,
  title,
  description,
}: {
  id?: string;
  className: string;
  imagePosition: "left" | "right";
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref);

  const scale = interpolate(
    progress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.72, 0.95, 1.08, 0.95, 0.72]
  );
  const opacity = interpolate(
    progress,
    [0, 0.18, 0.5, 0.82, 1],
    [0, 0.45, 1, 0.45, 0]
  );

  return (
    <div
      id={id}
      ref={ref}
      className={className}
      style={{
        transform: `scale(${scale})`,
        opacity,
        willChange: "transform, opacity",
        transformOrigin: "center center",
      }}
    >
      {imagePosition === "left" ? (
        <>
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
            className="service-image-container left"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={450}
              height={350}
              className="service-image"
            />
          </motion.div>
          <div className="service-content right">
            <h4 className="service-heading">{title}</h4>
            <p className="service-description">{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="service-content left">
            <h4 className="service-heading">{title}</h4>
            <p className="service-description">{description}</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.3 }}
            className="service-image-container left"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={450}
              height={350}
              className="service-image"
            />
          </motion.div>
        </>
      )}
    </div>
  );
}

export default function ServicesPage() {
  const pathname = usePathname();

  // Auto-scroll logic
  useEffect(() => {
    const locations = ["recruitment", "manpower", "outsourcing", "executive-search"];
    let timeoutId: NodeJS.Timeout;
    let scrollStopTimer: NodeJS.Timeout;

    const executeScroll = () => {
      let closestIdx = -1;
      let minDistance = Infinity;

      const viewportOffset = window.innerHeight / 3;
      
      for (let i = 0; i < locations.length; i++) {
        const el = document.getElementById(locations[i]);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportOffset);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = i;
        }
      }

      // ONLY override if mechanically hugging the top pixel edge of the document
      if (window.scrollY <= 50) {
        closestIdx = -1;
      }

      let nextIndex;
      if (closestIdx === -1) {
        nextIndex = 0;
      } else if (closestIdx >= locations.length - 1) {
        nextIndex = -1;
      } else {
        nextIndex = closestIdx + 1;
      }

      if (nextIndex === -1) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const targetId = locations[nextIndex];
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
      
      // Determine timer purely based on the presence of the exact head component
      const topEl = document.querySelector('.services-top');
      let isTopVisible = window.scrollY <= 50;
      if (topEl) {
        const rect = topEl.getBoundingClientRect();
        if (rect.bottom > 100) {
          isTopVisible = true;
        }
      }

      const delay = isTopVisible ? 3000 : 6000;
      timeoutId = setTimeout(executeScroll, delay);
    };

    // The single robust interaction tracker
    const handleScroll = () => {
      clearTimeout(timeoutId);
      clearTimeout(scrollStopTimer);

      scrollStopTimer = setTimeout(() => {
        // Find if header is explicitly on screen
        const topEl = document.querySelector('.services-top');
        let isTopVisible = window.scrollY <= 50;
        if (topEl) {
          const rect = topEl.getBoundingClientRect();
          if (rect.bottom > 100) {
            isTopVisible = true;
          }
        }

        const delay = isTopVisible ? 3000 : 6000;
        timeoutId = setTimeout(executeScroll, delay);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Kick-start loop on mount
    timeoutId = setTimeout(executeScroll, 3000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(scrollStopTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="services-page">
      {/* Seamless Scrolling Skyline Background */}
      <div className="skyline-background">
        <div className="skyline-wrapper">
          <img src="/assets/1blueskyline.png" alt="" className="skyline-image" />
          <img src="/assets/1blueskyline.png" alt="" className="skyline-image" />
        </div>
      </div>

      <div className="services-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="services-top"
        >
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
              Innovations (Pvt) Ltd provides the strategic staffing and
              dedicated outsourcing services required to maintain your
              competitive edge.
            </p>
          </div>
        </motion.div>

        <ServiceCard
          id="recruitment"
          className="service-section service-1"
          imagePosition="left"
          imageSrc="/assets/service_1.jpg"
          imageAlt="Recruitment Meeting"
          title="Recruitment & Talent Acquisition:"
          description="We help businesses find the right talent for their teams through comprehensive recruitment strategies. Our expert recruiters use advanced screening techniques and extensive networks to identify top candidates who match your company culture and requirements. From entry-level positions to executive roles, we streamline the hiring process to save you time and resources while ensuring quality placements."
        />

        <ServiceCard
          id="manpower"
          className="service-section service-2"
          imagePosition="right"
          imageSrc="/assets/service_2.png"
          imageAlt="Construction Workers"
          title="Manpower Supply:"
          description="Reliable and skilled workforce solutions tailored to your business needs. We provide temporary, contract, and permanent staffing solutions across various industries including construction, manufacturing, logistics, and more. Our rigorous vetting process ensures that all workers meet safety standards, possess required certifications, and are ready to contribute to your projects from day one."
        />

        <ServiceCard
          id="outsourcing"
          className="service-section service-3"
          imagePosition="left"
          imageSrc="/assets/service_3.jpg"
          imageAlt="Business Handshake"
          title="Outsourcing Services:"
          description="Comprehensive outsourcing solutions to streamline your operations. We handle entire departments or specific functions, allowing you to focus on core business activities while we manage the rest. Whether it's administrative support, customer service, or specialized technical functions, our outsourcing services reduce costs and improve efficiency."
        />

        <ServiceCard
          id="executive-search"
          className="service-section service-2"
          imagePosition="right"
          imageSrc="/assets/service_4.jpg"
          imageAlt="Executive Meeting"
          title="Executive Search & Placement:"
          description="Specialized recruitment for senior-level and executive positions. Our executive search team conducts thorough assessments to identify leaders who can drive organizational growth and transformation. We understand the critical importance of leadership roles and work discreetly to find candidates who align with your strategic vision and company values."
        />
      </div>
    </div>
  );
}