import React from "react";
import { Avatar, HandWriter, handwriter, Handwriterstar } from "@/assets";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full flex flex-wrap h-89vh mt-11vh">
      {/* text box  */}
      <div className="w-1/2 pl-17 h-full flex flex-col justify-center mt-8 sm:w-full sm:h-auto sm:p-5">
        <p className="text-5rem font-bold leading-tight text-hero-text mb-6 sm:text-35px sm:tracking-normal">
          <span className="text-primary-color">Wekavit, </span>epargnez
          juducieusement votre <br className="sm:hidden" />
          argent
        </p>
        <p className="text-gray-text text-1.2rem font-medium sm:font-normal leading-relaxed mb-6 sm:leading-normal sm:-tracking-normal">
          Avec wekavit construisez votre avenir financier et tracer la voie vers
          votre meilleure vie. <br />
        </p>
        <div className="w-full h-auto flex flex-col">
          <p className="text-light-gray text-xxs font-semibold mb-3">
            Rejoignez la liste d'attente pour être le premier à savoir quand
            nous lançons le produit
          </p>
          <form className="w-full h-auto flex sm:flex-col relative">
            <input
              type="text"
              placeholder="cedrick@gmail.com"
              className="border-x border-y outline-none border-primary-color rounded py-4 px-4 w-2/4 placeholder:text-sm shadow-md shadow-blue-100 sm:w-full"
            />
            <input
              type="submit"
              name=""
              value="Soumettre"
              id=""
              className="py-4 px-4 cursor-pointer text-white bg-primary-color rounded-md w-50 ml-2 sm:w-full sm:mt-2 sm:ml-0"
            />
          </form>
        </div>
      </div>
      {/* img box  */}
      <div className="w-1/2 h-full flex items-end justify-start sm:flex-col sm:w-full sm:pt-5 sm:justify-center sm:items-center sm:h-auto">
        <Image
          src={Avatar}
          width={500}
          height={1000}
          alt="woman with a phone in the hand using wekavit"
          className="w-extra h-extra -ml-32 object-cover sm:w-full sm:h-350 sm:-ml-6"
          draggable={false}
        />
        <Image
          src={HandWriter}
          width={65}
          height={65}
          alt="woman with a phone in the hand using wekavit"
          className="absolute top-80 mt-6 ml-10 sm:hidden"
          draggable={false}
        />
        <Image
          src={handwriter}
          width={110}
          height={110}
          alt="woman with a phone in the hand using wekavit"
          className="absolute top-28 mt-6 ml-4 sm:hidden"
          draggable={false}
        />
        <Image
          src={Handwriterstar}
          width={35}
          height={35}
          alt="woman with a phone in the hand using wekavit"
          className="absolute top-60 right-20 sm:hidden"
          draggable={false}
        />
      </div>
    </div>
  );
};
