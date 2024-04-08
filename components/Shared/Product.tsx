"use client";
import { Salsa } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { BsCart } from "react-icons/bs";

const Product = ({
  id,
  image,
  name,
  price,
  discountPrice,
  sale,
}: {
  id: number;
  image: string;
  name: string;
  price: number;
  discountPrice?: number;
  sale?: number;
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="w-[170px] min-h-[265px] lg:w-[300px] flex flex-col justify-between relative hover:border-[#2C742F] group border border-[#E6E6E6]"
    >
      <div className=" flex justify-center">
        <Image
          src={image}
          alt={`Product ${id}`}
          width={150}
          height={130}
          quality={80}
        />
      </div>
      <div className="p-4 h-fulls mt-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-normal text-[14px] text-[#4D4D4D]">{name}</p>
            <p className="flex gap-1">
              <span className="text-base font-medium text-[#1A1A1A]">
                ${discountPrice || price}
              </span>
              {discountPrice && (
                <span className="line-through font-normal text-[#999999] text-base">
                  ${price}
                </span>
              )}
            </p>
          </div>
          <div className="w-[45px] h-[45px] flex justify-center items-center transition duration-500 bg-[#F2F2F2]/40 2xl:group-hover:bg-[#00B207] rounded-full absolute bottom-3 right-3 cursor-pointer">
            {/* <Image src="/assets/svg/Bag.svg" alt="" width={20} height={20} /> */}
            <BsCart className="2xl:group-hover:text-[#f5f5f5] transition duration-500" />
            {/* TODO: Change the icons when add to cart */}
            {/* <BsCartCheck /> */}
          </div>
        </div>
        <div className="mt-3">
          <p className="flex gap-[2px]">
            <Image src="/assets/svg/Star 3.svg" alt="" width={12} height={12} />
            <Image src="/assets/svg/Star 3.svg" alt="" width={12} height={12} />
            <Image src="/assets/svg/Star 3.svg" alt="" width={12} height={12} />
            <Image src="/assets/svg/Star 3.svg" alt="" width={12} height={12} />
            <Image src="/assets/svg/Star 5.svg" alt="" width={12} height={12} />
          </p>
        </div>
      </div>
      {hover && (
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <div className="w-10 h-10 bg-white/70 rounded-full cursor-pointer flex justify-center items-center">
            {" "}
            <Image
              src="/assets/svg/Heart.svg"
              alt="Heart Svg"
              width={20}
              height={20}
            />
          </div>
          <div className="w-10 h-10 bg-white/70 cursor-pointer rounded-full flex justify-center items-center">
            <Image
              src="/assets/svg/Eye 1.svg"
              alt="Eye Svg"
              width={20}
              height={20}
            />
          </div>
        </div>
      )}
      {discountPrice && sale && (
        <div className="w-20 h-7 absolute top-4 left-4 bg-[#EA4B48] text-white rounded-sm py-1 px-2 font-normal text-[14px]">
          <span>Sale</span>
          <span>{sale}%</span>
        </div>
      )}
    </div>
  );
};

export default Product;
