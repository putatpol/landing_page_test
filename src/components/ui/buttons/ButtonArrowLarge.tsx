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
      className="btn group btn-card grid grid-cols-4 px-2"
    >
      <div className="col-span-3 my-4 flex flex-col justify-center gap-3 border-r-2 px-3 py-5 text-start md:px-6">
        {children}
      </div>
      <div className="btn-circle mx-auto my-auto">
        <Image src={Icon.IconArrowWhite} alt="icon-arrow-white" />
      </div>
    </button>
  );
};

export default ButtonArrowLarge;
