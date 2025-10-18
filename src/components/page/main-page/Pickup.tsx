"use client";

import ButtonArrowSmall from "@/components/ui/buttons/ButtonArrowSmall";
import TextBox from "@/components/ui/other/TextBox";
import React from "react";

const Pickup = () => {
  return (
    <section>
      <div className="mb-14 flex flex-col justify-center gap-1 md:mb-26 md:flex-row md:gap-10 md:px-[70px] lg:gap-40">
        {/* -- Pickup Heading -- */}
        <div className="mb-8 flex flex-col items-center justify-center md:mb-0 md:items-start">
          <h2 className="heading-red">pickup</h2>
          <p className="font-mizolet text-sm lg:text-xl">おすすめアイテム</p>
        </div>

        {/* -- Button Scroll -- */}
        <div className="flex items-center justify-center gap-5 px-5 *:flex md:items-stretch md:px-0">
          <ButtonArrowSmall idToScroll="purpost">目的から選ぶ</ButtonArrowSmall>
          <ButtonArrowSmall idToScroll="budget">予算から選ぶ</ButtonArrowSmall>
        </div>
      </div>

      <div className="mb-10 bg-white text-center md:mb-20">
        {/* -- Text Box purpost-- */}
        <div className="mb-4 flex justify-center">
          <div className="[&_p]:text-custom-red relative">
            <TextBox label="purpost" />
          </div>
        </div>
        <h3 className="font-mizolet text-[26px] md:text-[40px]">
          目的から選ぶ
        </h3>

        {/* -- Button Scroll hidden-- */}
        <div className="mt-8 *:flex flex items-center justify-center gap-5 px-5 md:hidden md:items-stretch md:px-0">
          <ButtonArrowSmall idToScroll="pickup-family">
            家族で
            <br />
            まとめ買い
          </ButtonArrowSmall>
          <ButtonArrowSmall idToScroll="pickup-daily">
            自分用に
            <br />
            複数買い
          </ButtonArrowSmall>
        </div>
      </div>
    </section>
  );
};

export default Pickup;
