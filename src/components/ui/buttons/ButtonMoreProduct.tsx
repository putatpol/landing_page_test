import icons from "@icons/index";
import Image from "next/image";
import React from "react";

const ButtonMoreProduct = ({ label }: { label: string }) => {
  return (
    <button
      type="button"
      className="btn group btn-outline-lg relative flex items-center gap-3 "
    >
      <span className="mr-10 font-semibold">{label}</span>
      <div className="btn-circle absolute right-2">
        <Image src={icons.IconArrowWhite} alt="icon-arrow-white" />
      </div>
    </button>
  );
};

export default ButtonMoreProduct;
