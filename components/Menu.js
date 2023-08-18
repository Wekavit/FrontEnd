import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronDown } from "react-icons/hi";

// Icons
import {
  CollaboratifIcon,
  CollectifIcon,
  PersonnalWallet,
  IndividualBank,
} from "@/assets";
import Social from "@/utils/Social";

const Menu = ({ open, setOpen }) => {
  const [services, setServices] = useState(false);
  const [contact, setContact] = useState(false);

  const phoneNumber = "tel:+25768887091";
  const whatsapp = "https://wa.me/68887091";
  const mail =
    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=wekavit@gmail.com";

  return (
    <>
      <ul className="w-full h-full">
        <li className="w-full pl-2 pr-5 flex items-center justify-between origin-top py-5 text-base font-medium">
          <span>Services</span>
          <button
            className="px-2 py-2 rounded-lg bg-blue-mobileMenuBtn"
            onClick={() => setServices(!services)}
          >
            <HiOutlineChevronDown
              className={`text-sm transition-all ease-in-out delay-150 ${
                services ? "rotate-180" : ""
              }`}
            />
          </button>
        </li>

        {/* Menu service */}

        {services ? (
          <div className="w-full h-auto rounded p-5 transition-all duration-700 ease-in-out delay-150">
            <ul className="w-full h-full">
              <Link href="/personal" onClick={() => setOpen(!open)}>
                <li className="w-full pl-2 pr-5 flex items-center justify-start gap-5 py-3 text-sm">
                  <span className="p-3 bg-blue-mobileMenuBtn rounded-lg">
                    <Image
                      src={PersonnalWallet}
                      alt="Personal wallet link"
                      width={16}
                      height={16}
                      draggable="false"
                    />
                  </span>
                  <span>Personnel</span>
                </li>
              </Link>

              <Link href="/collective" onClick={() => setOpen(!open)}>
                <li className="w-full pl-2 pr-5 flex items-center justify-start gap-5 py-3 text-sm">
                  <span className="px-3 py-2 bg-orange-mobileMenuBtn rounded-lg">
                    <Image
                      src={CollectifIcon}
                      alt="lock group saving link"
                      width={15}
                      height={15}
                      draggable="false"
                    />
                  </span>
                  <span>Collectif</span>
                </li>
              </Link>

              <Link href="/finance" onClick={() => setOpen(!open)}>
                <li className="w-full pl-2 pr-5 flex items-center justify-start gap-5 py-3 text-sm">
                  <span className="p-3 bg-green-mobileMenuBtn rounded-lg">
                    <Image
                      src={IndividualBank}
                      alt="Individual finance link"
                      width={15}
                      height={15}
                      draggable="false"
                    />
                  </span>
                  <span>Individuel</span>
                </li>
              </Link>

              <Link href="/Collaboratif" onClick={() => setOpen(!open)}>
                <li className="w-full pl-2 pr-5 flex items-center justify-start gap-5 py-3 text-sm">
                  <span className="p-3 bg-pink-mobileMenuBtn rounded-lg">
                    <Image
                      src={CollaboratifIcon}
                      alt="Collaboratif finance link"
                      width={15}
                      height={15}
                      draggable="false"
                    />
                  </span>
                  <span>Collaboratif</span>
                </li>
              </Link>
            </ul>
          </div>
        ) : null}

        <Link href="/about" onClick={() => setOpen(!open)}>
          <li className="w-full pl-2 pr-5 flex items-center justify-between py-5  text-base font-medium">
            <span>Entreprise</span>
          </li>
        </Link>

        <Link href="/faq" onClick={() => setOpen(!open)}>
          <li className="w-full pl-2 pr-5 flex items-center justify-between py-5  text-base font-medium">
            FAQs
          </li>
        </Link>

        <li className="w-full pl-2 pr-5 flex items-center justify-between py-5  text-base font-medium">
          <span>Contacts</span>
          <button
            className="px-2 py-2 rounded-lg bg-blue-mobileMenuBtn"
            onClick={() => setContact(!contact)}
          >
            <HiOutlineChevronDown
              className={`text-sm transition-all ease-in-out delay-150 ${
                contact ? "rotate-180" : ""
              }`}
            />
          </button>
        </li>

        {contact ? (
          <div className="w-full text-primary-color h-auto rounded p-5 transition-all duration-700 ease-in-out delay-150">
            <ul className="w-full h-full">
              <li className="w-full pl-2 pr-5 flex items-center justify-start gap-5 py-3 text-sm">
                <Link href={phoneNumber}>+25768887091</Link>
              </li>

              <li className="w-full pl-2 pr-5 flex items-center justify-start gap-5 py-3 text-sm">
                <Link href={whatsapp}>WhatsApp</Link>
              </li>

              <Link href={mail}>
                <li className="w-full pl-2 pr-5 flex items-center justify-start gap-5 py-3 text-sm">
                  <span>Message</span>
                </li>
              </Link>
            </ul>
          </div>
        ) : null}

        <Link href={Social.Newsletter}>
          <div className="w-11/12 ml-2 mt-3 p-2 text-center text-base bg-primary-color text-white rounded-lg border-2 border-primary-color">
            S'inscrire
          </div>
        </Link>
      </ul>
    </>
  );
};

export default Menu;
