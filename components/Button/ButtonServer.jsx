"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function ButtonServer({ children = "indonesia", isPrimary = false }) {
  const [selectedState, setSelectedState] = useState(children);
  const [showOpt, setShowOpt] = useState(false);
  const areaClick = useRef(null);

  const changeState = (e) => {
    setSelectedState(e.target.value);
    setShowOpt(false);
  };

  const handleOutsideClick = (e) => {
    if (areaClick.current && !areaClick.current.contains(e.target)) {
      setShowOpt(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <div className="relative flex w-full flex-col" ref={areaClick}>
      <button
        className={`flex items-center justify-between rounded-md border p-3 capitalize 
        ${showOpt ? "rounded-b-none" : null} 
        ${isPrimary ? "border-white" : "border-primary"}
        `}
        onClick={() => setShowOpt(!showOpt)}
      >
        <div className="flex items-center gap-1 text-sm">
          <div className="relative hidden aspect-square h-6 overflow-hidden rounded-full">
            <Image
              src="https://flagsapi.com/ID/flat/32.png"
              alt=""
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </div>
          {selectedState}
        </div>
        <MdKeyboardArrowDown />
      </button>
      <div
        className={`absolute left-0 right-0 top-[100%] z-10 w-full flex-col bg-white 
        ${showOpt ? "flex" : "hidden"}
        ${isPrimary ? "border-white text-primary" : "border-[#5E6278]"}
        `}
      >
        <button
          className={`flex w-full items-center gap-3 border-b border-[#5E6278] px-3 py-2 text-left text-sm capitalize`}
          value="server indonesia"
          onClick={changeState}
        >
          <div className="relative hidden aspect-square h-6 overflow-hidden rounded-full">
            <Image
              src="https://flagsapi.com/ID/flat/32.png"
              alt=""
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </div>
          Server Indonesia
        </button>
        <button
          className={`flex w-full items-center gap-3 border-b border-[#5E6278] px-3 py-2 text-left text-sm capitalize`}
          value="server singapura"
          onClick={changeState}
        >
          <div className="relative hidden aspect-square h-6 overflow-hidden rounded-full">
            <Image
              src="https://flagsapi.com/SG/flat/32.png"
              alt=""
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </div>
          Server Singapura
        </button>
      </div>
    </div>
  );
}

export default ButtonServer;
