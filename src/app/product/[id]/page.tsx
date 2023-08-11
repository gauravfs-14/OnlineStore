"use client";

import { useGlobalContext } from "@/context/store";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductPage = ({ params }: { params: { id: number } }) => {
  //access the global state
  const { products, isLoading, cart, setCart } = useGlobalContext();

  //get single product
  const product = products.find((product) => product.id == params.id);
  const [value, setValue] = useState(1);

  //handle timeout
  const [timeout, settimeout] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      settimeout(true);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  //handle loading and error state
  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }
  if (!product) {
    if (timeout) {
      return <p className="text-center">Not Found</p>;
    } else {
      return <p className="text-center">Loading...</p>;
    }
  }

  const addToCart = () => {
    const updatedCart = [...cart, { product, value }];
    setCart(updatedCart);
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.alert("Added to cart successfully!");
  };

  return (
    <main className="container flex flex-wrap justify-center m-auto gap-10 my-20">
      <div className="w-full relative md:w-1/2 aspect-square overflow-hidden rounded-lg shadow-2xl">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover hover:scale-105"
        />
      </div>
      <div className="w-full md:w-1/3 flex flex-col gap-2 items-start ">
        <p className="text-primary ">{product.category} &gt;&gt;</p>
        <h1 className="font-bold text-xl mb-4">{product.title}</h1>
        <p className="">{product.description}</p>
        <p className="font-extrabold text-2xl mt-4">$ {product.price}</p>
        <div className="flex items-center mt-4 gap-4">
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
            className="border border-primary-dark rounded-lg w-20 p-2"
            min={1}
            max={10}
          />
          {cart.filter((i) => i.product.id === product.id).length === 0 ? (
            <button
              className="bg-primary-dark text-white rounded-lg p-2 shadow border border-primary-dark hover:bg-transparent hover:text-primary-dark"
              onClick={addToCart}
            >
              Add To Cart
            </button>
          ) : (
            <button
              className="bg-primary-dark text-white rounded-lg p-2 shadow border border-primary-dark hover:bg-transparent hover:text-primary-dark cursor-not-allowed"
              onClick={() => {}}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
