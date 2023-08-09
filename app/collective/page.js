import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";

// Images
import {
  GroupeSaving,
  GroupSavingTwo,
  DepositIcon,
  GoalIcon,
  MoneyPay,
  LockIcon,
} from "@/assets";

const page = () => {
  return (
    <div className="w-full flex flex-wrap h-89vh mt-12vh">
      <div className="w-full h-full flex flex-wrap sm:flex-col sm:flex-nowrap sm:pt-14 pb-5 sm:h-auto md:h-auto md:flex-col md:flex-nowrap md:pt-14 md:pb-14">
        <div className="w-3/5 h-full flex flex-col justify-center pl-17 sm:w-full sm:pl-7 md:w-full">
          <h1 className="text-5xl font-bold leading-tight text-text-dark sm:text-3xl sm:leading-snug">
            L'épargne collective simplifiée
          </h1>

          <p className="w-3/4 mt-6 leading-7 text-gray-text sm:w-full sm:text-sm sm:leading-6">
            Wekavit est une application simple qui facilite l'épargne entre amis
            pour vos objectifs. Faites des contributions quotidiennes,
            hebdomadaires ou mensuelles et gagnez votre bonus instantanément.
          </p>
        </div>

        <div className="w-2/5 h-full flex justify-center pt-10 items-center pr-17 sm:w-full sm:pr-0 md:w-full md:pr-0 md:pl-16">
          <Image
            src={GroupeSaving}
            draggable="false"
            className="-ml-15% sm:-ml-0 sm:w-300"
            alt="Women using wekavit"
          />
        </div>
      </div>

      <div className="w-full h-auto flex items-center flex-col bg-white py-14 sm:pb-8">
        <div className="w-3/4 p-2 flex flex-col sm:w-full sm:px-5 md:w-full md:px-17">
          <h1 className="text-center text-2xl font-semibold text-black sm:text-xl">
            Epargnez mieux, épargnez ensemble
          </h1>
          <p className="text-center text-base mt-1 text-gray-text sm:text-sm">
            Joignez-vous à vos amis et à votre famille pour atteindre vos
            objectifs financiers
          </p>
        </div>

        <div className="w-full flex p-5 py-10 px-17 sm:p-5 sm:flex-col md:flex-col md:px-20">
          <div className="w-1/2 py-4 sm:w-full md:w-full">
            <Image src={GroupSavingTwo} alt="Group of wekavit users" />
          </div>

          <div className="w-1/2 py-4 flex justify-center flex-col px-14 sm:w-full sm:justify-start sm:px-0 md:w-full md:justify-start md:px-0 md:mt-4">
            <h1 className="text-2xl font-medium mb-3 sm:text-xl sm:font-semibold">
              Habitudes saines
            </h1>
            <p className="text-gray-text sm:text-sm">
              Tu n'es pas seul. Rejoignez une communauté engagée à vous redonner
              votre liberté financière.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col items-center pt-9">
        <h1 className="text-2xl font-bold text-text-dark sm:text-xl sm:font-semibold">
          Comment ça marche
        </h1>
        <div className="w-10/12 p-9 flex flex-wrap justify-center gap-8 sm:w-full sm:gap-6 sm:py-7 md:w-full md:gap-4">
          <div className="w-45% p-9 bg-white rounded relative flex flex-col border-blue-small border sm:w-full">
            <div>
              <Image src={DepositIcon} className="sm:w-10 md:w-12" alt="" />
            </div>
            <h1 className="font-semibold text-2xl mt-4 text-text-dark sm:text-xl md:text-xl">
              Dépôt
            </h1>
            <p className="mt-3 text-base text-gray-text leading-7 sm:text-sm sm:leading-6">
              Effectuez des dépôts dans votre portefeuille wekavit en utilisant
              votre mobile money ou votre carte bancaire.
            </p>
          </div>
          <div className="w-45% p-9 bg-white rounded relative flex flex-col border-blue-small border sm:w-full">
            <div>
              <Image
                src={GoalIcon}
                className="sm:w-10 md:w-12"
                alt="Goal icon"
              />
            </div>
            <h1 className=" font-semibold text-2xl mt-4 text-text-dark sm:text-xl md:text-xl">
              Groupes
            </h1>
            <p className="mt-3 text-base text-gray-text leading-7 sm:text-sm sm:leading-6">
              Créez plusieurs groupes pour vos différents objectifs d'épargne
              entre amis.
            </p>
          </div>

          <div className="w-45% p-9 bg-white rounded relative flex flex-col border-blue-small border sm:w-full">
            <div>
              <Image
                src={MoneyPay}
                className="sm:w-10 md:w-12"
                alt="Money pay hand"
              />
            </div>
            <h1 className=" font-semibold text-2xl mt-4 text-text-dark sm:text-xl md:text-xl">
              Vos règles
            </h1>
            <p className="mt-3 text-base text-gray-text leading-7 sm:text-sm sm:leading-6">
              Personnalisez les règles et la durée de votre objectif d'épargne
              comme vous le souhaitez ensemble avec les amis.
            </p>
          </div>

          <div className="w-45% p-9 bg-white rounded relative flex flex-col border-blue-small border sm:w-full">
            <div>
              <Image
                src={LockIcon}
                className="sm:w-10 md:w-12"
                alt="Lock money Icon"
              />
            </div>
            <h1 className=" font-semibold text-2xl mt-4 text-text-dark sm:text-xl md:text-xl">
              Fermez vos groupes
            </h1>
            <p className="mt-3 text-base text-gray-text leading-7 sm:text-sm sm:leading-6">
              Fermez vos groupes et retirez votre argent en toute simplicité.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
