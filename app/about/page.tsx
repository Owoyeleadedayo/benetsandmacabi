import About from "@/components/About";
import Celebrate from "@/components/Celebrate";
import Newsletter from "@/components/Newsletter";
import OurClients from "@/components/OurClients";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex relative h-[500px] bg-[url('/img/about.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute flex flex-col w-full h-full justify-center items-center px-10 md:px-20 mt-10 gap-3">
          <p className="text-2xl md:max-w-lg md:text-5xl text-[#FFF] font-(family-name:--font-oleo) text-center capitalize">
            About Us
          </p>
        </div>
      </div>
      <About />
      <div className="flex flex-col items-center justify-center gap-8 my-14">
        <p className="text-[#0071B3] text-[30px]  font-semi-bold font-(family-name:--font-oleo)">
          Our mission, vision, and values
        </p>
        <div className="grid grid-cols-2 items-center justify-center gap-10">
          <div className="flex items-center gap-5">
            <div className="relative h-[100px] w-[100px]">
              <Image
                src="/img/mis.png"
                alt="display"
                fill
                className="object-contain rounded-md"
              />
            </div>
            <p className="max-w-md text-md text-black font-medium">
              To consistently develop creative and beautiful event models to
              meet our clients' ever evolving needs.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <div className="relative h-[100px] w-[100px]">
              <Image
                src="/img/msss.png"
                alt="display"
                fill
                className="object-contain rounded-md"
              />
            </div>
            <p className="max-w-md text-md text-black font-medium">
              To be the most preferred ideation hub and accessible producer for
              today’s audience who desire style, class, and creative event
              solutions.
            </p>
          </div>

          <div className="col-span-2 flex items-center  justify-center gap-5">
            <div className="relative h-[100px] w-[100px]">
              <Image
                src="/img/bino.png"
                alt="display"
                fill
                className="object-contain rounded-md"
              />
            </div>
            <p className="max-w-md text-md text-black font-medium">
              Professionalism, integrity, empathy, and excellence
            </p>
          </div>
        </div>
      </div>
      <OurServices />
      <OurClients />
      <Testimonials />
      <Newsletter />
      <Celebrate />
    </>
  );
};

export default page;
