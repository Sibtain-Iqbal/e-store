
"use client"
import Image from "next/image";
import Link from "next/link";

async function getProductDetails(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export default async function ProductDetails({ params }) {
  const { id } = params; // dynamic route parameter
  const product = await getProductDetails(id);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* 🖼 Product Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover rounded-xl shadow-md"
          />
        </div>

        {/* 📄 Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <p className="text-2xl font-semibold text-pink-600 mb-4">
            ${product.price}
          </p>

          <p className="text-yellow-500 font-semibold mb-6">
            ⭐ {product.rating} / 5
          </p>

          {/* 🛒 Buttons */}
          <div className="flex gap-4">
            <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition">
              Add to Cart
            </button>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition">
              Buy Now
            </button>
          </div>

          {/* 🔙 Back to Products */}
          <Link href="/" className="block mt-8 text-blue-600 hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
