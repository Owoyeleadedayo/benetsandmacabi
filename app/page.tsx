"use client"
import AboutUs from "@/components/AboutUs";
import Celebrate from "@/components/Celebrate";
import Newsletter from "@/components/Newsletter";
import OurClients from "@/components/OurClients";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="flex relative min-h-[80vh] md:min-h-screen bg-[url('/img/banner.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute flex flex-col w-full h-full justify-center items-center px-10 md:px-20 mt-20 gap-3">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl max-w-62.5 md:max-w-lg md:text-5xl text-[#FFF] font-(family-name:--font-oleo) text-center capitalize leading-6 md:leading-12"
          >
            Moments into Memories Since 2009
          </motion.p>
          <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
            <Button className="bg-[#0071B3] font-semi-bold text-white text-base md:text-xl">
              Plan Your Events
            </Button>
          </motion.div>
        </div>
      </div>
      <AboutUs />
      <OurServices />
      <OurClients />
      <Testimonials />
      <Newsletter />
      <Celebrate />
    </>
  );
}
