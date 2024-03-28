import Image from "next/image";
import React from "react";

const Category = ({ title, image }: { title: string; image: string }) => {
  return (
    <div>
      <div className="w-[200px] group h-[220px] border border-[#E6E6E6] rounded-[5px] hover:border-[#2C742F] hover:shadow-lg">
        <Image
          src={image}
          alt="Category Image"
          width={190}
          height={130}
          quality={80}
          className="my-4"
        />
        <p className="text-[#1A1A1A] group-hover:text-[#3c742c] font-semibold text-[18px] text-center ">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Category;
