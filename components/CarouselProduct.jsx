"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productsData } from "@/utils/data";
import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

export default function CarouselProduct({ datas }) {
  const CustomDot = ({index, onClick, active}) => {
    return (
      <button
        onClick={e => {
          onClick();
          e.preventDefault();
        }}
        className="dot-button"
      >
        <span className={`custom-dot ${active ? "custom-dot-active" : ""}`}></span>
      </button>
    );
  };

  return (
    <>
      <div className="block lg:hidden">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          transitionDuration={500}
          arrows={false}
          showDots={true}
          customDot={<CustomDot />}
        >
          {productsData.map((data, index) => {
            return (
              <div
                key={index}
                className="mx-4 mb-10 flex h-[350px] flex-col items-start justify-between bg-white p-5 shadow-xl rounded-xl"
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="flex gap-3">
                    {data.icon}
                    <h3 className="text-xl font-semibold my-auto">{data.title}</h3>
                  </div>
                  <p className="text-base text-[#212529] leading-5">{data.body}</p>
                </div>
                <div className="flex flex-col items-start gap-2 text-sm w-full">
                  <p className="text-base text-[#5E6278]">Mulai dari</p>
                  <p>
                    <span className="text-xl font-bold text-[#f14d2e]">IDR {data.price}</span>{" "}
                    / tahun
                  </p>
                  <Link href={data.link} className="rounded-xl w-full bg-primary p-3 capitalize text-white text-center">
                    lihat detail
                  </Link>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="hidden flex-wrap justify-center gap-4 lg:flex">
        {productsData.map((data, index) => {
          return (
            <div
              key={index}
              className="flex h-[350px] max-w-96 flex-col items-start justify-between bg-white p-5 rounded-xl mb-5 custom-shadow"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="flex gap-3">
                  {data.icon}
                  <h3 className="text-xl font-semibold my-auto">{data.title}</h3>
                </div>
                <p className="p-2 md:p-0 text-base text-[#212529]">{data.body}</p>
              </div>
              <div className="flex flex-col items-start gap-2 text-sm w-full">
                <p className="text-base text-[#5E6278]">Mulai dari</p>
                <p>
                  <span className="text-xl font-bold text-[#f14d2e]">IDR {data.price}</span>{" "}
                  / tahun
                </p>
                <Link href={data.link} className="rounded-xl w-full p-3 capitalize text-white text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.15)]  bg-primary hover:bg-[#f14d2e]">
                  lihat detail
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
