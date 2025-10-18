import ProductItem from "@/components/ui/product/ProductItem";
import { ProductDto } from "@/interfaces/product.interface";
import React from "react";
import { getFamilyProducts } from "@/services/productService";

const ProductFamily = async () => {
  let products: ProductDto[] = [];

  try {
    products = await getFamilyProducts();
  } catch (err) {
    console.error("Failed to fetch daily products:", err);
  }
  return (
    <>
      {products.map((item: ProductDto) => (
        <ProductItem key={item.id} data={item} color="bg-custom-green" />
      ))}
    </>
  );
};

export default ProductFamily;
