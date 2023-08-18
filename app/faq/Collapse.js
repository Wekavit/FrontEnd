"use client";
import React, { useState, useRef, useEffect } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { HiChevronUp } from "react-icons/hi";

const Collapse = ({ question, response, key, id }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const currentOpenCollapseId = useRef(null);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (!isCollapsed) {
      currentOpenCollapseId.current = id;
    } else {
      if (id !== currentOpenCollapseId.current) {
        currentOpenCollapseId.current = null;
        setIsCollapsed(true);
      }
    }

    // return () => {
    //     second
    // }
  }, [handleClick]);

  console.log(currentOpenCollapseId, id);

  return (
    <Disclosure
      as="div"
      className="w-2/3 pb-5 border-b-1px border-secure-border rounded-md mb-3 sm:w-4/5"
    >
      <Disclosure.Button className="flex w-full justify-between px-4 py-3 text-left text-sm font-medium text-hero-text focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
        <span className="-ml-3">{question}</span>
        <HiChevronUp
          className={`${
            open ? "rotate-180 transform" : ""
          } h-5 w-5 text-primary-color`}
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

// <div className="w-2/3 mb-6 pb-7 border-b-1px border-secure-border rounded-md" onClick={handleClick}>
//     <button onClick={handleClick} className="text-hero-text text-sm font-semibold mb-3">
//         {question}
//     </button>
//     <div
//         style={{
//             opacity: isCollapsed ? 0 : 1,
//             height: isCollapsed && 0,
//             transform: isCollapsed ? "translateY(100px)" : "none",
//         }}
//         class="transition duration-500 ease-in opacity-0 transform-translateY-100 text-light-gray text-sm"

//     >
//         <p>{response}</p>
//     </div>
// </div>

export default Collapse;
