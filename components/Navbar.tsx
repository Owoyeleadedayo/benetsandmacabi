"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navPages = [
    { link: "/", name: "Home" },
    { link: "/projects", name: "Projects" },
    { link: "/services", name: "Services" },
    { link: "/about", name: "About Us" },
    { link: "/contact", name: "Contact Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black">
      <div className="flex items-center justify-between px-6 md:px-14 py-5">
        <Link href="/">
          <Image
            src="/navbar.png"
            alt="logo"
            height={30}
            width={120}
            className="cursor-pointer"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navPages.map((page) => {
            const isActive = pathname === page.link;
            return (
              <Link key={page.name} href={page.link}>
                <span
                  className={`font-semibold text-lg transition-colors ${
                    isActive ? "text-blue-500" : "text-white"
                  }`}
                >
                  {page.name}
                </span>
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white"
        >
          <Menu size={28} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-100 bg-black flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Image
                src="/navbar.png"
                alt="logo"
                height={30}
                width={120}
              />
              <button onClick={() => setOpen(false)} className="text-white">
                <X size={30} />
              </button>
            </div>

            <div className="flex flex-col px-6 py-8 gap-6">
              {navPages.map((page, index) => {
                const isActive = pathname === page.link;
                return (
                  <motion.div
                    key={page.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Link
                      href={page.link}
                      onClick={() => setOpen(false)}
                    >
                      <span
                        className={`text-2xl font-semibold ${
                          isActive ? "text-blue-500" : "text-white"
                        }`}
                      >
                        {page.name}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
