'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showNavAndFooter, setShowNavAndFooter] = useState(true);

  useEffect(() => {
    // Only check splash screen state on the home page
    if (pathname === '/') {
      const hasSeenSplash = localStorage.getItem('hasSeenSplash');
      
      if (!hasSeenSplash) {
        // First visit - hide nav and footer during splash
        setShowNavAndFooter(false);
        
        // Show nav and footer after splash screen duration (2.5 seconds)
        const timer = setTimeout(() => {
          setShowNavAndFooter(true);
        }, 2500);
        
        return () => clearTimeout(timer);
      } else {
        // Returning visitor - show nav and footer immediately
        setShowNavAndFooter(true);
      }
    } else {
      // On other pages, always show nav and footer
      setShowNavAndFooter(true);
    }
  }, [pathname]);

  return (
    <>
      {showNavAndFooter && <Navbar />}
      {children}
      {/* Footer is handled within each page component for custom animations */}
      {pathname !== '/' && showNavAndFooter && <Footer />}
    </>
  );
}

