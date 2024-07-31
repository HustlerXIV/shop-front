"use client";

import Image from "next/image";
import React, { FC } from "react";
import Button from "../Common/Button";
import { MOCK_IMAGE } from "@/utils/constants";

interface ProductCardProp {
  name: string;
  price: number;
  onClick: () => void;
}

const ProductCard: FC<ProductCardProp> = ({
  name = "",
  price = 0,
  onClick,
}) => {
  return (
    <div className="w-[250px] h-[300px] bg-white rounded-md p-4 flex flex-col gap-4 items-center justify-between shadow-lg">
      <Image alt="" width={100} height={100} src={MOCK_IMAGE} />
      <div className="flex items-center flex-col">
        <div className="truncate w-[150px] text-center">{name}</div>
        <div>{price} THB</div>
      </div>
      <div className="flex">
        <Button label="Add to cart" onClick={onClick} />
      </div>
    </div>
  );
};

export default ProductCard;
