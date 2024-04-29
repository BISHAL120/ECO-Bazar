"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/Shared/Breadcrumb";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CiCircleRemove } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Link from "next/link";

const Wishlist = () => {
  const pathname = usePathname();
  return (
    <div>
      <Breadcrumb routes={pathname} />
      <div className="flex justify-center items-center mt-10 mb-20">
        <div className="max-w-[1380px] w-full">
          <div className="mb-[32px]">
            <p className="text-[#1A1A1A] text-center text-[32px] leading-[38px] font-semibold">
              My Shopping Cart
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-5 w-full">
            <div className="w-full">
              <Card className="mx-1.5 p-2">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="md:w-[160px] sm:table-cell">
                        <span className="">Product</span>
                      </TableHead>
                      <TableHead className="hidden sm:table-cell ">
                        Name
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Price
                      </TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead className="">Subtotal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="hidden sm:table-cell">
                        <Image
                          alt="Product image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src="/assets/Images/Products/Image.png"
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        <div className="sm:hidden">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/assets/Images/Products/Image.png"
                            width="64"
                          />
                        </div>
                        <div className="md:hidden text-[16px] font-semibold text-[#1A1A1A]">
                          $45.00
                        </div>
                        <div className="text-[14px] font-medium text-[#1A1A1A]">
                          Green Apple
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        $499.99
                      </TableCell>
                      <TableCell>
                        <div className="w-[124px] h-[50px] flex justify-evenly items-center border border-[#E6E6E6] rounded-[170px] p-2 ">
                          <span className="w-[34px] cursor-pointer h-[34px] bg-[#F2F2F2] rounded-full flex justify-center items-center">
                            <FaMinus />
                          </span>
                          <span className="w-[40px] text-center">5</span>
                          <span className="w-[35px] cursor-pointer h-[35px] bg-[#F2F2F2] rounded-full flex justify-center items-center">
                            <FaPlus />
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className=" md:table-cell">
                        <div className="font-medium flex items-center gap-2 justify-between">
                          $499.99
                          <div className="cursor-pointer">
                            <IoIosCloseCircleOutline size={30} />
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="hidden sm:table-cell">
                        <Image
                          alt="Product image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src="/assets/Images/Products/Image (1).png"
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        <div className="sm:hidden">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/assets/Images/Products/Image (1).png"
                            width="64"
                          />
                        </div>
                        <div className="md:hidden text-[16px] font-semibold text-[#1A1A1A]">
                          $45.00
                        </div>
                        <div>Fresh Indian Orange</div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        $129.99
                      </TableCell>
                      <TableCell>
                        <div className="w-[124px] h-[50px] flex justify-evenly items-center border border-[#E6E6E6] rounded-[170px] p-2 ">
                          <span className="w-[34px] cursor-pointer h-[34px] bg-[#F2F2F2] rounded-full flex justify-center items-center">
                            <FaMinus />
                          </span>
                          <span className="w-[40px] text-center">5</span>
                          <span className="w-[35px] cursor-pointer h-[35px] bg-[#F2F2F2] rounded-full flex justify-center items-center">
                            <FaPlus />
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className=" md:table-cell">
                        <div className="font-medium flex items-center gap-2 justify-between">
                          $499.99
                          <div className="cursor-pointer">
                            <IoIosCloseCircleOutline size={30} />
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="hidden sm:table-cell">
                        <Image
                          alt="Product image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src="/assets/Images/Products/Image (2).png"
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        <div className="sm:hidden">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/assets/Images/Products/Image (2).png"
                            width="64"
                          />
                        </div>
                        <div className="md:hidden text-[16px] font-semibold text-[#1A1A1A]">
                          $45.00
                        </div>
                        <div>Chinese cabbage</div>
                      </TableCell>

                      <TableCell className="hidden md:table-cell">
                        $129.99
                      </TableCell>
                      <TableCell>
                        <div className="w-[124px] h-[50px] flex justify-evenly items-center border border-[#E6E6E6] rounded-[170px] p-2 ">
                          <span className="w-[34px] cursor-pointer h-[34px] bg-[#F2F2F2] rounded-full flex justify-center items-center">
                            <FaMinus />
                          </span>
                          <span className="w-[40px] text-center">5</span>
                          <span className="w-[35px] cursor-pointer h-[35px] bg-[#F2F2F2] rounded-full flex justify-center items-center">
                            <FaPlus />
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className=" md:table-cell">
                        <div className="font-medium flex items-center gap-2 justify-between">
                          $499.99
                          <div className="cursor-pointer">
                            <IoIosCloseCircleOutline size={30} />
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="hidden sm:table-cell">
                        <Image
                          alt="Product image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src="/assets/Images/Products/Image (3).png"
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        <div className="sm:hidden">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/assets/Images/Products/Image (3).png"
                            width="64"
                          />
                        </div>
                        <div className="md:hidden text-[16px] font-semibold text-[#1A1A1A]">
                          $45.00
                        </div>
                        <div>Green Lettuce</div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        $129.99
                      </TableCell>
                      <TableCell>
                        <div className="w-[124px] h-[50px] flex justify-evenly items-center border border-[#E6E6E6] rounded-[170px] p-2 ">
                          <span className="w-[34px] cursor-pointer h-[34px] bg-[#F2F2F2] rounded-full flex justify-center items-center">
                            <FaMinus />
                          </span>
                          <span className="w-[40px] text-center">5</span>
                          <span className="w-[35px] cursor-pointer h-[35px] bg-[#F2F2F2] rounded-full flex justify-center items-center">
                            <FaPlus />
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className=" md:table-cell">
                        <div className="font-medium flex items-center gap-2 justify-between">
                          $499.99
                          <div className="cursor-pointer">
                            <IoIosCloseCircleOutline size={30} />
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
              <div className="mt-5 mx-2">
                <Card className="p-3 overflow-hidden md:p-5 flex flex-col sm:flex-row sm: justify-between items-center">
                  <p className="text-sm md:text-xl font-medium text-[#1A1A1A]">
                    Coupon Code
                  </p>
                  <div className="mt-5 sm:mt-0 w-full sm:w-3/4 relative border border-[#c29b9b]">
                    <input
                      className="w-full sm:w-[500px] md:w-[450px] py-2 md:py-[14px] px-6 text-[12px] sm:text-[16px] font-normal sm:leading-[24px] text-[#808080] outline-none"
                      placeholder="Enter Code"
                      type="email"
                    />
                    <button className=" absolute top-0 right-0 bg-[#00B207] py-2 md:py-[14px] px-5 sm:px-10  text-[#FFFFFF] text-[12px] sm:text-[16px] font-medium sm:font-semibold">
                      Apply Coupon
                    </button>
                  </div>
                </Card>
              </div>
            </div>
            <div>
              <Card className="mx-1.5 w-full lg:w-[425px] p-3 lg:p-5">
                <div>
                  <p className="text-xl font-medium text-[#1A1A1A]">
                    Cart Total
                  </p>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <p className="text-sm font-normal text-[#4D4D4D]">
                    Subtotal:
                  </p>
                  <p className="font-medium text-[#1A1A1A]">$84.00</p>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <p className="text-sm font-normal text-[#4D4D4D]">
                    Shipping:
                  </p>
                  <p className="font-medium text-[#1A1A1A]">Free</p>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <p className="text-sm font-normal text-[#4D4D4D]">Total:</p>
                  <p className="font-medium text-[#1A1A1A]">$84.00</p>
                </div>
                <div className="mt-5 ">
                  <Link href="/checkout">
                    <Button className="h-full w-full py-4 text-white px-10 hover:bg-[#2C742F] bg-[#00B207] transition duration-300 text-base font-semibold rounded-[43px] mb-2">
                      Checkout
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
