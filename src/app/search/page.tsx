"use client";

import HomeContainer from "@/components/HomeContainer";
import ProductCard from "@/components/ProductCard";
import { useGlobalContext } from "@/context/store";
import { ProductCardProps } from "@/types/Product";
import { useState } from "react";

const Search = () => {
  //access the global state
  const { products, isLoading } = useGlobalContext();

  //filter out products
  const [searchInput, setSearchInput] = useState<string>("");
  let pattern = new RegExp(searchInput, "i");
  const filteredProducts = products.filter(
    (p) =>
      p.title.match(pattern) ||
      p.description.match(pattern) ||
      p.category.match(pattern) ||
      p.price.toString().match(pattern)
  );

  //handle loading state
  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }
  return (
    <>
      <h1 className="text-center text-4xl text-primary font-bold my-10">
        Search
      </h1>
      <div className="flex justify-center mb-20 items-center">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border border-primary p-2 rounded-lg outline-primary-dark bg-transparent"
          placeholder="Search..."
        />
      </div>
      {searchInput === "" ? (
        <HomeContainer />
      ) : filteredProducts.length != 0 ? (
        <>
          <section className="flex flex-wrap gap-6 px-10 justify-center pb-10">
            {filteredProducts &&
              filteredProducts.map((product: ProductCardProps) => (
                <ProductCard
                  id={product.id}
                  image={product.image}
                  price={product.price}
                  title={product.title}
                  key={product.id}
                />
              ))}
          </section>
        </>
      ) : (
        <p className="text-center">No products found! Try other keywords.</p>
      )}
    </>
  );
};

export default Search;
