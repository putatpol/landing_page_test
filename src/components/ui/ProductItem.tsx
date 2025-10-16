import Image from "next/image";
import React from "react";
import MainImage from "@images/main-page";
import ButtonWishlist from "./buttons/ButtonWishlist";

const ProductItem = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="badge-green">Glasses</p>
      <div className="text-center mt-4">
        <b>AIR</b>
        <p>AU2101E-3A C3 カーキ</p>
      </div>
      <Image src={MainImage.ImageProductToplist1} alt="product"/>
      <p className="py-4 space-x-1">
        <span className="text-xl font-bold">¥11,000</span>
        <small className="text-xs">税込</small>
      </p>
      <div className="flex gap-4">
        <button type="button" className="btn btn-outline-lg">
          online store
        </button>
        <ButtonWishlist />
      </div>
    </div>
  );
};

export default ProductItem;
