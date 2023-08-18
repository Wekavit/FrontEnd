"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NotFoundAvatar } from "@/assets";

export default function NotFound() {
  return (
    <div className="w-full flex h-auto mt-12vh pt-20 justify-center items-center flex-col sm:px-2">
      <div className="w-3/4 flex flex-col justify-center items-center sm:w-full sm:px-3">
        <h1 className="text-center text-hero-text font-bold text-5xl leading-normal sm:text-3xl md:text-4xl">
          Oops! Il semble que vous soyez tombé sur un{" "}
          <span className=" text-primary-color">territoire inexploré</span>.
        </h1>
        <p className="text-center text-xs w-450 mt-6 text-gray-text sm:w-full">
          La page que vous recherchez semble avoir pris une mauvaise direction
          quelque part. Ne vous inquiétez pas, notre équipe d'experts hautement
          qualifiés est déjà sur le cas.
        </p>

        <Link
          href="/"
          className=" text-center py-3 px-7 rounded-lg bg-primary-color text-white mt-5 sm:text-sm"
        >
          Retour à la page d'accueil
        </Link>

        <Image
          src={NotFoundAvatar}
          className="w-52 h-auto mt-5"
          alt="Avatar not found page"
        />
      </div>
    </div>
  );
}
