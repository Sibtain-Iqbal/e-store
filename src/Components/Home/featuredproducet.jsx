import React from "react";
import Image from "next/image";
import Container from "./Container";

// ✅ This is a Server Component (no "use client")
async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=5", {
    cache: "no-store", // always fetch fresh data (SSR)
  });
  const data = await res.json();
  return data.products;
}

export default async function Featuredproducet() {
  const products = await getProducts();

  return (
    <div className="p-3 mt-[30px]">
      <Container>
        <h1 className="text-center text-4xl font-bold mb-6">
          Featured Products
        </h1>

        {/* ✅ Product Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-2xl 
              hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative w-full h-40 overflow-hidden rounded-lg">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Product Info */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center group-hover:text-pink-500 transition-colors duration-300">
                {product.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2 text-center group-hover:text-gray-800">
                {product.description.slice(0, 60)}...
              </p>

              <p className="text-center mt-2 text-pink-600 font-bold">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
