"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

export default function OurServices() {
  return (
    <div className="flex flex-col items-center bg-[#EBEBEB] gap-6 py-16">
      <h1 className="text-[#0071B3] text-[30px] font-semibold font-(family-name:--font-quattrocento)">
        Our Services
      </h1>

      <div className="w-full max-w-6xl px-4 md:px-12 overflow-visible">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          navigation
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <ServiceCard
              image="/img/about.jpeg"
              title="Event Management"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServiceCard
              image="/img/serve.jpg"
              title="Concept Development"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServiceCard image="/img/about.jpeg" />
          </SwiperSlide>

          <SwiperSlide>
            <ServiceCard image="/img/serve.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

function ServiceCard({ image, title }: any) {
  return (
    <div className="relative h-125 w-full rounded-md overflow-hidden group cursor-pointer">
      <Image src={image} alt="service" fill className="object-cover" />

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 z-10" />

      {title && (
        <p className="absolute bottom-3 px-3 text-xl font-semibold text-white ">
          {title}
        </p>
      )}

      <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 bg-[#0071B3] text-white font-medium rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
        Explore
      </button>
    </div>
  );
}


