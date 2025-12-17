import AboutUs from "@/components/AboutUs";
import Celebrate from "@/components/Celebrate";
import Newsletter from "@/components/Newsletter";
import OurClients from "@/components/OurClients";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex relative h-screen bg-[url('/img/banner.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute flex flex-col w-full h-full justify-center items-center px-10 md:px-20 mt-20 gap-3">
          <p className="text-2xl max-w-[250px] md:max-w-lg md:text-5xl text-[#FFF] font-(family-name:--font-oleo) text-center capitalize">Moments into Memories Since 2009</p>
          <div>
          <Button className="bg-[#0071B3] font-semi-bold text-white text-xl">Plan Your Events</Button>
        </div>
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
