"use client";

import Container from "@/components/Layout/Continer";
import ProductCard from "@/components/ProductsCard/ProductCard";
import React, { useEffect, useState } from "react";
import { ProductType } from "@/utils/types";
import { useAddToCard } from "@/utils/UseCases/useAddToCard";
import Cart from "@/components/Cart/Cart";
import { checkStock, getAllProducts } from "@/app/our-products/action";

const OurProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const { addToCart } = useAddToCard();
  const getProductsFromAPI = async () => {
    const allProducts = await getAllProducts();
    if (allProducts) {
      setProducts(allProducts);
    }
  };

  const handleCardOnClick = async (payload: ProductType) => {
    const isOutOfStock = await checkStock(payload.productCode);
    if (!isOutOfStock) {
      alert("This product is out of stock");
      return;
    }

    addToCart(payload);
  };

  useEffect(() => {
    getProductsFromAPI();
  }, []);

  return (
    <Container>
      <div className="w-full flex justify-center">
        <div style={{ fontSize: "40px" }}>All Products</div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="flex gap-4 flex-wrap w-[70%] justify-center lg:justify-start">
          {products.map((product) => {
            const { productCode, productName, productPrice } = product;
            return (
              <div key={productCode}>
                <ProductCard
                  name={productName}
                  price={productPrice}
                  onClick={() => handleCardOnClick(product)}
                />
              </div>
            );
          })}
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </Container>
  );
};

export default OurProducts;
