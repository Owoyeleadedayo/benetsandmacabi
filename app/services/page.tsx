import Celebrate from "@/components/Celebrate";
import Newsletter from "@/components/Newsletter";
import OurClients from "@/components/OurClients";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
  const content = [
    {
      id: 1,
      title: "Concept Development",
      img: "/img/ser.jpg",
      desc: "We help you develop unique concepts to adequately meet your events’ objectives. Our versatility, coupled with our attention to the objectives of your event, helps us to consistently achieve impeccable delivery.",
    },
    {
        id: 2,
        title: "Event Management",
        img: "/img/bv.jpg",
        desc: "The seamless transition of your event from the idea stage to reality. We help establish the nature of your event, profile and book professional vendors, establish timelines & deadlines as well as implement on-the-day.",
      },
      {
        id: 3,
        title: "Venue Design",
        img: "/img/serve.jpg",
        desc: "The venue ambience is the first impression guests get on arrival, and the first impression they say last longer. Having this in mind, our experts consistently design every venue for a subtle, breath taking and apposite ambiance.",
      },
      {
        id: 4,
        title: "Branding & Digital Visibility",
        img: "/img/por.jpg",
        desc: "We utilize both print & electronic tools in delivering our project objectives; LED screens, interactive media tools, visual display and digital banner, print and electronic media etc.",
      },
  ];
  return (
    <>
      <div className="flex relative min-h-[50vh] md:h-125 bg-[url('/img/services.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute flex flex-col w-full h-full justify-center items-center px-10 md:px-20 mt-10 gap-3">
          <p className="text-2xl md:max-w-lg md:text-5xl text-[#FFF] font-(family-name:--font-oleo) text-center capitalize">
            Services
          </p>
        </div>
      </div>
      {content.map((content) => (
        <div key={content.id} className="flex flex-col bg-[#EBEBEB] py-6 m-5 md:m-14 justify-center items-center rounded-sm shadow-md gap-6">
        <p className="text-[#0071B3] text-[25px] md:text-[30px] text-center font-semibold">
          {content.title}
        </p>
        <div className="relative w-full h-100 md:h-137.5">
          <Image
            src={content.img}
            alt="Client"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-row w-full justify-start md:justify-between items-start md:items-center px-6 gap-5 md:gap-0">
          <p className="max-w-2xl text-md font-medium text-black">
            {content.desc}
          </p>
          <Button className="bg-[#0071B3] font-semibold text-white text-md cursor-pointer">
            Sign Up
          </Button>
        </div>
      </div>
      ))}
      <OurClients />
      <Testimonials />
      <Newsletter />
      <Celebrate />
    </>
  );
};

export default page;
