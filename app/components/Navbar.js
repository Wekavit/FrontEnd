"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Logo, Login, logoMobile } from "@/assets";
import Burger from "./Burger";
import ServiceMenu from "./ServiceMenu";
import ContactMenu from "./ContactMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState(false);
  const [service, setService] = useState(false);
  const [contact, setContact] = useState(false);

  // Block scroll on menu open
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = null;
  }

  // Change Navbar style on scroll
  const controlNavbar = () => {
    if (window.scrollY > 20) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const Links = [
    { text: "Services", href: "#" },
    { text: "Entreprise", href: "/about" },
    { text: "FAQs", href: "Faqs" },
    { text: "Contacter nous", href: "Contact" },
  ];

  const pathname = usePathname();

  let isActive;
  return (
    <>
      {/* navbar section  */}
      <div
        className={`w-full z-50 h-11vh transition-all pb-2 duration-200 ease-in-out delay-150 flex fixed top-0 bg-transparent items-center justify-between px-11 sm:items-center sm:px-1 md:items-center md:bg-red md:px-16 pt-4 ${
          (open ? "sm:shadow-md md:shadow-md sm:bg-white md:bg-white" : "",
          change ? "bg-white border-b border-gray-200" : "")
        }`}
      >
        <div className="w-1/5 h-auto -mt-4">
          <Link href="">
            <Image
              src={Logo}
              width={200}
              height={200}
              alt="Avatar wekavit"
              className="sm:hidden object-cover"
              draggable={false}
            />
          </Link>

          {/* For mobile */}
          <Link href="">
            <Image
              src={logoMobile}
              width={230}
              height={230}
              alt="Avatar wekavit"
              className="object-cover hidden sm:block"
              draggable={false}
            />
          </Link>
        </div>
        <ul className="flex justify-center text-text-dark font-medium text-base sm:hidden md:hidden">
          {Links &&
            Links.map(
              (link) => (
                (isActive = pathname.startsWith(link.href)),
                (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onMouseEnter={() => {
                        link.text === "Services" ? setService(true) : null;
                        link.text === "Contacter nous"
                          ? setContact(true)
                          : null;
                      }}
                      className={`cursor-pointer mr-6 py-4 hover:text-primary-color transition-all duration-700 ease-in-out delay-150
                        ${
                          isActive
                            ? "ml-6 text-primary-color  transition-colors"
                            : "text-gray-500 ml-6 transition-colors"
                        }
                      `}
                    >
                      {link.text}
                    </Link>
                  </li>
                )
              )
            )}
        </ul>
        <div className="flex justify-center items-center">
          <div className="ml-5 mr-5 flex items-center justify-center cursor-pointer text-primary-color font-bold text-sm transition-colors sm:hidden md:hidden">
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
          <Link
            href=""
            className="ml-5 mr-5 duration-300 cursor-pointer bg-primary-color text-white text-sm font-semibold flex items-center justify-center px-8 py-3 rounded-lg shadow-lg shadow-blue-300 hover:-mt-2 hover:transition-all hover:shadow-blue-200 hover:shadow-lg sm:hidden md:hidden"
          >
            Rejoignez-nous
          </Link>

          <Burger open={open} setOpen={setOpen} />
        </div>
      </div>

      <ServiceMenu
        service={service}
        setService={setService}
        setContact={setContact}
      />
      <ContactMenu
        contact={contact}
        setContact={setContact}
        setService={setService}
      />
    </>
  );
};

export default Navbar;
