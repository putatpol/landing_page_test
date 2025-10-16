import React from "react";
import MainImage from "@images/main-page";
import Image from "next/image";
import ProductItem from "@/components/ui/ProductItem";
import CardButtonArrow from "@/components/ui/cards/CardButtonArrow";
import ButtonArrowLarge from "@/components/ui/buttons/ButtonArrowLarge";
import TextBox from "@/components/ui/TextBox";

const PickupFamily = () => {
  return (
    <section
      id="pickup-family"
      className="bg-custom-green-lighter *:md:px-[70px]  rounded-t-[70px] md:rounded-t-[150px]"
    >
      {/* == family image == */}
      <div className="grid grid-cols-1 justify-center gap-10 pt-[136px] pb-40 md:grid-cols-2 md:pt-[237px]">
        <div className="relative flex justify-center">
          <h1 className="absolute -top-18 text-8xl font-black text-white uppercase md:text-9xl">
            family
          </h1>
          <Image
            src={MainImage.ImageFamily}
            alt="family"
            className="z-10 px-5"
          />
        </div>
        <div className="mb-8 flex flex-col flex-wrap items-center justify-center gap-5 px-10 *:flex *:items-center *:justify-center">
          <div className="flex flex-col gap-5">
            <div className="flex gap-1">
              <p>小さなお子様がいる家庭でも</p>
              <span className="bg-black text-white">安</span>
              <span className="bg-black text-white">心</span>
            </div>
            <h4 className="bg-white p-2 text-4xl">軽くて丈夫なフレーム</h4>
            <p>
              小さな子供がいるご家庭には、軽量で丈夫な樹脂素材のフレームが最適！行楽シーズンにあわせて家族でまとめて新調してみては？傷防止やUVカットの機能が搭載されたオプションレンズもおすすめ。
            </p>
          </div>
        </div>
      </div>

      {/* == product item == */}
      <div className="mt-0 w-full md:mb-20">
        <div className="grid grid-cols-1 rounded-2xl bg-white *:mx-auto *:flex *:py-[35px] md:grid-cols-3">
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>

      {/* == option == */}
      <div className="bg-custom-green-light">
        <div className="grid grid-cols-1 gap-4 px-5 py-20 lg:grid-cols-3 lg:px-0">
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

      {/* == button arrow == */}
      <CardButtonArrow />
    </section>
  );
};

export default PickupFamily;
