import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faq = () => {
  return (
    <div className="flex flex-col w-full items-center bg-[#EBEBEB] gap-6 px-14 py-16">
      <h1 className="text-[#0071B3] text-[30px] pb-3 font-semi-bold font-(family-name:--font-oleo)">
        Frequently Asked Questions
      </h1>

      {/* Accordion */}

      <div className="flex w-175 items-center mx-14 ">
        <Accordion
          type="single"
          collapsible
          className="w-full bg-[#FAFBFF] px-5"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex ">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#0071B3] rounded-full" />
                <p className="text-black font-medium text-lg">
                  What types of events do you plan?
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pl-9">
              <p className="text-base text-black font-normal">
                Our expertise encompasses Corporate & Specialized events as well
                as Weddings and social events.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="flex ">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#0071B3] rounded-full" />
                <p className="text-black font-medium text-lg">
                  How far in advance should I book your services?
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pl-9">
              <p className="text-base text-black font-normal">
                We will love to be on board as early as the idea pops out so we
                can help you with the ideation, conceptualization & execution
                processes. Ideally, we would recommend a minimum of 3–6 months
                in advance for larger events. However, we’re happy to
                accommodate last-minute planning if our schedule allows.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="flex ">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#0071B3] rounded-full" />
                <p className="text-black font-medium text-lg">
                  Do you offer full-service planning, or can I choose à la carte
                  options?
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pl-9">
              <p className="text-base text-black font-normal">
                Yes! We offer both full-service event planning and customizable
                packages. Whether you need us to handle everything from start to
                finish or just need help with specific parts (e.g. decor, mobile
                tent set up etc.), we’ve got you covered.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="flex ">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#0071B3] rounded-full" />
                <p className="text-black font-medium text-lg">
                  Do you work with specific venues or vendors?
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pl-9">
              <p className="text-base text-black font-normal">
                We have a network of trusted vendors and venues we love to work
                with, but we’re also happy to work with your preferred contacts
                or explore new options that fit your vision and budget.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="flex ">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#0071B3] rounded-full" />
                <p className="text-black font-medium text-lg">
                  What areas do you serve?
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pl-9">
              <p className="text-base text-black font-normal">
                Our head office is based in Lagos. We have a few branches and
                sister companies all over Nigeria (which has made our services
                nationwide over the years) and we have our international branch
                in Manchester United Kingdom.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="flex ">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#0071B3] rounded-full" />
                <p className="text-black font-medium text-lg">
                  How much do your services cost?
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pl-9">
              <p className="text-base text-black font-normal">
                We charge based on the scope and size of the event. We offer
                very transparent, customized quotes after an initial
                consultation. Please reach out to us for a free quote.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="flex ">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#0071B3] rounded-full" />
                <p className="text-black font-medium text-lg">
                  What happens during the first consultation?
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pl-9">
              <p className="text-base text-black font-normal">
                The first consultation is a casual chat to understand you/your
                brand, your project or event, the objective, your ideas, and
                budget. It’s also a chance for you to ask questions and see if
                we’re the right fit. No obligation — just a conversation
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="flex ">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#0071B3] rounded-full" />
                <p className="text-black font-medium text-lg">
                  Can you help with virtual or hybrid events?
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pl-9">
              <p className="text-base text-black font-normal">
                Absolutely! We have experience planning virtual and hybrid
                events, and can provide tools, tech support, and creative
                solutions to make them engaging and seamless.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="flex ">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#0071B3] rounded-full" />
                <p className="text-black font-medium text-lg">
                  Do you handle permits, insurance, and event licenses?
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pl-9">
              <p className="text-base text-black font-normal">
                Yes, we do that on behalf of our clients. We also can guide you
                through the process and help coordinate the necessary permits
                and insurance, depending on your event type and location.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger className="flex ">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#0071B3] rounded-full" />
                <p className="text-black font-medium text-lg">
                  How do I get started?
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pl-9">
              <p className="text-base text-black font-normal">
                Just head over to our [Contact Page] and send us a message!
                We’ll get back to you quickly to set up your free consultation.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
