import Image from "next/image";
import React from "react";

const Category2 = ({ title, icons }: { title: string; icons: string }) => {
  return (
    <div className="w-[200px] h-[210px] border border-[#e0dbdb] rounded-[5px] hover:shadow-[#2C742F] cursor-pointer hover:border-[#2C742F]">
      <div className="flex justify-center">
        <Image
          src={`${icons}`}
          alt="Category Icon"
          width={80}
          height={80}
          className="mt-8 "
        />
      </div>
      <div className="text-center mt-5">
        <h2 className="text-lg font-medium leading-7 text-[#1A1A1A]">
          {title}
        </h2>
        <p className="mt-[6px] led-[21px] text-sm font-normal text-[#808080">
          137 Products
        </p>
      </div>
    </div>
  );
};

export default Category2;
