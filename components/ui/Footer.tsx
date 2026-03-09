"use client";

import { Github, Linkedin, Mail, ArrowUp, MessageCircle } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 px-6 mt-24">

      <div className="max-w-6xl mx-auto">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Name */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">
              Juliana Herrera
            </h3>
            <p className="text-sm text-neutral-500 mt-1">
              Fullstack Developer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6 text-sm text-neutral-500">
            <a href="#about" className="hover:text-purple-500 transition">
              About
            </a>
            <a href="#projects" className="hover:text-purple-500 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-purple-500 transition">
              Contact
            </a>
          </nav>

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://github.com/julianaherrera1"
              target="_blank"
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-purple-500 hover:text-purple-500 transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/juliana-herrera-ba3481332"
              target="_blank"
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-purple-500 hover:text-purple-500 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://wa.me/573117249900?text=Hi%20Juliana%2C%20I%20found%20your%20portfolio%20and%20I%E2%80%99d%20love%20to%20talk%20about%20a%20potential%20project%20or%20collaboration." target="_blank"
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-purple-500 hover:text-purple-500 transition"
            >
              <MessageCircle size={18} />
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-neutral-200 dark:border-neutral-800 pt-6 flex justify-between items-center text-sm text-neutral-500">

          <p>
            © {new Date().getFullYear()} Juliana Herrera. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-purple-500 hover:text-purple-500 transition"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>
    </footer>
  );
}