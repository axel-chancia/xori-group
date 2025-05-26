import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "xori-group",
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
        {children}
      </body>
    </html>
  );
}
