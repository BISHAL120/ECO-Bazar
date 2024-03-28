import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Product from "./Product";
import { Products as products } from "@/Constant";

const Products = () => {
  return (
    <div className="mb-[50px]">
      <div className="md:wrapper">
        <div className="flex justify-between items-center m-4 mt-16 mb-6 md:mt-20 md:mb-8">
          <p className="text-[#1A1A1A] text-[24px] md:text-[32px] font-semibold">
            Popular Products
          </p>
          <Button
            type="button"
            variant="link"
            className="flex gap-2 text-xs font-medium text-[#00B207]"
          >
            View All{" "}
            <Image
              src="/assets/svg/right arrow.svg"
              alt="Right Svg"
              width={12}
              height={12}
            />
          </Button>
        </div>
        <div className="grid p-6 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
