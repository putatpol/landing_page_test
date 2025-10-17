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
        className="btn group md:grid rounded-xl border-2 bg-white p-5 hover:translate-y-0.5 hover:border-b-2 md:grid-cols-4 md:border-b-4 md:p-0"
      >
        <p className="font-mizolet md-text-lg col-span-3 mx-2 my-2 flex flex-col justify-center gap-3 p-3 text-start md:border-r md:px-12">
          {children}
        </p>
        <div className="btn-circle rotate-90 t justify-center flex">
          <Image src={Icon.IconArrowWhite} alt="icon-arrow-white" />
        </div>
      </button>
    </div>
  );
};

export default ButtonArrowSmall;
