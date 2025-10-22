"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function ProductBox() {
  const [apidata, setApidata] = useState([]);

  const productdata = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const jsondata = await res.json();
      setApidata(jsondata.products);
    } catch (err) {
      console.log("Error found:", err);
    }
  };

  useEffect(() => {
    productdata();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10 px-4">
      {apidata.map((product) => (
        <div
          key={product.id}
          className="group bg-white p-4 rounded-xl shadow-md hover:shadow-2xl 
          hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"
        >
          {/* Product Image */}
          <div className="relative w-full h-40 overflow-hidden rounded-lg">
            <Image
              src={product.images[0]} // ✅ Use first image
              alt={product.title}      // ✅ Use title
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
  );
}

export default ProductBox;
