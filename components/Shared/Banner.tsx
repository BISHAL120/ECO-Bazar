import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { BsArrowRight } from "react-icons/bs";
import { url } from "inspector";

const Banner = () => {
  return (
    <div className="md:wrapper">
      <div
        style={{ backgroundImage: "url('/assets/Images/Banner/banner.jpg')" }}
        className=" h-auto mx-auto relative mt-5 mb-10 bg-cover bg-center md:rounded-lg md:overflow-hidden md:mx-5"
      >
        <div className="py-5 bg-black/50 w-full h-full xl:rounded-lg overflow-hidden">
          <div className="h-full w-full flex flex-col items-center justify-center md:items-start md:pl-[10%]">
            <p className="w-full pb-3 text-white font-normal md:font-medium text-sm md:text-base text-center md:text-start uppercase md:leading-5 md:tracking-[0.32px]">
              Summer Sale
            </p>
            <p className="md:mt-3 text-center md:text-start mt-0 flex items-center h-[45px] md:h-auto">
              <span className="text-[#FF8A00] text-[30px] md:text-[56px] leading-[67px] font-semibold mr-1 md:mr-2">
                37%
              </span>{" "}
              <span className="text-[#ffffff] text-[30px] md:text-[56px] leading-[67px] font-semibold ml-2">
                OFF
              </span>
            </p>
            <p className="text-sm text-center md:text-start md:text-[16px] font-normal md:leading-6 text-[#ffffff]/70 mt-1 md:mt-4">
              Free on all your order, Free Shipping and 30 days money-back
              guarantee
            </p>
            <div className="">
              <Button className="bg-[#00B207] mt-5 md:mt-10">
                Shop Now <BsArrowRight />
              </Button>
            </div>
          </div>
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
