"use client";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navPages = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/projects",
      name: "Projects",
    },
    {
      link: "/services",
      name: "Services",
    },
    {
      link: "/about",
      name: "About Us",
    },
    {
      link: "/contact",
      name: "Contact Us",
    },
  ];

  const pathname = usePathname();
  return (
    <>
      <div className="flex justify-between bg-black items-center py-5 px-14 sticky top-0 z-100 transition-shadow duration-300">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src="/navbar.png"
              alt="logo"
              height={30}
              width={120}
              className="object-cover cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex items-center gap-5">
      {navPages.map((page) => {
        const isActive = pathname === page.link;

        return (
          <Link href={page.link} key={page.name}>
            <p
              className={`font-semi-bold text-lg transition-colors ${
                isActive ? "text-blue-500" : "text-white"
              }`}
            >
              {page.name}
            </p>
          </Link>
        );
      })}
    </div>
      </div>
    </>
  );
};

export default Navbar;
