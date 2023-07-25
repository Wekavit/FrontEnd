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

export const Hero = () => {
  const Newsletters = "https://tally.so/r/mY0jj0";
  const WhatsApp = "https://wa.me/68887091";

  return (
    <div className="w-full flex flex-wrap h-89vh mt-11vh">
      {/* text box  */}
      <div className="w-1/2 pl-17 h-full flex flex-col justify-center mt-8 sm:w-full md:w-full sm:h-auto md:h-auto md:py-8 md:px-20 sm:p-5">
        <p className="text-5xl font-bold leading-tight text-hero-text mb-6 sm:text-35px sm:tracking-normal">
          <span className="text-primary-color">Wekavit, </span>epargnez
          juducieusement votre <br className="sm:hidden" />
          argent
        </p>
        <p className="text-gray-text text-1.2rem font-normal sm:font-normal leading-relaxed mb-6 sm:leading-normal sm:-tracking-normal">
          Avec wekavit construisez votre avenir financier et tracer la voie vers
          votre meilleure vie. <br />
        </p>
        <div className="w-full h-auto flex flex-col">
          <p className="text-light-gray text-xxs font-semibold mb-3">
            Rejoignez la liste d'attente pour être le premier à savoir quand
            nous lançons le produit
          </p>
        </div>

        <div className="w-full flex h-auto mt-2 sm:flex-col relative">
          <Link href={Newsletters}>
            <div className="w-auto py-4 px-4 justify-center items-center font-medium cursor-pointer text-white bg-primary-color rounded-md sm:justify-center sm:text-center sm:w-full sm:mt-2 sm:ml-0">
              <p>Rejoindre la liste d’attente</p>
            </div>
          </Link>
          <Link href={WhatsApp}>
            <div className="w-auto p-5 flex justify-center items-center font-medium">
              <p>Laissez nous un message</p>
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
  );
};
