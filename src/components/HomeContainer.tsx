"use client";

import { ProductCardProps } from "@/types/Product";
import ProductCard from "./ProductCard";
import { useGlobalContext } from "@/context/store";

const HomeContainer = () => {
  //access global state
  const { products, isLoading } = useGlobalContext();

  //handle loading state
  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }
  return (
    <section className="flex flex-wrap gap-6 px-10 justify-center pb-10">
      {products &&
        products.map((product: ProductCardProps) => (
          <ProductCard
            id={product.id}
            image={product.image}
            price={product.price}
            title={product.title}
            key={product.id}
          />
        ))}
    </section>
  );
};

export default HomeContainer;
