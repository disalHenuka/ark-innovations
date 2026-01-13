'use client';

import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Home from './pages/home';

export default function Page() {
  const [showSplash, setShowSplash] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has seen the splash screen before
    const hasSeenSplash = localStorage.getItem('hasSeenSplash');
    
    if (!hasSeenSplash) {
      // First visit - show splash screen
      setShowSplash(true);
      setIsLoading(false);
    } else {
      // Returning visitor - skip splash screen
      setShowSplash(false);
      setIsLoading(false);
    }
  }, []);

  const handleSplashComplete = () => {
    // Mark that user has seen the splash screen
    localStorage.setItem('hasSeenSplash', 'true');
    setShowSplash(false);
  };

  if (isLoading) {
    return null; // Or a minimal loading state
  }

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <Home />
      )}
    </>
  );
}
