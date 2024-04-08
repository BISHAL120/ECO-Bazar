import Image from "next/image";
import React from "react";

const Category2 = ({ title, icons }: { title: string; icons: string }) => {
  return (
    <div className="w-[100px] h-[130px] md:w-[140px] md:h-[160px] xl:w-[170px] 2xl:w-[200px] border border-[#e0dbdb] rounded-[5px] hover:shadow-[#2C742F] cursor-pointer hover:border-[#2C742F]">
      <div className="flex justify-center">
        <Image
          src={`${icons}`}
          alt="Category Icon"
          width={80}
          height={80}
          className="md:mt-4 mt-2 w-10 h-10 md:w-14 md:h-14"
        />
      </div>
      <div className="text-center mt-6">
        <h2 className="text-sm md:text-lg pl-2 text-ellipsis overflow-hidden whitespace-nowrap text-start md:text-center font-medium md:leading-7 text-[#1A1A1A]">
          {title}
        </h2>
        <p className="mt-0 md:mt-[6px] text-sm font-normal text-[#808080">
          137 Products
        </p>
      </div>
    </div>
  );
};

export default Category2;
