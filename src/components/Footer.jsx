import React from 'react';
import '../styles/App.css';

// Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
        {/* Column 1: Main site links */}
        <div>
          <h3 className="font-semibold mb-4">Explore</h3>
          <ul>
            <li><a href="/shop" className="text-gray-400 hover:text-white">Shop</a></li>
            <li><a href="/how-to-play" className="text-gray-400 hover:text-white">How To Play</a></li>
            <li><a href="/setup" className="text-gray-400 hover:text-white">Setup</a></li>
            <li><a href="/schools" className="text-gray-400 hover:text-white">Schools</a></li>
            <li><a href="/camps" className="text-gray-400 hover:text-white">Camps</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="/faqs" className="text-gray-400 hover:text-white">FAQs</a></li>
            <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Column 2: Policies and support */}
        <div>
          <h3 className="font-semibold mb-4">Help</h3>
          <ul>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            <li><a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            <li><a href="/refund-policy" className="text-gray-400 hover:text-white">Refund Policy</a></li>
            <li><a href="/shipping-policy" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
          </ul>
        </div>

        {/* Column 3: Contact info and social links */}
        <div>
          <h3 className="font-semibold mb-4">Stay Connected</h3>
          <p className="text-gray-300"></p>
          <div className="mt-4 flex space-x-4">
            <a href="" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              TikTok
            </a>
            <a href="" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
