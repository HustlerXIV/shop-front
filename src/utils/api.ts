import axiosInstance from "@/middleware/axiosInstance";
import { AxiosResponse, Method } from "axios";

const BASE_URL = "http://localhost:5128/api";

type FetchDataOptions = {
  endpoint: string;
  method: Method;
  data?: any;
};

export const fetchData = async ({
  endpoint,
  method,
  data,
}: FetchDataOptions): Promise<any> => {
  try {
    const response: AxiosResponse = await axiosInstance({
      method,
      url: `${BASE_URL}/${endpoint}`,
      data,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
