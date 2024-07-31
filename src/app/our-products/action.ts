import { fetchData } from "@/utils/api";
import {
  GET,
  PRODUCT_ENDPOINT,
  PUT,
  STOCK_ENDPOINT,
  VALIDATION_ENDPOINT,
} from "@/utils/constants";
import { StockType } from "@/utils/types";

export const getAllProducts = async () => {
  try {
    const res = await fetchData({ endpoint: PRODUCT_ENDPOINT, method: GET });
    return res;
  } catch (error) {
    console.error("Error fetching:", error);
    return null;
  }
};

export const checkout = async (data: StockType[]) => {
  try {
    if (!data.length) {
      alert("Please add products to cart");
      return;
    }
    const mappedData = data.map((item: StockType) => {
      const { id, productCode, productName, productPrice, amount } = item;
      return {
        product: {
          id,
          productCode,
          productName,
          productPrice,
        },
        amount,
      };
    });

    const res = await fetchData({
      endpoint: STOCK_ENDPOINT,
      method: PUT,
      data: mappedData,
    });
    alert("Thank you for your order!");
    return res;
  } catch (error: any) {
    alert(error.response.data);
    return null;
  }
};

export const checkStock = async (code: string) => {
  try {
    const res = await fetchData({
      endpoint: `${VALIDATION_ENDPOINT}/${code}`,
      method: GET,
    });
    return res;
  } catch (error) {
    console.error("Error fetching:", error);
    return null;
  }
};
