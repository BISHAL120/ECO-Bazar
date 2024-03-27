import Image from "next/image";
import Link from "next/link";
import MapIcon from "@/public/assets/svg/Map Pin.svg";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { menus } from "@/Constant";
import MobileNavbar from "@/components/Shared/MobileNavbar";
import { Navbar } from "@/components/Shared/Navbar";
import HeroSlider from "@/components/Shared/HeroSlider";

export default function Home() {
  return (
    <div>
      {/* Top Stripe Start Fro Here */}
      <div className="hidden md:flex w-full md:mt-1 py-2 border-[gray]/40 md:border-t border-b ">
        <div className="wrapper flex items-center justify-between">
          <div className="flex items-start flex-col md:flex-row gap-2 text-[12px] font-normal leading-5 h-[20px] md:h-[30px] cursor-pointer">
            <div className="md:flex items-center gap-2">
              <Image src={MapIcon} width={17} height={20} alt="Location Svg" />
              <Link
                target="_blank"
                href="https://maps.app.goo.gl/t7yWHDXfKEfwN2c3A"
              >
                Store Location: IT Park, Jessore 7400, Jessore bangladesh
              </Link>
            </div>
          </div>
          <div className="flex items-center text-[12px] font-normal leading-2">
            <Link className="cursor-pointer" href="/signin">
              Sign In
            </Link>
            <p className="mx-2">/</p>
            <Link className="cursor-pointer" href="/signin">
              Sign In
            </Link>
          </div>
        </div>
      </div>
      {/* Top Stripe Ends Here */}
      {/* Logo and Search Start From Here  */}
      <div>
        <div className="wrapper py-2 md:py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 ">
              <Image
                src="/assets/svg/plant 1.svg"
                alt=""
                width={40}
                height={40}
                className="w-7 md:w-[40px]"
              />
              <p className="md:text-4xl text-xl font-medium">Ecobazar</p>
            </div>
            <div className="hidden md:flex ">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="py-[17px] pl-12 pr-[18px] w-[400px] border-r-0 border-t border-b border-l rounded-e-none border-gray-300 rounded-lg focus:outline-none "
                />
                <FaSearch
                  size={19}
                  className="absolute top-[8px] left-[6px] mt-3 ml-3 text-gray-500"
                />
              </div>
              <button className="bg-[#00B207] text-white px-[24px] py-[12px] border0 rounded-s-none rounded-e-md ">
                Search
              </button>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/svg/Heart.svg"
                  alt="Wish-List"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
                <div className="h-[20px] md:h-7 w-[1px] bg-black/45"></div>
                <div className="relative cursor-pointer">
                  <Image
                    src="/assets/svg/Bag.svg"
                    alt="Cart"
                    width={30}
                    height={30}
                    className=""
                  />
                  <span className=" flex justify-center items-center absolute top-[-5px] right-[-8px] md:right-[-3px] w-[18px] h-[18px] text-[10px] rounded-full bg-[#2C742F] text-white">
                    5
                  </span>
                </div>
                <div className="text-sm cursor-pointer">
                  <p className="hidden md:block ">Shopping cart:</p>
                  <p>$57.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Logo and Search End Here */}
      {/* Navbar Start From Here */}
      <div className="bg-[#333333] text-white h-[60px]">
        <div className="hidden md:wrapper w-full h-full md:flex items-center justify-between">
          <Navbar />
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
            <div>+880 1623939834</div>
          </Link>
        </div>
        <MobileNavbar />
      </div>
      {/* Navbar End Here */}
      {/* Slider Start From Here */}
      <HeroSlider />
      {/* Slider End Here */}
    </div>
  );
}
