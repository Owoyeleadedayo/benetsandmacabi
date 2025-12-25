import Faq from "./Faq";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center bg-[#EBEBEB] gap-6 py-16">
      <h1 className="text-[#0071B3] text-[30px] pb-3 font-semi-bold font-(family-name:--font-oleo)">
        Contact Form
      </h1>
      <form action="" className="grid grid-rows-2 gap-6">
        <div className="grid grid-cols-2 gap-6">
          <Input
            className="bg-white w-137.5 border-0 rounded-none"
            placeholder="Your Name"
            type={"text"}
          />

          <Input
            className="bg-white w-137.5 border-0 rounded-none"
            placeholder="Your Email"
            type={"email"}
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Input
            className="bg-white w-137.5 border-0 rounded-none"
            placeholder="Your Phone"
            type={"tel"}
          />

          <Input
            className="bg-white w-137.5 border-0 rounded-none"
            placeholder="Your Subject"
            type={"text"}
          />
        </div>
        <div>
            <Textarea className="h-75 bg-white border-0 rounded-none" placeholder="Message" />
        </div>
        <div className="flex justify-center items-center">
        <Button className="bg-[#0071B3] text-white text-base font-medium">Submit</Button>
        </div>
      </form>
      <Faq />
    </div>
  );
};

export default ContactForm;
