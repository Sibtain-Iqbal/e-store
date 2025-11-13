"use client";

import React, { useContext } from "react";
import { CardContext } from "@/ContextApi/cartcontext";
import Image from "next/image";
export default function StorePage() {
  const { cart, setCard } = useContext(CardContext);

  // Remove item from cart
  const handleRemove = (index) => {
    const newCard = cart.filter((_, i) => i !== index);
    setCard(newCard);
  };

  // Increase quantity
  const handleIncrease = (index) => {
    const newCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setCard(newCart);
  };

  // Decrease quantity
  const handleDecrease = (index) => {
    const newCart = cart.map((item, i) =>
      i === index
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    setCard(newCart);
  };

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">🛒 Cart</h1>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty 🛍️</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-gray-200 py-4"
              >
                <div>
                  {item.thumbnail && (
                    <div className="relative w-20 h-20 mr-4">
                      <Image
                        src={item.thumbnail}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}

                  <h2 className="text-lg font-semibold text-gray-700">
                    {item.name}
                  </h2>
                  <div className="flex items-center space-x-2 mt-1">
                    <button
                      onClick={() => handleDecrease(index)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity || 1}</span>
                    <button
                      onClick={() => handleIncrease(index)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-xl font-bold text-green-600">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500 text-sm mt-1 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Total Section */}
            <div className="flex justify-between items-center mt-6">
              <h3 className="text-lg font-semibold text-gray-800">Total</h3>
              <p className="text-2xl font-bold text-gray-900">
                ${total.toFixed(2)}
              </p>
            </div>

            <button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl transition">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
