import React from "react";
import { Button } from "../ui/button";
import { Categories as categories } from "@/Constant";
import Category from "./Category";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="mb-[50px]">
      <div className="md:wrapper">
        <div className="flex justify-between items-center m-4 mt-16 mb-6 md:mt-20 md:mb-8">
          <p className="text-[#1A1A1A] text-[24px] md:text-[32px] font-semibold">
            Popular Categories
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
        <div className="grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-2 gap-3 md:gap-6">
          {categories.map((category) => (
            <Category key={category.href} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
