"use client";
import { Salsa } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";

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
  discountPrice: number;
  sale: number;
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="w-[350px] lg:w-[300px] relative hover:border-[#2C742F] group border border-[#E6E6E6]"
    >
      <div className=" flex justify-center">
        <Image
          src={image}
          alt={`Product ${id}`}
          width={250}
          height={230}
          quality={80}
          className="w-full"
        />
      </div>
      <div className="p-4">
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
          <div className="w-[45px] h-[45px] flex justify-center items-center  transition duration-500 bg-[#F2F2F2]/80 group-hover:bg-[#00B207] rounded-full">
            {/* <Image src="/assets/svg/Bag.svg" alt="" width={20} height={20} /> */}
            {hover ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 34 35"
                fill="#00B207"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Bag">
                  <path
                    id="Rectangle"
                    d="M11.3333 14.6667H7.08333L4.25 30.25H29.75L26.9167 14.6667H22.6667M11.3333 14.6667V10.4167C11.3333 7.28705 13.8704 4.75 17 4.75V4.75C20.1296 4.75 22.6667 7.28705 22.6667 10.4167V14.6667M11.3333 14.6667H22.6667M11.3333 14.6667V18.9167M22.6667 14.6667V18.9167"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 34 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Bag">
                  <path
                    id="Rectangle"
                    d="M11.3333 14.6667H7.08333L4.25 30.25H29.75L26.9167 14.6667H22.6667M11.3333 14.6667V10.4167C11.3333 7.28705 13.8704 4.75 17 4.75V4.75C20.1296 4.75 22.6667 7.28705 22.6667 10.4167V14.6667M11.3333 14.6667H22.6667M11.3333 14.6667V18.9167M22.6667 14.6667V18.9167"
                    stroke="#1A1A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            )}
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
          <div className="w-10 h-10 bg-white/70 rounded-full flex justify-center items-center">
            {" "}
            <Image
              src="/assets/svg/Heart.svg"
              alt="Heart Svg"
              width={20}
              height={20}
            />
          </div>
          <div className="w-10 h-10 bg-white/70 rounded-full flex justify-center items-center">
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
