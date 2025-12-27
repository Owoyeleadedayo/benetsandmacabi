import Faq from "./Faq";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center bg-[#EBEBEB] gap-4 lg:gap-6 py-16">
      <h1 className="text-[#0071B3] text-[30px] pb-3 font-semi-bold font-(family-name:--font-oleo)">
        Contact Form
      </h1>
      <form className="w-full max-w-5xl mx-auto grid grid-cols-1 gap-4 lg:gap-6 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <Input
            className="bg-white w-full border-0 rounded-none"
            placeholder="Your Name"
            type="text"
          />

          <Input
            className="bg-white w-full border-0 rounded-none"
            placeholder="Your Email"
            type="email"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <Input
            className="bg-white w-full border-0 rounded-none"
            placeholder="Your Phone"
            type="tel"
          />

          <Input
            className="bg-white w-full border-0 rounded-none"
            placeholder="Your Subject"
            type="text"
          />
        </div>

        <div>
          <Textarea
            className="bg-white border-0 rounded-none h-32 md:h-48 lg:h-64"
            placeholder="Message"
          />
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Button className="bg-[#0071B3] text-white text-base font-medium px-8 py-3">
            Submit
          </Button>
        </div>
      </form>

      <Faq />
    </div>
  );
};

export default ContactForm;
