"use client";

import { commitmentData } from "@/utils/data";
import CarouselCommitment from "../CarouselCommitment";
import ArtboardMountain from "@/public/ArtboardMountain2.svg";
import Image from "next/image";

function Commitments({ isBackgroundWhite = false }) {
  return (
    <section className="relative mt-5 md:mt-10 lg:mt-20">
      <div className="absolute -top-6 w-full lg:-top-14 z-[-1]">
        <Image
          src={ArtboardMountain}
          alt=""
          style={{
            objectFit: "contain",
            objectPosition: "center",
            width: "100%",
          }}
        />
      </div>
      <div className="container relative grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="text-center lg:text-left">
          <h3 className="mb-3 text-[28px] leading-7 font-bold md:text-4xl">Komitmen Kami</h3>
          <p className="text-sm md:text-base">
            RumahHost hadir dengan resource terdedikasi dan dukungan tim
            profesional. Nikmati kemudahan pengelolaan dengan performa optimal!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:col-span-2 lg:grid-cols-2">
          {commitmentData.map((data, index) => (
            <div key={index} className="flex items-start gap-4">
              <div>
                <div
                  className={`relative aspect-square h-16 rounded-2xl p-3 shadow-lg z-[-1] ${isBackgroundWhite ? "bg-white" : "bg-main"}`}
                >
                  <Image
                    src={data.image}
                    alt={data.alt}
                    color="orange"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>
              <div>
                <h5 className="mb-2 text-lg md:text-xl font-semibold">
                  {data.title}
                </h5>
                <p className="text-[#212529] text-sm md:text-base">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Commitments;
