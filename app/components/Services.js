import React from "react";
import Image from "next/image";
import {
  ServiceShape,
  PersonnelWallet,
  Collaboratif,
  Collectif,
  Individual,
} from "@/assets";

export default function Services() {
  return (
    <div className="w-full flex h-auto bg-white pb-16 pt-16 md:flex-col sm:flex-col sm:pt-10">
      <div className="w-1/3 h-auto pl-16 flex flex-col sm:px-5 sm:h-auto sm:w-full md:w-full md:justify-center md:items-center md:text-center md:mb-0 md:pl-0">
        <h1 className="font-semibold text-3xl text-hero-text leading-snug sm:text-center sm:text-xl sm:tracking-normal md:tracking-normal mb-5">
          4 façons de constituer votre épargne
        </h1>
        <Image
          src={ServiceShape}
          width={435}
          height={500}
          alt="woman with a phone in the hand using wekavit"
          className="sm:w-72 md:hidden ml-8 mt-5 mb-8"
          draggable={false}
        />
      </div>
      <div className="w-2/3 h-auto flex flex-col justify-center items-center sm:w-full md:mt-9 sm:px-7 md:w-full">
        <div className="w-full h-auto flex mb-6 justify-center sm:flex-col md:justify-center md:items-center">
          <div className="w-service-width h-64 flex flex-col rounded-lg border-service-border bg-hero-color border-2 px-6 pt-5 pb-5 sm:w-full sm:mb-6 md:w-service-w-md md:pl-8">
            <div className="flex items-center justify-center h-16 w-14 py-5 px-4 bg-service-perso rounded-full sm:w-12 sm:h-12 md:w-14 md:py-5">
              <Image
                src={PersonnelWallet}
                width={22}
                height={22}
                alt="woman with a phone in the hand using wekavit"
                className=""
                draggable={false}
              />
            </div>
            <h4 className="text-hero-text mt-3 font-medium text-lg mb-3 sm:text-base sm:mt-4">
              Personnel
            </h4>
            <p className="text-light-gray text-sm mb-3 sm:text-sm w-4/5 sm:mb-6 md:mb-5 md:w-full">
              Créer son propre portefeuille et y déposer de l'argent pour les
              objectifs futurs
            </p>
            <div>
              <h4 className="font-medium text-medium-gray text-sm mb-3">
                Commencer
              </h4>
            </div>
          </div>
          <div className="w-service-width h-64 flex flex-col rounded-lg border-service-border bg-hero-color ml-6 border-2 px-6 py-4 sm:w-full sm:ml-0 md:w-service-w-md md:pl-8">
            <div className="flex items-center justify-center h-14 w-14 p-4 bg-service-collective rounded-full sm:w-12 sm:h-11">
              <Image
                src={Collectif}
                width={22}
                height={22}
                alt="woman with a phone in the hand using wekavit"
                className=""
                draggable={false}
              />
            </div>
            <h4 className="text-hero-text mt-3 font-medium text-lg mb-3 sm:text-base sm:mt-4">
              Collectif
            </h4>
            <p className="text-light-gray text-sm mb-8 sm:text-sm sm:mb-12 md:mb-4">
              Economiser avec d'autres personnes en créant de groupes d'épargne
            </p>
            <div>
              <h4 className="font-medium text-medium-gray text-sm mb-3">
                Commencer
              </h4>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center sm:flex-col">
          <div className="w-service-width h-64 flex flex-col rounded-lg border-service-border bg-hero-color border-2 px-6 pt-4 pb-5 sm:w-full sm:mb-6 md:w-service-w-md md:pl-8">
            <div className="flex items-center justify-center w-14 h-14 p-4 bg-service-individu rounded-full sm:w-12 sm:h-12 md:h-16 md:py-5">
              <Image
                src={Individual}
                width={22}
                height={22}
                alt="woman with a phone in the hand using wekavit"
                className=""
                draggable={false}
              />
            </div>
            <h4 className="text-hero-text mt-3 font-medium text-lg mb-3 sm:text-base sm:mt-4">
              Individuel
            </h4>
            <p className="text-light-gray text-sm mb-3 sm:text-sm sm:mb-6">
              Commence aujourd'hui à investir ton argent dans des projets
              rentables
            </p>
            <div>
              <h4 className="font-medium text-medium-gray text-sm mb-3">
                Commencer
              </h4>
            </div>
          </div>
          <div className="w-service-width h-64 flex flex-col rounded-lg border-service-border bg-hero-color ml-6 border-2 px-6 py-4 sm:w-full sm:ml-0 md:w-service-w-md md:pl-8">
            <div className="flex items-center justify-center h-14 w-14 p-4 bg-service-collabo rounded-full sm:w-12 sm:h-11">
              <Image
                src={Collaboratif}
                width={22}
                height={22}
                alt="woman with a phone in the hand using wekavit"
                className=""
                draggable={false}
              />
            </div>
            <h4 className="text-hero-text mt-3 font-medium text-lg mb-3 sm:text-base sm:mt-4 ">
              Collaboratif
            </h4>
            <p className="text-light-gray text-sm mb-8 sm:text-sm sm:mb-12 md:mb-10">
              Investir avec d'autres personnes pour maximiser votre rendement
            </p>
            <div>
              <h4 className="font-medium text-medium-gray text-sm mb-3">
                Commencer
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
