import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
  return (
    <div>
      <div className="md:wrapper relative px-10">
        <div className="">
          <Image
            src="/assets/Images/Banner/banner.jpg"
            alt="Banner Image"
            width={1400}
            height={300}
          />
        </div>
        {/*   <div className="absolute ml-5 mr-5 top-0 left-0 bg-black/50 w-[1400px] h-full pl-32  pt-32  ">
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
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Banner;
