import Image from "next/image";

const clients = [
  { src: "/img/client2.png", h: "h-27 md:h-32.5", w: "w-30 md:w-32.5" },
  { src: "/img/client3.png", h: "h-28 md:h-35", w: "w-40 md:w-50" },
  { src: "/img/client.png", h: "h-35 md:h-40", w: "w-40 md:w-50" },
  { src: "/img/client4.png", h: "h-35 md:h-40", w: "w-40 md:w-50" },
  { src: "/img/sponsor.jpeg", h: "h-35 md:h-40", w: "w-40 md:w-50" },
  { src: "/img/sponsor2.jpeg", h: "h-35 md:h-40", w: "w-40 md:w-50" },
];

const OurClients = () => {
  return (
    <div className="flex flex-col items-center justify-center my-15 gap-2">
      <h2 className="text-[#0071B3] text-[30px] font-semibold font-(family-name:--font-quattrocento)">
        Some of our client
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-8 xl:gap-16 px-8">
        {clients.map((client, i) => (
          <div key={i} className={`relative ${client.h} ${client.w}`}>
            <Image
              src={client.src}
              alt="Client"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
