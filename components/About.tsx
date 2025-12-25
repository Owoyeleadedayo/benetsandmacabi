import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex w-full items-center justify-center my-15">
      <div className="flex flex-col max-w-xl bg-[#EBEBEB] py-5 px-6 rounded-md gap-3 z-3 -mr-10 shadow-md">
        <p className="text-[#0071B3] text-[30px] font-semi-bold font-(family-name:--font-oleo)">
          About Us
        </p>
        <p className="text-black text-md font-sm">
          Makabis & Benet is the project and event production arm of Makabis
          Group. Our vision is simply to be the most accessible and trusted
          event producer for today’s audiences — individuals and brands who
          appreciate class, creativity, and quality event solutions. We
          specialize in creating experiences that go beyond expectations. From
          corporate and specialized events — such as conferences, product
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
      <div className="relative h-137.5 w-125">
        <Image
          src="/img/about.jpeg"
          alt="display"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default About;
