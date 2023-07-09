import React from "react";
import { Avatar, HandWriter, handwriter, Handwriterstar } from "@/assets";
import Image from "next/image";

export const Hero = () => {
  return <div className="w-full flex flex-wrap h-89vh mt-11vh">
    {/* text box  */}
    <div className="w-1/2 pl-17 h-full flex flex-col justify-center mt-8">
      <p className="text-5rem font-black tracking-widest leading-tight text-hero-text mb-6"><span className="text-primary-color">Wekavit, </span>epargnez juducieusement votre <br />argent</p>
      <p className="text-gray-text text-1.2rem font-medium leading-relaxed mb-6 tracking-wider">Wekavit vous aide à atteindre vos objectifs financiers en vous <br /> permettant d'épargner et d'investir facilement</p>
      <div className="w-full h-auto flex flex-col">
        <p className="text-light-gray text-xxs font-semibold mb-3">Rejoignez la liste d'attente pour être le premier à savoir quand nous lançons le produit</p>
        <form className="w-full h-auto flex">
          <input type="text" placeholder="cedrick@gmail.com" className="border-x border-y outline-none border-primary-color rounded py-4 px-4 w-2/4 placeholder:text-sm shadow-md shadow-blue-100" />
          <input type="submit" name="" value="Soumettre" id="" className="py-4 px-4 cursor-pointer text-white bg-primary-color rounded-md w-50 ml-2" />
        </form>
      </div>
    </div>
    {/* img box  */}
    <div className="w-1/2 h-full flex items-end justify-start">
      <Image
        src={Avatar}
        width={500}
        height={1000}
        alt="woman with a phone in the hand using wekavit"
        className="w-extra h-extra object-cover -ml-32"
      />
      <Image
        src={HandWriter}
        width={65}
        height={65}
        alt="woman with a phone in the hand using wekavit"
        className="absolute top-80 mt-6 ml-10"
      />
      <Image
        src={handwriter}
        width={110}
        height={110}
        alt="woman with a phone in the hand using wekavit"
        className="absolute top-28 mt-6 ml-4"
      />
      <Image
        src={Handwriterstar}
        width={35}
        height={35}
        alt="woman with a phone in the hand using wekavit"
        className="absolute top-60 right-20"
      />
    </div>
  </div>
}
