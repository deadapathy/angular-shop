import { $host } from ".";

export const getProducts = async () => {
  const { data } = await $host.get("product/products");
  return data;
};
