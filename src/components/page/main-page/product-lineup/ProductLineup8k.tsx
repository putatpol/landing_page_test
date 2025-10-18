import { ProductDto } from "@/interfaces/product.interface";
import React from "react";
import ProductSlider from "@/components/ui/product/ProductSlider";
import { getLineupProducts8k } from "@/services/productService";

const ProductLineup8k = async () => {
  let products: ProductDto[] = [];

  try {
    products = await getLineupProducts8k();
  } catch (err) {
    console.error("Failed to fetch daily products:", err);
  }
  return <ProductSlider products={products} />;
};

export default ProductLineup8k;
