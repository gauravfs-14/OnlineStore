"use client";

import { useGlobalContext } from "@/context/store";
import Link from "next/link";

const Navbar = () => {
  const { cart, isLoading } = useGlobalContext();
  const cartLength = cart.length;
  return (
    <>
      <header className="flex justify-between p-4 shadow-xl mb-4 lg:px-10 items-center fixed top-0 l-0 w-screen z-50 backdrop-blur-xl bg-white bg-opacity-50">
        <div>
          <Link href={"/"} className="font-bold text-lg text-primary-dark ">
            OnlineStore
          </Link>
        </div>
        <nav>
          <ul className="flex gap-2 lg:gap-4 items-center">
            <li>
              <Link href={"/search"}>Search</Link>
            </li>
            <li>
              <Link
                href={"/cart"}
                className="flex gap-2 items-center bg-primary-light p-2 rounded-lg hover:bg-transparent hover:text-black border-primary-light border"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="">{isLoading ? null : cartLength}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
