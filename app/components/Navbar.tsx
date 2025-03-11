'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

/**
 * Navbar Component
 * 
 * A modern semi-transparent navigation bar that remains fixed at the top of the page.
 * Features a logo, navigation links, and authentication buttons.
 * 
 * Features:
 * - Fixed positioning with blur effect background
 * - Responsive design (mobile and desktop layouts)
 * - Active link indication with underline effect
 * - Smooth hover transitions
 * 
 * @returns {JSX.Element} The rendered Navbar component
 */
const Navbar = () => {
  // Track the currently active navigation link
  const [activeLink, setActiveLink] = useState('flights');

  // Navigation link configuration
  const navLinks = [
    { name: 'Flights', href: '/flights', id: 'flights' },
    { name: 'Hotel', href: '/hotel', id: 'hotel' },
    { name: 'Tours', href: '/tours', id: 'tours' },
    { name: 'Insurance', href: '/insurance', id: 'insurance' },
    { name: 'Visa', href: '/visa', id: 'visa' },
  ];

  return (
    <nav className="fixed w-full z-50">
      {/* Semi-transparent container with blur effect */}
      <div className="backdrop-blur-md bg-black/30 rounded-lg mx-4 my-2 px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-ico.png"
              alt="OCI Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-bold text-yellow-500">
              OCI Travels & Tourism
            </span>
          </Link>

          {/* Navigation Links - Hidden on mobile, visible on medium screens and up */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`text-white hover:text-yellow-500 transition-colors relative ${
                  activeLink === link.id
                    ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-yellow-500'
                    : ''
                }`}
                onClick={() => setActiveLink(link.id)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Authentication Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className="text-white hover:text-yellow-500 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;