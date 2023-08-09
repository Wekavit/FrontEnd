import React from "react";
import Image from "next/image";
import { MockupScreen } from "@/assets";

const page = () => {
  return (
    <div className="w-full flex flex-wrap h-89vh mt-12vh">
      <div className="w-full h-full flex flex-wrap sm:flex-col sm:flex-nowrap sm:pt-14 pb-5 sm:h-auto md:h-auto md:flex-col md:flex-nowrap md:pt-14 md:pb-14">
        <div className="w-1/2 h-full flex flex-col justify-center pl-24 sm:w-full sm:pl-7 md:w-full">
          <h1 className="text-4xl font-bold leading-tight text-text-dark sm:text-3xl sm:leading-tight">
            Investissez en toute sécurité et en toute confiance
          </h1>

          <span className="bg-blue-mobileMenuBtn w-52 rounded-full py-3 px-5 text-xs text-center mt-5 font-semibold text-primary-color">
            Jusqu'à 20% d’intérêt
          </span>

          <p className=" w-5/6 mt-6 leading-7 text-gray-text sm:w-full sm:text-sm sm:leading-6 sm:pr-3">
            Investissez n'importe quel montant. Obtenez des conseils sur les
            fonds qui fonctionnent pour vous. Suivez la performance de vos
            investissements en temps réel. Pas de formulaires longs.
          </p>
        </div>

        <div className="w-1/2 h-full flex justify-center pt-10 items-center pr-17 sm:w-full sm:pr-0 md:w-full md:pr-0 md:pl-16">
          <Image src={MockupScreen} className="-ml-9" alt="Wekavit screens" />
        </div>
      </div>

      <div className="w-full px-17 bg-white flex flex-col items-center sm:px-3">
        <div className="w-2/3 h-auto flex justify-center items-center flex-col py-6 sm:w-full md:w-full sm:py-4">
          <h2 className="font-semibold mt-3 text-3xl text-black-text sm:text-2xl md:text-2xl">
            Pourquoi investir ?
          </h2>
          <p className="text-center mt-3 text-gray-text text-sm sm:text-sm sm:mt-1 md:mt-1">
            Il y a trois raisons simples pour lesquelles vous devriez commencer
            à investir dès aujourd'hui
          </p>
        </div>

        <div className="w-full p-9 bg-slate-500 flex flex-wrap justify-center gap-8 sm:w-full sm:gap-6 sm:py-7 md:w-full md:gap-4">
          <div className="w-30% p-9 bg-white rounded relative flex flex-col items-center border-blue-small border sm:w-full">
            <span className="bg-red-400 rounded-full px-4 py-3">1</span>
            <h1 className="font-semibold text-2xl mt-4 text-text-dark sm:text-xl md:text-xl">
              Dépôt
            </h1>
            <p className="mt-3 text-base text-gray-text leading-7 sm:text-sm sm:leading-6">
              Effectuez des dépôts dans votre portefeuille wekavit en utilisant
              votre mobile money ou votre carte bancaire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
