"use client"
import Celebrate from "@/components/Celebrate";
import Newsletter from "@/components/Newsletter";
import OurClients from "@/components/OurClients";
import ProjectsContent from "@/components/ProjectsContent";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      <div className="flex relative min-h-[50vh] md:h-[85vh] bg-[url('/img/por.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute flex flex-col w-full h-full justify-center items-center px-10 md:px-20 gap-3">
          <motion.p initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }} className="text-4xl md:max-w-lg md:text-6xl text-[#FFF] font-medium font-(family-name:--font-quattrocento) text-center capitalize">
           Our Projects
          </motion.p>
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#EBEBEB] gap-6 py-16">
        <h1 className="text-[#0071B3] text-[30px]  font-semibold font-(family-name:--font-quattrocento)">
          Projects
        </h1>
        <p className="flex w-full px-5 md:px-20 text-md font-normal text-black ">
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
      <ProjectsContent />
      <OurClients />
      <Testimonials />
      <Newsletter />
      <Celebrate />
    </>
  );
};

export default page;
