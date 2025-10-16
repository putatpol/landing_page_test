import Image from "next/image";
import React from "react";
import MainImage from "@images/main-page";
import Icon from "@icons/index";
import TextBox from "../TextBox";

const CardButtonArrow = () => {
  return (
    <div className="flex justify-center px-5 py-20 lg:px-0">
      <div className="btn group relative flex flex-col gap-4 rounded-3xl bg-white px-8 py-10 uppercase hover:translate-y-0.5 lg:flex-row lg:px-15 xl:gap-7">
        <div className="absolute -top-5 right-8">
          <TextBox label={"check!"}/>
        </div>

        <Image src={MainImage.ImageTabletLabtop} alt="tablet-labtop" />
        <div className="font-mizolet my-auto mr-5 text-center lg:text-start">
          <p className="text-sm lg:text-base">
            お子さまの度数や保証書を
            <span className="bg-[#F8EF02]">一括管理！</span>
          </p>
          <p className="text-xl lg:text-3xl">親子で楽らくリンク機能</p>
        </div>
        <div className="btn-circle absolute right-2 bottom-2 rotate-45 lg:static lg:rotate-0">
          <Image src={Icon.IconArrowWhite} alt="icon-arrow-white" />
        </div>
      </div>
    </div>
  );
};

export default CardButtonArrow;
