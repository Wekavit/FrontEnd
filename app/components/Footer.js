import React from "react";
import Image from "next/image";
import { Logo } from "@/assets";
import Link from "next/link";

// Icons
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-auto px-17 py- sm:px-5">
      <div className="w-full flex flex-wrap justify-center items-center gap-x-5 py-2 pb-5 sm:gap-x-0 sm:gap-y-4">
        {/* Logo */}
        <div className="w-22% h-auto p-2 relative overflow-hidden sm:w-full md:w-full">
          <Image
            src={Logo}
            className="w-40 h-auto -ml-8 -mt-10"
            alt="Logo wekavit"
          />
          <p className="text-xs -mt-11 text-gray-text leading-5">
            Une application de gestion financière conviviale et sécurisée qui
            peut vous aider à gérer vos finances de manière plus efficace et
            plus efficiente.
          </p>

          <div className="w-full h-auto flex justify-start gap-x-5 mt-6">
            <Link
              href=""
              className=" p-2 bg-blue-mobileMenuBtn text-gray-text rounded-full"
            >
              <FaLinkedin />
            </Link>

            <Link
              href=""
              className=" p-2 bg-blue-mobileMenuBtn text-gray-text rounded-full"
            >
              <FaFacebook />
            </Link>

            <Link
              href=""
              className=" p-2 bg-blue-mobileMenuBtn text-gray-text rounded-full"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>

        {/* services */}
        <div className="w-22% h-auto p-2 pl-10 relative overflow-hidden sm:w-full sm:p-2 md:w-full md:p-2 md:mt-3">
          <h3 className=" font-semibold">Entreprise</h3>
          <ul className="flex flex-col gap-5 mt-5 sm:text-sm">
            <Link href="">
              <li>A propos</li>
            </Link>
            <Link href="">
              <li>FAQs</li>
            </Link>
            <Link href="">
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        {/* aide */}
        <div className="w-22% h-auto p-2 relative overflow-hidden sm:w-full md:w-full">
          <h3 className=" font-semibold">AIDE</h3>
          <ul className="flex flex-col gap-5 mt-5 sm:text-sm">
            <Link href="">
              <li>Assistance</li>
            </Link>
            <Link href="">
              <li>Aide & Support</li>
            </Link>
            <Link href="">
              <li>Terme & Conditions</li>
            </Link>
          </ul>
        </div>

        {/* newsletter */}
        <div className="w-22% h-auto p-2 relative flex flex-col gap-5 -mt-16 overflow-hidden sm:w-full sm:mt-1 md:w-full md:mt-1">
          <h3 className=" font-semibold">NEWSLETTER</h3>
          <Link
            href=""
            className=" bg-primary-color text-center rounded-md w-full py-3 text-white text-sm"
          >
            Rejoignez nous
          </Link>
        </div>
      </div>

      <div className=" w-full py-5 flex justify-center text-xs text-gray-text border-t border-borderColor sm:text-xs">
        <p className="mt-5 sm:mt-0">
          © Copyright 2023 WEKAVIT, All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
