"use client";

import Image from "next/image";
import Icon from "@icons/index";

const ButtonArrowLarge = ({ children }: { children: React.ReactNode }) => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="btn group grid grid-cols-4 rounded-xl border-2 border-b-4 px-2 hover:border-b-2 bg-white hover:translate-y-0.5"
    >
      <div className="col-span-3 py-5 my-4 flex flex-col justify-center gap-3 border-r px-3 md:px-6 text-start">
        {children}
      </div>
      <div className="btn-circle">
        <Image src={Icon.IconArrowWhite} alt="icon-arrow-white" />
      </div>
    </button>
  );
};

export default ButtonArrowLarge;
