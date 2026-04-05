"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "@/app/styles/footer.css";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function Footer() {
  const { ref, isVisible } = useInView(0.15);

  return (
    <motion.footer
      ref={ref}
      className="footer"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: "easeOut" },
        },
      }}
    >
      <div className="footerContent">

        <div className="footerSection">
          <h3>Ark Innovations (Pvt) Ltd</h3>
          <p>
            Providing recruitment, manpower supply, and outsourcing services
            that empower businesses to succeed through skilled and reliable
            workforce solutions.
          </p>
        </div>

        <div className="footerSection">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/industries">Industries</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footerSection">
          <h3>Our Services</h3>
          <ul>
            <li><a href="/services#recruitment">Recruitment & Talent Acquisition</a></li>
            <li><a href="/services#manpower">Manpower Supply</a></li>
            <li><a href="/services#outsourcing">Outsourcing Services</a></li>
            <li><a href="/services#executive-search">Executive Search</a></li>
          </ul>
        </div>

        <div className="footerSection">
          <h3>Contact</h3>
          <a href="https://www.google.com/maps?q=6.74167,79.90728"
          target="_blank"
          rel="noopener noreferrer"
          className="footerAddressLink"
        >
          333, Pushpasiri, Thanthirimulla, Panadura
        </a>
          <p style={{ marginTop: "0.5rem" }}>+94 77 60 10 600</p>
          <p>+94 78 13 34 513</p>

          {/* ── Social Icons ── */}
          <div className="footerSocials">
            {/* WhatsApp */}
            <a
              href="https://wa.me/94776010600"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon"
              aria-label="WhatsApp"
            >
              {/* WhatsApp SVG */}
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1SBXfMPbLj/"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon"
              aria-label="Facebook"
            >
              {/* Facebook SVG */}
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Gmail */}
            <a
              href="mailto:arkinnovations@gmail.com"
              className="socialIcon"
              aria-label="Email"
            >
              {/* Gmail / Email SVG */}
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        © {new Date().getFullYear()} Ark Innovations (Pvt) Ltd. All rights reserved.
      </div>
    </motion.footer>
  );
}