"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-orange-500/20 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="text-xl font-serif text-white hover:text-orange-500 transition">
            M. Ibrahim Aejaz
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-orange-500 transition text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:ibrahimaejaz@gmail.com"
            className="px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition font-medium text-sm"
          >
            CONNECT
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-orange-500 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-b border-orange-500/20 md:hidden">
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-orange-500 transition text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:ibrahimaejaz@gmail.com"
                className="px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition font-medium text-sm text-center"
              >
                CONNECT
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
