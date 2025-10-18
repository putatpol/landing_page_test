import React from "react";
import MainImage from "@images/main-page";
import Image from "next/image";
import ButtonCardBanner from "@/components/ui/buttons/ButtonCardBanner";
import ButtonArrowLarge from "@/components/ui/buttons/ButtonArrowLarge";
import TextBox from "@/components/ui/other/TextBox";
import ProductFamily from "./product-lineup/ProductFamily";

const PickupFamily = () => {
  return (
    <section
      id="pickup-family"
      className="bg-custom-green-lighter rounded-t-[70px] lg:rounded-t-[150px] *:lg:px-[70px]"
    >
      {/* -- Family Image -- */}
      <div className="mx-auto grid max-w-[1150px] grid-cols-1 justify-center gap-6 pt-[136px] pb-10 lg:pb-20 lg:grid-cols-2 lg:pt-[237px]">
        <div className="relative flex justify-center">
          <h1 className="absolute -top-20 text-[87px] font-black text-white uppercase lg:text-[146px] xl:-top-24">
            family
          </h1>
          <Image
            src={MainImage.ImageFamily}
            alt="family"
            className="z-10 px-5"
          />
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 px-6 *:flex *:items-center *:justify-center lg:px-10">
          <div className="font-mizolet flex flex-col items-center gap-5 lg:items-start">
            <div className="flex flex-wrap items-center justify-center gap-1 text-xl lg:justify-start lg:text-[22px]">
              <p className="text-center leading-8 lg:text-start">
                小さなお子様がいる
                <span className="block space-x-2 md:inline">
                  <span>家庭でも</span>
                  <span className="text-circle bg-black text-white">安</span>
                  <span className="text-circle bg-black text-white">心</span>
                </span>
              </p>
            </div>

            <h4 className="bg-white p-2 text-2xl lg:text-4xl">
              軽くて丈夫なフレーム
            </h4>
            <p className="px-5 text-xs/6 leading-7 md:px-20 lg:px-0 lg:text-sm">
              小さな子供がいるご家庭には、軽量で丈夫な樹脂素材のフレームが最適！行楽シーズンにあわせて家族でまとめて新調してみては？傷防止やUVカットの機能が搭載されたオプションレンズもおすすめ。
            </p>
          </div>
        </div>
      </div>

      {/* -- Product item -- */}
      <div className="mt-0 w-full justify-center px-5 md:mb-20 md:flex">
        <div className="grid grid-cols-1 gap-5 rounded-2xl bg-white *:mx-auto *:flex *:py-[35px] md:grid-cols-3 md:px-10">
          <ProductFamily />
        </div>
      </div>

      {/* -- Option -- */}
      <div className="bg-custom-green-light">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-4 px-5 py-20 lg:grid-cols-3 lg:px-0">
          <div className="mb-5 flex flex-col items-center justify-center gap-5 lg:mb-0 lg:gap-10">
            <div className="flex">
              <div className="relative">
                <TextBox label="option" />
              </div>
            </div>
            <h3 className="font-mizolet text-3xl">おすすめオプション</h3>
          </div>
          <ButtonArrowLarge>
            <div className="space-y-3">
              <p className="font-mizolet text-md lg:text-lg">傷防止コート</p>
              <p className="font-yu-gothic text-xs font-bold lg:text-sm">
                「レンズの傷が気になる方」におすすめ！ブルーライトカット機能を搭載した、傷に強い特殊コーティング。
              </p>
              <p>
                <span className="mr-1 text-xl font-bold">+ ¥6,000</span>{" "}
                <small className="text-xs font-medium"> 税込</small>
              </p>
            </div>
          </ButtonArrowLarge>
          <ButtonArrowLarge>
            <div className="space-y-3">
              <p className="font-mizolet text-md lg:text-lg">
                UV・PCダブルカットレンズ
              </p>
              <p className="font-yu-gothic text-xs font-bold lg:text-sm">
                目と肌に影響を及ぼすUV-A・UV-Bと、パソコン・スマホ使用時に気になるブルーライトをカットします。
              </p>
              <p>
                <span className="mr-1 text-xl font-bold">+ ¥6,000</span>{" "}
                <small className="text-xs font-medium"> 税込</small>
              </p>
            </div>
          </ButtonArrowLarge>
        </div>
      </div>

      {/* -- Card Button -- */}
      <ButtonCardBanner />
    </section>
  );
};

export default PickupFamily;
