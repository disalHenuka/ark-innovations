'use client';

import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Home from './pages/home';

export default function Page() {
  const [showSplash, setShowSplash] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    const isReload = window.performance
      .getEntriesByType('navigation')
      .map((nav) => (nav as PerformanceNavigationTiming).type)
      .includes('reload');

    if (isReload) {
      sessionStorage.setItem('hasSeenSplash', 'true');
      setShowSplash(false);
      setIsLoading(false);
    } else if (!hasSeenSplash) {
      setShowSplash(true);
      setIsLoading(false);
    } else {
      setShowSplash(false);
      setIsLoading(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem('hasSeenSplash', 'true');
    setShowSplash(false);
  };

  if (isLoading) {
    return null;
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
