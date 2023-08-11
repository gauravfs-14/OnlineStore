import { ProductCardProps } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";

const ProductCard = (props: ProductCardProps) => {
  return (
    <div className="w-64 p-4 shadow-lg flex flex-col gap-4 rounded-lg bg-white">
      <Link href={`/product/${props.id}`}>
        <div className="relative w-auto h-80">
          <Image
            src={props.image}
            alt={props.title}
            fill
            className="hover:scale-105 object-cover"
          />
        </div>
      </Link>
      <h2 className="font-semibold flex-1">{props.title}</h2>
      <p>$ {props.price}</p>
    </div>
  );
};

export default ProductCard;
