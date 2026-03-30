import "./globals.css";
import LayoutWrapper from "@/app/components/LayoutWrapper";
  
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ark Innovations | Recruitment & Manpower Supply in Sri Lanka",
  description: "Ark Innovations provides premier recruitment, manpower supply, and outsourcing services in Sri Lanka. Located in Panadura, we connect businesses with top talent.",
  keywords: [
    "Ark Innovations", "Ark Innovations Pvt Ltd",
    "manpower recruitment Sri Lanka", "recruitment agency Sri Lanka", "staffing solutions Sri Lanka", 
    "workforce solutions Sri Lanka", "labour hire Sri Lanka", "job placement services Sri Lanka", 
    "temporary staffing Sri Lanka", "skilled workers Sri Lanka", "outsourcing workforce Sri Lanka", 
    "industrial manpower Sri Lanka", "manpower recruitment Colombo", "recruitment agency Colombo", 
    "staffing solutions Colombo", "manpower recruitment Dehiwala-Mount Lavinia", 
    "manpower recruitment Moratuwa", "manpower recruitment Sri Jayawardenepura Kotte", 
    "manpower recruitment Negombo", "manpower recruitment Maharagama", "manpower recruitment Nugegoda", 
    "manpower recruitment Homagama", "manpower recruitment Piliyandala", "manpower recruitment Kaduwela", 
    "manpower recruitment Kolonnawa", "manpower recruitment Ratmalana", "manpower recruitment Battaramulla", 
    "manpower recruitment Boralesgamuwa", "manpower recruitment Gampaha", "manpower recruitment Ja-Ela", 
    "manpower recruitment Wattala", "manpower recruitment Kelaniya", "manpower recruitment Kadawatha", 
    "manpower recruitment Minuwangoda", "manpower recruitment Kalutara", "manpower recruitment Panadura", 
    "manpower recruitment Horana", "manpower recruitment Beruwala", "hire workers Sri Lanka", 
    "hire staff Colombo", "find employees Sri Lanka", "outsource staff Sri Lanka", 
    "recruit employees Colombo", "temporary workers Colombo", "quick hiring solutions Sri Lanka", 
    "on-demand workforce Sri Lanka", "best recruitment agency in Colombo", 
    "affordable manpower services Sri Lanka", "trusted staffing agency Western Province", 
    "hire skilled workers in Colombo Sri Lanka", "temporary labour hire Colombo Sri Lanka"
  ],
  authors: [{ name: "Ark Innovations" }],
  openGraph: {
    title: "Ark Innovations | Recruitment & Manpower Supply in Sri Lanka",
    description: "Ark Innovations provides premier recruitment, manpower supply, and outsourcing services in Sri Lanka.",
    siteName: "Ark Innovations",
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ark Innovations | Recruitment Services in Sri Lanka",
    description: "Expert recruitment, manpower supply, and outsourcing services based in Panadura, Sri Lanka.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Ark Innovations (Pvt) Ltd",
        "description": "Providing recruitment, manpower supply, and outsourcing services that empower businesses to succeed through skilled and reliable workforce solutions.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "333, Pushpasiri, Thanthirimulla",
          "addressLocality": "Panadura",
          "addressRegion": "Western Province",
          "addressCountry": "LK"
        },
        "telephone": ["+94 77 60 10 600", "+94 70 43 36 626"],
        "email": "arkinnovations@gmail.com",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "6.74167",
          "longitude": "79.90728"
        }
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "SiteNavigationElement", "position": 1, "name": "Home", "url": "/" },
          { "@type": "SiteNavigationElement", "position": 2, "name": "About Us", "url": "/about" },
          { "@type": "SiteNavigationElement", "position": 3, "name": "Services", "url": "/services" },
          { "@type": "SiteNavigationElement", "position": 4, "name": "Industries", "url": "/industries" },
          { "@type": "SiteNavigationElement", "position": 5, "name": "Contact Us", "url": "/contact" }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <LayoutWrapper>
        {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}