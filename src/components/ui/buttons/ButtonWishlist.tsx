"use client";

import Image from "next/image";
import Icon from "@icons/index";
import { useState } from "react";

const ButtonWishlist = () => {
  const [active, isActive] = useState(false);

  return (
    <button type="button" onClick={() => isActive(!active)} className="btn">
      {active ? (
        <Image src={Icon.IconHeartActive} alt="icon-heart-active"></Image>
      ) : (
        <Image src={Icon.IconHeart} alt="icon-heart"></Image>
      )}
    </button>
  );
};

export default ButtonWishlist;
