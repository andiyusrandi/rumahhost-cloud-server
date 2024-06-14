"use client";

import CarouselMain from "@/components/Carousel/CarouselMain";
import { Icon } from "@iconify/react";
import numeral from "numeral";

function CloudHostingSSDPackages({ products }) {
  return (
    <section className="mb-12" id="pricing">
      <div className="container">
        <div className="mb-10 text-center">
          <h3 className="mb-4 text-[28px] leading-7 font-bold md:text-4xl">
            Harga Cloud Hosting SSD Terbaik di Indonesia
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
            >
              {products.map((data, index) => (
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
                        {numeral(parseInt(data.pricing.IDR.annually) - (parseInt(data.pricing.IDR.annually) * (parseInt(data.promo.value) / 100))).format("0,0")}
                      </span>
                      <span className="text-xs text-[#B5B5C3]"> / tahun</span>
                    </p>
                    <p
                      className={`font-semibold line-through ${data.isPopular ? "text-white" : "text-[#B5B5C3]"}`}
                    >
                      Rp.{numeral(data.pricing.IDR.annually).format("0,0")}
                    </p>
                    <p
                      className={`block w-fit rounded px-2 py-1 text-sm font-semibold ${data.isPopular ? "bg-white text-primary" : "bg-primary text-white"}`}
                    >
                      Promo - Hemat {numeral(data.promo.value).format("0,0")}%
                    </p>
                  </div>
                  <div className="mb-6 w-full">
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Disk {data.feature.QUOTA / 1000} GB</p>
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
                      <p>Addon/Parked {data.feature.MAXADDON == 0 && data.feature.MAXPARK == 0 ? '-/-' : data.feature.MAXADDON == null && data.feature.MAXPARK == null ? 'Unlimited' : `${data.feature.MAXADDON}/${data.feature.MAXPARK}`}</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Akun Email {data.feature.MAX_EMAILACCT_QUOTA === "unlimited" ? "Unlimited" : `${data.feature.MAX_EMAILACCT_QUOTA}`}</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Free SSL</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Akun FTP {data.feature.MAXFTP == null ? "Unlimited" : `${data.feature.MAXFTP}`}</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Subdomain {data.feature.MAXSUB == null ? "Unlimited" : `${data.feature.MAXSUB}`}</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Database {data.feature.MAXSQL == null ? "Unlimited" : `${data.feature.MAXSQL}`}</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Security360 (Opsional)</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className={`rounded-lg p-3 text-sm font-semibold capitalize ${data.isPopular ? "bg-white text-primary" : "bg-primary text-white"}`}
                  >
                    Order Sekarang
                  </a>
                </div>
              ))}
            </CarouselMain>
          </div>

          <div className="hidden w-full grid-cols-4 gap-4 lg:grid">
            {products.map((data, index) => (
              <div
                key={index}
                className={`flex flex-shrink-0 flex-grow basis-full flex-col items-center justify-between rounded-lg p-4 md:basis-[calc(50%-0.5rem)] ${data.isPopular ? "bg-primary" : "my-8 bg-white"}`}
              >
                <div className="w-full">
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
                        {numeral(parseInt(data.pricing.IDR.annually) - (parseInt(data.pricing.IDR.annually) * (parseInt(data.promo.value) / 100))).format("0,0")}
                      </span>
                      <span className="text-xs text-[#B5B5C3]"> / tahun</span>
                    </p>
                    <p
                      className={`font-semibold line-through ${data.isPopular ? "text-white" : "text-[#B5B5C3]"}`}
                    >
                      Rp.{numeral(data.pricing.IDR.annually).format("0,0")}
                    </p>
                    <p
                      className={`block w-fit rounded px-2 py-1 text-sm font-semibold ${data.isPopular ? "bg-white text-primary" : "bg-primary text-white"}`}
                    >
                      Promo - Hemat {numeral(data.promo.value).format("0,0")}%
                    </p>
                  </div>
                  <div className="mb-6 w-full">
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Disk {data.feature.QUOTA / 1000} GB</p>
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
                      <p>Addon/Parked {data.feature.MAXADDON == 0 && data.feature.MAXPARK == 0 ? '-/-' : data.feature.MAXADDON == null && data.feature.MAXPARK == null ? 'Unlimited' : `${data.feature.MAXADDON}/${data.feature.MAXPARK}`}</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Akun Email {data.feature.MAX_EMAILACCT_QUOTA === "unlimited" ? "Unlimited" : `${data.feature.MAX_EMAILACCT_QUOTA}`}</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Free SSL</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Akun FTP {data.feature.MAXFTP == null ? "Unlimited" : `${data.feature.MAXFTP}`}</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Subdomain {data.feature.MAXSUB == null ? "Unlimited" : `${data.feature.MAXSUB}`}</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Database {data.feature.MAXSQL == null ? "Unlimited" : `${data.feature.MAXSQL}`}</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                    <div className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}>
                      <p>Security360 (Opsional)</p>
                      <div className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}>
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className={`rounded-lg p-3 text-sm font-semibold capitalize ${data.isPopular ? "bg-white text-primary" : "bg-primary text-white"}`}
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

export default CloudHostingSSDPackages;
