import { Banner } from "@/types";

const URL = `${process.env.PUBLIC_API_URL}/banners`;

const getBanners = async (id: string): Promise<Banner> => {
  const response = await fetch(`${URL}/${id}`);
  const data = response.json();
  return data;
};

export default getBanners;
