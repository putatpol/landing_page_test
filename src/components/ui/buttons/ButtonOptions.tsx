"use client";

import { LensesDto } from "@/interfaces/lenses.interface";
import icons from "@icons/index";
import Image from "next/image";
import React from "react";

const ButtonOptions = ({ lenses }: { lenses: LensesDto[] }) => {
  return (
    <div className="grid max-w-[1112px] mx-auto grid-cols-1 gap-4 bg-gray-50 sm:grid-cols-2 lg:grid-cols-3">
      {lenses.map((lens: LensesDto, index: number) => (
        <button
          key={index}
          className="btn-card btn group relative p-5 pr-0 text-left xl:px-[38px] xl:py-[33px]"
          onClick={() => console.log("เลือก lens")}
        >
          <div className="grid grid-cols-5 sm:grid-cols-1">
            <div className="sm-pr-0 col-span-4 border-r-2 pr-3 sm:border-r-0">
              <h3 className="font-mizolet mb-3 text-lg">{lens.title}</h3>
              <p className="font-yu-gothic text-sm leading-relaxed font-bold">
                {lens.description}
              </p>
              <p className="mt-1 space-x-2 font-semibold">
                <span className="text-xl">{lens.price}</span>
                <span className="font-mizolet !text-sx font-medium">税込</span>
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="btn-circle sm:absolute sm:top-auto sm:right-4 sm:bottom-4 sm:rotate-45">
                <Image src={icons.IconArrowWhite} alt="icon-arrow-white" />
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ButtonOptions;
