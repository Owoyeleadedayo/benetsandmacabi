import Image from "next/image";

const JoinOurTeam = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center my-20">
        <div className="flex flex-col max-w-xl bg-[#EBEBEB] py-5 px-6 rounded-md gap-3 z-3 -mr-10 shadow-md">
          <p className="text-[#0071B3] text-[30px] font-semi-bold font-(family-name:--font-oleo)">
            Join Our Team
          </p>
           <p className="text-black font-medium">  Be part of creativity, excellence & unforgettable experiences.</p>
            <span className="text-black font-medium">
              At Makabis & Benet, our people are our greatest asset. We create a
              space where potential is enhanced, creativity is nurtured, and
              experience is maximized. We are driven by passion, collaboration,
              and excellence, and we believe everyone deserves the opportunity
              to grow.
            </span>{" "}
            <p className="text-black font-medium">If you are energetic, resourceful, and ready to make an impact, we
            want to meet you.</p>
        </div>
        <div className="relative h-137.5 w-200">
          <Image
            src="/img/das.jpg"
            alt="display"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default JoinOurTeam;
