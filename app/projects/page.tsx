import Celebrate from "@/components/Celebrate";
import Newsletter from "@/components/Newsletter";
import OurClients from "@/components/OurClients";
import Testimonials from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex relative h-[500px] bg-[url('/img/por.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute flex flex-col w-full h-full justify-center items-center px-10 md:px-20 mt-10 gap-3">
          <p className="text-2xl md:max-w-lg md:text-5xl text-[#FFF] font-(family-name:--font-oleo) text-center capitalize">
            Projects
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#EBEBEB] gap-6 py-16">
        <h1 className="text-[#0071B3] text-[30px]  font-semi-bold font-(family-name:--font-oleo)">
          Projects
        </h1>
        <p className="flex w-full px-20 text-md font-medium text-black ">
          We specialize in creating experiences that go beyond expectations.
          From corporate and specialized events — such as conferences, product
          launches, AGMs, fashion shows, and end-of-year parties — to social
          celebrations including weddings, birthdays, and grand openings, our
          work is guided by creativity, precision, and passion. With about two
          decades of industry experience, our diverse team of professionals
          brings together expertise in both the technical and creative sides of
          event production. We collaborate seamlessly to deliver events that
          flow effortlessly from concept to completion. At Makabis & Benet,
          every project begins with your vision — and ends with unforgettable
          memories.
        </p>
      </div>
      <OurClients />
      <Testimonials />
      <Newsletter />
      <Celebrate />
    </>
  );
};

export default page;
