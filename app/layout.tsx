import "./globals.css";
import LayoutWrapper from "@/app/components/LayoutWrapper";
  
export const metadata = {
  title: "Ark Innovations",
  description: "Manpower and Recruitment Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LayoutWrapper>
        {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}