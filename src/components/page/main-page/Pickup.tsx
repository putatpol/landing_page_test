"use client";

import TextBox from "@/components/ui/TextBox";
import React from "react";

const Pickup = () => {
  const handleScrollClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section>
      <div className="mb-14 flex flex-col justify-center md:mb-26 md:flex-row md:gap-40 md:px-[70px]">
        <div className="mb-8 flex flex-col items-center justify-center md:mb-0 md:items-start">
          <h2 className="text-custom-red col-span-full text-[40px] font-bold uppercase [text-shadow:1px_1px_0_#000,_-1px_1px_0_#000,_1px_-1px_0_#000,_-1px_-1px_0_#000] lg:text-[65px]">
            pickup
          </h2>
          <p className="font-mizolet text-sm lg:text-xl">おすすめアイテム</p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => handleScrollClick("pickup-family")}
              className="h-[128px] w-[147px] border bg-white md:h-[123px] md:w-[328px]"
            >
              <p>目的から選ぶ</p>
            </button>
          </div>
          <div className="flex justify-start">
            <button
              type="button"
              onClick={() => handleScrollClick("pickup-daily")}
              className="h-[128px] w-[147px] border bg-white md:h-[123px] md:w-[328px]"
            >
              <p>予算から選ぶ</p>
            </button>
          </div>
        </div>
      </div>

      <div className="text-center space-y-8 mb-10 md:mb-20">
        <div className="flex justify-center">
          <div className="relative [&_p]:text-custom-red">
            <TextBox label="purpost" />
          </div>
        </div>
        <h3 className="font-mizolet text-4xl">目的から選ぶ</h3>
      </div>
    </section>
  );
};

export default Pickup;
