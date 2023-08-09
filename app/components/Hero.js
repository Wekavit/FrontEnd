import React from "react";
import Link from "next/link";
import {
  Avatar,
  HandWriter,
  handwriter,
  Handwriterstar,
  handwriterBack,
} from "@/assets";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";

export const Hero = () => {
  const Newsletters = "https://tally.so/r/mY0jj0";
  const WhatsApp = "https://wa.me/68887091";

  return (
    <div className="w-full flex flex-wrap h-89vh mt-11vh">
      {/* text box  */}
      <div className="w-1/2 pl-17 h-full flex flex-col justify-center mt-8 sm:w-full md:w-full sm:h-auto md:h-auto md:py-8 md:px-20 sm:p-5">
        <h1 className="text-44px tracking-tighter font-bold text-hero-text leading-tight mb-6 sm:text-35px sm:leading-tight sm:text-3xl">
          La façon moderne d'épargner et d'investir votre argent
        </h1>
        <p className="text-gray-text text-1.2rem font-normal sm:font-normal leading-relaxed mb-6 sm:leading-normal sm:-tracking-normal sm:text-sm">
          Economisez et investissez votre argent en toute simplicité en
          commençant par aussi peu que 500 franc. Gagnez des intérêts de 9 à 11
          %.
        </p>

        <div className="w-full flex flex-col h-auto mt-1 sm:flex-col relative">
          <span className="mb-2 text-xs font-semibold sm:text-xs sm:text-10px">
            Plus tôt vous vous inscrivez, plus tôt vous aurez accès
          </span>
          <Link
            href={Newsletters}
            className="w-2/3 duration-300 rounded-lg shadow-lg shadow-blue-300 sm:w-10/12"
          >
            <div className="flex gap-4 py-3 px-4 justify-center items-center font-medium cursor-pointer text-white bg-primary-color rounded-md hover:transition-all hover:shadow-blue-200 hover:shadow-lg sm:justify-center sm:text-center sm:w-full sm:mt-2 sm:ml-0 sm:text-sm">
              <p>Rejoindre la liste d’attente</p>
              <span className="text-lg">
                <HiArrowLongRight />
              </span>
            </div>
          </Link>
        </div>
      </div>
      {/* img box  */}
      <div className="w-1/2 relative h-full flex items-end justify-center mt-8 sm:flex-col md:flex-col md:w-full sm:w-full sm:pt-5 sm:justify-center md:justify-center sm:items-center md:items-center sm:h-auto md:h-auto">
        <Image
          src={Avatar}
          width={500}
          height={1000}
          alt="woman with a phone in the hand using wekavit"
          className="w-extra h-extra -ml-32 object-cover sm:w-full md:w-full sm:h-350 md:h-auto sm:-ml-6 z-10"
          draggable={false}
        />
        <Image
          src={HandWriter}
          width={50}
          height={50}
          alt="woman with a phone in the hand using wekavit"
          className="absolute top-40 left-6 mt-6 ml-10 sm:hidden md:hidden"
          draggable={false}
        />
        <Image
          src={handwriter}
          width={80}
          height={80}
          alt="woman with a phone in the hand using wekavit"
          className="absolute top-2 left-32 ml-4 sm:hidden md:hidden"
          draggable={false}
        />
        <Image
          src={Handwriterstar}
          width={35}
          height={35}
          alt="woman with a phone in the hand using wekavit"
          className="absolute top-60 right-20 sm:hidden md:hidden"
          draggable={false}
        />

        <Image
          src={handwriterBack}
          width={155}
          height={155}
          alt="woman with a phone in the hand using wekavit"
          className="absolute right-20 bottom-0 sm:hidden z-0"
          draggable={false}
        />
      </div>
    </div>

    // text-44px font-bold leading-tight text-hero-text mb-6 sm:text-35px sm:tracking-normal sm:text-4xl sm:leading-tight
  );
};
