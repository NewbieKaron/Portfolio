import React, { useState } from 'react';
import Link from 'next/link';
import { NavbarLabel, NavbarLinks } from '@page/enums/page';


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu on small screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black text-black text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-3xl font-bold">
          <Link href="/">Portfolio</Link>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <Link href={NavbarLinks.HOME} className="hover:text-gray-300 text-xl">{NavbarLabel.HOME}</Link>
          <Link href={NavbarLinks.ABOUT} className="hover:text-gray-300 text-xl">{NavbarLabel.ABOUT}</Link>
          <Link href={NavbarLinks.SERVICES} className="hover:text-gray-300 text-xl">{NavbarLabel.SERVICES}</Link>
          <Link href={NavbarLinks.CONTACT} className="hover:text-gray-300 text-xl">{NavbarLabel.CONTACT}</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center relative" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="font-bold md:hidden bg-white-600 text-white p-4 space-y-4 absolute top-12">
          <Link href={NavbarLinks.HOME} className="block hover:text-gray-300">{NavbarLabel.HOME}</Link>
          <Link href={NavbarLinks.ABOUT} className="block hover:text-gray-300">{NavbarLabel.ABOUT}</Link>
          <Link href={NavbarLinks.SERVICES} className="block hover:text-gray-300">{NavbarLabel.SERVICES}</Link>
          <Link href={NavbarLinks.CONTACT} className="block hover:text-gray-300">{NavbarLabel.CONTACT}</Link>
        </div>
      )}
    </div>
  );
};
