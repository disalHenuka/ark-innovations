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
          <p>333, Pushpasiri, Thanthirimulla, Panadura</p>
          <p style={{ marginTop: "0.5rem" }}>+94 77 60 10 600</p>
          <p>+94 70 43 36 626</p>
          <p style={{ marginTop: "0.5rem" }}>arkinnovations@gmail.com</p>
        </div>
      </div>

      <div className="footerBottom">
        © {new Date().getFullYear()} Ark Innovations (Pvt) Ltd. All rights reserved.
      </div>
    </motion.footer>
  );
}
