import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0071B3] w-full flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 justify-center pt-16 md:px-14 px-8 gap-10 md:gap-10 xl:gap-20">
        <div className="flex flex-col gap-2 md:gap-6 ">
          <Link href={"/"} className="flex justify-start items-start">
            <Link href="/">
              <Image
                src="/img/newLogo.png"
                alt="Makabis & Benet logo"
                height={100}
                width={180}
                className="cursor-pointer object-contain"
              />
            </Link>
          </Link>
          <div className="flex gap-1 md:gap-2">
            <div className="flex p-2 bg-black rounded-full">
              <a
                href="https://www.facebook.com/share/1YQqP2dYMb/"
                target="_blank"
              >
                <Facebook color="white" />
              </a>
            </div>
            <div className="flex p-2 bg-black rounded-full">
              <Twitter color="white" />
            </div>
            <div className="flex p-2 bg-black rounded-full">
              <a
                href="https://www.instagram.com/impressionsbymakabis?igsh=YmUyaWJhZnV5Nnli"
                target="_blank"
              >
                <Instagram color="white" />
              </a>
            </div>
            <div className="flex p-2 bg-black rounded-full">
              <a
                href="https://youtube.com/@makabisbenet3196?si=FyfoCiVMaUzx2IFF"
                target="_blank"
              >
                <Youtube color="white" />
              </a>
            </div>
            <div className="flex p-2 bg-black rounded-full">
              <a
                href="https://www.instagram.com/makabisandbenet?igsh=Y2Fna2xjdTJjZ3Ez"
                target="_blank"
              >
                <Instagram color="white" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-white text-lg font-medium">Quick link</p>
          <div className="flex flex-col gap-2">
            <p className="text-white text-sm md:text-base font-normal">About Us</p>
            <p className="text-white text-sm md:text-base font-normal">Projects</p>
            <p className="text-white text-sm md:text-base font-normal">Contact Us</p>
            <p className="text-white text-sm md:text-base font-normal">Services</p>
            <p className="text-white text-sm md:text-base font-normal">Careers</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-white text-lg font-medium">Contact</p>
          <div className="flex w-full flex-col gap-2">
            <div className="flex items-center gap-6">
              <div>
                <Mail color="white" />
              </div>
              <p className="text-white text-sm md:text-base font-normal">
                info@makabisandbanet.com <br /> makabisandbanet@gmail.com
              </p>
            </div>
            <div className="flex items-center w-full gap-6">
              <Phone size={25} className="text-white" />
              <div className="flex flex-col w-full gap">
                <p className="text-sm md:text-base text-white font-normal">
                  014542856
                </p>
                <p className="w-full md:max-w-4xl text-sm md:text-base text-white font-normal">
                  +234 808 477 8525
                </p>
                <p className="text-sm md:text-base text-white font-normal">
                  +234 806 639 4363
                </p>
              </div>
            </div>
            <div className="flex w-full items-center  gap-6">
              <MapPin size={25} className="text-white" />
              <div className="flex flex-col gap">
                <p className="text-sm md:text-base text-white font-normal">
                  6, Gbajobi Street off Balogun
                </p>
                <p className="text-sm md:text-base text-white font-normal">
                  Street, Ikeja Lagos,
                </p>
                <p className="text-sm md:text-base text-white font-normal">
                  23401, Nigeria{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-4 ml-0 xl:ml-20">
          <p className="text-white text-lg font-medium">Youtube</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              "qB6xWdaVuTs",
              "2FwNu5rh6-U",
              "4j3e1HJc05E",
              "97h3iEg705M",
              "tmHL-ht8NcI",
              "BoM5cPLYQoY",
            ].map((id) => (
              <a
                key={id}
                href={`https://www.youtube.com/watch?v=${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-21.25 block group overflow-hidden"
              >
                <Image
                  src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                  alt="Makabis & Benet YouTube video"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 68 48"
                    width="36"
                    height="25"
                    fill="none"
                  >
                    <path
                      d="M66.5 7.5C65.7 4.7 63.5 2.5 60.7 1.7 55.4 0 34 0 34 0S12.6 0 7.3 1.7C4.5 2.5 2.3 4.7 1.5 7.5 0 13 0 24 0 24s0 11 1.5 16.5c.8 2.8 3 5 5.8 5.8C12.6 48 34 48 34 48s21.4 0 26.7-1.7c2.8-.8 5-3 5.8-5.8C68 35 68 24 68 24s0-11-1.5-16.5z"
                      fill="#FF0000"
                    />
                    <path d="M27 34l18-10-18-10v20z" fill="#fff" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border border-[#FAF8F738]" />
      <div className="flex justify-center items-center pt-4 md:pt-6 pb-12">
        <p className="text-sm md:text-base text-white font-normal">
          © 2025 MAKABIS AND BANET. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
