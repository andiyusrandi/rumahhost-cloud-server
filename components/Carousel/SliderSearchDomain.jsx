"use client";

import { Icon } from "@iconify/react";
import { useKeenSlider } from "keen-slider/react.esm.js";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import numeral from "numeral";

const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

function SliderSearchDomain({ datas }) {
  const chunkedItems = chunkArray(datas, 5);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: currentSlide,
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {chunkedItems.map((items, index) => (
          <div
            key={index}
            className="keen-slider__slide transition-transform duration-500 ease-in-out"
          >
            {items.map((data, index) => {
              return (
                <div key={index}>
                  <div className="flex flex-col items-center justify-center gap-6 bg-white p-4 text-black md:flex-row md:justify-between">
                    <span className="flex flex-1 items-center gap-1 text-center text-lg font-bold text-[#323548] md:text-left xl:text-xl">
                      <Icon
                        icon="mdi:shield-check"
                        className={`hidden text-xl md:block`}
                      />
                      {data.name}
                    </span>
                    <div className="flex w-full flex-col items-center gap-4 md:w-fit md:flex-row md:gap-4">
                      <div className="text-center text-xs">
                        <p className="text-lg font-bold text-[#323548] md:text-xl xl:text-2xl">
                          Rp. {numeral(data.register[1]).format("0,0")} / Tahun
                        </p>
                      </div>
                      <form action="https://client.rumahhost.com/cart.php?a=add&domain=register" method="POST">
                        <input type="hidden" name="query" value={data.name} />
                        <button className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white md:w-fit">
                          Pilih
                        </button>
                      </form>
                    </div>
                  </div>
                  <div style={{borderTop: "1px solid #d8dce8"}}></div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {loaded && (
        <>
          <div className="mx-auto mt-4 flex w-fit items-center gap-3">
            <button
              onClick={() =>
                setCurrentSlide(
                  currentSlide === 0
                    ? instanceRef.details().size - 1
                    : currentSlide - 1,
                )
              }
              className="shadow-[0_2px_8px_rgba(48, 49, 53, 0.16)] flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-lg border-0 bg-main"
            >
              <Icon
                icon="tdesign:arrow-left"
                width={24}
                height={24}
                className="text-[#71747d] hover:text-black"
              />
            </button>
            <div className="flex items-center gap-2">
              {chunkedItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`shadow-[0_2px_8px_rgba(48, 49, 53, 0.16)] flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-lg border-0 ${currentSlide === index ? "bg-primary" : "bg-main"}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() =>
                setCurrentSlide(
                  currentSlide === instanceRef.details().size - 1
                    ? 0
                    : currentSlide + 1,
                )
              }
              className="shadow-[0_2px_8px_rgba(48, 49, 53, 0.16)] flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-lg border-0 bg-main"
            >
              <Icon
                icon="tdesign:arrow-right"
                width={24}
                height={24}
                className="text-[#71747d] hover:text-black"
              />
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default SliderSearchDomain;
