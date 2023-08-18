import React from "react";
import Image from "next/image";
import { Security } from "@/assets";
import Link from "next/link";
import Links from "../utils/Links";

export default function Confident() {
  return (
    <div className="w-full h-auto bg-cover relative object-fill">
      <Image
        src={Security}
        alt="woman lifting phone"
        className="object-fill w-full h-full sm:w-full"
        draggable="false"
      />
      <div className="w-full h-full absolute bottom-2 flex flex-col pl-20 pt-24 pb-24 bg-red-0 sm:ml-0 sm:pl-0">
        <h1 className="font-semibold text-5xl pr-9 w-3/4 text-white leading-snug sm:w-full sm:text-lg sm:text-white sm:text-center sm:px-3 sm:leading-snug sm:py-2 md:text-xl sm:mb-5 md:w-full md:mb-3 ">
          Garder votre argent en sécurité est notre affaire.
        </h1>
        <h4 className="w-3/4 text-xl text-white mt-5 font-light mb-9 sm:-mt-3 md:text-sm sm:w-full sm:px-2 sm:text-xs sm:text-center sm:hidden sm:mb-4 ">
          La confiance est notre devise. Nous nous engageons à assurer la
          sécurité de votre argent, la protection de votre compte ainsi que
          celle de toutes vos transactions.
        </h4>
        <Link href={Links.Newsletter}>
          <h4 className="w-2/4 text-xl text-white md:text-sm sm:text-sm sm:px-2 sm:hidden">
            En savoir plus
          </h4>
        </Link>
      </div>
    </div>
  );
}
