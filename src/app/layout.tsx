import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mohammed Ibrahim Aejaz - AI Full-Stack Engineer",
  description:
    "Building AI products that actually ship. Full Stack Engineer, SaaS Founder, Freelance Developer. Explore my work in AI, backend development, and scalable systems.",
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
  authors: [{ name: "Mohammed Ibrahim Aejaz", url: "https://ibrahimaejaz.com" }],
  openGraph: {
    title: "Mohammed Ibrahim Aejaz - AI Full-Stack Engineer",
    description: "Building AI products that actually ship.",
    type: "website",
    url: "https://www.linkedin.com/in/mohammedibrahimaejaz/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-black text-white font-sans antialiased">{children}</body>
    </html>
  );
}
