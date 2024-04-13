import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
  return (
    <div>
      <div className="max-w-[1380px] mx-auto relative mt-0 xl:mt-[120px] mb-10 xl:mb-[120px]">
        <Image
          src="/assets/Images/Banner/banner.jpg"
          alt="Banner Image"
          width={2000}
          height={500}
          className="relative xl:rounded-lg xl:overflow-hidden"
        />
        <div className="absolute top-0 left-0 bg-black/50 w-full h-full pl-2 pt-2 md:pl-14 xl:pl-32 md:pt-14 xl:pt-28 wrapper xl:rounded-lg overflow-hidden">
          <p className="text-white font-medium text-sm md:text-base text-center md:text-start uppercase leading-5 tracking-[0.32px]">
            Summer Sale
          </p>
          <p className="md:mt-3 text-center md:text-start mt-0 h-14 md:h-[70px]">
            <span className="text-[#FF8A00] text-[30px] md:text-[56px] leading-[67px] font-semibold mr-1 md:mr-2">
              37%
            </span>{" "}
            <span className="text-[#ffffff] text-[30px] md:text-[56px] leading-[67px] font-semibold ml-2">
              OFF
            </span>
          </p>
          <p className="text-sm text-center md:text-start md:text-[16px] font-normal leading-6 text-[#ffffff]/70 mt-1 md:mt-4">
            Free on all your order, Free Shipping and 30 days money-back
            guarantee
          </p>
          <Button className="bg-[#00B207] mt-10">
            Shop Now <BsArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
{
  /* <div className="absolute top-0 left-0 bg-black/50 w-full h-full pl-32  pt-32  ">
          <p className="text-white font-medium text-base uppercase leading-5 tracking-[0.32px]">
            Summer Sale
          </p>
          <p className="mt-3 h-[70px]">
            <span className="text-[#FF8A00] text-[56px] leading-[67px] font-semibold">
              37%
            </span>{" "}
            <span className="text-[#ffffff] text-[56px] leading-[67px] font-semibold">
              OFF
            </span>
          </p>
          <p className="text-[16px] font-normal leading-6 text-[#ffffff]/70 mt-4">
            Free on all your order, Free Shipping and 30 days money-back
            guarantee
          </p>
          <Button className="bg-[#00B207]">
            Shop Now <BsArrowRight />
          </Button>
        </div> */
}
