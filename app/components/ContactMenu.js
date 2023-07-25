import React from "react";
import Link from "next/link";

const ContactMenu = ({ contact, setContact, setService }) => {
  const phoneNumber = "tel:+25768887091";
  const whatsapp = "https://wa.me/68887091";
  const mail =
    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=cedricklupembe91@gmail.com";

  return (
    <div
      onMouseEnter={() => {
        setService(false);
      }}
      onMouseLeave={() => {
        setContact(false);
      }}
      className={`fixed transition-all duration-700 ease-in-out delay-150 ${
        contact ? "flex" : "hidden"
      } top-12vh gap-x-4 justify-center items-center left-45% w-1/3 h-56 bg-white rounded-lg z-50 border border-blue-small shadow-gray-200/80 shadow-md`}
    >
      <div className=" w-2/3 h-full bg-white px-5 flex flex-col justify-center rounded-l-lg">
        <h2 className=" font-bold text-text-dark">Obtenir de l'aide</h2>
        <p className="text-xs mt-3 leading-5 text-gray-text">
          Appelez nous ou envoyez nous un message et nous serons ravi de vous
          répondre dans les plus brefs délais
        </p>
      </div>
      <div className="w-1/2 h-full bg-hover-service rounded-r-lg flex justify-center items-center">
        <ul className=" flex flex-col gap-y-5 text-sm text-primary-color">
          <Link href={phoneNumber}>
            <li>+25768887091</li>
          </Link>
          <Link href={whatsapp}>
            <li>WhatsApp</li>
          </Link>
          <Link href={mail}>
            <li>Messagerie</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ContactMenu;
