import About from "@/components/About";
import Celebrate from "@/components/Celebrate";
import Newsletter from "@/components/Newsletter";
import OurClients from "@/components/OurClients";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex relative min-h-[50vh] md:h-125 bg-[url('/img/about.jpg')] bg-no-repeat bg-cover bg-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 px-5 md:px-0 md:gap-10">
          <div className="flex items-center gap-5">
            <div className="relative h-25 w-25">
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
            <div className="relative h-25 w-25">
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

          <div className="col-span-1 md:col-span-2 flex items-center justify-center gap-5">
            <div className="relative h-25 w-25">
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
      <div className="flex w-full py-5 md:py-10 px-5 md:px-0  items-center justify-center">
        <p className="font-semibold text-center text-lg md:text-2xl text-black">
          Want to be part of our creative team?{" "}
          <Link href={"/joinus"} className="text-[#0071B3] cursor-pointer hover:text-[#134a67]">
            Join Our Team
          </Link>{" "}
        </p>
      </div>
      <Testimonials />
      <Newsletter />
      <Celebrate />
    </>
  );
};

export default page;
