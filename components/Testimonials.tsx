import { Carousel } from "antd";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="flex flex-col bg-[#EBEBEB] items-center justify-center py-15 gap-6">
        <h2 className="text-[#0071B3] text-[30px] font-semi-bold font-(family-name:--font-oleo)">
          Testimonials
        </h2>
        <div className="w-full max-w-[600px]">
          <Carousel dots={false} slidesToShow={1} autoplay autoplaySpeed={4000}>
            <div className="flex flex-col max-w-2xl w-full bg-white justify-center items-center px-6 py-8 mx-auto shadow-lg rounded-sm">
              <p className="text-md font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
              <div className="flex w-full justify-between items-center mt-4">
                <div className="flex gap-3">
                  <div className="relative w-[100px] h-[100px] border-4 border-[#0071B3] rounded-full">
                    <Image
                      src="/img/cc.jpg"
                      alt="display"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-xl text-black leading-5 font-(family-name:--font-oleo)">
                      Zhon Done
                    </p>
                    <p className="text-xl text-[#0071B3] font-medium">
                      Customer
                    </p>
                  </div>
                </div>

                <div className="relative w-[50px] h-[50px] mt-6">
                  <Image
                    src="/img/Container.png"
                    alt="display"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col max-w-2xl w-full bg-white justify-center items-center px-6 py-8 mx-auto shadow-lg rounded-sm">
              <p className="text-md font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
              <div className="flex w-full justify-between items-center mt-4">
                <div className="flex gap-3">
                  <div className="relative w-[100px] h-[100px] border-4 border-[#0071B3] rounded-full">
                    <Image
                      src="/img/cc.jpg"
                      alt="display"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-xl text-black leading-5 font-(family-name:--font-oleo)">
                      Zhon Done
                    </p>
                    <p className="text-xl text-[#0071B3] font-medium">
                      Customer
                    </p>
                  </div>
                </div>

                <div className="relative w-[50px] h-[50px] mt-6">
                  <Image
                    src="/img/Container.png"
                    alt="display"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
