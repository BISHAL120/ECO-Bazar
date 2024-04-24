import Image from "next/image";
import React from "react";
import notFound from "@/public/assets/Images/Illustration.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex justify-center items-start py-10">
      <div className="p-3 md:p-1 lg:p-0 flex flex-col items-center">
        <Image src={notFound} alt="Not Found Image" />
        <p className="text-[40px] text-center leading-[120px] text-[#1A1A1A] font-semibold ">
          Oops! page not found
        </p>
        <p className="text-[#808080] text-[16px] font-normal leading-[24px] text-center">
          Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
          Maecenas sagittis tortor at metus mollis
        </p>

        <Link
          href="/"
          className="py-[14px] px-8 text-md mt-10 font-semibold text-white bg-[#00B207] rounded-[43px]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
