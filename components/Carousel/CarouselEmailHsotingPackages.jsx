"use client";

import React from "react";
import CarouselMain from "./CarouselMain";
import { emailHostingPackagesSliderData } from "@/utils/data";
import numeral from "numeral";
import { Icon } from "@iconify/react";
import Link from "next/link";

function CarouselEmailHsotingPackages() {
  return (
    <div>
      <div className="block w-full lg:hidden">
        <CarouselMain isShowNavigator={false} isShowDots={true} autoPlay={true}>
          {emailHostingPackagesSliderData.map((data, index) => (
            <div
              key={index}
              className={`custom-shadow flex-shrink-0 flex-grow basis-full rounded-lg px-6 py-4 md:basis-[calc(50%-0.5rem)] ${data.isPopular ? "bg-primary text-white" : "bg-white"}`}
            >
              <div className="flex flex-col items-center justify-center gap-12">
                <div className="w-full text-center">
                  <h6 className="mb-4 text-xl font-bold">{data.title}</h6>
                  <p
                    className={`mb-4 ${data.isPopular ? "" : "text-[#5E6278]"}`}
                  >
                    <span
                      className={`text-sm font-semibold ${data.isPopular ? "" : "text-primary"}`}
                    >
                      Rp.{" "}
                    </span>
                    <span
                      className={`text-xl font-bold ${data.isPopular ? "" : "text-primary"}`}
                    >
                      {numeral(data.currentPrice).format("0,0")}
                    </span>{" "}
                    / Bulan
                  </p>
                  <div className="mb-4">
                    <span
                      className={`mb-2 inline-block text-sm font-semibold line-through ${data.isPopular ? "" : "text-[#5E6278]"}`}
                    >
                      Rp. {numeral(data.price).format("0,0")}
                    </span>
                    <span
                      className={`block rounded px-2 py-1 text-sm font-semibold ${data.isPopular ? "bg-white text-primary" : "bg-primary text-white"}`}
                    >
                      Promo {data.promoPerc}% - Hemat Rp.{" "}
                      {numeral(data.saved).format("0,0")}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    {data.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span
                          className={`text-sm font-medium ${data.isPopular ? "" : "text-[#5E6278]"}`}
                        >
                          {feature}
                        </span>
                        <div
                          className={`rounded-full p-1 text-sm ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}
                        >
                          <Icon icon="mdi:done" />
                        </div>
                      </div>
                    ))}
                    <div
                      className={`text-center ${data.isPopular ? "" : "text-[#5E6278]"}`}
                    >
                      Bayar Rp. {numeral(data.buy).format("0,0")}/Bulan
                    </div>
                  </div>
                </div>
                <Link
                  href={data.url}
                  className={`w-fit rounded-lg p-2 text-sm font-semibold shadow-lg ${data.isPopular ? "bg-white text-primary" : "bg-primary text-white"}`}
                >
                  Beli Sekarang
                </Link>
              </div>
            </div>
          ))}
        </CarouselMain>
      </div>
      <div className="hidden w-full items-center justify-center gap-4 lg:flex">
        {emailHostingPackagesSliderData.map((data, index) => (
          <div
            key={index}
            className={`custom-shadow flex-shrink flex-grow-0 basis-1/3 rounded-lg px-6 py-4 ${data.isPopular ? "bg-primary text-white" : "bg-white"}`}
          >
            <div
              className={`flex flex-col items-center justify-center ${data.isPopular ? "gap-28" : "gap-12"}`}
            >
              <div className="w-full text-center">
                <h6 className="mb-4 text-xl font-bold">{data.title}</h6>
                <p className={`mb-4 ${data.isPopular ? "" : "text-[#5E6278]"}`}>
                  <span
                    className={`text-sm font-semibold ${data.isPopular ? "" : "text-primary"}`}
                  >
                    Rp.{" "}
                  </span>
                  <span
                    className={`text-xl font-bold ${data.isPopular ? "" : "text-primary"}`}
                  >
                    {numeral(data.currentPrice).format("0,0")}
                  </span>{" "}
                  / Bulan
                </p>
                <div className="mb-4">
                  <span
                    className={`mb-2 inline-block text-sm font-semibold line-through ${data.isPopular ? "" : "text-[#5E6278]"}`}
                  >
                    Rp. {numeral(data.price).format("0,0")}
                  </span>
                  <span
                    className={`block rounded px-2 py-1 text-sm font-semibold ${data.isPopular ? "bg-white text-primary" : "bg-primary text-white"}`}
                  >
                    Promo {data.promoPerc}% - Hemat Rp.{" "}
                    {numeral(data.saved).format("0,0")}
                  </span>
                </div>
                <div className="flex flex-col gap-2 text-left">
                  {data.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span
                        className={`text-sm font-medium ${data.isPopular ? "" : "text-[#5E6278]"}`}
                      >
                        {feature}
                      </span>
                      <div
                        className={`rounded-full p-1 text-sm ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}
                      >
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                  ))}
                  <div
                    className={`text-center ${data.isPopular ? "" : "text-[#5E6278]"}`}
                  >
                    Bayar Rp. {numeral(data.buy).format("0,0")}/Bulan
                  </div>
                </div>
              </div>
              <Link
                href={data.url}
                className={`w-fit rounded-lg p-2 text-sm font-semibold shadow-lg ${data.isPopular ? "bg-white text-primary" : "bg-primary text-white"}`}
              >
                Beli Sekarang
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselEmailHsotingPackages;
