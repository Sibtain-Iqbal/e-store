"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ShopEase</h2>
          <p className="text-sm">
            Discover the latest electronics, fashion, and lifestyle products at unbeatable prices.
          </p>
          <div className="flex space-x-4 mt-5">
            <Link href="/" className="hover:text-pink-500"><FaFacebookF /></Link>
            <Link href="/" className="hover:text-pink-500"><FaInstagram /></Link>
            <Link href="/" className="hover:text-pink-500"><FaTwitter /></Link>
            <Link href="/" className="hover:text-pink-500"><FaGithub /></Link>
            <Link href="mailto:info@shopease.com" className="hover:text-pink-500"><FaEnvelope /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-pink-400">Home</Link></li>
            <li><Link href="/products" className="hover:text-pink-400">Products</Link></li>
            <li><Link href="/about" className="hover:text-pink-400">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-pink-400">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-pink-400">FAQ</Link></li>
            <li><Link href="/" className="hover:text-pink-400">Shipping & Returns</Link></li>
            <li><Link href="/" className="hover:text-pink-400">Privacy Policy</Link></li>
            <li><Link href="/" className="hover:text-pink-400">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div> 
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm mb-3">
            Subscribe to our newsletter and get the latest offers & trends.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-md focus:outline-none text-gray-800"
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-r-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} <span className="text-pink-500 font-semibold">ShopEase</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
