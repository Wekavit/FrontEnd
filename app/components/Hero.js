import React from "react";
import Image from "next/image";

import {
  HandwriterHero,
  HandwriterHeroStar,
  HandwriterHeroTwo,
} from "@/assets";

export const Hero = () => {
  return (
    <div className="w-full flex items-center h-89vh mt-11vh px-11 relative overflow-hidden py-3">
      <Image
        src={HandwriterHero}
        alt="Handwriter illustration"
        className="absolute right-2/4"
        width={30}
        height={30}
      />
      <Image
        src={HandwriterHeroTwo}
        alt="Handwriter illustration"
        className="absolute right-2/4 top-16"
        width={50}
        height={50}
      />
      <Image
        src={HandwriterHeroStar}
        alt="Handwriter illustration"
        className="absolute right-40 top-16"
        width={30}
        height={30}
      />

      <div className="w-1/2 h-full pl-10 flex flex-col items-start justify-center">
        <h1 className="w-96 text-4xl leading-snug font-extrabold">
          <span className=" text-primary-color">Wekavit,</span> épargnez
          judicieusement votre argent
        </h1>

        <p className=" mt-8">
          Wekavit vous aide à atteindre vos objectifs financiers en vous
          permettant d'épargner et d'investir facilement.
        </p>
      </div>
    </div>
  );
};
