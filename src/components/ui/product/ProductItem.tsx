import Image from "next/image";
import React from "react";
import ButtonWishlist from "../buttons/ButtonWishlist";
import { ProductDto } from "@/interfaces/product.interface";

interface Props {
  data: ProductDto;
  color?: string;
}

const ProductItem = ({ data, color }: Props) => {
   if (!data) return null; 
  return (
    <div className="flex flex-col items-center">
      {color && (
        <p className={`badge-custom order-first ${color}`}>{data.category}</p>
      )}
      <div className={`mt-4 text-center ${color ? "order-1" : "order-2"}`}>
        <b className="text-[18px] font-semibold">{data.collections}</b>
        <p className="text-sm font-medium">{data.model}</p>
      </div>
      <Image
        width={357}
        height={357}
        src={data.image}
        alt={`product-${data.model}`}
        className={` ${color ? "order-2" : "order-1"}`}
      />
      <p className="order-3 space-x-1 py-4">
        <span className="text-xl font-bold"> ¥{data.price.toLocaleString("en-US")}</span>
        <small className="text-xs">税込</small>
      </p>
      <div className="order-last flex gap-4 pb-1">
        <button type="button" className="btn btn-outline-lg font-semibold">
          online store
        </button>
        {color && <ButtonWishlist />}
      </div>
    </div>
  );
};

export default ProductItem;
