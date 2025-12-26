import Image from "next/image";
import { Button } from "./ui/button";

const AboutUs = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center my-8 md:my-15 ">
        <div className="flex flex-col max-w-100 md:max-w-xl bg-[#EBEBEB] py-5 px-6 rounded-md gap-3 z-3 mr-0 md:-mr-10 shadow-md">
          <p className="text-[#0071B3] text-[30px] font-semi-bold font-(family-name:--font-oleo)">
            About Us
          </p>
          <p className="text-black font-normal text-base">
            Makabis & Benet is the project and event production arm of Makabis
            Group. Our vision is simply to be the most accessible and trusted
            event producer for today’s audiences — individuals and brands who
            appreciate class, creativity, and quality event solutions.
          </p>
          <div className="mt-2">
            <Button className="bg-[#0071B3] font-semi-bold text-white text-md">
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
