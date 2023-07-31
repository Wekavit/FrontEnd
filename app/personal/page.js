import React from "react";
import Image from "next/image";

import { MockupOne } from "@/assets";

const page = () => {
  return (
    <div className="w-full flex flex-wrap h-89vh mt-12vh overflow-hidden">
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-60% mt-12 p-3 items-center">
          <h1 className="text-center font-semibold text-3xl leading-36 text-black-text">
            Commencez à économiser de l'argent aujourd'hui et voyez la
            différence que cela fait.
          </h1>
          <p className="text-center text-sm mt-5 text-gray-text">
            Verrouillez les fonds pendant une période déterminée pour éviter la
            tentation de dépenser. Gagnez jusqu'à 12,5 % par an d’intérêt. payé
            d'avance.
          </p>
        </div>

        <div className=" w-45% h-full p-3 mt-3">
          <Image src={MockupOne} alt=" Mockup personnal save" />
        </div>
      </div>
    </div>
  );
};

export default page;
