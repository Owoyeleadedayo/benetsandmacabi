import Celebrate from "@/components/Celebrate";
import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";
import { MailOpen, MapPin, Smartphone } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex relative h-125 bg-[url('/img/con.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute flex flex-col w-full h-full justify-center items-center px-10 md:px-20 mt-10 gap-3">
          <p className="text-2xl md:max-w-lg md:text-5xl text-[#FFF] font-(family-name:--font-oleo) text-center capitalize">
            Contact Us
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 items-center justify-center my-15 px-14">
        <div className="flex justify-center items-center gap-6">
          <div className="flex border border-[#E4EBF2] justify-center items-center p-4 rounded-full">
            <Smartphone size={30} className="text-[#0071B3]" />
          </div>
          <div className="flex flex-col gap">
            <p className="text-base text-black font-medium">014542856</p>
            <p className="text-base text-black font-medium">
              +234 808 477 8525
            </p>
            <p className="text-base text-black font-medium">
              +234 806 639 4363
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <div className="flex border border-[#E4EBF2] justify-center items-center p-4 rounded-full">
            <MapPin size={30} className="text-[#0071B3]" />
          </div>
          <div className="flex flex-col gap">
            <p className="text-base text-black font-medium">
              6, Gbajobi Street off Balogun
            </p>
            <p className="text-base text-black font-medium">
              Street, Ikeja Lagos,
            </p>
            <p className="text-base text-black font-medium">23401, Nigeria </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <div className="flex border border-[#E4EBF2] justify-center items-center p-4 rounded-full">
            <MailOpen size={30} className="text-[#0071B3]" />
          </div>
          <div className="flex flex-col gap">
            <p className="text-base text-black font-medium">
              info@makabisandbanet.com
            </p>
            <p className="text-base text-black font-medium">
              makabisandbanet@gmail.com
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
      <Newsletter />
      <Celebrate />
    </>
  );
};

export default page;
