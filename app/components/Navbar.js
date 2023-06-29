import React from "react";
import Image from "next/image";
import { Logo, Login, Notext } from "@/assets";

const Navbar = () => {
  return (
    <>
      {/* navbar section  */}
      <div className="w-full h-10vh bg-black z-10 flex fixed top-0 bg-transparent items-center justify-between px-11 sm:px-1">
        <div className=" w-1/5 h-auto -mt-4">
          <Image
            src={Logo}
            width={200}
            height={200}
            alt="Picture of the author"
            className="sm:w-2/2 sm:opacity-0 sm:w-0 sm:h-0"
            draggable={false}
          />
        </div>
        <ul className="flex justify-center text-black-text font-medium text-sm sm:w-0 sm:opacity-0">
          <li className="ml-6 mr-6 cursor-pointer hover:text-primary-color transition-colors">
            Services
          </li>
          <li className="ml-6 mr-6 cursor-pointer hover:text-primary-color transition-colors">
            Entreprise
          </li>
          <li className="ml-6 mr-6 cursor-pointer hover:text-primary-color transition-colors">
            FAQs
          </li>
        </ul>
        <div className="flex justify-center items-center sm:opacity-0">
          <div className="ml-5 mr-5 flex items-center justify-center cursor-pointer text-primary-color font-bold text-sm transition-colors">
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
          <button className="ml-5 mr-5 cursor-pointer bg-primary-color text-white text-sm font-semibold flex items-center justify-center px-8 py-3 rounded-lg shadow-lg shadow-blue-300 hover:-mt-2 hover:transition-all hover:shadow-blue-200 hover:shadow-lg">
            Inscription
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
