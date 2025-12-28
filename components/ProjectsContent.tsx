import Image from 'next/image'
import React from 'react'

const ProjectsContent = () => {
  return (
    <div className="flex flex-col items-center bg-[#EBEBEB]">
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

      <div className="flex flex-col pt-5">
        <div className="relative flex flex-col lg:flex-row gap-6">
          <div className="relative w-100 md:w-150 h-70 md:h-100 mt-0 md:mt-8">
            <Image
              src="/img/f10.jpeg"
              alt="project"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative w-100 lg:w-150 h-70 md:h-117 shrink-0">
            <Image
              src="/img/f8.jpg"
              alt="project"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative hidden md:hidden lg:block lg:mt-8 flex-1 md:w-46  md:h-100 shrink-0 overflow-hidden">
            <Image
              src="/img/f3.jpg"
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
            src="/img/f3.jpg"
            alt="project"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-100 md:w-150 h-70 md:h-117 px-8">
          <Image
            src="/img/f8.jpg"
            alt="project"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-100 md:w-150 h-70 md:h-117 overflow-hidden">
          <Image
            src="/img/f12.jpg"
            alt="project"
            fill
            className="object-cover"
          />
        </div>
      </div>

      </div>
    </div>
  )
}

export default ProjectsContent
