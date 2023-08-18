"use client";
import React, { useState, useRef, useEffect } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { HiChevronUp } from "react-icons/hi";

const Collapse = ({ question, response }) => {

  const [open, setOpen] = useState(false)


  return (
    <Disclosure as="div" className="w-2/3 pb-5 border-b-1px border-secure-border rounded-md mb-3">
      <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-hero-text hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mb-2" onClick={() => setOpen(!open)}>
        <span className="-ml-3">{question}</span>
        <HiChevronUp
          className={`${open ? 'rotate-180 transform' : ''
            } h-5 w-5 text-purple-500`}
        />
      </Disclosure.Button>
      <Transition
        enter="transition duration-500 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-300 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel className="text-light-gray text-sm">
          {response}
        </Disclosure.Panel>
      </Transition>

    </Disclosure>

  );
};


export default Collapse;
