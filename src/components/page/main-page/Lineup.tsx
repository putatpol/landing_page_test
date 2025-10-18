import ButtonArrowSmall from "@/components/ui/buttons/ButtonArrowSmall";
import TextBox from "@/components/ui/other/TextBox";
import React from "react";
import ProductLineup20k from "./product-lineup/ProductLineup20k";
import ProductLineup10k from "./product-lineup/ProductLineup10k";
import ProductLineup8k from "./product-lineup/ProductLineup8k";
import ButtonMoreProduct from "@/components/ui/buttons/ButtonMoreProduct";
import LineRiangleCenter from "@/components/ui/other/LineRiangleCenter";

const Lineup = () => {
  return (
    <section>
      <div className="py-20 md:px-[70px] md:py-[115px]">
        {/* -- Text Box Budget -- */}
        <div className="mb-10 bg-white text-center md:mb-20">
          <div className="mb-4 flex justify-center">
            <div className="[&_p]:text-custom-red relative">
              <TextBox label="budget" />
            </div>
          </div>
          <p className="font-mizolet text-[26px] md:text-[40px]">
            予算から選ぶ
          </p>
          <p className="font-mizolet text-[17px] md:text-[27px]">
            メガネ・サングラス
          </p>
        </div>

        {/* -- Button -- */}
        <div className="mx-auto mb-10 grid max-w-[1014px] grid-cols-3 justify-items-center gap-5 px-5 md:mb-[90px]">
          <ButtonArrowSmall idToScroll="price-20k">
            20,000円以上
          </ButtonArrowSmall>
          <ButtonArrowSmall idToScroll="price-10k">10,000円台</ButtonArrowSmall>
          <ButtonArrowSmall idToScroll="price-8k">8,000円以下</ButtonArrowSmall>
        </div>

        {/* -- Product -- */}
        <div className="space-y-5 md:space-y-20">
          {/* -- 20k -- */}
          <div>
            <div className="mb-7 flex justify-center">
              <h4 className="font-mizolet relative border-r-0 border-b-2 pb-10">
                <span className="price-yellow">20,000円</span>
                <span className="text-4 md:text-6">以上</span>
                <LineRiangleCenter />
              </h4>
            </div>
            <ProductLineup20k />
            <div className="mt-7 flex justify-center md:mt-14">
              <ButtonMoreProduct label="20,000円以上の商品を見る" />
            </div>
          </div>

          {/* -- 10k -- */}
          <div>
            <div className="mb-7 flex justify-center">
              <h4 className="font-mizolet relative border-r-0 border-b-2 pb-10">
                <span className="price-yellow">10,000円</span>
                <span className="text-4 md:text-6">以上</span>
                <LineRiangleCenter />
              </h4>
            </div>
            <ProductLineup10k />
            <div className="mt-7 flex justify-center md:mt-14">
              <ButtonMoreProduct label="10,000円台の商品を見る" />
            </div>
          </div>

          {/* -- 8k -- */}
          <div>
            <div className="mb-7 flex justify-center">
              <h4 className="font-mizolet relative border-r-0 border-b-2 pb-10">
                <span className="price-yellow">8,000円</span>
                <span className="text-4 md:text-6">以上</span>
                <LineRiangleCenter />
              </h4>
            </div>
            <ProductLineup8k />
            <div className="mt-7 flex justify-center md:mt-14">
              <ButtonMoreProduct label="8,000円以下の商品を見る" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lineup;
