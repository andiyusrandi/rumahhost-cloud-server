"use client";

import { resellerHostingCardData } from "@/utils/data";
import { Icon } from "@iconify/react";
import numeral from "numeral";
import { useEffect, useState } from "react";
import TableFeature from "../Table/TableFeature";

function ResellerHostingPackages() {
  const [isActive, setIsActive] = useState({
    0: true,
    1: false,
    2: false,
  });

  const packageTime = ["Bulan", "4 Bulan", "Tahun"];
  const multiPrice = [1, 3.8, 10];

  const [packageIndex, setPackageIndex] = useState(0);

  const getCurrentClass = (e) => {
    let { value } = e.target;

    if (isActive[value] !== true) {
      const newState = Object.keys(isActive).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      newState[value] = true;

      setIsActive(newState);
    }
  };

  useEffect(() => {
    if (isActive[1]) {
      setPackageIndex(1);
    } else if (isActive[2]) {
      setPackageIndex(2);
    } else {
      setPackageIndex(0);
    }
  }, [isActive]);

  return (
    <>
      <section className="mb-10">
        <div className="container py-5">
          <div className="flex flex-col items-center">
            <div className="mb-12 flex w-full max-w-md flex-1 justify-evenly gap-4 text-sm md:text-xl">
              <button
                value={0}
                onClick={getCurrentClass}
                className={`border-b-2 p-2 font-semibold ${isActive[0] ? "border-primary" : "border-transparent"}`}
              >
                Monthly
              </button>
              <button
                value={1}
                onClick={getCurrentClass}
                className={`border-b-2 p-2 font-semibold ${isActive[1] ? "border-primary" : "border-transparent"}`}
              >
                Quarter
              </button>
              <button
                value={2}
                onClick={getCurrentClass}
                className={`border-b-2 p-2 font-semibold ${isActive[2] ? "border-primary" : "border-transparent"}`}
              >
                Yearly
              </button>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap">
              {resellerHostingCardData.map((data, index) => (
                <div
                  key={index}
                  className={`flex w-full flex-1 flex-col items-center rounded-lg px-6 py-4 text-center shadow-lg ${data.isPopular ? "gap-24 bg-primary text-white" : "gap-12 bg-white"}`}
                >
                  <div className="w-full">
                    <h6 className="mb-2 text-xl font-bold">{data.title}</h6>
                    <p
                      className={`${data.isPopular ? "" : "text-[#5E6278]"} mb-5`}
                    >
                      <span
                        className={`text-sm font-semibold md:text-base ${data.isPopular ? "" : "text-primary"}`}
                      >
                        Rp.
                      </span>
                      <span
                        className={`text-xl font-bold md:text-4xl ${data.isPopular ? "" : "text-primary"}`}
                      >
                        {numeral(
                          data.currentPrice * multiPrice[packageIndex],
                        ).format("0,0")}
                      </span>{" "}
                      / {packageTime[packageIndex]}
                    </p>
                    <span
                      className={`mb-2 block text-sm font-semibold line-through ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}
                    >
                      Rp. {numeral(data.price).format("0,0")}
                    </span>
                    <span
                      className={`mb-5 block rounded px-2 py-1 text-sm font-semibold ${data.isPopular ? "bg-white text-primary" : "bg-primary text-white"}`}
                    >
                      Promo 65% - Hemat Rp.156.000
                    </span>
                    <div
                      className={`mb-10 flex flex-col gap-2 text-sm ${data.isPopular ? "" : "text-[#5E6278]"}`}
                    >
                      {data.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <div className="font-medium">{feature}</div>
                          <div
                            className={`rounded-full ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 p-1 text-primary"}`}
                          >
                            <Icon icon="mdi:done" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <span
                      className={`${data.isPopular ? "" : "text-[#5E6278]"}`}
                    >
                      Bayar Rp. {numeral(data.buy).format("0,0")}/Bulan
                    </span>
                  </div>
                  <button
                    className={`w-fit rounded-lg p-2 text-sm font-semibold md:text-lg ${data.isPopular ? "bg-white text-primary" : "bg-primary text-white"}`}
                  >
                    Beli Sekarang
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* TODO: Ganti model fitur */}
    </>
  );
}

export default ResellerHostingPackages;
