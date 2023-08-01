import React from "react";
import Image from "next/image";

import { GirlsBanner, MockupOne, shapPersonal } from "@/assets";
import Link from "next/link";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="w-full flex flex-wrap h-89vh mt-12vh">
      <div className="w-full h-full flex flex-col items-center overflow-hidden">
        <div className="w-60% mt-12 p-3 items-center sm:w-full">
          <h1 className="text-center font-semibold text-3xl leading-36 text-black-text sm:text-2xl sm:px-4">
            Commencez à économiser de l'argent aujourd'hui et voyez la
            différence que cela fait.
          </h1>
          <p className="text-center text-sm mt-5 text-gray-text">
            Verrouillez les fonds pendant une période déterminée pour éviter la
            tentation de dépenser. Gagnez jusqu'à 12,5 % par an d’intérêt. payé
            d'avance.
          </p>
        </div>

        <div className="w-45% h-full p-3 mt-3 sm:w-full sm:flex sm:justify-center">
          <Image
            src={MockupOne}
            className="sm:w-72"
            alt="Mockup personnal save"
          />
        </div>
      </div>

      <div className="w-full p-3 px-3 pb-8 flex items-center flex-col mt-8">
        <div className="w-3/5 p-3 flex items-center justify-center flex-col">
          <h1 className="text-29 font-semibold">
            Restez discipliné et évitez la tentation
          </h1>
          <p className="text-gray-text text-sm">
            Épargnez votre argent selon vos propres conditions
          </p>
        </div>

        <div className="w-4/5 p-2 flex justify-center flex-wrap gap-6 overflow-hidden mt-8">
          <div className="w-30% h-52 rounded-md bg-blueColor px-6 py-8 relative text-white">
            <h1 className="mb-4 font-semibold text-xl">Epargne régulière</h1>
            <p className="text-sm font-light leading-6">
              Epargnez votre argent à vos conditions pendant au moins 3 mois.
              Nous récompenserons votre discipline avec des rendements juteux.
            </p>
          </div>

          <div className="w-30% h-52 rounded-md bg-bluelight px-6 py-8 relative text-white">
            <h1 className="mb-4 font-semibold text-xl">Gérez votre argent</h1>
            <p className="text-sm font-light leading-6">
              Mettez de côté des fonds pour une période de temps déterminée sans
              y avoir accès jusqu'à l'échéance.
            </p>
          </div>

          <div className="w-30% h-52 rounded-md bg-blueMedium px-6 py-8 relative text-white">
            <h1 className="mb-4 font-semibold text-xl">Gagnez des intérêts</h1>
            <p className="text-sm font-light leading-6">
              Nos taux d'intérêt rendront votre compte bancaire jaloux. .
            </p>
          </div>

          <div className="w-30% h-52 rounded-md bg-blueMain px-6 py-8 relative text-white">
            <h1 className="mb-4 font-semibold text-xl">L'assistance</h1>
            <p className="text-sm font-light leading-6">
              Si vous avez des questions sur votre compte ou sur des transferts
              en attente, notre équipe de réussite client est là pour vous
              aider.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-auto px-12 py-8 flex justify-center">
        <div className="w-90% px-3 flex relative">
          <div className="w-3/4 p-1">
            <Image
              src={GirlsBanner}
              className=" h-full"
              alt="Girls checking phone"
            />
          </div>

          <div className="w-3/4 p-1 relative flex flex-col justify-center items-start px-9">
            <h1 className=" font-semibold text-3xl w-96 leading-36 text-hero-text">
              Quoi de mieux qu'un milliardaire ?
            </h1>
            <p className="mt-5 leading-7 text-gray-text">
              Atteignez vos objectifs financiers plus rapidement et plus
              solidement en épargnant avec des amis avec l'aide de certains
              concurrents.
            </p>
            <Link
              href=""
              className="bg-primary-color text-center rounded-md w-2/4 py-3 text-white text-sm mt-5"
            >
              Rejoignez nous
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
