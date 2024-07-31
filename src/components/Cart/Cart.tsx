import { ProductType } from "@/utils/types";
import { useAddToCard } from "@/utils/UseCases/useAddToCard";
import React from "react";
import Button from "../Common/Button";
import { checkout } from "@/app/our-products/action";

const Cart = () => {
  const { cartItems, reduceItem, addToCart, clearCart } = useAddToCard();
  const sortedCartItems = cartItems.sort(function (
    a: ProductType,
    b: ProductType
  ) {
    if (a.productName < b.productName) {
      return -1;
    }
    if (a.productName > b.productName) {
      return 1;
    }
    return 0;
  });

  let totalPrice: number = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const amount = cartItems[i].amount;
    if (amount > 0) {
      totalPrice += cartItems[i].productPrice * amount;
    } else {
      totalPrice += cartItems[i].productPrice;
    }
  }

  const handleCheckout = () => {
    checkout(cartItems);
    clearCart();
  };

  return (
    <div className="w-[300px] bg-white p-4 rounded-md shadow-lg">
      <div className="flex flex-col gap-2">
        <div className="w-full text-center">Cart</div>
        {sortedCartItems.map((item: ProductType) => (
          <div key={item.productCode} className="flex justify-between">
            <div>{item.productName}</div>
            <div className="flex gap-2 items-center">
              <button onClick={() => addToCart(item)}>+</button>
              <div className="w-[20px] flex justify-center">{item.amount}</div>
              <button onClick={() => reduceItem(item.productCode)}>-</button>
            </div>
          </div>
        ))}
      </div>
      {sortedCartItems.length <= 0 ? (
        <div className="w-full text-center">Empty</div>
      ) : (
        <div className="flex items-center gap-2 mt-10">
          Total: {totalPrice} THB
        </div>
      )}
      <div className="flex gap-2 justify-center w-full mt-5">
        <Button label="Checkout" onClick={() => handleCheckout()} />
        <Button label="Clear" onClick={() => clearCart()} danger />
      </div>
    </div>
  );
};

export default Cart;
