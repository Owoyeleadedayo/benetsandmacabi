import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Projects = () => {
  return (
    <div className="flex flex-col items-center bg-[#EBEBEB] py-16 my-16">
      <h1 className="text-[#0071B3] text-[30px]  font-semi-bold font-(family-name:--font-oleo)">
        Projects
      </h1>

      <div className="flex flex-col pt-5">
        <div className="relative flex flex-col lg:flex-row gap-6">
          <div className="relative w-100 md:w-150 h-70 md:h-117">
            <Image
              src="/img/f4.jpg"
              alt="project"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-100 lg:w-150 h-70 md:h-117 shrink-0">
            <Image
              src="/img/f2.jpg"
              alt="project"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative hidden md:hidden lg:block lg:mt-8 flex-1 md:w-46  md:h-100 shrink-0 overflow-hidden">
            <Image
              src="/img/serve.jpg"
              alt="project"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col px-5 md:px-0 pt-5 md:pt-0">
      <div className="relative flex flex-col lg:flex-row gap-6">
        <div className="relative w-46 h-117 hidden md:hidden lg:block overflow-hidden">
          <Image
            src="/img/f9.jpg"
            alt="project"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-100 md:w-150 h-70 md:h-117 px-8">
          <Image
            src="/img/f6.jpg"
            alt="project"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-100 md:w-150 h-70 md:h-117 overflow-hidden">
          <Image
            src="/img/f7.jpg"
            alt="project"
            fill
            className="object-cover"
          />
        </div>
      </div>

      </div>
      <div className="flex justify-center items-center my-8">
        <Link href={"/projects"}>
          <Button className="bg-[#0071B3] text-white text-base font-medium cursor-pointer">
            See More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
