"use client";

import DiscountImg from "@/public/all-product.png";
import { discountCardData } from "@/utils/data";
import { Icon } from "@iconify/react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function ListPromo({ datas }) {
  useEffect(() => {
    console.log(datas)
  })

  const handleCopyCoupon = (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
      console.log("Success to Copy");
    }
  };
  return (
    <section className="mb-10">
      <div className="container">
        <h3 className="my-10 text-center text-[#323548] text-[28px] leading-7 font-semibold md:text-4xl">
          Cek dan ambil promomu sekarang juga!
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {discountCardData.map((data, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow-xl"
            >
              <div className="relative h-60 overflow-hidden bg-primary">
                <div className="absolute grid h-full w-full -rotate-45 scale-125 grid-cols-2 gap-8">
                  <div className="col-span-2 flex items-center justify-center text-5xl opacity-10">
                    <Icon icon="mdi:coupon" />
                  </div>
                  <div className="flex items-center justify-center text-5xl opacity-10">
                    <Icon icon="mdi:coupon" />
                  </div>
                  <div className="flex items-center justify-center text-5xl opacity-10">
                    <Icon icon="mdi:coupon" />
                  </div>
                  <div className="col-span-2 flex items-center justify-center text-5xl opacity-10">
                    <Icon icon="mdi:coupon" />
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src={DiscountImg}
                    alt=""
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <span className="absolute bottom-6 right-6 text-xl font-bold text-white">
                  {data.discountPerc}%
                </span>
              </div>
              <div className="flex w-full flex-col gap-4 p-4">
                <h6 className="text-base font-semibold md:text-xl">
                  {data.title}
                </h6>
                <p className="text-sm text-[#565656]">
                  {moment(data.startAt, true).format("DD MMMM YYYY")} -{" "}
                  {moment(data.endAt, true).format("DD MMMM YYYY")}
                </p>
                <p className="text-sm font-medium text-[#565656] md:text-base">
                  CODE PROMO
                </p>
                <div className="flex max-w-full items-center rounded border border-primary">
                  <input
                    type="text"
                    value={data.code}
                    disabled
                    className="w-20 shrink grow-0 basis-full p-2 text-sm font-semibold focus-visible:outline-none md:text-base"
                  />
                  <button
                    className="flex aspect-square h-full items-center justify-center bg-[#F1F1F1] p-2 text-xl"
                    onClick={() => handleCopyCoupon(data.code)}
                  >
                    <Icon icon="mdi:content-copy" />
                  </button>
                </div>
                <Link
                  href="#"
                  className="text-center text-sm font-semibold underline"
                >
                  syarat dan ketentuan berlaku
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListPromo;
