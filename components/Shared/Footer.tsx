import React from "react";
import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] py-8 md:py-20">
      <div className=" flex justify-between items-center gap-5 max-w-[1400px] mx-auto">
        <div className="text-white text-xl font-semibold h-full w-full grid grid-cols-6 gap-4 md:gap-0">
          <div className="md:w-[335px] w-full p-2 col-span-6 md:col-span-3 xl:col-span-2 mb-3 md:mb-0 md:pl-5">
            <h2 className="text-xl font-medium text-[#FFFFFF]">
              About Ecobazar
            </h2>
            <p className="text-sm font-normal text-[#808080] my-4">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className="flex md:flex-col md:items-start lg:flex-row lg:items-center items-center gap-2">
              <span className="text-white text-sm font-medium hover:border-b-[1.5px] border-[#20B526] pb-[2px]">
                <a href={`tel: +8801623939834`}>+8801623939834</a>
              </span>
              <span className="text-[#808080] text-base font-normal">or</span>
              <span className="text-white text-sm font-medium hover:border-b-[1.5px] border-[#20B526] pb-[2px]">
                <a href={`mailto:monerulmd5@gmail.com`}>monerulmd5@gmail.com</a>
              </span>
            </div>
          </div>
          <div className="p-2 col-span-3 lg:col-span-1 md:col-start-5 lg:col-start-4 xl:col-start-3 lg:-ml-10 xl:ml-0">
            <h2 className="text-xl font-medium text-[#FFFFFF]">My Account</h2>
            <p className="text-sm font-normal text-[#808080] my-4  hover:text-white  cursor-pointer ">
              Order History
            </p>
            <p className="text-sm font-normal text-[#808080] my-4 hover:text-white cursor-pointer ">
              My Account
            </p>
            <div className="text-sm font-normal text-[#808080] my-4 hover:text-white cursor-pointer ">
              Shoping Cart
            </div>
            <p className="text-sm font-normal text-[#808080] my-4 hover:text-white cursor-pointer ">
              Wishlist
            </p>
            <p className="text-sm font-normal text-[#808080] my-4 hover:text-white cursor-pointer ">
              Settings
            </p>
          </div>
          <div className="p-2 md:pl-5 col-span-3 lg:col-start-5 xl:col-start-4 xl:col-span-1 lg:ml-5">
            <h2 className="text-xl font-medium text-[#FFFFFF] ">Helps</h2>
            <p className="text-sm font-normal text-[#808080] my-4 hover:text-white cursor-pointer ">
              Contact
            </p>
            <p className="text-sm font-normal text-[#808080] my-4 hover:text-white cursor-pointer ">
              Faqs
            </p>

            <p className="text-sm font-normal text-[#808080] my-4 hover:text-white cursor-pointer ">
              Terms & Condition
            </p>
            <p className="text-sm font-normal text-[#808080] my-4 hover:text-white cursor-pointer ">
              Privacy Policy
            </p>
          </div>
          <div className="p-2 max-w-[150px] xl:max-w-full col-span-2 lg:col-span-1 md:col-start-5 lg:col-start-1 xl:col-start-5 md:pl-5">
            <h2 className="text-xl font-medium text-[#FFFFFF]">Proxy</h2>
            <p className="text-sm font-normal text-[#808080] my-4 hover:text-white cursor-pointer ">
              About
            </p>
            <p className="text-sm font-normal text-[#808080] my-4 hover:text-white cursor-pointer ">
              Shop
            </p>

            <p className="text-sm font-normal text-[#808080] my-4 hover:text-white cursor-pointer ">
              Product
            </p>
            <p className="text-sm font-normal text-[#808080] my-4 hover:text-white cursor-pointer ">
              Products Details
            </p>
            <p className="text-sm font-normal text-[#808080] my-4 hover:text-white cursor-pointer ">
              Track Order
            </p>
          </div>
          <div className="md:flex gap-2 items-start justify-center md:w-full col-span-4 md:col-span-6 md:mt-5 p-2 lg:col-start-2 lg:justify-start xl:col-start-6 xl:flex-col xl:mt-0">
            <div className="flex justify-center gap-[6px] items-center p-[10px] bg-[#333333] rounded-[6px] xl:w-full">
              <div>
                <FaApple size={28} />
              </div>
              <div>
                <p className="text-[11px] leading-3 font-normal text-[#B3B3B3]">
                  Download on the
                </p>
                <p className="text-base font-medium text-white">App Store</p>
              </div>
            </div>
            <div className="flex justify-center gap-[6px] items-center p-[10px] bg-[#333333] rounded-[6px] mt-2 md:mt-0 xl:w-full">
              <div>
                <IoLogoGooglePlaystore size={28} />
              </div>
              <div>
                <p className="text-[11px] leading-3 font-normal text-[#B3B3B3]">
                  Download on the
                </p>
                <p className="text-base font-medium text-white">App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
