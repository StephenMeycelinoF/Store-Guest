import { Product } from "@/types";

const URL = `${process.env.PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${URL}/${id}`);
  const data = response.json();
  return data;
};

export default getProduct;
