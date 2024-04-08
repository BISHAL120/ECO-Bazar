import Image from "next/image";
import React from "react";

const Category = ({ title, image }: { title: string; image: string }) => {
  return (
    <div>
      <div className="flex gap-5 items-center flex-col w-[100%] min-h-[200px] xl:w-[240px]  2xl:w-[220px] group border border-[#E6E6E6] rounded-[5px] hover:border-[#2C742F] hover:shadow-lg">
        <div className="h-1/2">
          <Image
            src={image}
            alt="Category Image"
            width={190}
            height={130}
            quality={80}
            className="my-2"
          />
        </div>
        <div className="h-1/2 flex justify-center items-center mb-3">
          <p className="text-[#1A1A1A] mt-[5px] md:mt-[20px] xl:mt-[25px] group-hover:text-[#3c742c] font-semibold text-[18px] md:text-[16px] text-center ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
