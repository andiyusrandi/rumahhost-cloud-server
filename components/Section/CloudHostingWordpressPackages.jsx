"use client";

import CarouselMain from "@/components/Carousel/CarouselMain";
import { Icon } from "@iconify/react";
import numeral from "numeral";
import Link from "next/link";

function CloudHostingWordpressPackages({ datas }) {
  return (
    <section className="mb-12" id="pricing">
      <div className="container max-w-3xl">
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
      <div className="rounded-b-[50%_2rem] rounded-t-[50%_2rem] py-10">
        <div className="container">
          <div className="block w-full lg:hidden">
            <CarouselMain
              isShowNavigator={false}
              isShowDots={true}
              autoPlay={true}
              autoSlideInterval={5000}
            >
              {datas.map((data, index) => (
                <div
                  key={index}
                  className={`flex flex-shrink-0 flex-grow basis-full flex-col items-center rounded-lg p-4 md:basis-[calc(50%-0.5rem)] ${data.isPopular ? "bg-primary" : "bg-white"}`}
                >
                  <h5
                    className={`mb-2 text-center text-xl font-bold uppercase ${data.isPopular ? "text-white" : "text-black"}`}
                  >
                    {data.previewName}
                  </h5>
                  <div className="mb-2 flex w-full flex-col items-center gap-2">
                    <p
                      className={`text-sm font-semibold ${data.isPopular ? "text-white" : "text-primary"}`}
                    >
                      Rp.
                      <span className="text-lg font-bold">
                        {numeral(data.pricing.IDR.annually / 12).format("0,0")}
                      </span>
                      <span className="text-xs "> / Bulan</span>
                    </p>
                  </div>
                  <div className="mb-10 w-full">
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Disk {data.feature.QUOTA / 1000} GB</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>RAM {data.previewName === "PERSONAL" ? '4' : data.previewName === "SMALL TEAM" ? '6' : '10'} GB</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>CPU CORE {data.previewName === "PERSONAL" ? '2' : data.previewName === "SMALL TEAM" ? '3' : '5'}</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Unmetered Bandwidth</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Subdomain Unlimited</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>AKun Email Unlimited</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Cloudfire</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`https://client.rumahhost.com/cart.php?a=add&pid=${data.pid}`}
                    className="rounded-lg border border-white bg-primary p-3 text-lg font-semibold capitalize text-white"
                  >
                    Order Sekarang
                  </Link>
                </div>
              ))}
            </CarouselMain>
          </div>
          <div className="hidden w-full justify-center gap-4 lg:flex">
            {datas.map((data, index) => (
              <div
                key={index}
                className={`flex w-80 flex-col items-center justify-between rounded-lg p-4 custom-shadow ${data.isPopular ? "bg-primary" : "my-8 bg-white"}`}
              >
                <div className="w-full">
                  <h5
                    className={`mb-2 text-center text-xl font-bold uppercase ${data.isPopular ? "text-white" : "text-black"}`}
                  >
                    {data.previewName}
                  </h5>
                  <div className="mb-2 flex w-full flex-col items-center gap-2">
                    <p
                      className={`font-bold ${data.isPopular ? "text-white" : "text-primary"}`}
                    >
                      Rp.
                      <span className="font-roboto text-4xl font-bold">
                        {numeral(data.pricing.IDR.annually / 12).format("0,0")}
                      </span>
                      <span className="text-xs "> / Bulan</span>
                    </p>
                  </div>
                  <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-200" />
                  <div className="mb-6 w-full">
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Disk {data.feature.QUOTA / 1000} GB</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>RAM {data.previewName === "PERSONAL" ? '4' : data.previewName === "SMALL TEAM" ? '6' : '10'} GB</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>CPU CORE {data.previewName === "PERSONAL" ? '2' : data.previewName === "SMALL TEAM" ? '3' : '5'}</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Unmetered Bandwidth</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Subdomain Unlimited</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>AKun Email Unlimited</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Cloudfire</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href={`https://client.rumahhost.com/cart.php?a=add&pid=${data.pid}`}
                  className="rounded-lg border border-white bg-primary p-3 text-lg font-semibold capitalize text-white"
                >
                  Order Sekarang
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CloudHostingWordpressPackages;
