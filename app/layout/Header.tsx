// Add client directive
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HeaderProps } from "@/types/HeaderType";
import { defaultNavItems } from "@/data/HeaderData";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderPage: React.FC<HeaderProps> = ({
  logoText = "ABOUT",
  logoHref = "/#about",
  navItems = defaultNavItems,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-[15px] h-[50px] bg-black">
      <Link
        href={logoHref}
        className="text-[30px] font-bold bg-gradient-to-br from-purple-500 to-indigo-600 bg-clip-text text-transparent"
      >
        {logoText}
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-8 text-[30px]">
        {navItems.map((v) => (
          <Link
            key={v.href}
            href={v.href}
            className="bg-gradient-to-br from-purple-500 to-indigo-600 bg-clip-text text-transparent"
          >
            {v.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-[50px] left-0 right-0 bg-black p-4 lg:hidden">
          <div className="flex flex-col space-y-4">
            {navItems.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="text-[24px] bg-gradient-to-br from-purple-500 to-indigo-600 bg-clip-text text-transparent"
                onClick={() => setIsMenuOpen(false)}
              >
                {v.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default HeaderPage;
