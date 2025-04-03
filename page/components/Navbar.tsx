import React, { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu on small screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-3xl font-bold">
          <Link href="/">Portfolio</Link>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300 text-xl">Home</Link>
          <Link href="/about" className="hover:text-gray-300 text-xl">About</Link>
          <Link href="/services" className="hover:text-gray-300 text-xl">Services</Link>
          <Link href="/contact" className="hover:text-gray-300 text-xl">Contact</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white-600 text-white p-4 space-y-4">
          <Link href="/" className="block hover:text-gray-300">Home</Link>
          <Link href="/about" className="block hover:text-gray-300">About</Link>
          <Link href="/services" className="block hover:text-gray-300">Services</Link>
          <Link href="/contact" className="block hover:text-gray-300">Contact</Link>
        </div>
      )}
    </div>
  );
};
