import Image from "next/image";
import React from "react";

const ProjectsContent = () => {
  return (
    <div className="flex flex-col bg-[#EBEBEB]">

      <div className="flex flex-col pb-20 px-5 md:px-20 gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 ">
          <div className="relative w-full md:w-150 h-100 md:h-162.5">
            <Image
              src="/img/pro1.jpg"
              alt="display"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-75">
              <Image
                src="/img/pro2.jpg"
                alt="display"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-75 ">
              <Image
                src="/img/pro3.jpg"
                alt="display"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-81.25 ">
              <Image
                src="/img/pro5.jpg"
                alt="display"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-81.25 ">
              <Image
                src="/img/pro6.jpg"
                alt="display"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative w-full md:w-150 h-85">
            <Image
              src="/img/pro11.jpg"
              alt="display"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full md:w-150 h-85">
            <Image
              src="/img/pro12.jpg"
              alt="display"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full md:w-150 h-85">
            <Image
              src="/img/pro13.jpg"
              alt="display"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full md:w-150 h-85">
            <Image
              src="/img/pro14.jpg"
              alt="display"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 ">
          <div className="relative w-full md:w-150 h-100 md:h-162.5">
            <Image
              src="/img/pro24.jpg"
              alt="display"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-75">
              <Image
                src="/img/pro25.jpg"
                alt="display"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-75 ">
              <Image
                src="/img/pro26.jpg"
                alt="display"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-81.25 ">
              <Image
                src="/img/pro27.jpg"
                alt="display"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-81.25 ">
              <Image
                src="/img/pro28.jpg"
                alt="display"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative w-full md:w-150 h-85">
            <Image
              src="/img/banner1.jpg"
              alt="display"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full md:w-150 h-85">
            <Image
              src="/img/serr.jpg"
              alt="display"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full md:w-150 h-85">
            <Image
              src="/img/abb.jpeg"
              alt="display"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full md:w-150 h-85">
            <Image
              src="/img/abbs.jpg"
              alt="display"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 ">
          <div className="relative w-full md:w-150 h-100 md:h-162.5">
            <Image
              src="/img/pro35.jpeg"
              alt="display"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-75">
              <Image
                src="/img/pro32.jpg"
                alt="display"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-75 ">
              <Image
                src="/img/pro34.jpg"
                alt="display"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-81.25 ">
              <Image
                src="/img/pro33.jpg"
                alt="display"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative w-full h-81.25 ">
              <Image
                src="/img/pro36.jpg"
                alt="display"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
