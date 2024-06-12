"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";

import { commitmentData } from "@/utils/data";

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

export default function CarouselCommitment() {
  return (
    <>
      <div className="block pl-10 md:hidden">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          transitionDuration={500}
          arrows={false}
        >
          {commitmentData.map((data, index) => {
            return (
              <div
                key={index}
                className="relative flex aspect-[2/1] min-h-full flex-col "
              >
                <div className="commitment__card mr-10 flex h-full flex-col gap-2 rounded-xl bg-white p-3">
                  <h5 className="text-xl font-semibold">{data.title}</h5>
                  <p className="text-base text-[#212529]">
                    {data.desc}
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 h-[40px]">
                  <Image src={data.image} alt={data.alt} className="h-full" />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="hidden gap-4 px-10 md:grid md:grid-cols-2 lg:grid-cols-3">
        {commitmentData.map((data, index) => {
          return (
            <div key={index} className="relative flex flex-col">
              <div className="commitment__card mr-10 flex aspect-[3/2] h-full flex-col gap-2 rounded-xl bg-white p-3">
                <h5 className="text-xl font-semibold">{data.title}</h5>
                <p className="text-base text-[#212529]">
                  {data.desc}
                </p>
              </div>
              <div className="absolute bottom-0 right-0 h-[40px]">
                <Image src={data.image} alt={data.alt} className="h-full" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
