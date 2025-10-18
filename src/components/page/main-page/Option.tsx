import ButtonOptions from "@/components/ui/buttons/ButtonOptions";
import { LensesDto } from "@/interfaces/lenses.interface";
import React from "react";

const Option = () => {
  const lenses: LensesDto[] = [
    {
      title: "超極薄レンズ",
      description:
        "「より薄く」「より軽く」を実現した世界最高屈折のプレミアムレンズ。目の大きさなどに影響する歪みを極限まで抑えることができます。",
      price: "+¥12,000",
    },
    {
      title: "PCレンズ",
      description:
        "スマホ・パソコンなど電子機器から出るブルーライトから眼を守るレンズ。度無しクリアの場合は、追加料金なしでお作りいただけます。",
      price: "+¥4,000",
    },
    {
      title: "カラーレンズ",
      description:
        "お好みのフレームと組み合わせることでファッション性を楽しんだり、サングラスとして使用したりできるレンズです。",
      price: "+¥4,000",
    },
    {
      title: "調光レンズ",
      description:
        "紫外線によってレンズカラーが変化！日差しが強くなる季節も、1本2役で荷物にならず持ち運びも便利。",
      price: "+¥6,000",
    },
    {
      title: "くもり止めコート",
      description:
        "表面に特殊なコーティングを施すことで、レンズを曇りにくくしクリアな視界を保ちます。マスクとメガネを併用される方ににおすすめ。",
      price: "+¥4,000",
    },
    {
      title: "傷防止コート",
      description:
        "「レンズの傷が気になる方」におすすめ！ブルーライトカット機能を搭載した、傷に強い特殊コーティング。",
      price: "+¥6,000",
    },
  ];
  return (
    <section>
      <div className="px-5 pb-20 md:pb-[140px] xl:px-[165px]">
        {/* -- Option Heading -- */}
        <div className="mb-[35px] flex flex-col items-center justify-center md:mb-[50px]">
          <h2 className="heading-red">Option</h2>
          <p className="font-mizolet text-sm md:text-xl">
            おすすめオプションレンズ
          </p>
        </div>

        <ButtonOptions lenses={lenses} />
      </div>
    </section>
  );
};

export default Option;
