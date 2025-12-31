"use client";
import AboutUs from "@/components/AboutUs";
import Celebrate from "@/components/Celebrate";
import Newsletter from "@/components/Newsletter";
import OurClients from "@/components/OurClients";
import OurServices from "@/components/OurServices";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Carousel } from "antd";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const banners = ["/img/banner1.jpg", "/img/banner2.jpg", "/img/banner3.jpg"];
  
  return (
    <>
      <div>
        <Carousel
          autoplay={{ dotDuration: true }}
          autoplaySpeed={5000}
          effect="fade"
          dots
        >
          {banners.map((img, index) => (
            <div key={index}>
              <div
                className="relative min-h-[60vh] md:min-h-[85vh] bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute flex flex-col w-full h-full justify-center items-center px-10 md:px-20 gap-3">
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-2xl max-w-75 md:max-w-xl md:text-6xl text-white text-center capitalize leading-6 md:leading-12 font-medium font-(family-name:--font-quattrocento)"
                  >
                    Moments into Memories Since 2009
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <Link href={"/contact"}>
                      <Button
                        className="bg-[#0071B3] text-white text-base md:text-xl cursor-pointer transition-all duration-300 ease-out
    hover:scale-105 hover:bg-[#005f99]
    active:scale-95"
                      >
                        Plan Your Events
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <AboutUs />
      <OurServices />
      <Projects />
      <OurClients />
      <Testimonials />
      <Newsletter />
      <Celebrate />
    </>
  );
}
