import { Facebook, Instagram, Mail, MapPin, Phone, Smartphone, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0071B3] w-full flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-5 justify-center pt-16 md:px-14 px-8 gap-10 md:gap-20">
        <div className="flex flex-col gap-6 "> 
          <Link href={"/"} className="flex justify-start items-start">
            <div className="relative  w-50 h-17.5">
              <Image
                src="/img/logo.png"
                alt="logo"
                fill
                className="object-contain border cursor-pointer"
              />
            </div>
          </Link>
          <div className="flex gap-2">
            <div className="flex p-2 bg-black rounded-full">
            <Facebook color="white" />
            </div>
            <div className="flex p-2 bg-black rounded-full">
            <Twitter color="white" />
            </div>
            <div className="flex p-2 bg-black rounded-full">
            <Youtube color="white" />
            </div>
            <div className="flex p-2 bg-black rounded-full">
            <Instagram color="white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-white text-lg font-medium">Quick link</p>
          <div className="flex flex-col gap-2">
            <p className="text-white text-base font-normal">About Us</p>
            <p className="text-white text-base font-normal">Projects</p>
            <p className="text-white text-base font-normal">Contact Us</p>
            <p className="text-white text-base font-normal">Services</p>
            <p className="text-white text-base font-normal">Careers</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-white text-lg font-medium">Contact</p>
          <div className="flex w-full flex-col gap-2">
            <div className="flex items-center gap-6">
              <div>
                <Mail color="white" />
              </div>
              <p className="text-white text-base font-normal">
                info@makabisandbanet.com <br /> makabisandbanet@gmail.com
              </p>
            </div>
            <div className="flex items-center w-full gap-6">
              <Phone size={25} className="text-white" />
              <div className="flex flex-col w-full gap">
                <p className="text-base text-white font-normal">014542856</p>
                <p className="max-w-4xl text-base text-white font-normal">
                  +234 808 477 8525
                </p>
                <p className="text-base text-white font-normal">
                  +234 806 639 4363
                </p>
              </div>
            </div>
            <div className="flex w-full items-center  gap-6">
              <MapPin size={25} className="text-white" />
              <div className="flex flex-col gap">
                <p className="text-base text-white font-normal">
                  6, Gbajobi Street off Balogun
                </p>
                <p className="text-base text-white font-normal">
                  Street, Ikeja Lagos,
                </p>
                <p className="text-base text-white font-normal">
                  23401, Nigeria{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-4 ml-0 md:ml-20">
          <p className="text-white text-lg font-medium">Instagram</p>
          <div className="grid grid-cols-3 gap">
            <div className="relative w-28.75 h-21.25">
                <Image src="/img/f2.jpg" alt="footer" fill className="object-contain rounded-md" />
            </div>
            <div className="relative w-28.75 h-21.25">
                <Image src="/img/f4.jpg" alt="footer" fill className="object-contain rounded-md" />
            </div>
            <div className="relative w-28.75 h-21.25">
                <Image src="/img/f1.jpg" alt="footer" fill className="object-contain rounded-md" />
            </div>
            <div className="relative w-28.75 h-21.25">
                <Image src="/img/f5.jpg" alt="footer" fill className="object-cover rounded-md" />
            </div>
            <div className="relative w-28.75 h-21.25">
                <Image src="/img/team.jpg" alt="footer" fill className="object-contain rounded-md" />
            </div>
            <div className="relative w-28.75 h-21.25">
                <Image src="/img/f3.jpg" alt="footer" fill className="object-contain rounded-md" />
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#FAF8F738]" />
      <div className="flex justify-center items-center pt-6 pb-12">
        <p className="text-base text-white font-normal">
          © 2025 MAKABIS AND BANET. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
