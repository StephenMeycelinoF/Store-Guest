import { Category } from "@/types";

const URL = `${process.env.PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category[]> => {
  const response = await fetch(`${URL}/${id}`);
  const data = response.json();
  return data;
};

export default getCategory;
