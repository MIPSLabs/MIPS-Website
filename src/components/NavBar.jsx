import React from 'react';
import '../styles/App.css';
import logo from '../assets/logo.png';
import name from '../assets/name.png';

import { useState } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Shop",
    "How To Play",
    "Setup",
    "Schools",
    "Camps",
    "About",
    "FAQs",
    "Blog",
  ];

  return (
    <header className="w-full z-50">
      {/* Announcement bar */}
      <div className="bg-gray-100 text-center text-sm py-2 px-4">
      </div>

      {/* Nav bar */}
      <div className="bg-white shadow-md px-4 py-3 flex justify-between items-center md:px-8">
        <div className="flex items-center space-x-4">
          {/* Hamburger (left) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`h-0.5 w-6 bg-gray-800 mb-1 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`h-0.5 w-6 bg-gray-800 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-gray-800 mt-1 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>

          {}
          <img className="h-14 flex items-center px-0" src={logo}/>
          <img className="h-10 flex items-center px-0" src={name}/>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                className="text-gray-700 hover:text-[blue]-600 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Cart */}
        <a href="/cart" className="text-gray-700 hover:text-yellow-600">Cart (0)</a>
      </div>

      {/* Mobile full screen menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="p-6">
          <button
            className="text-xl font-bold mb-6"
            onClick={() => setMenuOpen(false)}
          >
            ✕ Close
          </button>
          <ul className="space-y-6 text-lg font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="block text-gray-800 hover:text-yellow-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="mt-6 text-sm text-gray-500">
              <a href="mailto:insertemail">
                
              </a>
            </li>
            <li className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-black">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-black">TikTok</a>
              <a href="#" className="text-gray-600 hover:text-black">YouTube</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
