import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Mon Entreprise",
  description: "Startup des entrepreneur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <Header /> 
        {children}
         <Footer />
      </body>
    </html>
  );
}
