import React from "react";

const Footer = () => {
  return (
    <footer className="flex sticky bottom-0 justify-end *:h-[60px] *:w-[147px] lg:hidden z-30 text-sm font-mizolet">
      <button className="bg-white rounded-tl-[15px] border-2 border-b-0">店舗を探す</button>
      <button className="bg-black text-white">商品を探す</button>
    </footer>
  );
};

export default Footer;
