"use client";
/* eslint-disable react/no-unescaped-entities */
// import Login from "../assets/images/login1.jpg";
import flagone from "../assets/countries/flags/ad.png";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import countries from "@/assets/countries/countries";
import otherCounties from "@/assets/countries/OtherCountries";
// import flags from "@/assets/countries/flags";

export default function Home() {
  const [disabled, setDisabled] = useState(false);
  const flags = [
    {
      id: 1,
      image: flagone,
    },
    {
      id: 2,
      path: "../assets/countries/flags/ae.png",
    },
    {
      id: 3,
      path: "../assets/countries/flags/af.png",
    },
  ];
  const coutriesFlags = flags.map((item) => (
    <Image width={5} height={5} src={flagone} key={item.id} alt={item.path} />
  ));

  // console.log(coutriesFlags);
  return (
    <main className="flex min-h-screen flex-row items-center justify-between">
      <div className="flex h-screen w-1/2 bg-blue-700">
        {/* <Image
          src={flagone}
          alt="woman with a phone in a hand"
          width={100}
          height={100}
        /> */}
      </div>

      <div className="flex h-screen w-1/2 bg-back-color justify-center items-center px-12 py-20">
        <form className="flex flex-col items-center w-2/3 h-full rounded-xl bg-white py-5 px-12">
          <h2 className="text-black-text text-lg font-bold mt-6 mb-7">
            Créez votre compte Wekavit
          </h2>

          <div className="flex items-center justify-center w-full gap-2 text-sm mb-4">
            <input
              className="py-3 pl-5 w-1/2 border-border-color border-2 rounded-md outline-0"
              type="text"
              name=""
              placeholder="Prénom"
            />
            <input
              className="py-3 pl-5 w-1/2 border-border-color border-2 rounded-md outline-0"
              type="text"
              name=""
              placeholder="Nom de famille"
            />
          </div>

          <div className="flex items-center justify-center w-full gap-2 text-sm mb-4">
            <input
              className="py-3 pl-5 w-full border-border-color border-2 rounded-md outline-0"
              type="text"
              name=""
              placeholder="Adresse email"
            />
          </div>

          <div className="flex items-center justify-center w-full gap-2 text-sm mb-4">
            <select class="py-3 px-5 w-full text-gray-400 border-border-color border-2 rounded-md outline-0">
              <option value="none">Selectionez le pays</option>
              {otherCounties.map((item) => (
                <option
                  className="text-gray-500"
                  value={item.name}
                  key={item.code}
                >
                  {/* <Image
                    src={item.image}
                    alt={item.name}
                    width={20}
                    height={12}
                    className="inline-block mr-2"
                  /> */}
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-center w-full gap-2 text-sm mb-4">
            <input
              className="py-3 pl-5 w-full border-border-color border-2 rounded-md outline-0"
              type="text"
              name=""
              placeholder="Mot de passe"
            />
          </div>

          <div className="flex items-center justify-center w-full gap-2 text-sm mb-6">
            <input
              className="py-3 pl-5 w-full border-border-color border-2 rounded-md outline-0"
              type="text"
              name=""
              placeholder="Confirmer votre mot de passe"
            />
          </div>

          <div className="flex items-center justify-center w-full text-sm mb-6">
            <p className="text-xs text-gray-500">
              En vous inscrivant, vous acceptez nos{" "}
              <span className="text-primary-color">
                conditions d'utilisation
              </span>{" "}
              et notre{" "}
              <span className="text-primary-color">
                politique de confidentialité
              </span>
            </p>
          </div>

          <div className="flex items-center justify-center w-full text-sm mb-6">
            <p className="text-xs text-gray-500">
              Avez-vous un compte ?{" "}
              <span className="text-primary-color cursor-pointer">
                Connexion
              </span>
            </p>
            <button className="bg-primary-color text-white p-3 rounded-md ml-4">
              Créer un compte
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
