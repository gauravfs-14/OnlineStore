"use client";

import { getProducts } from "@/util/getProducts";
import { Product } from "@/types/Product";
import { useQuery } from "@tanstack/react-query";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

interface CartProps {
  product: Product;
  value: number;
}

interface ContextProps {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  isLoading: boolean;
  cart: CartProps[];
  setCart: Dispatch<SetStateAction<CartProps[]>>;
}

const GlobalContext = createContext<ContextProps>({
  products: [],
  setProducts: (): Product[] => [],
  isLoading: false,
  cart: [],
  setCart: (): CartProps[] => [],
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const [products, setProducts] = useState<[] | Product[]>([]);
  const storedCart =
    typeof window !== "undefined" ? localStorage.getItem("cart") : null;
  const initialCart = storedCart ? JSON.parse(storedCart) : [];
  const [cart, setCart] = useState<CartProps[]>(initialCart);
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  return (
    <GlobalContext.Provider
      value={{
        products,
        setProducts,
        isLoading,
        cart,
        setCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
