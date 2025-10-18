"use client";

import Image from "next/image";
import Icon from "@icons/index";

const ButtonArrowSmall = ({
  children,
  idToScroll,
}: {
  children: React.ReactNode;
  idToScroll: string;
}) => {
  const handleScrollClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => handleScrollClick(idToScroll)}
        className="btn group btn-card py-auto h-[128px] px-2 md:grid md:grid-cols-4 md:p-0"
      >
        <p className="font-mizolet col-span-3 mx-2 md:my-3 flex flex-col justify-center gap-3 p-3 text-center text-sm md:border-r md:px-4 md:text-start md:text-lg lg:px-6 xl:px-10">
          {children}
        </p>
        <div className="btn-circle mx-auto my-auto flex rotate-90 justify-center md:mr-3 lg:mr-5">
          <Image src={Icon.IconArrowWhite} alt="icon-arrow-white" />
        </div>
      </button>
    </div>
  );
};

export default ButtonArrowSmall;
