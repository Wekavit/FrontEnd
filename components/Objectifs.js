import React from "react";
import { Objectives, FreeShape } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import Social from "../utils/Social";

export default function Objectifs() {
  return (
    <div className="w-full px-17 pb-7 flex h-auto -mt-10 justify-center sm:mt-5 sm:px-7 sm:flex-col sm:py-12 md:justify-normal md:px-7">
      <div className="w-2/4 flex justify-start h-auto object-cover sm:w-full sm:h-auto sm:-mt-11 md:justify-normal md:items-start md:h-max">
        <Image
          src={Objectives}
          width={700}
          draggable="false"
          alt="Wekavit interface"
          className="md:-mt-0 object-fill h-auto"
        />
      </div>
      <div className="w-2/4 h-full flex flex-col mt-32 px-5 sm:w-full sm:px-0 sm:mt-4 sm:justify-center sm:ml-0 md:ml-0 md:items-start md:mt-16">
        <h1 className="font-semibold text-3xl text-hero-text leading-normal mb-4 sm:w-full sm:text-xl sm:text-left md:text-2xl">
          Créez plusieurs plans d'épargne pour réaliser vos objectifs de vie !
        </h1>
        <p className="text-base text-gray-text leading-normal mb-4 pr-8 sm:w-full sm:text-sm sm:flex sm:justify-center sm:items-center sm:pr-0 md:text-base">
          Qu'il s'agisse d'épargner pour une nouvelle maison, l'éducation des
          enfants ou de parcourir le monde, concentrez-vous sur ce qui compte et
          économisez votre chemin pour en faire une réalité
        </p>
        <div className="w-full">
          <Link href={Social.Newsletter}>
            <button className="bg-primary-color flex justify-center items-center w-36 py-3 rounded sm:w-28 mt-3 text-white text-sm sm:text-xs">
              Commencer
            </button>
          </Link>
        </div>
        <Image
          src={FreeShape}
          width={100}
          height={100}
          draggable="false"
          alt=""
          className="object-cover -mt-10 ml-40 sm:ml-32 sm:-mt-10"
        />
      </div>
    </div>
  );
}
