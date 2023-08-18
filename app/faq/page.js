import React from "react";
import Collapse from "./Collapse";
// import Footer from "../components/Footer";
import Footer from "@/components/Footer";
import { ProfileFaqOne, ProfileFaqTwo, ProfileFaqThree } from "@/assets";
import Image from "next/image";

export default function page() {
  const faqs = [
    {
      id: 0,
      key: 0,
      question: "Qu'est ce que Wekavit ?",
      response: `Wekavit est une application de gestion financière en temps réel qui offre une interface utilisateur conviviale pour épargner et  investir vos finances.
       
            Vous pouvez choisir d'épargner de petites sommes d'argent périodiquement (quotidiennement, hebdomadairement ou mensuellement) vers un objectif spécifique OU de verrouiller des fonds pendant une période de temps spécifiée.`,
    },
    {
      id: 1,
      key: 1,
      question: "Pourquoi utliser Wekavit ?",
      response:
        "Wekavit is a mobile application that enabling people to save their money to cover their future objectives",
    },
    {
      id: 2,
      key: 2,
      question: "Comment puis-je commencer à épargner ?",
      response:
        "Wekavit is a mobile application that enabling people to save their money to cover their future objectives",
    },
    {
      id: 3,
      key: 3,
      question: "Avec combien puis-je commencer ?",
      response:
        "Wekavit is a mobile application that enabling people to save their money to cover their future objectives",
    },
    {
      id: 4,
      key: 4,
      question: "Mon argent est-il sécurisé ?",
      response:
        "Wekavit is a mobile application that enabling people to save their money to cover their future objectives",
    },
    {
      id: 5,
      key: 5,
      question: "Comment retirer mon épargne ?",
      response:
        "Wekavit is a mobile application that enabling people to save their money to cover their future objectives",
    },
    {
      id: 6,
      key: 6,
      question: "Quand puis-je retirer mon épargne ?",
      response:
        "Wekavit is a mobile application that enabling people to save their money to cover their future objectives",
    },
  ];

  const Answsers = faqs.map((item) => (
    <Collapse
      question={item.question}
      response={item.response}
      key={item.key}
      id={item.id}
    />
  ));
  return (
    <div className="pt-48 w-full h-auto flex flex-col justify-center sm:items-center sm:px-3">
      <p className="text-center font-semibold text-4xl text-hero-text leading-tight mb-3 sm:w-full sm:text-center sm:text-1.56rem sm:leading-normal sm:mb-1 md:text-3xl md:w-full">
        Questions fréquemment posées
      </p>
      <h4 className="text-base text-light-gray text-center mb-3 sm:text-sm sm:w-2/3 font-medium md:text-sm sm:mt-2 sm:mb-0">
        Tout ce que vous devez savoir sur le produit et sa facturation
      </h4>
      <div className="w-full flex flex-col justify-center items-center mt-10 sm:w-full sm:px-3">
        {Answsers}
      </div>
      <div className="w-full h-auto px-5 mb-7 mt-10">
        <div className="w-full flex flex-col items-center bg-white py-10 px-20 sm:px-3">
          <div className="w-1/3 flex items-center justify-center mb-5">
            <Image
              src={ProfileFaqOne}
              draggable="false"
              alt=""
              className="w-12 h-12 rounded-full -mr-3 object-cover"
            />
            <Image
              src={ProfileFaqThree}
              draggable="false"
              alt=""
              className="w-14 h-14 rounded-full border-1px border-white -mt-2 z-10 object-cover"
            />
            <Image
              src={ProfileFaqTwo}
              draggable="false"
              alt=""
              className="w-12 h-12 rounded-full -ml-3 object-cover"
            />
          </div>
          <p className="text-center font-semibold text-base text-hero-text leading-tight mb-3 sm:w-full sm:text-center sm:text-lg sm:tracking-normal sm:leading-normal sm:mb-2 md:text-3xl md:w-full">
            Avez-vous encore des questions ?
          </p>
          <p className="text-sm text-light-gray text-center mb-3 px-3 sm:text-xs md:text-sm">
            Tout ce que vous devez savoir sur le produit et sa facturation
          </p>
          <button className="text-white bg-primary-color font-medium mt-3 flex justify-center items-center text-sm px-4 py-3 rounded-md">
            Entrer en contact
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
