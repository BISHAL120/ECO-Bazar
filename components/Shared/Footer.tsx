import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import {
  FaFacebookF,
  FaXTwitter,
  FaApple,
  FaCcApplePay,
  FaCcDiscover,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
} from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <div>
      <div className="bg-[#e8e6e6] md:py-10 py-5 px-2 md:px-3 flex justify-center items-center">
        <div className="max-w-[1380px] w-full flex flex-col md:grid grid-cols-6 xl:flex xl:flex-row xl:items-center pl-2 sm:pl-0 justify-between ">
          <div className="col-span-6 lg:col-span-3">
            <p className="text-[#1A1A1A] text-[18px] md:text-[24px] leading-[36px] font-semibold">
              Subcribe our Newsletter
            </p>
            <p className="sm:w-[450px] text-start text-[#999999] font-normal text-[12px] md:text-[14px]">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className="col-span-5 lg:col-start-4 md:w-[550px] lg:-ml-10">
            <div className="mt-5">
              <input
                className="w-[80%] sm:w-[500px] md:w-[450px] py-2 md:py-[14px] px-6 text-[12px] sm:text-[16px] font-normal sm:leading-[24px] text-[#808080] rounded-[46px] border border-[#c29b9b] outline-none"
                placeholder="Your email address"
                type="email"
              />
              <button className="-ml-[100px] bg-[#00B207] py-2 md:py-[14px] px-5 sm:px-10 rounded-[46px] text-[#FFFFFF] text-[12px] sm:text-base font-medium sm:font-semibold">
                Subscribe
              </button>
            </div>
          </div>
          <div className="lg:h-10 flex gap-4 sm:mt-0 sm:justify-center items-center mt-3 md:-ml-12 lg:col-end-7 lg:-mb-5 lg:mt-2 xl:mt-0 md:mt-3">
            <div className="w-7 sm:w-10 h-7 sm:h-10 border-[#808080] border rounded-full cursor-pointer p-2 group flex justify-center items-center hover:bg-[#00B207]">
              <FaFacebookF size={20} className="group-hover:text-white" />
            </div>
            <div className="w-7 sm:w-10 h-7 sm:h-10 border-[#808080] border rounded-full cursor-pointer p-2 group flex justify-center items-center hover:bg-[#00B207]">
              <FaXTwitter size={20} className="group-hover:text-white" />
            </div>
            <div className="w-7 sm:w-10 h-7 sm:h-10 border-[#808080] border rounded-full cursor-pointer p-2 group flex justify-center items-center hover:bg-[#00B207]">
              <FaInstagram size={20} className="group-hover:text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1A1A1A] py-8 md:py-20">
        <div className=" flex justify-between items-center gap-5 max-w-[1400px] mx-auto">
          <div className="text-white text-xl font-semibold h-full w-full grid grid-cols-6 gap-4 md:gap-0">
            <div className="md:w-[335px] w-full p-2 col-span-6 md:col-span-3 xl:col-span-2 mb-3 md:mb-0 md:pl-5">
              <h2 className="text-xl font-medium text-[#FFFFFF]">
                About Ecobazar
              </h2>
              <p className="text-sm font-normal text-[#808080] my-4">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>
              <div className="flex md:flex-col md:items-start lg:flex-row lg:items-center items-center gap-2">
                <span className="text-white text-sm font-medium hover:border-b-[1.5px] border-[#20B526] pb-[2px]">
                  <a href={`tel: +8801623939834`}>+8801623939834</a>
                </span>
                <span className="text-[#808080] text-base font-normal">or</span>
                <span className="text-white text-sm font-medium hover:border-b-[1.5px] border-[#20B526] pb-[2px] text-ellipsis overflow-hidden">
                  <a href={`mailto:monerulmd5@gmail.com`}>
                    monerulmd5@gmail.com
                  </a>
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
      <div className="bg-[#1A1A1A] ">
        <div className="pb-6 flex flex-col sm:flex-row justify-between items-center max-w-[1400px] mx-auto">
          <p className="text-[#808080] text-[14px] font-normal leading-[21px]">
            Ecobazar eCommerce © {Year}. All Rights Reserved
          </p>
          <div className="flex justify-center gap-3 items-center mt-3 sm:mt-0">
            <div className="cursor-pointer">
              <FaCcApplePay size={30} className="text-white" />
            </div>
            <div className="cursor-pointer">
              <FaCcVisa size={30} className="text-white" />
            </div>
            <div className="cursor-pointer">
              <FaCcDiscover size={30} className="text-white" />
            </div>
            <div className="cursor-pointer">
              <FaCcMastercard size={30} className="text-white" />
            </div>
            <div className="cursor-pointer">
              <FaCcPaypal size={30} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
