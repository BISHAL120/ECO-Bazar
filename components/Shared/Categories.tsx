"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Categories as categories } from "@/Constant";
import Category from "./Category";
import Image from "next/image";
import Category2 from "./Category2";
import { HiViewBoards, HiViewGrid } from "react-icons/hi";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Categories = () => {
  const [CategorySlide, setCategorySlide] = useState(true);
  return (
    <div className="mb-[50px]">
      <div className="md:wrapper">
        <div className="flex justify-between items-center m-4 mt-16 mb-6 md:mt-20 md:mb-8">
          <p className="text-[#1A1A1A] text-[24px] md:text-[32px] font-semibold">
            Popular Categories
          </p>
          <div className="flex items-center gap-3">
            {CategorySlide && (
              <HiViewBoards
                size={24}
                onClick={() => setCategorySlide(!CategorySlide)}
              />
            )}
            {!CategorySlide && (
              <HiViewGrid
                size={24}
                onClick={() => setCategorySlide(!CategorySlide)}
              />
            )}

            <Button
              type="button"
              variant="link"
              className="flex gap-2 text-xs font-medium text-[#00B207]"
            >
              View All{" "}
              <Image
                src="/assets/svg/right arrow.svg"
                alt="Right Svg"
                width={12}
                height={12}
              />
            </Button>
          </div>
        </div>
        {!CategorySlide && (
          <div className="grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-2 gap-3 md:gap-6">
            {categories.map((category) => (
              <Category key={category.href} {...category} />
            ))}
          </div>
        )}
        {CategorySlide && (
          <div className="px-10">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {categories.map((category) => (
                  <CarouselItem key={category.href} className="basis-[224px]">
                    <Category2 key={category.href} {...category} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
