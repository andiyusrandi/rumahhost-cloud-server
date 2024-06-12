"use client";

import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown, MdWhatsapp } from "react-icons/md";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";

import LogoHeader from "@/public/LogoHeader.svg";

import { headerItem } from "@/utils/data";

function Header() {
  const TOP_OFFSET = 10;
  const headerRef = useRef(null);
  const [headerWidth, setHeaderWidth] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const headerObserver = new ResizeObserver((entries) => {
      setHeaderWidth(entries[0].contentRect.height);
    });

    headerObserver.observe(headerRef.current);
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[999] min-w-full text-white ${showBackground ? "bg-[#323548] shadow-[0_4px_4px_rgba(0,0,0,0.25)]" : "bg-transparent"}`}
      style={{ transition: "all .4s" }}
    >
      <div
        ref={headerRef}
        className="container flex h-[64px] items-center justify-between px-4"
      >
        {/* Logo */}
        <Link href="/" className="relative h-8">
          <Image
            src={LogoHeader}
            alt=""
            style={{
              width: "100%",
              objectFit: "contain",
              height: "100%",
            }}
          />
        </Link>

        {/* Menu */}
        <div className="block lg:hidden">
          <button className="rounded p-2" onClick={menuHandler}>
            {isMenuOpen ? <CgClose size={28} /> : <CgMenuRight size={28} />}
          </button>
          {isMenuOpen && (
            <div
              className="absolute left-0 top-full flex w-full flex-col justify-between bg-[#323548] px-4 pb-4 text-white"
              style={{
                height: `calc(100vh - ${headerWidth}px)`,
              }}
            >
              <div className="flex flex-col">
                {headerItem.map((data, index) => {
                  if (data.subitem.length === 0) {
                    return (
                      <Link
                        key={index}
                        href={data.url}
                        className="px-3 py-2 capitalize transition-all duration-300 ease-in hover:text-primary"
                      >
                        {data.title}
                      </Link>
                    );
                  }

                  return (
                    <div key={index} className="group">
                      <button className="flex w-full items-center justify-between px-3 py-2 capitalize transition-all duration-300 ease-in hover:text-primary">
                        <Link href={data.url}>{data.title}</Link>

                        <MdKeyboardArrowDown className="transition-transform duration-300 ease-in group-hover:rotate-180" />
                      </button>

                      <div className={`hidden flex-col group-hover:flex`}>
                        {data.subitem.map((subdata, index) => (
                          <Link
                            key={index}
                            href={subdata.url}
                            className="ml-4 px-3 py-2 capitalize text-primary transition-all duration-300 ease-in"
                          >
                            {subdata.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link
                href="https://client.rumahhost.com/login"
                className="rounded-md border border-white p-2 text-center text-base font-medium text-white"
              >
                Login
              </Link>
            </div>
          )}
        </div>

        {/* Navbar */}
        <nav className="hidden h-full w-fit items-center justify-between gap-2 overflow-hidden text-white lg:flex">
          <div className="flex h-full items-center">
            {headerItem.map((data, index) => {
              if (data.subitem.length === 0) {
                return (
                  <Link
                    key={index}
                    href={data.url}
                    className="flex h-full items-center gap-1 text-nowrap px-2 py-4 text-sm capitalize transition-all duration-300 ease-in hover:text-primary"
                  >
                    {data.title}
                  </Link>
                );
              }

              return (
                <div key={index} className="group h-full">
                  <Link
                    href={data.url}
                    className="flex h-full items-center gap-2 text-nowrap px-2 py-4 text-sm capitalize transition-all duration-300 ease-in hover:text-primary"
                  >
                    {data.title}

                    <MdKeyboardArrowDown className="transition-transform duration-300 ease-in group-hover:rotate-180" />
                  </Link>

                  <div
                    className={`absolute left-0 top-full hidden w-full bg-[#323548] group-hover:flex`}
                  >
                    <div className="container flex justify-start gap-4">
                      {data.subitem.length !== 0 &&
                        data.subitem.map((subdata, index) => (
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
                              <h6 className="font-bold text-primary">
                                {subdata.title}
                              </h6>
                              <p className="text-wrap text-sm text-white">
                                {subdata.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="https://client.rumahhost.com/login"
              className="rounded-md border border-white px-6 py-2 text-center font-bold text-white"
            >
              Login
            </Link>
            <Link href="#" className="hidden text-2xl xl:block">
              <MdWhatsapp />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
