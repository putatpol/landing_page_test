import ProductItem from "@/components/ui/product/ProductItem";
import { ProductDto } from "@/interfaces/product.interface";
import React from "react";
import { getDailyProducts } from "@/services/productService";

const ProductDaily = async () => {
  let products: ProductDto[] = [];

  try {
    products = await getDailyProducts();
  } catch (err) {
    console.error("Failed to fetch daily products:", err);
  }
  return (
    <>
      {products.map((item: ProductDto) => (
        <ProductItem key={item.id} data={item} color="bg-custom-brown" />
      ))}
    </>
  );
};

export default ProductDaily;
