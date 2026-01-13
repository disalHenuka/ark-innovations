"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";
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

export default function HomePage() {
  return (
    <>      
      {/* HERO */}
      <section className="section">
        
        {/* SKYLINE - at the back */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}
        >
          <Image
            src="/assets/skyline.png"
            alt="Industrial skyline"
            fill
            className="skyline"
          />
        </motion.div>

        {/* BLUE ROTATED BACKGROUND PNG - animates from left to right quickly */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}
        >
          <Image
            src="/assets/background.png"
            alt="Background shape"
            fill
            priority
            className="backgroundShape"
          />
        </motion.div>

        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="primaryButton"
              >
                Get Started →
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="secondaryButton"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT WORKER */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rightContent"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/assets/worker.png"
                alt="Industrial Worker"
                width={600}
                height={800}
                className="workerImage"
                priority
              />
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
