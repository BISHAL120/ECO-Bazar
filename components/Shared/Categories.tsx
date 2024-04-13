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
import { BsArrowRight } from "react-icons/bs";

const Categories = () => {
  const [CategorySlide, setCategorySlide] = useState("row");
  return (
    <div className="mb-[50px] w-full">
      <div className="md:wrapper">
        <div className="flex justify-between items-center m-4 mt-16 mb-10 md:mt-20 xl:mb-8">
          <p className="text-[#1A1A1A] text-[18px] md:text-[32px] font-semibold">
            Popular Categories
          </p>
          <div className="flex items-center ">
            {/* <div className="hidden md:flex gap-3 m-4">
              {" "}
              <div
                className={`w-[30px] h-[30px] flex justify-center items-center rounded-md cursor-pointer${
                  CategorySlide === "row" ? " bg-[#ccbebe]" : ""
                }`}
              >
                <HiViewBoards
                  size={16}
                  onClick={() => setCategorySlide("row")}
                />
              </div>
              <div
                className={`w-[30px] h-[30px] flex justify-center items-center rounded-md cursor-pointer${
                  CategorySlide === "grid" ? " bg-[#ccbebe]" : ""
                }`}
              >
                <HiViewGrid
                  size={18}
                  onClick={() => setCategorySlide("grid")}
                />
              </div>
            </div> */}
            {/* <Button
              type="button"
              variant="link"
              className="flex gap-2 text-xs font-medium text-[#00B207]"
            >
              View All <BsArrowRight size={18} />
            </Button> */}
          </div>
          <div className=" flex gap-3 justify-end mr-5 md:cursor-pointer">
            {" "}
            <div
              className={`w-[40px] h-[40px] flex justify-center items-center rounded-md${
                CategorySlide === "row" ? " bg-[#ccbebe]" : ""
              }`}
            >
              <HiViewBoards size={25} onClick={() => setCategorySlide("row")} />
            </div>
            <div
              className={`w-[40px] h-[40px] flex justify-center items-center rounded-md${
                CategorySlide === "grid" ? " bg-[#ccbebe]" : ""
              }`}
            >
              <HiViewGrid size={30} onClick={() => setCategorySlide("grid")} />
            </div>
          </div>
        </div>

        <div className="wrapper">
          {CategorySlide === "grid" && (
            <div className="grid place-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 px-2 gap-3 md:gap-6">
              {categories.map((category) => (
                <Category key={category.href} {...category} />
              ))}
            </div>
          )}
          {CategorySlide === "row" && (
            <div className="px-7">
              <Carousel className="w-full">
                <CarouselContent>
                  {categories.map((category) => (
                    <CarouselItem
                      key={category.href}
                      className="basis-[105px] md:basis-[150px] xl:basis-[180px] 2xl:basis-[224px]"
                    >
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
    </div>
  );
};

export default Categories;
