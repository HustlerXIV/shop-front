export type ProductType = {
  id?: number;
  productCode: string;
  productName: string;
  productPrice: number;
  amount?: number;
};

export interface StockType extends ProductType {
  product: ProductType;
  amount: number;
}
