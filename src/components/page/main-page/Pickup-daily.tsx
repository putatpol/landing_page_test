import React from "react";
import MainImage from "@images/main-page";
import Image from "next/image";
import ProductItem from "@/components/ui/ProductItem";
import CardButtonArrow from "@/components/ui/cards/CardButtonArrow";
import ButtonArrowLarge from "@/components/ui/buttons/ButtonArrowLarge";
import TextBox from "@/components/ui/TextBox";

const PickupDaily = () => {
  return (
    <section id="pickup-daily" className="bg-custom-green-lighter">
      <div className="bg-custom-brown-lighter rounded-t-[70px] lg:rounded-t-[150px] *:lg:px-[70px]">
        {/* -- Family Image -- */}
        <div className="grid grid-cols-1 justify-center gap-10 pt-[136px] pb-20 lg:grid-cols-2 lg:pt-[237px] lg:pb-40">
          <div className="relative flex justify-center">
            <h1 className="absolute -top-18 text-[87px] font-black text-white uppercase lg:text-[146px]">
              daily
            </h1>
            <Image
              src={MainImage.ImageDaily}
              alt="family"
              className="z-10 px-5"
            />
          </div>
          <div className="mb-8 flex flex-col flex-wrap items-center justify-center gap-5 px-6 *:flex *:items-center *:justify-center lg:px-10">
            <div className="font-mizolet flex flex-col items-center gap-5 lg:items-start">
              <div className="flex flex-wrap items-center justify-center gap-1 text-xl lg:justify-start lg:text-[22px]">
                <p className="space-x-2 text-center leading-8 lg:text-start">
                  <span>日常使いで</span>
                  <span className="text-circle bg-black text-white">大</span>
                  <span className="text-circle bg-black text-white">活</span>
                  <span className="text-circle bg-black text-white">躍</span>
                </p>
              </div>

              <h4 className="bg-white p-2 text-2xl lg:text-4xl">
                肌馴染みのいいフレーム
              </h4>
              <p className="px-5 text-xs/6 md:px-20 lg:px-0 lg:text-sm">
                手元作業の多いオフィスワーク、スポーツ、ドライブなど、日常のシーンごとに複数のメガネを持っておくのもおすすめ。使用場面に適したメガネなら、目の負担を軽減し、より快適な視界を保つことができます。さらに、ファッションに合わせておしゃれを楽しんだり、仕事とプライベートの気持ちの切り替えをスムーズにする手助けに！
              </p>
            </div>
          </div>
        </div>

        {/* -- Product item -- */}
        <div className="mt-0 w-full justify-center px-5 md:mb-20 md:flex">
          <div className="grid grid-cols-1 gap-5 rounded-2xl bg-white *:mx-auto *:flex *:py-[35px] md:grid-cols-3 md:px-10">
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>

        {/* -- Option -- */}
        <div className="bg-custom-brown-light">
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
                <p className="font-mizolet text-md lg:text-lg">調光レンズ</p>
                <p className="font-yu-gothic text-xs font-bold lg:text-sm">
                  紫外線によってレンズカラーが変化！日差しが強くなる季節も、1本2役で荷物にならず持ち運びも便利。
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
                  ニュアンスカラーレンズ
                </p>
                <p className="font-yu-gothic text-xs font-bold lg:text-sm">
                  メガネをかけるだけで、目元を明るく、健康的な印象に！オフの日はもちろん忙しい朝のメイク代わりやコーデのアクセントに最適。
                </p>
                <p>
                  <span className="mr-1 text-xl font-bold">+ ¥4,000</span>{" "}
                  <small className="text-xs font-medium"> 税込</small>
                </p>
              </div>
            </ButtonArrowLarge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickupDaily;
