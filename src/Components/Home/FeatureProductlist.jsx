"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { CardContext } from "@/ContextApi/cartcontext";

export default function FeaturedProductList({ products }) {

    const {setCard ,cart} =useContext(CardContext)
    const handleAddToCart = (product)=>{

        const newdata = {
            name : product.title,
            price : product.price ,
            image : product.thumbnail
        };
        setCard((prev)=> [...prev,newdata])


    }
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-2xl 
          hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer"
        >
          <div className="relative w-full h-40 overflow-hidden rounded-lg">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </div>

          <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center group-hover:text-pink-500 transition-colors duration-300">
            {product.title}
          </h3>

          <p className="text-gray-600 text-sm mt-2 text-center group-hover:text-gray-800">
            {product.description.slice(0, 60)}...
          </p>

          <p className="text-center mt-2 text-pink-600 font-bold">
            ${product.price}
          </p>

          <button
            onClick={() => handleAddToCart(product)}
            className="pl-8 pr-8 pt-4 pb-4 mt-8 ml-8 bg-black text-white rounded-3xl cursor-pointer hover:bg-amber-300"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
