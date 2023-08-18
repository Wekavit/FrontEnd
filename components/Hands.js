import React from "react";
import Image from "next/image";
import { handsMock } from "@/assets";
import Link from "next/link";
import Social from "../utils/Social";

const Hands = () => {
  return (
    <div className=" w-full h-auto px-17 flex bg-white py-9 sm:flex-col sm:px-4 sm:justify-center sm:items-center md:flex-col md:items-center md:justify-center md:px-20">
      <div className="w-3/6 h-auto flex justify-center items-center py-5 mt-5 sm:w-full sm:px-3 sm:py-0 md:w-90% md:py-3">
        <div className="w-4/5 h-350 overflow-hidden relative bg-handsBg rounded-lg flex items-center justify-center sm:w-full sm:h-300">
          <Image
            src={handsMock}
            className="w-96 h-96 object-cover sm:w-80 sm:h-80"
            alt="Hands with phone"
            draggable="false"
          />
        </div>
      </div>

      <div className="w-3/6 h-auto flex justify-center items-center py-5 mt-5 sm:w-full sm:px-3 sm:mt-9 md:w-full md:mt-2">
        <div className="w-4/5 h-350 -ml-9 overflow-hidden relative bg-white flex items-start justify-center flex-col sm:w-full sm:h-auto sm:-ml-0 md:w-full md:h-auto">
          <span className="font-medium text-primary-color mb-2">
            {`Niveau de sécurité`}
          </span>
          <h1 className="font-semibold text-3xl mb-5 leading-normal sm:text-2xl">
            {` Tout est conservé sous un cryptage de niveau militaire`}
          </h1>
          <Link
            href={Social.Newsletter}
            className="py-2 px-5 rounded-full bg-primary-color text-white text-sm"
          >
            {`Rejoindre la liste d'attente`}
          </Link>
          <hr className=" w-full h-1px bg-gray-100 my-8" />
          <p className=" text-gray-text text-sm leading-normal">
            {`N'économisez pas ce qui reste après avoir dépensé, mais dépensez ce
            qui reste après avoir économisé`}
          </p>
          <h3 className="mt-4 text-base font-medium text-gray-800">
            Warren Buffet
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hands;
