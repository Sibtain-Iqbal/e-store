import React from "react";
import Container from "./Container";
import ProductBox from "../productBox";


function Recentlyadded() {
  return (
    <div className="bg-gray-200 p-3 mt-[60px]">
      <Container>
        <h1 className="text-center text-4xl font-bold mb-6">
          Recently Added
        </h1>

        {/* ✅ Product Cards Section */}
        <ProductBox />
      </Container>
    </div>
  );
}

export default Recentlyadded;
