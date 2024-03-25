import Wrapper from "@/Components/Wrapper.tsx/Wrapper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="hidden md:flex w-full md:mt-1 py-2 border-[gray]/40 md:border-t border-b ">
        <Wrapper className="flex items-center justify-between">
          <div className="flex items-start flex-col md:flex-row gap-2 text-[12px] font-normal leading-5 h-[20px] md:h-[30px] cursor-pointer">
            <div className="md:flex items-center gap-2">
              <Image
                src="../public/assets/svg/map pin.svg"
                width={17}
                height={20}
                alt="Location Svg"
              />
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
        </Wrapper>
      </div>
    </div>
  );
}
