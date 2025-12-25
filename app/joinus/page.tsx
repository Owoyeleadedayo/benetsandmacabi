import Celebrate from "@/components/Celebrate";
import JoinOurTeam from "@/components/JoinOurTeam";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
    const experience = [
        {
            id: 1,
            title: "Hosts & Hostesses",
            desc: "Deliver great guest experiences with style and professionalism."
        },
        {
            id: 2,
            title: "Event Coordinators",
            desc: "Support flawless event execution and logistics."
        }, 
        {
            id: 3,
            title: "Trainees / Interns",
            desc: "Learn, grow, and build a career in the event industry."
        },
        {
            id: 4,
            title: "Experienced Event Managers",
            desc: "Lead projects and deliver premium event solutions."
        },
        {
            id: 5,
            title: "Artisans / Decor Crew",
            desc: "Bring designs to life with skill and precision."
        }
    ]
  return (
    <>
      <div className="flex relative h-140 bg-[url('/img/team.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute flex flex-col w-full h-full justify-center items-center px-10 md:px-20 mt-10 gap-3">
          <p className="text-2xl md:max-w-lg md:text-5xl text-[#FFF] font-(family-name:--font-oleo) text-center capitalize">
            Join Our Team
          </p>
        </div>
      </div>
      <JoinOurTeam />
      <div className="flex flex-col pb-14 px-14 gap-6">
        <p className="text-[#0071B3] text-[40px] font-semi-bold font-(family-name:--font-oleo)">
          Explore Opportunities
        </p>
        <div className="flex flex-col px-5 gap-4">
          {experience.map((exp) => (
            <ul key={exp.id} className="list-disc">
            <li className="text-lg font-semibold text-black">{exp.title}</li>
            <p className="text-lg font-light text-black">{exp.desc}</p>
          </ul>
          ))}
        </div>
        <div className="flex">
            <p className="font-semibold text-lg text-black leading-6">Ready to shape unforgettable experiences? <br /> Join Makabis & Benet today.</p>
        </div>

        <div>
            <Button className="bg-[#0071B3] text-white text-base font-bold">Apply Now</Button>
        </div>
      </div>
      <Newsletter />
      <Celebrate />
    </>
  );
};

export default page;
