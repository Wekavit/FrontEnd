import React from "react";
import { CheckCircle } from "@/assets";
import Image from "next/image";

export default function Secure() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center bg-white pt-14 pb-20">
      <span className="text-primary-color mb-3 text-center font-semibold text-sm sm:-mt-4">
        Vous pouvez nous faire confiance
      </span>
      <p className="w-2/5 font-semibold text-center text-4xl text-hero-text leading-tight mb-4 sm:w-full sm:text-2xl sm:text-center md:text-2xl md:w-full md:mb-6 md:whitespace-nowrap">
        Nous nous engageons à prendre la sécurité très <br /> au sérieux
      </p>
      <div className="w-full h-auto flex justify-center items-center mb-6 mt-6 sm:flex-col">
        <div className="w-4/12 h-32 gap-x-4 flex border-1px border-secure-border mr-3 rounded-xl p-4 sm:w-4/5 sm:m-0 sm:mb-6 sm:h-auto md:w-2/5 md:h-40">
          <div className="w-auto">
            <Image
              src={CheckCircle}
              alt="Security icon"
              width={30}
              height={30}
              draggable="false"
            />
          </div>
          <div className="w-4/5 mt-0.18rem">
            <h4 className="text-base font-semibold text-text-dark mb-1">
              Authentification à deux facteurs
            </h4>
            <h4 className="text-sm text-light-gray">
              Sécurité à votre compte en exigeant un code envoyé à votre adresse
              e-mail
            </h4>
          </div>
        </div>
        <div className="w-4/12 h-32 gap-x-4 flex border-1px border-secure-border ml-3 rounded-xl p-4 sm:w-4/5 sm:m-0 sm:h-auto md:w-2/5 md:h-40">
          <div className="w-auto">
            <Image
              src={CheckCircle}
              alt="Security icon"
              width={30}
              height={30}
              draggable="false"
            />
          </div>
          <div className="w-4/5 mt-0.18rem">
            <h4 className="text-base font-semibold text-text-dark mb-1">
              Chiffrement fort
            </h4>
            <h4 className="text-sm text-light-gray">
              Est une façon de protéger vos données en convertissant le texte en
              un langage code.
            </h4>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center items-center sm:flex-col">
        <div className="w-4/12 h-32 gap-x-4 flex border-1px border-secure-border mr-3 rounded-xl p-4 sm:w-4/5 sm:h-auto sm:m-0 sm:mb-6 md:w-2/5 md:h-40">
          <div className="w-auto">
            <Image
              src={CheckCircle}
              alt="Security icon"
              width={30}
              height={30}
              draggable="false"
            />
          </div>
          <div className="w-4/5 mt-0.18rem">
            <h4 className="text-base font-semibold text-text-dark mb-1">
              Application à jour
            </h4>
            <h4 className="text-sm text-light-gray">
              La mise à jour régulière de votre application pour corriger toute
              vulnérabilité.
            </h4>
          </div>
        </div>
        <div className="w-4/12 gap-x-4 h-32 flex border-1px border-secure-border ml-3 rounded-xl p-4 sm:w-4/5 sm:h-auto sm:m-0 md:w-2/5 md:h-40">
          <div className="w-auto">
            <Image
              src={CheckCircle}
              alt="Security icon"
              width={30}
              height={30}
              draggable="false"
            />
          </div>
          <div className="w-4/5 mt-0.18rem">
            <h4 className="text-base font-semibold text-text-dark mb-1">
              Assistance 24/24
            </h4>
            <h4 className="text-sm text-light-gray">
              Vous rencontrez des problèmes, vous pouvez contacter l'équipe
              d’assistance pour obtenir de l'aide.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
