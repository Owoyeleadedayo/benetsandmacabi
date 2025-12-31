import Link from "next/link";
import { Button } from "./ui/button";

const Celebrate = () => {
  return (
    <>
      <div className="flex relative h-50 md:h-112.5 bg-[url('/img/banner.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute flex flex-col w-full h-full justify-center items-center px-10 md:px-20 pt-10 gap-2 md:gap-4">
          <p className="text-2xl max-w-70 md:max-w-xl md:text-5xl text-[#FFF] font-semibold font-(family-name:--font-quattrocento) text-center capitalize">
            Let’s Celebrate Your Event
          </p>
          <div>
            <Link href={"/contact"}>
              <Button className="bg-[#0071B3] text-white text-base md:text-xl cursor-pointer transition-all duration-300 ease-out
    hover:scale-105 hover:bg-[#005f99]
    active:scale-95">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Celebrate;
