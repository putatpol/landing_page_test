import { ProductDto } from "@/interfaces/product.interface";
import React from "react";
import ProductSlider from "@/components/ui/product/ProductSlider";
import { getLineupProducts10k } from "@/services/productService";

const ProductLineup10k = async () => {
  let products: ProductDto[] = [];

  try {
    products = await getLineupProducts10k();
  } catch (err) {
    console.error("Failed to fetch daily products:", err);
  }
  return <ProductSlider products={products} />;
};

export default ProductLineup10k;
