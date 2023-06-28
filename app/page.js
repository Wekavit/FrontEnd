"use client";
import React from "react";
import Logo from "../assets/images/landing/logo-web.png"
import Login from "../assets/images/landing/Login-icon.svg"
import Notext from "../assets/images/landing/logo-without-text.png"
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
      {/* main landing page section  */}
      <div className="w-full h-auto flex flex-col bg-transparent">    
        {/* the hero section  */}
        <div className="w-full h-screen flex flex-col bg-hero-color">
          {/* navbar section  */}
          <div className="w-full h-auto flex flex-row fixed top-0 bg-transparent items-center justify-between px-11 sm:px-1">
            <div className="w-1/3 h-auto">
              <Image
                src={Logo}
                width={200}
                height={200}
                alt="Picture of the author"
                className="-mt-7 sm:w-2/2 sm:opacity-0 sm:w-0 sm:h-0"
              />
               <Image
                src={Notext}
                width={200}
                height={200}
                alt="Picture of the author"
                className="mt-3 sm:w-28 sm:h-28 opacity-0 sm:opacity-100 w-0 h-0"
             />
             </div>
              <ul className="w-1/3 flex justify-center text-black-text font-medium text-lg -mt-2 sm:w-0 sm:opacity-0">
                <li className="ml-6 mr-6 cursor-pointer hover:text-primary-color transition-colors">Services</li>
                <li className="ml-6 mr-6 cursor-pointer hover:text-primary-color transition-colors">Entreprise</li>
                <li className="ml-6 mr-6 cursor-pointer hover:text-primary-color transition-colors">FAQs</li>
              </ul>
            <div className="w-1/3 flex justify-center items-center -mt-2 sm:opacity-0">
              <div className="ml-5 mr-5 flex items-center justify-center cursor-pointer text-primary-color font-bold text-lg transition-colors">
                <Image
                  src={Login}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                  className="-mt-1 mr-2 font-bold text-lg"
                />
                <h2 className="hover:text-primary-color transition-colors">Connexion</h2>
              </div>
              <button className="ml-5 mr-5 cursor-pointer bg-primary-color text-white text-base font-semibold flex items-center justify-center px-8 py-3 rounded-lg shadow-lg shadow-blue-300 hover:-mt-2 hover:transition-all hover:shadow-blue-200 hover:shadow-lg">Inscription</button>
            </div>
            <div className="flex flex-col opacity-0 sm:opacity-100 sm:-mt-4 sm:mr-6 sm:w-6">
              <span className="bg-primary-color w-6 h-0.5 rounded-lg mb-1"></span><span className="bg-primary-color w-6 h-0.5 rounded-lg mb-1"></span><span className="bg-primary-color w-6 h-0.5 rounded-lg mb-1"></span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
