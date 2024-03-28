"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";

const HeroSlider = () => {
  return (
    <div className="md:wrapper mt-6">
      <div className="m-4 md:m-0 flex flex-col xl:flex-row gap-[24px]">
        <div className="">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
            ]}
            opts={{
              loop: true,
              active: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className="relative">
                <Image
                  src="https://images.pexels.com/photos/2122278/pexels-photo-2122278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Food Image"
                  width={1000}
                  height={650}
                  className=" rounded-lg overflow-hidden"
                />
                <div className="md:w-[90%] w-[100%] pt-20 md:pt-0 absolute font-semibold text-2xl md:text-[20px] left-0 bottom-0 md:bottom-6  md:left-12 bg-gradient-to-b from-[#222831]/70 md:to-white/50 rounded-lg p-5 ">
                  <h2 className="md:text-5xl text-xl md:text-start text-center mb-auto md:mb-0 md:leading-[56px] font-semibold text-white">
                    Fresh & Healthy Organic Food
                  </h2>
                  <p className="md:mt-7 md:text-start text-center text-sm md:text-[14px] font-normal text-white mt-6 ">
                    Free shipping on all your order.
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-3 mt-1 md:mt-2 md:mb-6 mb-5">
                    <p className="text-white font-medium text-base md:text-[20px]">
                      Sale up to
                    </p>
                    <p className="md:w-[110px] h-8 md:h-10 bg-[#FF8A00] py-1 px-2 md:px-3 font-semibold text-base md:text-[20px] text-white rounded-sm">
                      30% oFF
                    </p>
                  </div>
                  <Button
                    size={"sm"}
                    className="flex gap-2 mx-auto md:mx-0 mt-3 items-center tex-[10px] md:text-[16px] md:h-10 md:rounded-md md:px-8"
                  >
                    Shop now
                    <Image
                      src="/assets/svg/right arrow.svg"
                      alt="right arrow SVG"
                      width={20}
                      height={16}
                    />
                  </Button>
                </div>
              </CarouselItem>
              <CarouselItem className="relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/9399928/pexels-photo-9399928.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Food Image"
                  width={1000}
                  height={650}
                  className=" rounded-lg overflow-hidden"
                />
                <div className="md:w-[90%] w-[100%] pt-20 md:pt-0 absolute font-semibold text-2xl md:text-[20px] left-0 bottom-0 md:bottom-6  md:left-14 bg-gradient-to-b from-[#222831]/70 md:to-white/50 rounded-lg p-5 ">
                  <h2 className="md:text-5xl text-xl md:text-start text-center mb-auto md:mb-0 md:leading-[56px] font-semibold text-white">
                    Exploring the World of Organic
                  </h2>
                  <p className="md:mt-7 md:text-start text-center text-sm md:text-[14px] font-normal text-white mt-6 ">
                    Free shipping on all your order.
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-3 mt-1 md:mt-2 md:mb-6 mb-5">
                    <p className="text-white font-medium text-base md:text-[20px]">
                      Sale up to
                    </p>
                    <p className="md:w-[110px] h-8 md:h-10 bg-[#FF8A00] py-1 px-2 md:px-3 font-semibold text-base md:text-[20px] text-white rounded-sm">
                      30% oFF
                    </p>
                  </div>
                  <Button
                    size={"sm"}
                    className="flex gap-2 mx-auto md:mx-0 mt-3 items-center tex-[10px] md:text-[16px] md:h-10 md:rounded-md md:px-8"
                  >
                    Shop now
                    <Image
                      src="/assets/svg/right arrow.svg"
                      alt="right arrow SVG"
                      width={20}
                      height={16}
                    />
                  </Button>
                </div>
              </CarouselItem>
              <CarouselItem className="relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/6632289/pexels-photo-6632289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Food Image"
                  width={1000}
                  height={650}
                  className=" rounded-lg overflow-hidden"
                />
                <div className="md:w-[90%] w-[100%] pt-20 md:pt-0 absolute font-semibold text-2xl md:text-[20px] left-0 bottom-0 md:bottom-6  md:left-14 bg-gradient-to-b from-[#222831]/70 md:to-white/50 rounded-lg p-5 ">
                  <h2 className="md:text-5xl text-xl md:text-start text-center mb-auto md:mb-0 md:leading-[56px] font-semibold text-white">
                    A Fresh Approach to Healthy
                  </h2>
                  <p className="md:mt-7 md:text-start text-center text-sm md:text-[14px] font-normal text-white mt-6 ">
                    Free shipping on all your order.
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-3 mt-1 md:mt-2 md:mb-6 mb-5">
                    <p className="text-white font-medium text-base md:text-[20px]">
                      Sale up to
                    </p>
                    <p className="md:w-[110px] h-8 md:h-10 bg-[#FF8A00] py-1 px-2 md:px-3 font-semibold text-base md:text-[20px] text-white rounded-sm">
                      30% oFF
                    </p>
                  </div>
                  <Button
                    size={"sm"}
                    className="flex gap-2 mx-auto md:mx-0 mt-3 items-center tex-[10px] md:text-[16px] md:h-10 md:rounded-md md:px-8"
                  >
                    Shop now
                    <Image
                      src="/assets/svg/right arrow.svg"
                      alt="right arrow SVG"
                      width={20}
                      height={16}
                    />
                  </Button>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <div className=" w-[100%] xl:w-[30%] flex flex-col md:flex-row xl:flex-col flex-shrink-0 gap-3 justify-around xl:justify-between">
          <div className=" h-[290px] xl:h-[305px] relative">
            <Image
              src="/assets/Images/BG.png"
              alt="Slider mini 1"
              width={423}
              height={288}
              className="w-full h-full rounded-xl"
            />
            <div className="absolute top-8 left-8">
              <p className="text-sm font-medium uppercase text-[#1A1A1A]">
                Summer Sale
              </p>
              <p className="mt-3 text-[32px] font-semibold text-[#1A1A1A]">
                75% OFF
              </p>
              <p className="text-sm font-normal text-[#666666]">
                Only Fruit & Vegetable
              </p>
              <Button
                variant={"link"}
                className="flex gap-3 text-lg font-semibold pl-0 items-center text-[#00B207] mt-5"
              >
                Shop Now{" "}
                <Image
                  src="/assets/svg/right arrow.svg"
                  alt="Right Svg"
                  width={16}
                  height={16}
                />
              </Button>
            </div>
          </div>
          <div className=" h-[290px] xl:h-[305px] relative">
            <Image
              src="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Slider mini 2"
              width={423}
              height={288}
              className="h-full w-full rounded-xl "
            />
            <div className="absolute top-16 left-1/2 -translate-x-1/2">
              <p className="text-sm font-medium uppercase text-[#FFFFFF] mb-3">
                Best Deal
              </p>
              <p className="w-[330px] font-semibold text-[30px] text-[#FFFFFF] mb-6">
                Special Products Deal of the Month
              </p>
              <Button
                variant={"link"}
                className="flex gap-3 text-base font-medium pl-0 items-center text-[#00B207] mt-5"
              >
                Shop Now{" "}
                <Image
                  src="/assets/svg/right arrow.svg"
                  alt="Right Svg"
                  width={16}
                  height={16}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
