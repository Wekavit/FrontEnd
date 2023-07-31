import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CollaboratifIcon,
  CollectifIcon,
  PersonnalWallet,
  IndividualBank,
} from "@/assets";

const ServiceMenu = ({ service, setService, setContact }) => {
  return (
    <div
      onMouseEnter={() => {
        setContact(false);
      }}
      onMouseLeave={() => {
        setService(false);
      }}
      className={`fixed top-12vh ${
        service ? "flex" : "hidden"
      } flex-wrap gap-x-4 justify-center items-center left-15% w-2/5 h-56 bg-white p-3 rounded-lg z-50 border border-blue-small shadow-gray-200/80 shadow-md sm:hidden`}
    >
      {/* personnel */}
      <Link
        href="personal"
        className="w-45% h-20 transition-all duration-700 ease-in-out delay-150 hover:bg-hover-service flex gap-3 items-center px-5 rounded-lg"
      >
        <div className="px-3 py-4 bg-wallet-icon rounded-full">
          <Image
            src={PersonnalWallet}
            alt="Personnal wallet"
            className=" w-auto h-4 object-cover"
          />
        </div>
        <div>
          <h3 className=" font-semibold text-title-color">Personnel</h3>
          <p className="text-12px text-gray-text">Epargne individuel</p>
        </div>
      </Link>

      {/* Groupe */}
      <Link
        href="#"
        className="w-45% h-20 flex gap-3 items-center px-5 rounded-lg transition-all duration-700 ease-in-out delay-150 hover:bg-hover-service"
      >
        <div className="px-4 py-4 bg-collectif-icon rounded-full">
          <Image
            src={CollectifIcon}
            alt="Personnal wallet"
            className=" w-auto h-4 object-cover"
          />
        </div>
        <div>
          <h3 className=" font-semibold text-title-color">Collectif</h3>
          <p className="text-12px text-gray-text">Epargne collectif</p>
        </div>
      </Link>

      {/* Individuel */}
      <Link
        href="#"
        className="w-45% h-20 flex gap-3 items-center px-5 rounded-lg transition-all duration-700 ease-in-out delay-150 hover:bg-hover-service"
      >
        <div className="px-3 py-4 bg-individuel-icon rounded-full">
          <Image
            src={IndividualBank}
            alt="Personnal Finance"
            className=" w-auto h-4 object-cover"
          />
        </div>
        <div>
          <h3 className=" font-semibold text-title-color">Individuel</h3>
          <p className="text-12px text-gray-text">Investir son argent</p>
        </div>
      </Link>

      {/* Collectif */}
      <Link
        href="#"
        className="w-45% h-20 flex gap-3 items-center px-5 rounded-lg transition-all duration-700 ease-in-out delay-150 hover:bg-hover-service"
      >
        <div className="px-4 py-4 bg-collaboratif-icon rounded-full">
          <Image
            src={CollaboratifIcon}
            alt="Personnal wallet"
            className=" w-auto h-4 object-cover"
          />
        </div>
        <div>
          <h3 className=" font-semibold text-title-color">Collaboratif</h3>
          <p className="text-12px text-gray-text">Investir en groupe</p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceMenu;
