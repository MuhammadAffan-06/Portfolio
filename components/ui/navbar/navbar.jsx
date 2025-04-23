"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black fixed top-0 w-full z-50">
      <div className="w-full max-w-screen-xl flex flex-wrap items-center justify-between px-4 py-4 mx-auto">
        <a
          href="#home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span
            style={{ fontFamily: "Mars" }}
            className="font-mars self-center text-2xl font-semibold whitespace-nowrap text-white"
          >
            Affan
          </span>
        </a>

        <div className="flex items-center gap-2 md:order-2">
          <a href="#contact">
            <Button className="hidden md:flex px-3 py-1.5 text-sm bg-[#5200FF] text-white hover:bg-white">
              Contact Me
            </Button>
          </a>

          {/* Hamburger Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden text-black border-white hover:bg-white hover:text-black"
            aria-controls="navbar-cta"
            aria-expanded={isOpen}
          >
            ☰
          </Button>
        </div>

        {/* Navigation Links */}
        <div
          id="navbar-cta"
          className={`${
            isOpen
              ? "max-h-96 opacity-100 scale-y-100"
              : "max-h-0 opacity-0 scale-y-0"
          } overflow-hidden transition-all duration-300 ease-in-out md:opacity-100 md:scale-y-100 md:max-h-none md:flex md:items-center md:justify-between w-full md:w-auto md:order-1`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-6 md:mt-0 bg-black md:bg-black">
            {[
              { label: "Introduction", href: "#introduction" },
              { label: "Stack", href: "#stack" },
              { label: "Services", href: "#services" },
              { label: "Projects", href: "#projects" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-1.5 rounded text-white hover:bg-white hover:text-black transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
