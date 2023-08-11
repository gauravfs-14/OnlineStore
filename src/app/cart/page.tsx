"use client";

import { useGlobalContext } from "@/context/store";
import Link from "next/link";
const Cart = () => {
  // access the global state
  const { cart, setCart, isLoading } = useGlobalContext();

  const deleteCartItem = (pid: number) => {
    const updatedCart = cart.filter((p) => p.product.id !== pid);
    setCart(updatedCart);
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // hold rendering page until the data is loaded
  if (typeof window === "undefined" || isLoading) {
    return null;
  }
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {cart && cart.length > 0 ? (
        cart.map((p) => (
          <div
            className="py-10 px-10 flex gap-4 bg-white rounded-lg shadow-lg w-[90%] lg:w-[80%]"
            key={p.product.id}
          >
            <div className="flex-1 flex flex-col gap-4 justify-center">
              <Link href={`/product/${p.product.id}`}>
                <h2 className="font-bold text-2xl">
                  <span className="bg-primary-light py-2 px-4 rounded-full aspect-square text-xl text-black">
                    {p.value}
                  </span>{" "}
                  {p.product.title}
                </h2>
              </Link>
              <p>$ {p.product.price * p.value}</p>
            </div>
            <button onClick={() => deleteCartItem(p.product.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))
      ) : (
        <p className="text-center">No Products in Cart</p>
      )}
      <button className="bg-primary-dark text-white py-2 px-4 ml-auto mr-[5%] lg:mr-[10%] rounded-lg shadow-lg mt-4 border border-primary-dark hover:bg-transparent hover:text-primary-dark">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
