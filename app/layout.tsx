import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siddharth Sharma | Senior Middleware & Platform Architect",
  description:
    "Enterprise Infrastructure Architect shifting legacy systems from manual toil to automated platform engineering and Agentic AI pipelines. AWS & GCP Certified.",
  keywords: [
    "Siddharth Sharma",
    "Middleware Architect",
    "Platform Engineering",
    "Agentic AI",
    "Cloud Architecture",
    "AWS",
    "GCP",
    "SRE",
    "HCLTech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-emerald-500/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
