"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function ButtonDropdown({ title, datas }) {
  const [isShow, setIsShow] = useState(false);
  const buttonRef = useRef(null);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);

    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  return (
    <div className="h-auto lg:h-full">
      <button
        ref={buttonRef}
        onClick={handleShow}
        className="flex h-full items-center gap-2 text-nowrap px-2 py-4 text-sm capitalize transition-all duration-300 ease-in hover:text-primary"
      >
        {title}

        <MdKeyboardArrowDown
          className={`transition-transform duration-300 ease-in ${isShow ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      <div
        className={`absolute left-0 top-full w-full bg-[#323548] ${isShow ? "flex" : "hidden"}`}
      >
        <div className="container flex justify-start gap-4">
          {datas.length !== 0 &&
            datas.map((subdata, index) => (
              <Link
                href={subdata.url}
                key={index}
                className="flex max-w-96 items-center justify-start gap-4 px-3 py-4"
              >
                <div className="relative aspect-square h-16">
                  <Image
                    src={subdata.image}
                    alt={subdata.title}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "contain",
                      objectPosition: "center center",
                    }}
                  />
                </div>
                <div className="flex h-full flex-1 flex-col items-start text-left">
                  <h6 className="font-bold text-primary">{subdata.title}</h6>
                  <p className="text-wrap text-sm text-white">{subdata.desc}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ButtonDropdown;
