"use client";

import CarouselMain from "@/components/Carousel/CarouselMain";
import { cloudHostingWordpressSliderData } from "@/utils/data";
import { Icon } from "@iconify/react";
import numeral from "numeral";

function CloudHostingWordpressPackages() {
  return (
    <section className="mb-12" id="pricing">
      <div className="container">
        <div className="mb-10 text-center">
          <h3 className="mb-4 text-[28px] leading-relaxed font-bold md:leading-none md:text-4xl">
            Harga Wordpress Hosting Terbaik di Indonesia
          </h3>
          <p className="text-sm md:text-base">
            Performance tinggi dan waktu muat yang unggul dengan Cloud Hosting
            SSD, Pilih paket terbaik dan dapatkan diskon up to 60% Gratis
          </p>
        </div>
      </div>
      <div className="rounded-b-[50%_2rem] rounded-t-[50%_2rem] bg-[#13263C] py-10">
        <div className="container">
          <div className="block w-full lg:hidden">
            <CarouselMain
              isShowNavigator={false}
              isShowDots={true}
              autoPlay={true}
              autoSlideInterval={5000}
            >
              {cloudHostingWordpressSliderData.map((data, index) => (
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
                        {numeral(data.price).format("0,0")}
                      </span>
                      <span className="text-xs text-[#B5B5C3]"> / bulan</span>
                    </p>
                  </div>
                  <div className="mb-10 w-full">
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
                    className="rounded-lg border border-white bg-primary p-3 text-lg font-semibold capitalize text-white"
                  >
                    Order Sekarang
                  </a>
                </div>
              ))}
            </CarouselMain>
          </div>
          <div className="hidden w-full justify-center gap-4 lg:flex">
            {cloudHostingWordpressSliderData.map((data, index) => (
              <div
                key={index}
                className={`flex w-80 flex-col items-center justify-between rounded-lg p-4 ${data.isPopular ? "bg-primary" : "my-8 bg-white"}`}
              >
                <div className="w-full">
                  <h5
                    className={`mb-2 text-center text-xl font-bold uppercase ${data.isPopular ? "text-white" : "text-black"}`}
                  >
                    {data.title}
                  </h5>
                  <div className="mb-2 flex w-full flex-col items-center gap-2">
                    <p
                      className={`font-bold ${data.isPopular ? "text-white" : "text-primary"}`}
                    >
                      Rp.
                      <span className="font-roboto text-4xl font-bold">
                        {numeral(data.price).format("0,0")}
                      </span>
                      <span className="text-xs text-[#B5B5C3]"> / bulan</span>
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
                </div>
                <a
                  href={data.url}
                  className="rounded-lg border border-white bg-primary p-3 text-lg font-semibold capitalize text-white"
                >
                  Order Sekarang
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CloudHostingWordpressPackages;
