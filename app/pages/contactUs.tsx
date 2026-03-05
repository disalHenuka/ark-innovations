"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { motion, Variants} from "framer-motion";
import "@/app/styles/contactUs.css";
import { sendEmail } from "@/app/contact/actions";

declare global {
  interface Window {
    FinisherHeader: any;
  }
}

// Custom hook for scroll-based fade in/out (bidirectional)
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

// Animation variants
const fadeInUp: Variants= {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
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
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ContactPage() {
  const finisherRef = useRef<any>(null);
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ success?: string; error?: string } | null>(null);

  // Scroll fade hooks (bidirectional)
  const headerFade = useScrollFade(0.1);
  const cardsFade = useScrollFade(0.15);
  const mapFormFade = useScrollFade(0.2);

  useEffect(() => {
    if (!window.FinisherHeader) return;

    const el = document.querySelector(".finisher-header") as HTMLElement | null;
    if (!el) return;

    const existingCanvas = el.querySelector("canvas");
    if (existingCanvas) existingCanvas.remove();

    try {
      finisherRef.current = new window.FinisherHeader({
        className: "finisher-header",
        count: 6,
        size: {
          min: 527,
          max: 900,
          pulse: 0,
        },
        speed: {
          x: { min: 0.8, max: 1.8 },
          y: { min: 0.7, max: 2 },
        },
        colors: {
          background: "#e8e8e8",
          particles: ["#00959e"],
        },
        blending: "overlay",
        opacity: {
          center: 0.6,
          edge: 0,
        },
        skew: 0,
        shapes: ["c"],
      });
    } catch (err) {
      console.error("FinisherHeader init failed:", err);
    }

    return () => {
      const canvas = el.querySelector("canvas");
      if (canvas) canvas.remove();
      finisherRef.current = null;
    };
  }, [pathname]);

  const handleSubmit = async (formData: FormData) => {
    setStatus(null);
    startTransition(async () => {
      const result = await sendEmail(formData);
      setStatus(result);
      if (result.success) {
        (document.getElementById("contact-form") as HTMLFormElement).reset();
      }
    });
  };

  return (
    <div className="contact-page">
      <Script src="/finisher-header.es5.min.js" strategy="afterInteractive" />
      <div className="finisher-header" />
      <div className="blur-overlay" />

      <div className="contact-container">
        {/* Header with Fade In */}
        <motion.div
          ref={headerFade.ref}
          initial="hidden"
          animate={headerFade.isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          className="contact-header"
        >
          <h2 className="contact-subtitle">GET IN TOUCH</h2>
          <h1 className="contact-title">CONTACT US</h1>
          <h3 className="contact-headline">
            Partner with us to build a workforce that drives your organization forward.
          </h3>
        </motion.div>

        {/* Contact Cards - Horizontal Row with Stagger */}
        <motion.div
          ref={cardsFade.ref}
          initial="hidden"
          animate={cardsFade.isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="contact-cards-horizontal"
        >
          <motion.div variants={cardVariant} className="contact-info-card">
            <div className="card-icon">📍</div>
            <h3>Office Address</h3>
            <p>
              333, Pushpasiri,<br />
              Thanthirimulla,<br />
              Panadura, Sri Lanka
            </p>
          </motion.div>

          <motion.div variants={cardVariant} className="contact-info-card">
            <div className="card-icon">📞</div>
            <h3>Phone Numbers</h3>
            <p>
              <strong>Mobile:</strong> +94 77 60 10 600<br />
              <strong>Mobile:</strong> +94 70 43 36 626
            </p>
            <p className="availability-text">
              Mon - Fri: 8:00 AM - 6:00 PM
            </p>
          </motion.div>

          <motion.div variants={cardVariant} className="contact-info-card">
            <div className="card-icon">✉️</div>
            <h3>Email Us</h3>
            <p>
              <strong>General Inquiries:</strong><br />
              <a href="mailto:arkinnovations@gmail.com">arkinnovations@gmail.com</a>
            </p>
            <p className="availability-text">
              Response within 24 hours
            </p>
          </motion.div>
        </motion.div>

        {/* Map and Form Section - Side by Side */}
        <motion.div
          ref={mapFormFade.ref}
          initial="hidden"
          animate={mapFormFade.isVisible ? "visible" : "hidden"}
          variants={fadeInScale}
          className="map-form-section"
        >
          {/* Google Map */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.0817582842894!2d79.90728!3d6.74167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDQnMzAuMCJOIDc5wrA1NCcyNi4yIkU!5e0!3m2!1sen!2slk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "30px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ark Innovations Office Location"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            <form id="contact-form" action={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isPending}>
                {isPending ? "Sending..." : "Send Message"}
              </button>

              {status?.success && (
                <div className="form-status success">{status.success}</div>
              )}
              {status?.error && (
                <div className="form-status error">{status.error}</div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}