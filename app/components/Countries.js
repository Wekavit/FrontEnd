import React from "react";
import Image from "next/image";
import { WordlView } from "@/assets";

export default function Countries() {
  return (
    <div className="w-full h-auto flex flex-col bg-white pt-6 pb-4 sm:items-center">
      <p className="font-semibold text-4xl text-center text-dark-hero-text leading-normal mb-2 sm:text-center sm:text-1.55rem sm:tracking-normal md:tracking-normal">
        Disponible dans 2 pays africains
      </p>
      <h4 className="text-base text-gray-text text-center mb-3 sm:text-xs sm:w-2/3 font-medium md:text-sm">
        {`Nous avons des bureaux et des équipes dans deux pays`}
      </h4>
      <div className="w-full h-auto md:w-full">
        <Image
          src={WordlView}
          width={500}
          height={500}
          alt="world countries view"
          className="object-fill w-full"
          draggable="false"
        />
      </div>
    </div>
  );
}
