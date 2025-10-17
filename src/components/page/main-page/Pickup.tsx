"use client";

import ButtonArrowSmall from "@/components/ui/buttons/ButtonArrowSmall";
import TextBox from "@/components/ui/TextBox";
import React from "react";

const Pickup = () => {
  return (
    <section>
      <div className="mb-14 flex flex-col justify-center gap-1 md:mb-26 md:flex-row md:gap-10 md:px-[70px] lg:gap-40">
        <div className="mb-8 flex flex-col items-center justify-center md:mb-0 md:items-start">
          <h2 className="text-custom-red col-span-full text-[40px] font-bold uppercase [text-shadow:1px_1px_0_#000,_-1px_1px_0_#000,_1px_-1px_0_#000,_-1px_-1px_0_#000] lg:text-[65px]">
            pickup
          </h2>
          <p className="font-mizolet text-sm lg:text-xl">おすすめアイテム</p>
        </div>

        <div className="grid grid-cols-1 items-center gap-5 *:flex *:justify-center md:grid-cols-2 md:items-stretch">
          <ButtonArrowSmall idToScroll="pickup-family">
            目的から選ぶ
          </ButtonArrowSmall>
          <ButtonArrowSmall idToScroll="pickup-daily">
            予算から選ぶ
          </ButtonArrowSmall>
        </div>
      </div>

      <div className="mb-10 space-y-8 bg-white text-center md:mb-20">
        <div className="flex justify-center">
          <div className="[&_p]:text-custom-red relative">
            <TextBox label="purpost" />
          </div>
        </div>
        <h3 className="font-mizolet text-4xl">目的から選ぶ</h3>
      </div>
    </section>
  );
};

export default Pickup;
