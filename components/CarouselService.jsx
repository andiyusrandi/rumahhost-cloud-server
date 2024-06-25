"use client";

import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { serviceData } from "@/utils/data";

export default function CarouselService() {
  return (
    <>
      <div className="block md:hidden">
          {serviceData.map((data, index) => {
            return (
              <div
                key={index}
                className="product__card m-4 flex h-[372px] flex-col justify-between bg-white p-5 shadow-xl rounded-xl"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xl font-semibold float-left">{data.title}</h5>
                    <div className="flex aspect-square items-center float-right justify-center rounded-lg bg-[#F3F6F9] px-3 text-xl text-primary">
                      {data.icon}
                    </div>
                  </div>
                  <p className="text-base text-[#212529] leading-5">{data.desc}</p>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <p className="text-base">Mulai dari</p>
                  <p>
                    <span className="text-xl font-bold">{data.price}</span>{" "}
                    / bulan
                  </p>
                  <Link href={data.url} className="w-fit rounded-xl bg-primary p-3 font-semibold capitalize text-white shadow-[0_2px_10px_0_rgba(0,0,0,0.15)]">
                    Beli sekarang
                  </Link>
                </div>
              </div>
            );
          })}
        {/* </Carousel> */}
      </div>
      <div className="hidden grid-cols-2 md:grid md:gap-4 lg:grid-cols-3 lg:gap-8" style={{padding: "0 40px"}}>
        {serviceData.map((data, index) => {
          return (
            <div
              key={index}
              className="flex aspect-square h-[350px] w-full max-w-96 flex-col justify-between gap-5 bg-white px-4 py-6 rounded-xl custom-shadow"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-xl font-semibold my-auto">{data.title}</h5>
                  <div className="flex aspect-square items-center justify-center rounded-lg bg-[#F3F6F9] p-2 text-primary">
                    {data.icon}
                  </div>
                </div>
                <p className="text-base text-[#212529]">{data.desc}</p>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <p className="text-base text-[#212529]">Mulai dari</p>
                <p>
                  <span className="text-xl font-bold">IDR {data.price}</span>{" "}
                  / bulan
                </p>
                <Link href={data.url} className="w-fit rounded-lg bg-primary p-3 font-semibold capitalize text-white shadow-[0_2px_10px_0_rgba(0,0,0,0.15)] hover:bg-secondary">
                  Beli sekarang
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
