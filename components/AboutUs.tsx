import Image from "next/image";
import { Button } from "./ui/button";

const AboutUs = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center my-8 md:my-15 ">
        <div className="flex flex-col max-w-100 md:max-w-xl bg-[#EBEBEB] py-5 px-6 rounded-md gap-3 z-3 mr-0 md:-mr-10 shadow-md">
          <p className="text-[#0071B3] text-[24px] md:text-[30px] font-semibold font-(family-name:--font-quattrocento)">
            About Us
          </p>
          <p className="text-black font-light text-base">
            Makabis & Benet is the project and event production arm of Makabis
            Group. Our vision is simply to be the most accessible and trusted
            event producer for today’s audiences — individuals and brands who
            appreciate class, creativity, and quality event solutions.
          </p>
          <div className="mt-2">
            <Button className="bg-[#0071B3] text-white text-sm md:text-base cursor-pointer transition-all duration-300 ease-out
    hover:scale-105 hover:bg-[#005f99]
    active:scale-95">
              Discover More
            </Button>
          </div>
        </div>
        <div className="relative hidden md:block h-125 w-125">
          <Image src="/img/about.jpeg" alt="display" fill className="object-cover" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
