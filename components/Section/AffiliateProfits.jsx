"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

import AffiliateProfitImage from "@/public/AffiliateProfits.png";

function AffiliateProfits() {
  return (
    <section className="overflow-hidden bg-gradient-to-t from-[#F7F1EF]">
      <div className="container grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3">
        <div className="grid grid-cols-1 py-4 lg:col-span-2 lg:grid-cols-2">
          <div className="flex flex-col gap-2 p-4">
            <div className="flex items-center gap-2">
              <Icon
                icon="solar:money-bag-outline"
                className="text-2xl text-primary"
              />
              <h6 className="font-semibold text-lg md:text-xl">Komisi Langsung Rp.100.000,-</h6>
            </div>
            <p className="text-sm text-[#5E6278] md:text-base">
              Dapatkan komisi langsung Rp.100.000,- saat Anda bergabung.
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <div className="flex items-center gap-2">
              <Icon
                icon="tabler:clock-dollar"
                className="text-2xl text-primary"
              />
              <h6 className="font-semibold text-lg md:text-xl">Komisi 20%</h6>
            </div>
            <p className="text-sm text-[#5E6278] md:text-base">
              Dapatkan komisi dari setiap penjualan cloud hosting minimal paket
              Medium.
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <div className="flex items-center gap-2">
              <Icon
                icon="fluent:people-community-24-regular"
                className="text-2xl text-primary"
              />
              <h6 className="font-semibold text-lg md:text-xl">Gratis untuk Bergabung</h6>
            </div>
            <p className="text-sm text-[#5E6278] md:text-base">
              Dengan Program Afiliasi kami yang bebas biaya untuk peserta, Anda
              tidak akan rugi sama sekali!
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <div className="flex items-center gap-2">
              <Icon
                icon="fluent:cloud-arrow-up-24-regular"
                className="text-2xl text-primary"
              />
              <h6 className="font-semibold text-lg md:text-xl">Materi Promosi Tersedia</h6>
            </div>
            <p className="text-sm text-[#5E6278] md:text-base">
              Materi yang diperlukan seperti banner, adtext dll, sudah siap
              pakai.
            </p>
          </div>
        </div>
        <div className="relative flex justify-center md:self-end">
          <Image
            src={AffiliateProfitImage}
            alt="Affiliate profit"
            className="translate-y-4"
          />
        </div>
      </div>
    </section>
  );
}

export default AffiliateProfits;
