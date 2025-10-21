import React from "react";
import { ShoppingCart, Search } from "lucide-react";
import Link from "next/link";
import Container from "./Home/Container";

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <Container className="flex items-center justify-between py-4 mb-7">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-500">
          E-Store<span className="text-black">.</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-[500px] bg-white border border-gray-200 rounded-full shadow-sm px-3 py-1">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 outline-none px-3 py-1 text-gray-700 text-sm"
          />
          <button
            type="button"
            className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full transition"
          >
            <Search size={18} />
          </button>
        </div>

        {/* Nav Links + Cart */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-pink-500 text-sm">
            Home
          </Link>
          <Link
            href="/store"
            className="text-gray-700 hover:text-pink-500 text-sm"
          >
            Store
          </Link>

          {/* Cart Icon */}
          <div className="relative">
            <ShoppingCart className="text-gray-800 w-5 h-5" />
            {/* <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span> */}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
