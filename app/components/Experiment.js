import React from "react";
import Link from "next/link";

export default function Experiment() {
  return (
    <div className="w-full h-auto flex px-17 mt-5 text-white mb-14 sm:px-7 sm:mt-2 md:px-7 sm:mb-8">
      <div className="w-full flex h-auto flex-col bg-primary-color rounded-xl px-14 py-20 sm:rounded-lg sm:px-8 sm:py-10 md:py-16">
        <p className="text-4xl font-semibold leading-relaxed text-white mb-6 sm:tracking-normal sm:text-1.55rem md:text-2xl md:leading-relaxed sm:font-medium">
          Expérimentez l'avenir de la banque dès aujourd'hui avec notre
          portefeuille numérique innovant
        </p>
        <Link
          href="#"
          className="w-full flex mt-3 items-center justify-between text-xl font-normal sm:font-light text-light-white sm:text-base md:text-xl"
        >
          Rejoignez nous
        </Link>
      </div>
    </div>
  );
}
