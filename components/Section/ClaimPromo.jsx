"use client";

import { Icon } from "@iconify/react";

function ClaimPromo() {
  return (
    <section className="relative">
      <div className="container ">
        <div className="relative z-10 mx-auto flex max-w-5xl -translate-y-1/3 flex-col gap-3 rounded-xl bg-white p-3 shadow-onPrimary md:flex-row md:gap-0">
          <div className="relative flex-1 basis-full md:basis-1/2">
            <input
              type="text"
              placeholder="Masukkan Kode Promo"
              className="w-full rounded-md border border-[#323548] p-3 pl-10 placeholder:capitalize focus-visible:outline-none md:rounded-r-none"
            />
            <Icon
              icon="mdi:coupon"
              className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl text-[#D0D0D0]"
            />
          </div>
          <button className="h-full rounded-md border border-[#323548] bg-[#323548] px-8 py-3 font-semibold text-white md:rounded-l-none">
            Klaim Promo
          </button>
        </div>
      </div>
    </section>
  );
}

export default ClaimPromo;
