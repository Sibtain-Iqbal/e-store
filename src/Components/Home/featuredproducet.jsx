import React from "react";
import Container from "./Container";
// import FeaturedProductList from "./FeaturedProductList";
import FeaturedProductList from "./FeatureProductlist";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=5", {
    cache: "no-store",
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

        {/* ✅ Pass data to client component */}
        <FeaturedProductList products={products} />
      </Container>
    </div>
  );
}
