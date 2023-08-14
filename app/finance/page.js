import React from "react";
import Image from "next/image";
import {
  investDown,
  MockupScreen,
  InvestOne,
  InvestTwo,
  InvestThree,
  InvestFour,
  AvatarOne,
  AvatarTwo,
  AvatarThree,
} from "@/assets";

import Experiment from "../components/Experiment";
import Footer from "../components/Footer";

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
          <Image
            src={MockupScreen}
            draggable="false"
            className="-ml-9"
            alt="Wekavit screens"
          />
        </div>
      </div>

      <div className="w-full px-17 bg-white flex flex-col items-center sm:px-3 mb-5">
        <div className="w-2/3 h-auto flex justify-center items-center flex-col py-6 sm:w-full md:w-full sm:py-4">
          <h2 className="font-semibold mt-3 text-3xl text-black-text sm:text-2xl md:text-2xl">
            Pourquoi investir ?
          </h2>
          <p className="text-center mt-3 text-gray-text text-sm sm:text-sm sm:mt-1 md:mt-1">
            Il y a trois raisons simples pour lesquelles vous devriez commencer
            à investir dès aujourd'hui
          </p>
        </div>

        <div className="w-full px-9 py-3 flex flex-wrap mb-5 justify-center gap-7 sm:w-full md:flex-col md:flex-nowrap sm:mb-0 sm:gap-6 sm:py-7 md:w-full md:gap-6">
          <div className="w-30 py-9 px-6 bg-white rounded relative flex flex-col items-center border-blue-small border sm:w-full md:w-11/12">
            <div className="w-12 h-12 rounded-full text-white bg-primary-color flex justify-center items-center">
              1
            </div>
            <h1 className="font-semibold text-center text-xl mt-4 text-text-dark sm:text-xl md:text-xl">
              Les intérêts réels comptent
            </h1>
            <p className="mt-3 text-sm text-center text-gray-text leading-5 sm:text-sm sm:leading-6">
              Votre argent perdra de la valeur assis sur un compte bancaire où
              le taux d'intérêt est très bas. La vraie croissance, c'est quand
              le rendement de votre argent bat l'inflation..
            </p>
          </div>

          <div className="w-30 py-9 px-6 bg-white rounded relative flex flex-col items-center border-blue-small border sm:w-full md:w-11/12">
            <div className="w-12 h-12 rounded-full text-white bg-primary-color flex justify-center items-center">
              2
            </div>
            <h1 className="font-semibold text-center text-xl mt-4 text-text-dark sm:text-xl md:text-xl">
              Faites travailler votre argent
            </h1>
            <p className="mt-3 text-sm text-center text-gray-text leading-5 sm:text-sm sm:leading-6">
              Les riches font travailler leur argent pour eux, et non l'inverse.
              Ne soyez pas esclave de l'argent toute votre vie. Commencez à
              faire travailler votre argent.
            </p>
          </div>

          <div className="w-30 py-9 px-6 bg-white rounded relative flex flex-col items-center border-blue-small border sm:w-full md:w-11/12">
            <div className="w-12 h-12 rounded-full text-white bg-primary-color flex justify-center items-center">
              3
            </div>
            <h1 className="font-semibold text-center text-xl mt-4 text-text-dark sm:text-xl md:text-xl">
              La croissance est réelle
            </h1>
            <p className="mt-3 text-sm text-center text-gray-text leading-5 sm:text-sm sm:leading-6">
              C'est l'un des miracles de l'argent. Lorsque vous investissez,
              votre argent a la chance de gagner croissance sur croissance !
            </p>
          </div>
        </div>

        <div className="w-full h-auto flex py-9 sm:w-full sm:flex-col md:flex-col">
          <div className="w-45% h-auto flex justify-center items-center p-3 sm:w-full sm:flex sm:justify-center sm:px-5 md:w-full md:px-17">
            <Image
              src={investDown}
              className="w-350 h-auto sm:h-auto"
              alt="People using wekavit"
              draggable="false"
            />
          </div>
          <div className="w-65% h-auto pl-3 sm:w-full sm:px-3 md:w-full">
            <div className=" w-5/6 py-3 pt-5 pr-5 mb-7 sm:pr-0 md:pr-0">
              <h1 className="text-3xl font-bold leading-tight sm:text-2xl sm:leading-normal md:text-3xl">
                Plus question de restriction
              </h1>
              <p className="mt-3 text-gray-text md:text-sm sm:text-sm">
                Investir depuis l'Afrique n'a jamais été aussi facile. Commencez
                en 4 étapes faciles
              </p>
            </div>

            <div className="w-full h-auto gap-x-5 gap-y-2 flex flex-wrap sm:flex-nowrap sm:flex-col relative">
              <div className="w-45% h-auto py-5 sm:w-full">
                <Image src={InvestOne} alt="Profile icon" className=" mb-3" />
                <h2 className="font-semibold text-lg md:text-base">
                  Créer un compte
                </h2>
                <p className=" mt-2 text-sm leading-normal text-gray-text">
                  En sélectionnant votre pays et vérifiez instantanément votre
                  identité à l'aide de votre numéro émis par le gouvernement.
                </p>
              </div>
              <div className="w-45% h-auto py-5 sm:w-full">
                <Image src={InvestTwo} alt="Profile icon" className="mb-3" />
                <h2 className="font-semibold text-lg md:text-base">
                  Recharger votre balance
                </h2>
                <p className=" mt-2 text-sm leading-normal text-gray-text">
                  Via plusieurs canaux, y compris vos mobile money en devise
                  locale et notre partenaire gérera la conversion de devise
                  instantanément en un clic.
                </p>
              </div>

              <div className="w-45% h-auto py-5 sm:w-full">
                <Image src={InvestThree} alt="Profile icon" className="mb-3" />
                <h2 className="font-semibold text-lg md:text-base">
                  Commencez à investir
                </h2>
                <p className=" mt-2 text-sm leading-normal text-gray-text">
                  Dans votre société cotée en bourse préférée, des sociétés
                  africaines, des fonds communs de placement ou des produits à
                  revenu fixe du monde entier.
                </p>
              </div>

              <div className="w-45% h-auto py-5 sm:w-full">
                <Image src={InvestFour} alt="Profile icon" className="mb-3" />
                <h2 className="font-semibold text-lg md:text-base">
                  Diversifiez votre portefeuille
                </h2>
                <p className="mt-2 text-sm leading-normal text-gray-text">
                  Investissez dans diverses industries telles que les
                  instruments à revenu fixe, l'agriculture, les transports, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Experiment />

      <div className="w-full h-auto px-17 py-3 flex sm:flex-col sm:px-3 mb-5">
        <div className="w-2/4 h-auto p-3 sm:w-full">
          <div>
            <p className="text-base font-medium text-primary-color">
              <span className="mr-2 sm:text-sm">-</span>TEMOIGNAGES
            </p>
            <h1 className="mt-2 text-3xl font-bold sm:text-2xl">
              Écoutez ce que disent nos clients
            </h1>
            <p className="mt-2 pr-5 text-gray-text sm:text-sm">
              Notre mission chez Wekavit est de permettre à plus de personnes
              comme vous d'atteindre vos objectifs financiers personnels.
            </p>
          </div>

          <div className="w-full h-auto p-9 bg-white mt-7 rounded-lg shadow-lg">
            <p className="leading-relaxed text-gray-text sm:text-sm">
              Comme tout le monde, je veux être protégé des fluctuations
              monétaires et Wekavit m'y aide. Les classes d'actifs à revenu fixe
              et immobilier sont mes choses préférées. J’aime voir comment mes
              retours fonctionnent au quotidien.
            </p>

            <div className=" w-full h-auto mt-5 flex items-center py-3 gap-x-5">
              <Image src={AvatarOne} alt="Avatar testimonial" />
              <div className="flex flex-col">
                <h1 className=" font-semibold">Josiane Mwamba</h1>
                <p className="text-sm text-gray-text">Maquilleuse</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/4 h-auto p-3 sm:w-full sm:-mt-5">
          <div className=" w-full h-auto p-9 bg-white mt-7 rounded-lg shadow-lg">
            <p className="leading-relaxed text-gray-text sm:text-sm">
              J'ai choisi Wekavit en raison de son leadership, de la richesse de
              ses connaissances et des personnes qui les soutiennent. Je rejoint
              la communauté afin de protéger mon épargne et mon investissement
              contre l'épuisement par la dévaluation et l'inflation qui est à un
              niveau record dans mon pays la RDC.
            </p>

            <div className="w-full h-auto mt-5 flex items-center py-3 gap-x-5">
              <Image src={AvatarTwo} alt="Avatar testimonial" />
              <div className="flex flex-col">
                <h1 className=" font-semibold">Adam Simba</h1>
                <p className="text-sm text-gray-text">Etudiant</p>
              </div>
            </div>
          </div>

          <div className=" w-full h-auto p-9 bg-white mt-7 rounded-lg shadow-lg">
            <p className="leading-relaxed text-gray-text sm:text-sm">
              Je ne veux pas investir dans des actions distinctes parce que je
              ne suis pas un expert financier et je préfère confier mon argent
              entre les mains de personnes comme Wekavit qui sont compétentes et
              bien informées.
            </p>

            <div className=" w-full h-auto mt-5 flex items-center py-3 gap-x-5">
              <Image src={AvatarThree} alt="Avatar testimonial" />
              <div className="flex flex-col">
                <h1 className=" font-semibold">Mike Onendu</h1>
                <p className="text-sm text-gray-text">Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
