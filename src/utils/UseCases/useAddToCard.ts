import { create } from "zustand";
import { ProductType } from "../types";

interface AddToCartSlice {
  cartItems: any;
  addToCart: (data: ProductType) => void;
  reduceItem: (productCode: string) => void;
  clearCart: () => void;
}

export const useAddToCard = create<AddToCartSlice>((set) => {
  return {
    cartItems: [],
    addToCart: (data: ProductType) =>
      set((state) => {
        const { productCode } = data ?? {};
        const findDuplicatedProduct = state.cartItems.find(
          (item: { productCode: string }) => item.productCode === productCode
        );
        const filteredProduct = state.cartItems.filter(
          (item: any) => item.productCode !== data.productCode
        );

        if (findDuplicatedProduct) {
          return {
            cartItems: [
              ...filteredProduct,
              {
                ...findDuplicatedProduct,
                amount: findDuplicatedProduct.amount + 1,
              },
            ],
          };
        }
        return {
          cartItems: [...state.cartItems, { ...data, amount: 1 }],
        };
      }),
    reduceItem: (productCode: string) =>
      set((state) => {
        const findDuplicatedProduct = state.cartItems.find(
          (item: { productCode: string }) => item.productCode == productCode
        );
        const filteredProduct = state.cartItems.filter(
          (item: any) => item.productCode !== productCode
        );

        if (findDuplicatedProduct.amount <= 1) {
          return {
            cartItems: filteredProduct,
          };
        }
        return {
          cartItems: [
            ...filteredProduct,
            {
              ...findDuplicatedProduct,
              amount: findDuplicatedProduct.amount - 1,
            },
          ],
        };
      }),
    clearCart: () =>
      set(() => {
        return {
          cartItems: [],
        };
      }),
  };
});
