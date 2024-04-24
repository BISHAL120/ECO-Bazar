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
import { BsArrowRight } from "react-icons/bs";

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
              <CarouselItem className="relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/2122278/pexels-photo-2122278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Food Image"
                  width={1000}
                  height={650}
                  className=" w-full rounded-lg overflow-hidden relative"
                />
                <div className="ml-4 flex flex-col justify-end pb-6 md:w-[90%] h-full md:h-auto w-[100%] pt-auto  md:pt-0 absolute font-semibold text-2xl md:text-[20px] left-0 bottom-0 md:bottom-6  md:left-12 bg-gradient-to-t from-[#222831]/70 md:to-white/50 rounded-lg md:p-5 overflow-hidden ">
                  <div className="mr-4">
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
                </div>
              </CarouselItem>
              <CarouselItem className="relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/9399928/pexels-photo-9399928.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Food Image"
                  width={1000}
                  height={650}
                  className=" w-full rounded-lg overflow-hidden relative"
                />
                <div className="ml-4 flex flex-col justify-end pb-6 md:w-[90%] h-full md:h-auto w-[100%] pt-auto  md:pt-0 absolute font-semibold text-2xl md:text-[20px] left-0 bottom-0 md:bottom-6  md:left-12 bg-gradient-to-t from-[#222831]/70 md:to-white/50 rounded-lg md:p-5 overflow-hidden ">
                  <div className="mr-4">
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
                </div>
              </CarouselItem>
              <CarouselItem className="relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/6632289/pexels-photo-6632289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Food Image"
                  width={1000}
                  height={650}
                  className=" w-full rounded-lg overflow-hidden relative"
                />
                <div className="ml-4 flex flex-col justify-end pb-6 md:w-[90%] h-full md:h-auto w-[100%] pt-auto  md:pt-0 absolute font-semibold text-2xl md:text-[20px] left-0 bottom-0 md:bottom-6  md:left-12 bg-gradient-to-t from-[#222831]/70 md:to-white/50 rounded-lg md:p-5 overflow-hidden ">
                  <div className="mr-4">
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
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <div className="w-[100%] xl:w-[30%] flex flex-row xl:flex-col flex-shrink-0 gap-3 justify-around ">
          <div className="w-1/2 md:w-full rounded-xl overflow-hidden relative">
            <Image
              src="/assets/Images/BG.png"
              alt="Slider mini 1"
              width={600}
              height={300}
              className="w-full h-full"
            />
            <div className="absolute w-full h-full pt-3 pl-3 md:pt-8 md:pl-8 top-0 left-0 bg-white/30">
              <p className="text-[8px] md:text-sm font-medium uppercase text-[#1A1A1A]">
                Summer Sale
              </p>
              <p className="md:mt-3 mt-1 text-[18px] md:text-[32px] font-semibold text-[#1A1A1A]">
                75% OFF
              </p>
              <p className="text-[10px] md:text-sm font-normal text-[#332f2f] md:text-[#666666]">
                Only Fruit & Vegetable
              </p>
              <Button
                variant={"link"}
                className="flex gap-3 text-lg font-semibold pl-0 items-center text-[#000] md:text-[#00B207] md:mt-5 mt-1"
              >
                Shop Now <BsArrowRight />
              </Button>
            </div>
          </div>
          <div className="w-1/2 md:w-full rounded-xl overflow-hidden relative">
            <Image
              src="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Slider mini 2"
              width={600}
              height={300}
              className="h-full w-full "
            />
            <div className="absolute w-full h-full pt-3 pl-3 md:pt-8 md:pl-8 top-0 left-0 bg-black/30">
              <p className="text-[10px] md:text-sm font-medium uppercase text-[#f5f5f5] md:text-[#FFFFFF] mb-1 md:mb-3">
                Best Deal
              </p>
              <p className="w-full md:w-[330px] font-medium md:font-semibold text-[14px] md:text-[30px] text-[#f5f5f5] md:text-[#FFFFFF] mb-0 md:mb-6">
                Special Products Deal of the Month
              </p>
              <Button
                variant={"link"}
                className="flex gap-3 text-base font-medium pl-0 items-center text-[#ffffff] md:text-[#f5f5f5] mt-2 md:mt-5"
              >
                Shop Now <BsArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
