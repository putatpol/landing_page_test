import { ProductDto } from "@/interfaces/product.interface";
import React from "react";
import ProductSlider from "@/components/ui/product/ProductSlider";
import { getLineupProducts20k } from "@/services/productService";

const ProductLineup20k = async () => {
  let products: ProductDto[] = [];

  try {
    products = await getLineupProducts20k();
  } catch (err) {
    console.error("Failed to fetch daily products:", err);
  }
  return <ProductSlider products={products} />;
};

export default ProductLineup20k;
