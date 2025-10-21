import React from "react";
import Container from "./Container";
import Slider from "./Slider";

function HeroSection() {
  return (
    <section className="bg-white py-14">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-14">
          {/* Left Content */}
          <div className="flex-1 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              One stop solution{" "}
              <span className="text-pink-500">E-Store</span>
            </h1>

            <p className="text-gray-600 mt-5 text-base leading-relaxed">
              Discover the latest headphones, earphones, mobiles, tablets etc.
              <br />
              Exclusive deals just for you!
            </p>

            <button className="mt-8 bg-pink-500 text-white px-8 py-3 rounded-full text-sm hover:bg-pink-600 transition">
              Shop Now
            </button>
          </div>

          {/* Right Slider */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-[700px] h-[800px] md:w-[550px] md:h-[420px]">
              <Slider />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
