"use client";

import CarouselMain from "@/components/Carousel/CarouselMain";
import { cloudHostingSSDSliderData } from "@/utils/data";
import { Icon } from "@iconify/react";
import numeral from "numeral";

export default function Home() {
  return (
    <section className="relative z-[1] my-12 rounded-[50%/1.5rem] bg-[#13263C]">
      <div className="container">
        <div className="w-full py-8">
          <CarouselMain
            isShowNavigator={false}
            isShowDots={true}
            autoPlay={true}
          >
            {cloudHostingSSDSliderData.map((data, index) => (
              <div
                key={index}
                className={`flex flex-shrink-0 flex-grow basis-full flex-col items-center rounded-lg p-4 md:basis-[calc(50%-0.5rem)] ${data.isPopular ? "bg-primary" : "bg-white"}`}
              >
                <h5
                  className={`mb-2 text-center text-xl font-bold uppercase ${data.isPopular ? "text-white" : "text-black"}`}
                >
                  {data.title}
                </h5>
                <div className="mb-2 flex w-full flex-col items-center gap-2">
                  <p
                    className={`text-sm font-semibold ${data.isPopular ? "text-white" : "text-primary"}`}
                  >
                    Rp.
                    <span className="text-lg font-bold">
                      {numeral(data.priceDiscount).format("0,0")}
                    </span>
                    <span className="text-xs text-[#B5B5C3]"> / bulan</span>
                  </p>
                  <p
                    className={`font-semibold line-through ${data.isPopular ? "text-white" : "text-[#B5B5C3]"}`}
                  >
                    Rp.{numeral(data.price).format("0,0.00")}
                  </p>
                  <p
                    className={`block w-fit rounded px-2 py-1 text-sm font-semibold ${data.isPopular ? "bg-white text-primary" : "bg-primary text-white"}`}
                  >
                    Promo - Hemat {data.savingPercentage}%
                  </p>
                </div>
                <div className="mb-6 w-full">
                  {data.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}
                    >
                      <p>{feature}</p>
                      <div
                        className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}
                      >
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href={data.url}
                  className={`rounded-lg p-3 text-sm font-semibold capitalize ${data.isPopular ? "bg-white text-primary" : "bg-primary text-white"}`}
                >
                  Order Sekarang
                </a>
              </div>
            ))}
          </CarouselMain>
        </div>
      </div>
    </section>
  );
}
