"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/Shared/Breadcrumb";
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

const Wishlist = () => {
  const pathname = usePathname();
  return (
    <div>
      <Breadcrumb routes={pathname} />
      <div className="flex justify-center items-center mt-10 mb-20">
        <div className="max-w-[1380px] w-full">
          <div className="mb-[32px]">
            <p className="text-[#1A1A1A] text-center text-[32px] leading-[38px] font-semibold">
              My Wishlist
            </p>
          </div>
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="">Name</span>
                  </TableHead>
                  <TableHead className="sr-only">Name</TableHead>
                  <TableHead className="hidden md:table-cell">Price</TableHead>
                  <TableHead>Stock Status</TableHead>
                  <TableHead className="">Add to Cart</TableHead>
                  <TableHead className="">Remove</TableHead>
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
                    Fresh Indian Orange
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    $499.99
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-[#EA4B48]/85">
                      Out of Stock
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Button
                      disabled
                      className="p-5 disabled:bg-[#F2F2F2] disabled:text-[#B3B3B3] text-white  text-center bg-[#00B207] text-[14px] font-semibold rounded-[43px]"
                    >
                      Add To Cart
                    </Button>
                  </TableCell>
                  <TableCell className="cursor-pointer">
                    <CiCircleRemove size={26} />
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
                    Fresh Indian Orange
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    $129.99
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-[#20B52633]">
                      In Stock
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Button className="p-5 disabled:bg-[#F2F2F2] disabled:text-[#B3B3B3] text-white  text-center bg-[#00B207] text-[14px] font-semibold rounded-[43px]">
                      Add To Cart
                    </Button>
                  </TableCell>
                  <TableCell className="cursor-pointer">
                    <CiCircleRemove size={26} />
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
                    Fresh Indian Orange
                  </TableCell>

                  <TableCell className="hidden md:table-cell">
                    $129.99
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-[#EA4B48]/85">
                      Out of Stock
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Button
                      disabled
                      className="p-5 disabled:bg-[#F2F2F2] disabled:text-[#B3B3B3] text-white  text-center bg-[#00B207] text-[14px] font-semibold rounded-[43px]"
                    >
                      Add To Cart
                    </Button>
                  </TableCell>
                  <TableCell className="cursor-pointer">
                    <CiCircleRemove size={26} />
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
                    Fresh Indian Orange
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    $129.99
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-[#20B52633]">
                      In Stock
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Button className="p-5 disabled:bg-[#F2F2F2] disabled:text-[#B3B3B3] text-white  text-center bg-[#00B207] text-[14px] font-semibold rounded-[43px]">
                      Add To Cart
                    </Button>
                  </TableCell>
                  <TableCell className="cursor-pointer">
                    <CiCircleRemove size={26} />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
