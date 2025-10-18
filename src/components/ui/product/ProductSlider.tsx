"use client";

import React from "react";
import { ProductDto } from "@/interfaces/product.interface";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ProductItem from "./ProductItem";
import Image from "next/image";
import icons from "@icons/index";

interface Props {
  products: ProductDto[];
}

const ProductSlider = ({ products }: Props) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1, spacing: 10 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 10 } },
      "(min-width: 1024px)": { slides: { perView: 4, spacing: 20 } },
    },
    loop: true,
  });

  return (
    <div className="relative">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {products.map((item) => (
          <div key={item.id} className="keen-slider__slide">
            <ProductItem data={item} />
          </div>
        ))}
      </div>

      {/* Prev/Next buttons */}
      <button
        className="btn-circle btn-prev_next left-3 md:-left-10 lg:hidden"
        onClick={() => slider?.current?.prev()}
      >
        <Image src={icons.IconArrow} alt="icon-arrow-white" className="rotate-180"/>
      </button>
      <button
        className="btn-circle btn-prev_next right-3 md:-right-10 lg:hidden"
        onClick={() => slider?.current?.next()}
      >
        <Image src={icons.IconArrow} alt="icon-arrow-white" />
      </button>
    </div>
  );
};

export default ProductSlider;
