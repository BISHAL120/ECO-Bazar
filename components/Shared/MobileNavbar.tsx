"use client";
import React, { useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { menus } from "@/Constant";

const MobileNavbar = () => {
  const [subMenu, setSubMenu] = useState(null);
  const handleSunMenu = (index: any) => {
    setSubMenu((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="md:hidden h-full">
      <div className="h-full flex items-center justify-between">
        <Sheet>
          <SheetTrigger className="text-[#fff] p-[16px] mr-auto h-full bg-[#00B207]">
            <FaBars size={24} className=" " />
          </SheetTrigger>
          <SheetContent className="bg-[#333]">
            <div className="flex items-center gap-3 ">
              <Image
                src="/assets/svg/plant 1.svg"
                alt=""
                width={40}
                height={40}
                className="w-7 md:w-[40px]"
              />
              <p className="md:text-4xl text-xl text-white/90 font-medium">
                Ecobazar
              </p>
            </div>
            <div className="mt-6 w-full flex flex-col gap-4">
              {menus.map((item, index) => {
                return (
                  <>
                    {item?.icon ? (
                      <div key={index} className="text-white  w-full">
                        <div
                          onClick={() => {
                            handleSunMenu(index);
                          }}
                          className="flex items-center justify-between"
                        >
                          {item.name}
                          <FaAngleDown />
                        </div>
                        {subMenu === index && (
                          <div
                            key={index}
                            className="text-white/60 flex flex-col gap-3 justify-start p-4"
                          >
                            {item.subMenus.map((subMenus, i) => {
                              return (
                                <Link key={subMenus.name} href={subMenus.href}>
                                  {subMenus.name}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={index}
                        href={item.href}
                        className="text-white/85 flex items-center justify-between w-full"
                      >
                        {item.name}
                        {item?.icon && <FaAngleDown />}
                      </Link>
                    )}
                  </>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
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
          <div className="text-sm pr-3">+880 1623939834</div>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
