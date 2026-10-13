import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Mohammed Ibrahim Aejaz - AI Full-Stack Engineer",
  description:
    "Shipping AI products that solve real problems. Full Stack Engineer, SaaS Founder, Freelance Developer. Explore my work in AI, backend development, and scalable systems.",
  keywords: [
    "AI Engineer",
    "Full Stack Developer",
    "SaaS",
    "FastAPI",
    "Next.js",
    "Python",
    "TypeScript",
    "Machine Learning",
  ],
  authors: [{ name: "Mohammed Ibrahim Aejaz", url: "https://www.linkedin.com/in/mohammedibrahimaejaz/" }],
  openGraph: {
    title: "Mohammed Ibrahim Aejaz - AI Full-Stack Engineer",
    description: "Shipping AI products that solve real problems.",
    type: "website",
    url: "https://www.linkedin.com/in/mohammedibrahimaejaz/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Without JS, never leave scroll-reveal content hidden */}
        <noscript>
          <style>{`.animate-on-scroll{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="bg-black text-white font-sans antialiased">{children}</body>
    </html>
  );
}
