"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Menu, X, MessageCircle } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <>
      <nav
        className={`
          fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur
          ${
            scrolled
              ? "bg-[var(--background-elevated)]/80 border-b border-[var(--border)] py-2"
              : "bg-transparent py-2"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo/logo.png"  
                alt="Logo"
                width={120}
                height={40}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://github.com/julianaherrera1"
                target="_blank"
                className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/juliana-herrera-ba3481332"
                target="_blank"
                className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://wa.me/573117249900?text=Hi%20Juliana%2C%20I%20found%20your%20portfolio%20and%20I%E2%80%99d%20love%20to%20talk%20about%20a%20potential%20project%20or%20collaboration."
                target="_blank"
                className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[var(--background-elevated)] border-b border-[var(--border)]">
            <div className="px-6 py-6 space-y-4">

              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {item}
                </a>
              ))}

              <div className="flex gap-5 pt-4">
                <a href="https://github.com/" target="_blank">
                  <Github size={20} />
                </a>

                <a href="https://linkedin.com/" target="_blank">
                  <Linkedin size={20} />
                </a>

                <a href="https://wa.me/573000000000" target="_blank">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="h-14 md:h-16"></div>
    </>
  );
}