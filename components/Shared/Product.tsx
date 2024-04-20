"use client";
import { Salsa } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import { SlHandbag } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import { FaMinus, FaPlus } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

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
        <div className="absolute right-3 top-3 md:flex flex-col gap-2 hidden">
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
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="p-2">
                  <Image
                    src="/assets/svg/Eye 1.svg"
                    alt="Eye Svg"
                    width={20}
                    height={20}
                    className="w-full h-full"
                  />
                </Button>
              </DialogTrigger>
              <DialogContent className="xl:max-w-[1000px] max-w-[95%]">
                <div className="flex gap-12 items-start">
                  <div className=" h-full w-1/2">
                    <Carousel orientation="vertical" className="w-full">
                      <CarouselContent className="h-[400px] p-2 touch-pan-y">
                        <CarouselItem className=" xl:basis-full basis-[80%]">
                          <div className="p-1">
                            <Card className="">
                              <CardContent className="flex items-center justify-center ">
                                <Image
                                  src={image}
                                  alt="Product Image"
                                  width={556}
                                  height={556}
                                  className="w-full"
                                />
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                        <CarouselItem className=" xl:basis-full basis-[80%]">
                          <div className="p-1">
                            <Card className="">
                              <CardContent className="flex items-center justify-center ">
                                <Image
                                  src={image}
                                  alt="Product Image"
                                  width={556}
                                  height={556}
                                  className="w-full"
                                />
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                        <CarouselItem className=" xl:basis-full basis-[80%]">
                          <div className="p-1">
                            <Card className="">
                              <CardContent className="flex items-center justify-center ">
                                <Image
                                  src={image}
                                  alt="Product Image"
                                  width={556}
                                  height={556}
                                  className="w-full"
                                />
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious className="-right-12 bottom-20" />
                      <CarouselNext className=" -right-12 bottom-5" />
                    </Carousel>
                  </div>
                  <div className="w-1/2 flex flex-col items-start">
                    <div className="font-semibold text-[36px] inline-block text-[#1A1A1A]">
                      {name}
                    </div>
                    <div className="mt-3">
                      <p className="flex gap-[2px]">
                        <Image
                          src="/assets/svg/Star 3.svg"
                          alt=""
                          width={22}
                          height={22}
                        />
                        <Image
                          src="/assets/svg/Star 3.svg"
                          alt=""
                          width={22}
                          height={22}
                        />
                        <Image
                          src="/assets/svg/Star 3.svg"
                          alt=""
                          width={22}
                          height={22}
                        />
                        <Image
                          src="/assets/svg/Star 3.svg"
                          alt=""
                          width={22}
                          height={22}
                        />
                        <Image
                          src="/assets/svg/Star 5.svg"
                          alt=""
                          width={22}
                          height={22}
                        />
                      </p>
                    </div>
                    <div>
                      <p className="flex items-center mt-1 gap-2">
                        {discountPrice && (
                          <span className="line-through font-normal text-[#999999] text-lg">
                            ${price}
                          </span>
                        )}
                        <span className="text-lg font-medium text-[#1A1A1A]">
                          ${discountPrice || price}
                        </span>
                        {discountPrice && sale && (
                          <span className="bg-[#EA4B481A] px-[10px] py-[3px] flex justify-center items-center gap-1 text-[#EA4B48] text-sm font-medium rounded-[30px]">
                            {sale}% OFF
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="mt-5 w-full">
                      <p className="text-sm">
                        Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Nulla nibh diam,
                        blandit vel consequat nec, ultrices et ipsum. Nulla
                        varius magna a consequat pulvinar.{" "}
                      </p>
                    </div>
                    <div className="lg:mt-14 w-full mt-10 flex justify-center items-center gap-3 h-14">
                      <div className="flex items-center w-2/4 border border-[#E6E6E6] rounded-[170px] p-2 h-full">
                        <span className="w-[35px] h-[35px] bg-[#F2F2F2] rounded-full flex justify-center items-center">
                          <FaMinus />
                        </span>
                        <span className="w-[40px] text-center">5</span>
                        <span className="w-[35px] h-[35px] bg-[#F2F2F2] rounded-full flex justify-center items-center">
                          <FaPlus />
                        </span>
                      </div>
                      <Button className="w-full flex justify-center items-center gap-3 h-full bg-[#00B207] rounded-[43px]">
                        Add to Cart <SlHandbag size={16} />
                      </Button>
                    </div>
                    <div className="flex justify-center items-center gap-2 mt-5">
                      <span className="text-[#1A1A1A] text-[14px] font-medium leading-[21px]">
                        Category:
                      </span>
                      <span className="text-[#808080] text-[14px] font-normal leading-[21px]">
                        Vegetables
                      </span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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
