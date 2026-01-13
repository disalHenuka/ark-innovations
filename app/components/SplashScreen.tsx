'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show splash screen for 2 seconds, then fade out
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onComplete();
      }, 500); // Wait for fade-out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : 'fade-in'}`}>
      <Image
        src="/assets/landing.png"
        className="splash-logo"
        alt="Ark Innovations Logo"
        width={300}
        height={300}
        priority
      />
    </div>
  );
}

