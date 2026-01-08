"use client";

import Celebrate from "@/components/Celebrate";
import Newsletter from "@/components/Newsletter";
import OurClients from "@/components/OurClients";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

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
      img: "/img/em.jpeg",
      desc: "The seamless transition of your event from the idea stage to reality. We help establish the nature of your event, profile and book professional vendors, establish timelines & deadlines as well as implement on-the-day.",
    },
    {
      id: 3,
      title: "Venue Design",
      img: "/img/vd.jpg",
      desc: "The venue ambience is the first impression guests get on arrival, and the first impression they say last longer. Having this in mind, our experts consistently design every venue for a subtle, breath taking and apposite ambiance.",
    },
    {
      id: 4,
      title: "Branding & Digital Visibility",
      img: "/img/services.jpg",
      desc: "We utilize both print & electronic tools in delivering our project objectives; LED screens, interactive media tools, visual display and digital banner, print and electronic media etc.",
    },
  ];
  return (
    <>
      <div className="flex relative min-h-[50vh] md:h-[85vh] bg-[url('/img/serr.jpg')] bg-no-repeat bg-cover bg-end">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute flex flex-col w-full h-full justify-center items-center px-10 md:px-20 gap-3">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:max-w-lg md:text-6xl text-[#FFF] font-medium font-(family-name:--font-quattrocento) text-center capitalize"
          >
            Our Services
          </motion.p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 md:p-14 ">
        {content.map((content) => (
          <div
            key={content.id}
            className="flex flex-col bg-[#EBEBEB] py-6 justify-center items-center rounded-sm shadow-md gap-6"
          >
            <p className="text-[#0071B3] text-[22px] md:text-[30px] text-center font-semibold">
              {content.title}
            </p>
            <div className="relative w-full h-80 shrink-0">
              <Image
                src={content.img}
                alt="Client"
                fill
                className="object-cover transition-transform duration-300 hover:scale-101 hover:brightness-105"
              />
            </div>

            <div className="flex flex-col w-full px-6 gap-6">
              <p className="text-base font-normal text-black">{content.desc}</p>
              <div className="flex justify-end items-end">
                <Button
                  className="bg-[#0071B3] text-white text-sm md:text-base cursor-pointer transition-all duration-300 ease-out
    hover:scale-105 hover:bg-[#005f99] active:scale-95"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Projects />
      <OurClients />
      <Testimonials />
      <Newsletter />
      <Celebrate />
    </>
  );
};

export default page;
