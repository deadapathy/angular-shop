// Import the specific function from the correct path
import { getProducts } from "../../APIs/products";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  novelty: boolean;
  archive: boolean;
  link: string;
}

export const fetchProductData = async (): Promise<Product[]> => {
  const response = await getProducts();
  return response;
};
