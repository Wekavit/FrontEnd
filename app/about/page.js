import React from "react";
import Image from "next/image";
import { SocialImage, StickImage, cedProfile } from "@/assets";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full flex flex-wrap h-89vh mt-12vh">
      <div className="w-full h-full flex flex-wrap py-3">
        <div className="w-2/4 h-full pl-28 flex justify-center gap-7 flex-col">
          <span className="p-3 text-minimal-color font-medium w-50 flex justify-center rounded-full bg-blue-mobileMenuBtn">
            Notre mission
          </span>
          <h1 className="text-4xl font-semibold leading-36 text-black-text">
            Donner à chacun le pouvoir de mieux épargner et faire fructifier ses
            finances
          </h1>

          <p className="leading-7 text-base text-gray-text">
            Nous fournissons à nos utilisateurs les outils nécessaires pour
            gérer leurs portefeuilles d’épargne, retirer leurs argent via mobile
            money et échanger investir en toute simplicité depuis son
            portefeuille.
          </p>
        </div>
        <div className="w-2/4 h-full flex justify-center items-center">
          <Image
            src={SocialImage}
            className="w-96 h-full"
            alt="Image friends"
          />
        </div>
      </div>

      <div className="w-full h-96 relative px-17 mt-4">
        <div className=" w-full h-auto p-3 bg-white flex flex-col items-center">
          <div className="w-2/3 h-auto flex justify-center items-center flex-col py-6">
            <Image
              src={StickImage}
              className="w-56"
              alt="Stick image"
              draggable="false"
            />
            <h2 className=" font-semibold mt-3 text-3xl text-black-text">
              Rencontrez notre équipe
            </h2>
            <p className="text-center mt-3 text-gray-text text-sm">
              Notre philosophie est simple : embaucher une équipe de personnes
              diversifiées et passionnées et favoriser une culture qui vous
              permet de faire de votre mieux
            </p>
          </div>

          <div className="w-full h-auto flex justify-center items-center gap-x-2 pt-6 pb-4 mt-3">
            <div className="w-auto h-auto p-4 flex flex-col justify-center items-center">
              <div className="w-auto h-auto relative">
                <Link href="">
                  <span className=" absolute bottom-1 right-2 p-2 bg-primary-color text-white rounded-full text-xs">
                    <FaLinkedin />
                  </span>
                </Link>
                <Image
                  src={cedProfile}
                  className="w-28 h-auto rounded-full"
                  alt="Cedrick profile"
                />
              </div>
              <h2 className=" font-semibold text-base mt-3">Cedrick Lupembe</h2>
              <p className="text-xs text-gray-text">Founder & CEO</p>
            </div>
            <div className="w-auto h-auto p-4 flex flex-col justify-center items-center">
              <div className="w-auto h-auto relative">
                <Link href="">
                  <span className=" absolute bottom-1 right-2 p-2 bg-primary-color text-white rounded-full text-xs">
                    <FaLinkedin />
                  </span>
                </Link>
                <Image
                  src={cedProfile}
                  className="w-28 h-auto rounded-full"
                  alt="Cedrick profile"
                />
              </div>
              <h2 className=" font-semibold text-base mt-3">Cedrick Lupembe</h2>
              <p className="text-xs text-gray-text">Founder & CEO</p>
            </div>
            <div className="w-auto h-auto p-4 flex flex-col justify-center items-center">
              <div className="w-auto h-auto relative">
                <Link href="">
                  <span className=" absolute bottom-1 right-2 p-2 bg-primary-color text-white rounded-full text-xs">
                    <FaLinkedin />
                  </span>
                </Link>
                <Image
                  src={cedProfile}
                  className="w-28 h-auto rounded-full"
                  alt="Cedrick profile"
                />
              </div>
              <h2 className=" font-semibold text-base mt-3">Cedrick Lupembe</h2>
              <p className="text-xs text-gray-text">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
