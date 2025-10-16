import Image from "next/image";
import React from "react";
import MainImage from "@images/main-page";

const MainSection = () => {
  return (
    <main className="mt-5 px-5 text-white md:mt-[50px] md:px-[70px]">
      <div className="bg-custom-red rounded-xl py-[50px] md:py-[86px]">
        <div className="flex flex-wrap justify-center gap-10">
          <div className="mb-8 flex flex-col flex-wrap items-center justify-center gap-5 px-10 *:flex *:items-center *:justify-center">
            <div className="flex flex-col gap-7">
              <Image src={MainImage.ImageMainLogo} alt="main-logo" />
            </div>
            <div className="mt-8 w-full gap-[10px] border-y-3 py-4">
              <span className="text-3xl md:text-[40px]">2024.12.22</span>
              <span className="font-mizolet bg-custom-green-dark size-11 rounded-full text-center text-[30px]">
                日
              </span>
              <span className="font-mizolet text-lg md:text-2xl">まで</span>
            </div>
          </div>
          <Image
            src={MainImage.ImageMainPersons}
            alt="main-persons"
            className="px-5"
          />
        </div>

        <div className="my-5 flex flex-col items-center justify-center text-center md:my-10">
          <Image
            src={MainImage.ImageMainTextLogo}
            alt="main-logo"
            className="p-8"
          />
          <div className="font-yu-gothic text-5 mt-0 flex flex-col flex-wrap justify-center text-center leading-10 md:mt-14 md:flex-row md:text-2xl">
            <b className="flex justify-center gap-2">
              <span className="flex gap-[2px]">
                {["ま", "と", "め", "買", "い"].map((char, idx) => (
                  <span key={idx} className="relative">
                    <span className="absolute -top-[1rem]">・</span>
                    <span>{char}</span>
                  </span>
                ))}
              </span>
              <span>がオトク！</span>
            </b>

            <b className="basis-full"></b>
            <b>家族・友達や恋人、</b>
            <b>自分買いでも複数本購入で、</b>
            <b>
              <span className="bg-custom-green-dark p-1">2本目以降半額。</span>
            </b>
          </div>
        </div>

        <div className="my-10 flex flex-col items-center justify-center gap-5 px-5 text-center lg:px-0 lg:text-start">
          <div className="rounded-3xl bg-white px-[21px] py-[34px] text-center text-black w-full lg:w-auto">
            <div className="font-yu-gothic *:block *:lg:inline">
              <b>例えば</b>
              <b>「12,000円」と「10,000円」の</b>
              <b>メガネをセットで購入する場合</b>
            </div>
            <div className="my-5 flex flex-col items-center justify-center gap-7 lg:flex-row">
              <div className="border-custom-red relative justify-self-end border-r-0 border-b-2 lg:border-r-2 lg:border-b-0 lg:pr-7">
                <Image src={MainImage.ImageMainExample} alt="main-example" />
                <div className="border-b-custom-red absolute -bottom-4 left-1/2 h-0 w-0 rotate-180 border-r-8 border-b-16 border-l-8 border-r-transparent border-l-transparent lg:top-1/2 lg:-right-4 lg:left-auto lg:-translate-y-1/2 lg:rotate-90" />
                <div className="absolute -bottom-3 left-1/2 h-0 w-0 rotate-180 border-r-8 border-b-16 border-l-8 border-r-transparent border-b-white border-l-transparent lg:top-1/2 lg:-right-3 lg:left-auto lg:-translate-y-1/2 lg:rotate-90" />
              </div>
              <div className="justify-self-start">
                <div className="flex flex-col items-center justify-center xl:flex-row [&_b]:text-xl [&_b]:lg:text-[20px]">
                  <b>2本目半額で</b>
                  <div className="text-custom-red flex items-center px-1">
                    <p className="pr-1 text-4xl font-bold lg:text-[40px]">
                      ¥5,000
                    </p>
                    <b className="font-yu-gothic">がお得に！</b>
                  </div>
                </div>

                <b className="font-yu-gothic">
                  <small>※お値段が低い商品からの割引となります。</small>
                </b>
              </div>
            </div>
          </div>
          <b className="text-center text-xl text-white lg:text-2xl">
            この機会に、みんなで一緒にメガネを購入しよう！
          </b>
        </div>

        <div className="my-10 items-center justify-center px-5 text-center text-black lg:px-0 lg:text-start">
          <div className="mx-auto grid grid-cols-1 rounded-3xl bg-white px-[21px] py-[34px] lg:w-3/5 lg:grid-cols-3">
            <div className="mx-auto my-auto">
              <h2 className="text-custom-red col-span-full text-[40px] font-bold uppercase [text-shadow:1px_1px_0_#000,_-1px_1px_0_#000,_1px_-1px_0_#000,_-1px_-1px_0_#000] lg:text-[65px]">
                note
              </h2>
              <p className="font-mizolet text-sm lg:text-xl">注意事項</p>
            </div>
            <ul className="font-yu-gothic col-span-2 ms-6 list-disc text-[13px] leading-[30px] tracking-[0.03em] *:font-bold lg:ms-0 lg:text-[14px]">
              <li>対象商品がなくなり次第終了です。</li>
              <li>表示価格が低額の商品からの割引です。</li>
              <li>
                2本目以降すべてのメガネ・サングラスが表示価格より半額となります。
              </li>
              <li>
                6,000円(税込)以上のOWNDAYSオリジナルメガネ・サングラスが対象です
              </li>
              <li>
                オプションレンズ・セール商品・コラボ商品・レンズ交換・雑貨・修理等は
                対象外です。
              </li>
              <li>他の割引との併用はできません。</li>
              <li>
                本キャンペーンは予告なく変更・終了させていただく場合がございます。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
