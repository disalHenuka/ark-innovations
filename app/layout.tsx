import "./globals.css";
import LayoutWrapper from "@/app/components/LayoutWrapper";
  
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ark Innovations | Recruitment & Manpower Supply in Sri Lanka",
  description: "Ark Innovations provides premier recruitment, manpower supply, and outsourcing services in Sri Lanka. Located in Panadura, we connect businesses with top talent.",
  keywords: [
    "Jobs near me", "Vacancies Sri Lanka 2026", "Part time jobs Colombo", "Online jobs SL", "Work from home Sri Lanka",
    "Immediate vacancies", "School leaver jobs", "Trainee vacancies", "No experience jobs", "Urgent hiring",
    "Latest job vacancies in Panadura for school leavers", "Best recruitment agency in Sri Lanka for foreign jobs",
    "How to register with a manpower company in Colombo", "Part time delivery rider jobs in Western Province",
    "Work from home data entry jobs in Sri Lanka for students", "Night shift jobs in Colombo with transport",
    "Apparel sector manpower", "Garment factory labor supply", "Hotel staff recruitment SL", "Construction workers hire",
    "Security services Colombo", "BPO staffing Sri Lanka", "IT headhunters Colombo", "Janitorial outsourcing",
    "Warehouse labor hire", "Driver supply agency", "Qualified machine operators for apparel factory in Gampaha",
    "Temporary staff for events and exhibitions in Colombo", "Reliable construction labor contractors in Western Province",
    "Hire experienced housekeeping staff for hotels in Sri Lanka", "Outsourced payroll services for small businesses in Sri Lanka",
    "Topjobs Sri Lanka vacancies", "Ikman jobs Colombo", "Job bank Sri Lanka vacancies", "Manpower register form",
    "Private sector jobs SL", "Gazette jobs Sri Lanka", "Manpower agencies in Panadura", "Staffing solutions near Kalutara",
    "Packers", "Loaders", "General Helpers", "Electricians", "Plumbers", "Welders", "Accounts Clerk", "Data Entry Operator",
    "HR Assistant", "Receptionist", "Sales Executive", "Delivery Riders", "Lorry Drivers", "Forklift Operators",
    "Inventory Clerks", "Remote talent acquisition Sri Lanka", "Freelance worker platform SL", "Technical recruitment agency Colombo",
    "EOR services Sri Lanka", "Employer of Record Sri Lanka", "Contract staffing for IT projects", "Hire remote developers in Sri Lanka",
    "Manpower recruitment Panadura", "Job placement agency Kalutara", "Staffing services Wadduwa", "Hire workers in Moratuwa",
    "Recruitment agency Bandaragama", "ark",
    "Ark Innovations", "Ark Innovations Pvt Ltd","Ark Innovations Colombo","ark","manpower",
    "recruitment","staffing","outsourcing","Sri Lanka","Panadura","Western Province","jobs in sri lanka",
    "job placement", "temporary staffing", "skilled workers", "workforce solutions", "labour hire", "recruitment agency",
    "outsourcing workforce", "industrial manpower", "hire workers", "find employees", "quick hiring solutions", "on-demand workforce",
    "best recruitment agency in Colombo", "affordable manpower services",
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