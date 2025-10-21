import React from "react";
import Image from "next/image";

const products = [
  {
    name: "Wireless Headphones",
    description: "Experience crystal clear sound with deep bass.",
    image: "https://images.pexels.com/photos/792345/pexels-photo-792345.jpeg",
  },
  {
    name: "Smart Watch",
    description: "Track fitness, notifications, and health easily.",
    image: "https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg",
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable and powerful for all your music needs.",
    image: "https://images.pexels.com/photos/1623016/pexels-photo-1623016.jpeg",
  },
  {
    name: "Gaming Mouse",
    description: "Precision control for a next-level gaming experience.",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
  },
  {
    name: "4K Action Camera",
    description: "Capture your adventures in ultra HD quality.",
    image: "https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg",
  },
];

function ProductBox() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
      {products.map((product, index) => (
        <div
          key={index}
          className="group bg-white p-4 rounded-xl shadow-md hover:shadow-2xl 
          hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"
        >
          {/* Image */}
          <div className="relative w-full h-40 overflow-hidden rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* Product Info */}
          <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center group-hover:text-pink-500 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mt-2 text-center group-hover:text-gray-800">
            {product.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProductBox;
