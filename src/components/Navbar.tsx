"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/site";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <nav className="flex items-center justify-between px-6 md:px-10 py-5">
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-sm font-bold tracking-wide uppercase"
        >
          {siteConfig.logo}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white relative z-50 w-6 h-5 flex flex-col justify-between"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-full h-[1.5px] bg-white transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[9px]" : ""
            }`}
          />
          <span
            className={`block w-full h-[1.5px] bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-full h-[1.5px] bg-white transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#050505] transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-3xl font-bold uppercase tracking-wider hover:text-[#09f] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
