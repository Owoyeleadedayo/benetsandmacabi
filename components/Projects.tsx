"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const imagesSet = [
  "/img/f4.jpg",
  "/img/f2.jpg",
  "/img/f6.jpg",
  "/img/serve.jpg",
  "/img/f11.jpg",
  "/img/f9.jpg",
  "/img/f6.jpg",
  "/img/f8.jpg",
  "/img/f7.jpg",
  "/img/f12.jpg",
];

  

const ImageItem = ({ src }: { src: string }) => (
  <div className="relative w-100 md:w-150 h-70 md:h-100 shrink-0">
    <Image src={src} alt="project" fill className="object-contain" />
  </div>
);

const Projects = () => {
  return (
    <div className="flex flex-col items-center bg-[#EBEBEB] py-16 my-16">
      <h1 className="text-[#0071B3] text-[30px] font-semibold font-(family-name:--font-quattrocento)">
        Projects
      </h1>

      <div className="overflow-x-auto overflow-y-hidden w-full pt-5 touch-pan-x scrollbar-hide">
        <motion.div
          className="flex gap-6"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          dragConstraints={{ left: -2000, right: 1000 }}
        >
          {[imagesSet].flatMap((set, index) =>
            [...set].map((src, idx) => (
              <ImageItem key={`${index}-${idx}`} src={src} />
            ))
          )}
        </motion.div>
      </div>

      <div className="flex justify-center items-center mt-8">
        <Link href={"/projects"}>
          <Button className="bg-[#0071B3] text-white text-base md:text-xl cursor-pointer transition-all duration-300 ease-out
    hover:scale-105 hover:bg-[#005f99]
    active:scale-95">
            See More
          </Button> 
        </Link>
      </div>
    </div>
  );
};

export default Projects;
