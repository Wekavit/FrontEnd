"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Logo, Login, logoMobile } from "@/assets";
import Burger from "./Burger";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const Links = [
    { text: "Services", href: "#" },
    { text: "Entreprise", href: "#about" },
    { text: "FAQs", href: "Faqs" },
    { text: "Contacter Nous", href: "Contact" },
  ];

  const pathname = usePathname();

  let isActive;
  return (
    <>
      {/* navbar section  */}
      <div
        className={`w-full z-50 h-10vh flex fixed top-0 bg-transparent items-center justify-between px-11 sm:items-center sm:px-1 pt-4 ${
          open ? "sm:shadow-md sm:bg-white" : ""
        }`}
      >
        <div className="w-1/5 h-auto -mt-4">
          <Image
            src={Logo}
            width={200}
            height={200}
            alt="Avatar wekavit"
            className="sm:hidden object-cover"
            draggable={false}
          />

          {/* For mobile */}
          <Image
            src={logoMobile}
            width={230}
            height={230}
            alt="Avatar wekavit"
            className="object-cover hidden sm:block"
            draggable={false}
          />
        </div>
        <ul className="flex justify-center text-text-dark font-medium text-base sm:hidden">
          {Links &&
            Links.map(
              (link) => (
                (isActive = pathname.startsWith(link.href)),
                (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={
                        isActive
                          ? "ml-6 mr-6 cursor-pointer text-primary-color hover:text-primary-color transition-colors"
                          : "text-gray-500 ml-6 mr-6 cursor-pointer hover:text-primary-color transition-colors"
                      }
                    >
                      {link.text}
                    </Link>
                  </li>
                )
              )
            )}
        </ul>
        <div className="flex justify-center items-center">
          <div className="ml-5 mr-5 flex items-center justify-center cursor-pointer text-primary-color font-bold text-sm transition-colors sm:hidden">
            <Image
              src={Login}
              width={20}
              height={20}
              alt="Picture of the author"
              className="-mt-1 mr-2 font-bold text-sm"
            />
            <h2 className="hover:text-primary-color transition-colors">
              Connexion
            </h2>
          </div>
          <button className="ml-5 mr-5 cursor-pointer bg-primary-color text-white text-sm font-semibold flex items-center justify-center px-8 py-3 rounded-lg shadow-lg shadow-blue-300 hover:-mt-2 hover:transition-all hover:shadow-blue-200 hover:shadow-lg sm:hidden">
            Inscription
          </button>

          <Burger open={open} setOpen={setOpen} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
