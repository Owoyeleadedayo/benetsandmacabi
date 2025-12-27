import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Celebrate = () => {
  return (
    <>
      <div className="flex relative h-50 md:h-112.5 bg-[url('/img/banner.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute flex flex-col w-full h-full justify-center items-center px-10 md:px-20 pt-10 gap-2 md:gap-6">
          <p className="text-2xl max-w-62.5 md:max-w-lg md:text-5xl text-[#FFF] font-(family-name:--font-oleo) text-center capitalize">
            Let’s Celebrate Your Event
          </p>
          <div>
            <Link href={"/contact"}>
              <Button className="bg-[#0071B3] font-semi-bold text-white text-base md:text-xl cursor-pointer">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Celebrate;
