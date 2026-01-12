'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Home from './pages/home';

export default function LandingPage() {
  const [isLanding, setIsLanding] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLanding(false);
        setFadeOut(false);
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLanding ? (
        <div className={`landing-page ${fadeOut ? 'fade-out' : ''}`}>
          <Image
            src="/assets/landing.png"
            className="landing-logo"
            alt="App Logo"
            width={300}
            height={300}
            priority
          />
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}