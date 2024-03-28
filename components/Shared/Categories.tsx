import React from "react";
import { Button } from "../ui/button";
import { Categories as categories } from "@/Constant";
import Category from "./Category";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="mb-[50px]">
      <div className="wrapper">
        <div className="flex justify-between items-center mt-20 mb-8">
          <p className="text-[#1A1A1A] text-[32px] font-semibold">
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
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-2 gap-6">
          {categories.map((category) => (
            <Category key={category.href} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
