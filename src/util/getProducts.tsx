import { Product } from "@/types/Product";

export const getProducts = async () => {
  const products: Product[] = await fetch(
    "https://fakestoreapi.com/products/"
  ).then((res) => res.json());
  return products;
};
