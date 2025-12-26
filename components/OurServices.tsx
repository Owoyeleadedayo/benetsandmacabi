"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

function NextArrow(props: any) {
    const { onClick, currentSlide, slideCount } = props;
  
    const isDisabled = currentSlide >= slideCount - 1; 
  
    return (
      <div
        onClick={isDisabled ? undefined : onClick}
        className={`absolute -right-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition
          ${
            isDisabled
              ? "bg-gray-400 cursor-not-allowed opacity-50"
              : "bg-[#0071B3] text-white cursor-pointer"
          }
        `}
      >
        <ArrowRight />
      </div>
    );
  }
  

  function PrevArrow(props: any) {
    const { onClick, currentSlide } = props;
  
    const isDisabled = currentSlide === 0;
  
    return (
      <div
        onClick={isDisabled ? undefined : onClick}
        className={`absolute -left-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition
          ${
            isDisabled
              ? "bg-gray-400 cursor-not-allowed opacity-50"
              : "bg-[#0071B3] text-white cursor-pointer"
          }
        `}
      >
        <ArrowLeft />
      </div>
    );
  }
  

const OurServices = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true, 
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center bg-[#EBEBEB] gap-6 py-16">
      <h1 className="text-[#0071B3] text-[30px]  font-semi-bold font-(family-name:--font-oleo)">
        Our Services
      </h1>

      <div className="w-full max-w-6xl px-12">
        <Slider {...settings}>
          <div className="px-10">
            <div className="relative h-125 w-full">
              <Image
                src="/img/about.jpeg"
                alt="display"
                fill
                className="object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <p className="absolute text-xl bottom-3 px-3 font-semibold text-white">Event Management</p>
            </div>
          </div>
          <div className="px-10">
            <div className="relative h-125 w-full">
              <Image
                src="/img/serve.jpg"
                alt="display"
                fill
                className="object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <p className="absolute text-xl bottom-3 px-3 font-semibold text-white">Concept Development</p>
            </div>
          </div>
          <div className="px-4 md:px-10">
            <div className="relative h-125 w-full">
              <Image
                src="/img/about.jpeg"
                alt="display"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
          <div className="px-10">
            <div className="relative h-125 w-full">
              <Image
                src="/img/serve.jpg"
                alt="display"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurServices;
