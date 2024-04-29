import React from "react";
import Image from "next/image";
import Link from "next/link";
import MapIcon from "@/public/assets/svg/Map Pin.svg";
import MobileNavbar from "@/components/Shared/MobileNavbar";
import { Navbar } from "@/components/Shared/Navbar";
import { CiCircleRemove } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div>
      {/* Top Stripe Start Fro Here */}
      <div className="hidden md:flex w-full md:mt-2 py-2 border-[gray]/40  border-b ">
        <div className="wrapper flex items-center justify-between">
          <div className="flex items-start flex-col md:flex-row gap-2 text-[12px] font-normal leading-5 h-[20px] md:h-[30px] cursor-pointer">
            <div className="md:flex items-center gap-2">
              <Image src={MapIcon} width={17} height={20} alt="Location Svg" />
              <Link
                target="_blank"
                href="https://maps.app.goo.gl/t7yWHDXfKEfwN2c3A"
              >
                Store Location: IT Park, Jessore 7400, Jessore bangladesh
              </Link>
            </div>
          </div>
          <div className="flex items-center mb-1 text-[12px] font-normal leading-2">
            <Link className="cursor-pointer" href="/signin">
              Sign In
            </Link>
            <p className="mx-2">/</p>
            <Link className="cursor-pointer" href="/signin">
              Sign In
            </Link>
          </div>
        </div>
      </div>
      {/* Top Stripe Ends Here */}
      {/* Logo and Search Start From Here  */}
      <div>
        <div className="wrapper py-2 md:py-5">
          <div className="flex justify-between items-center">
            <Link href="/">
              <div className="flex items-center gap-3 ">
                <Image
                  src="/assets/svg/plant 1.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="w-7 md:w-[40px]"
                />
                <p className="md:text-4xl text-xl font-medium">Ecobazar</p>
              </div>
            </Link>

            <div className="hidden lg:flex  ">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="py-[17px] pl-12 pr-[18px] w-[400px] border-r-0 border-t border-b border-l rounded-e-none border-gray-300 rounded-lg focus:outline-none "
                />
                <Image
                  src="/assets/svg/Search.svg"
                  alt="Right Svg"
                  width={20}
                  height={20}
                  className="absolute top-[8px] left-[6px] mt-3 ml-3 text-gray-500"
                />
              </div>
              <button className="bg-[#00B207] text-white px-[24px] py-[12px] border0 rounded-s-none rounded-e-md ">
                Search
              </button>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <Sheet>
                  <SheetTrigger>
                    <Image
                      src="/assets/svg/Heart.svg"
                      alt="Wish-List"
                      width={30}
                      height={30}
                      className="cursor-pointer"
                    />
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className="text-[20px] text-start font-medium text-[#1A1A1A]">
                        My Wishlist (4)
                      </SheetTitle>
                    </SheetHeader>

                    {/* className={classNames('mb-4', {
                        'mb-0': index === items.length - 1 */}

                    <div className="flex flex-col justify-between h-full">
                      <div className="mt-10 overflow-scroll overflow-x-hidden no-scrollBar">
                        <div className="flex justify-between items-center mb-1 border-b border-[#E6E6E6]">
                          <div className="flex justify-start items-center gap-2">
                            <div className="bg-white">
                              <Image
                                src="/assets/Images/Products/Image (1).png"
                                alt="Product Image"
                                width={120}
                                height={100}
                              />
                            </div>
                            <div>
                              <p className="text-[14px] leading-[21px] text-[#1A1A1A] font-normal text-start">
                                Fresh Indian Orange
                              </p>
                              <p className="flex items-center justify-start gap-2">
                                <span className="text-[#1A1A1A] text-[14px] font-semibold leading-[16.8px]">
                                  12.00
                                </span>{" "}
                                /{" "}
                                <span className="text-[14px] font-normal leading-[21px] text-[#808080]">
                                  1 kg
                                </span>{" "}
                              </p>
                            </div>
                          </div>
                          <div className="cursor-pointer">
                            <MdAddShoppingCart size={25} />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mb-1 border-b border-[#E6E6E6]">
                          <div className="flex justify-start items-center gap-2">
                            <div className="bg-white">
                              <Image
                                src="/assets/Images/Products/Image.png"
                                alt="Product Image"
                                width={120}
                                height={100}
                              />
                            </div>
                            <div>
                              <p className="text-[14px] leading-[21px] text-[#1A1A1A] font-normal text-start">
                                Fresh Indian Orange
                              </p>
                              <p className="flex items-center justify-start gap-2">
                                <span className="text-[14px] font-normal leading-[21px] text-[#808080]">
                                  1 kg
                                </span>{" "}
                                /{" "}
                                <span className="text-[#1A1A1A] text-[14px] font-semibold leading-[16.8px]">
                                  12.00
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="cursor-pointer">
                            <MdAddShoppingCart size={25} />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mb-1 border-b border-[#E6E6E6]">
                          <div className="flex justify-start items-center gap-2">
                            <div className="bg-white">
                              <Image
                                src="/assets/Images/Products/Image (2).png"
                                alt="Product Image"
                                width={120}
                                height={100}
                              />
                            </div>
                            <div>
                              <p className="text-[14px] leading-[21px] text-[#1A1A1A] font-normal text-start">
                                Fresh Indian Orange
                              </p>
                              <p className="flex items-center justify-start gap-2">
                                <span className="text-[14px] font-normal leading-[21px] text-[#808080]">
                                  1 kg
                                </span>{" "}
                                /{" "}
                                <span className="text-[#1A1A1A] text-[14px] font-semibold leading-[16.8px]">
                                  12.00
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="cursor-pointer">
                            <MdAddShoppingCart size={25} />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mb-1 border-b border-[#E6E6E6]">
                          <div className="flex justify-start items-center gap-2">
                            <div className="bg-white">
                              <Image
                                src="/assets/Images/Products/Image (3).png"
                                alt="Product Image"
                                width={120}
                                height={100}
                              />
                            </div>
                            <div>
                              <p className="text-[14px] leading-[21px] text-[#1A1A1A] font-normal text-start">
                                Fresh Indian Orange
                              </p>
                              <p className="flex items-center justify-start gap-2">
                                <span className="text-[14px] font-normal leading-[21px] text-[#808080]">
                                  1 kg
                                </span>{" "}
                                /{" "}
                                <span className="text-[#1A1A1A] text-[14px] font-semibold leading-[16.8px]">
                                  12.00
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="cursor-pointer">
                            <MdAddShoppingCart size={25} />
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="flex justify-between items-center py-6">
                          <p className="text-[#1A1A1A] text-base font-normal leading-[24px]">
                            4 Product
                          </p>
                          <p>$48.00</p>
                        </div>
                        <div className="mb-4">
                          <SheetClose asChild>
                            <Link
                              className=" w-full rounded-[43px] mb-2 bg-[#333333] py-4 px-10 text-white text-center text-base font-semibold"
                              href="/wishlist"
                            >
                              Go to Wishlist
                            </Link>
                          </SheetClose>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                <div className="h-[20px] md:h-7 w-[1px] bg-black/45"></div>

                <Sheet>
                  <SheetTrigger>
                    <div className="flex items-center md:items-end justify-center gap-4">
                      <div className="relative cursor-pointer mb-[2px]">
                        <Image
                          src="/assets/svg/Bag.svg"
                          alt="Cart"
                          width={30}
                          height={30}
                          className=""
                        />
                        <span className=" flex justify-center items-center absolute top-[-5px] right-[-8px] md:right-[-3px] w-[18px] h-[18px] text-[10px] rounded-full bg-[#2C742F] text-white">
                          5
                        </span>
                      </div>
                      <div className="text-sm cursor-pointer text-start">
                        <p className="hidden md:block ">Shopping cart:</p>
                        <p>$57.00</p>
                      </div>
                    </div>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className="text-[20px] text-start font-medium text-[#1A1A1A]">
                        Shopping Card (4)
                      </SheetTitle>
                    </SheetHeader>

                    {/* className={classNames('mb-4', {
                        'mb-0': index === items.length - 1 */}

                    <div className="flex flex-col justify-between h-full">
                      <div className="mt-10 overflow-scroll overflow-x-hidden no-scrollBar">
                        <div className="flex justify-between items-center mb-1 border-b border-[#E6E6E6]">
                          <div className="flex justify-start items-center gap-2">
                            <div className="bg-white">
                              <Image
                                src="/assets/Images/Products/Image (1).png"
                                alt="Product Image"
                                width={120}
                                height={100}
                              />
                            </div>
                            <div>
                              <p className="text-[14px] leading-[21px] text-[#1A1A1A] font-normal text-start">
                                Fresh Indian Orange
                              </p>
                              <p className="flex items-center justify-start gap-2">
                                <span className="text-[14px] font-normal leading-[21px] text-[#808080]">
                                  1 kg
                                </span>{" "}
                                x{" "}
                                <span className="text-[#1A1A1A] text-[14px] font-semibold leading-[16.8px]">
                                  12.00
                                </span>
                              </p>
                            </div>
                          </div>
                          <div>
                            <CiCircleRemove size={25} />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mb-1 border-b border-[#E6E6E6]">
                          <div className="flex justify-start items-center gap-2">
                            <div className="bg-white">
                              <Image
                                src="/assets/Images/Products/Image.png"
                                alt="Product Image"
                                width={120}
                                height={100}
                              />
                            </div>
                            <div>
                              <p className="text-[14px] leading-[21px] text-[#1A1A1A] font-normal text-start">
                                Fresh Indian Orange
                              </p>
                              <p className="flex items-center justify-start gap-2">
                                <span className="text-[14px] font-normal leading-[21px] text-[#808080]">
                                  1 kg
                                </span>{" "}
                                x{" "}
                                <span className="text-[#1A1A1A] text-[14px] font-semibold leading-[16.8px]">
                                  12.00
                                </span>
                              </p>
                            </div>
                          </div>
                          <div>
                            <CiCircleRemove size={25} />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mb-1 border-b border-[#E6E6E6]">
                          <div className="flex justify-start items-center gap-2">
                            <div className="bg-white">
                              <Image
                                src="/assets/Images/Products/Image (2).png"
                                alt="Product Image"
                                width={120}
                                height={100}
                              />
                            </div>
                            <div>
                              <p className="text-[14px] leading-[21px] text-[#1A1A1A] font-normal text-start">
                                Fresh Indian Orange
                              </p>
                              <p className="flex items-center justify-start gap-2">
                                <span className="text-[14px] font-normal leading-[21px] text-[#808080]">
                                  1 kg
                                </span>{" "}
                                x{" "}
                                <span className="text-[#1A1A1A] text-[14px] font-semibold leading-[16.8px]">
                                  12.00
                                </span>
                              </p>
                            </div>
                          </div>
                          <div>
                            <CiCircleRemove size={25} />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mb-1 border-b border-[#E6E6E6]">
                          <div className="flex justify-start items-center gap-2">
                            <div className="bg-white">
                              <Image
                                src="/assets/Images/Products/Image (3).png"
                                alt="Product Image"
                                width={120}
                                height={100}
                              />
                            </div>
                            <div>
                              <p className="text-[14px] leading-[21px] text-[#1A1A1A] font-normal text-start">
                                Fresh Indian Orange
                              </p>
                              <p className="flex items-center justify-start gap-2">
                                <span className="text-[14px] font-normal leading-[21px] text-[#808080]">
                                  1 kg
                                </span>{" "}
                                x{" "}
                                <span className="text-[#1A1A1A] text-[14px] font-semibold leading-[16.8px]">
                                  12.00
                                </span>
                              </p>
                            </div>
                          </div>
                          <div>
                            <CiCircleRemove size={25} />
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="flex justify-between items-center py-6">
                          <p className="text-[#1A1A1A] text-base font-normal leading-[24px]">
                            4 Product
                          </p>
                          <p>$48.00</p>
                        </div>
                        <div className="mb-4">
                          <SheetClose asChild>
                            <Link
                              className="py-4 text-white px-10 text-center bg-[#00B207] text-base font-semibold w-full rounded-[43px] mb-2"
                              href="/checkout"
                            >
                              Checkout
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link
                              className="py-4 text-[#00B207] px-10 text-center bg-[#56AC591A] text-base font-semibold w-full rounded-[43px] mb-2"
                              href="/cart"
                            >
                              Go To Cart
                            </Link>
                          </SheetClose>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Logo and Search End Here */}
      {/* Navbar Start From Here */}
      <div className="bg-[#333333] text-white h-[60px]">
        <div className="hidden md:wrapper w-full h-full md:flex items-center justify-between">
          <Navbar />
          <Link
            href={`tel: +8801623939834`}
            className="text-[#fff] flex items-center gap-2"
          >
            <Image
              src="/assets/svg/PhoneCall1.svg"
              alt="Phone icon"
              width={28}
              height={28}
              className="md:w-[28px] w-6"
            />
            <div>+880 1623939834</div>
          </Link>
        </div>
        <MobileNavbar />
      </div>
      {/* Navbar End Here */}
    </div>
  );
};

export default Header;
