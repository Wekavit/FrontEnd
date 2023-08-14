import React from "react";
import Image from "next/image";
import { Features, CheckCircle } from "@/assets";

export default function Tracking() {
  return (
    <div className="w-full flex h-auto bg-transparent px-28 pt-24 pb-10 sm:flex-col sm:px-7 sm:py-7 sm:pt-10 md:px-7 md:py-7 md:pt-10">
      <div className="w-3/5 h-auto flex flex-col ml-20 sm:w-full sm:bg-blue-0 sm:ml-0 md:ml-11">
        <p className="text-primary-color mb-4 font-semibold text-sm sm:text-center sm:mt-2 md:mt-5">
          Améliorer votre vie financière
        </p>
        <p className="font-semibold w-4/5 text-4xl text-hero-text leading-tight tracking-normal mb-6 sm:w-full sm:text-2xl sm:text-center md:text-xl sm:mb-4 md:w-full md:-tracking-normal md:mb-3">
          Suivez vos épargnes et restez à l'écoute de vos finances
        </p>
        <div className="w-full h-auto flex mb-6 sm:flex-col sm:justify-center sm:ml-2 sm:mb-2 md:bg-red-0 md:flex-col">
          <div className="w-1/2 h-28 flex gap-x-3 pl-0 p-4 sm:w-full sm:h-auto sm:m-0 md:p-0 md:w-full md:h-auto md:mb-2">
            <div className="w-auto">
              <Image
                src={CheckCircle}
                width={25}
                height={25}
                draggable="false"
                alt=""
                className="md:w-6 md:h-6"
              />
            </div>
            <div className="w-4/5 sm:w-full md:w-full">
              <h4 className="text-sm text-light-gray md:text-sm">
                Notre fonctionalité de suivie vous aide à rester à l'écoute de
                vos finances
              </h4>
            </div>
          </div>
          <div className="w-1/2 h-28 -ml-5 flex gap-x-3 p-4 pl-0 sm:w-full sm:h-auto sm:m-0 md:p-0 md:w-full md:ml-0 md:h-max">
            <div className="w-auto">
              <Image
                src={CheckCircle}
                width={25}
                height={25}
                draggable="false"
                alt=""
                className="md:w-6 md:h-6"
              />
            </div>
            <div className="w-4/5 sm:w-full md:w-full bg-red-0">
              <h4 className="text-sm text-light-gray md:text-sm">
                Notre fonctionalité de verouillage vous permez de définir un
                délai
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 h-max flex justify-end mr-20 sm:w-full sm:justify-center sm:mr-0 sm:bg-red-0 md:mr-11 md:ml-3">
        <Image
          src={Features}
          width={500}
          height={500}
          draggable="false"
          alt=""
          className="sm:ml-6 sm:w-full"
        />
      </div>
    </div>
  );
}
