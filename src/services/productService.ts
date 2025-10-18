import { ProductDto } from "@/interfaces/product.interface";
import dataDaily from "@/mocks/mock-glasses-daily.json";
import dataFamily from "@/mocks/mock-glasses-daily.json";
import dataLineup20k from "@/mocks/mock-glasses-20k.json";
import dataLineup10k from "@/mocks/mock-glasses-10k.json";
import dataLineup8k from "@/mocks/mock-glasses-8k.json";

export const getDailyProducts = async (): Promise<ProductDto[]> => {
  // logic fetch api
  return dataDaily as ProductDto[];
};

export const getFamilyProducts = async (): Promise<ProductDto[]> => {
  // logic fetch api
  return dataFamily as ProductDto[];
};

export const getLineupProducts20k = async (): Promise<ProductDto[]> => {
  // logic fetch api
  return dataLineup20k as ProductDto[];
};

export const getLineupProducts10k = async (): Promise<ProductDto[]> => {
  // logic fetch api
  return dataLineup10k as ProductDto[];
};

export const getLineupProducts8k = async (): Promise<ProductDto[]> => {
  // logic fetch api
  return dataLineup8k as ProductDto[];
};
