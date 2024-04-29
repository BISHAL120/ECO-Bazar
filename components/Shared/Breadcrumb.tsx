import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHome, FaAngleRight } from "react-icons/fa";

const Breadcrumb = ({ routes }: { routes: string }) => {
  const routeParts = routes.split("/");
  return (
    <div>
      <div className="w-full">
        <div
          style={{
            backgroundImage: "url('/assets/Images/Banner/Breadcrumbs.png')",
          }}
          className="relative"
        >
          <div className="py-[40px] max-w-[1380px] mx-auto text-white flex justify-start gap-2 items-center">
            <Link href="/">
              <FaHome size={25} className="text-white" />
            </Link>
            {routeParts.map((part, index) => (
              <React.Fragment key={index}>
                {index !== 0 && (
                  <FaAngleRight size={16} className="text-white" />
                )}
                <Link href={`/${part}`} className="text-md">
                  {part}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
