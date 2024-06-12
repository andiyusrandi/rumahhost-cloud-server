"use client";

import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

function CarouselMain({
  children: slider,
  isShowDots = false,
  isShowNavigator = true,
  autoPlay = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  const [translatePerc, setTranslatePerc] = useState(100);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const carouselObserver = new ResizeObserver((entries) => {
      setCarouselWidth(entries[0].contentRect.width);
    });

    carouselObserver.observe(carouselRef.current);
  }, []);

  useEffect(() => {
    if (carouselWidth > 700) {
      setTranslatePerc(50);
    } else {
      setTranslatePerc(100);
    }
  }, [carouselWidth]);

  useEffect(() => {
    if (!autoPlay) return;

    const sliderInterval = setInterval(next, autoSlideInterval);

    return () => clearInterval(sliderInterval);
  }, []);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slider.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (slider.length - 1 === curr ? 0 : curr + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel__main mb-4 overflow-hidden" ref={carouselRef}>
        <div
          className="flex transition-transform duration-300 ease-out md:gap-4"
          style={
            translatePerc === 100
              ? {
                  transform: `translateX(-${curr * translatePerc}%)`,
                }
              : {
                  transform: `translateX(calc(-${curr * translatePerc}% - ${curr * 0.5}rem))`,
                }
          }
        >
          {slider}
        </div>
      </div>

      {/* Carousel Navigator */}
      <div
        className={`w-full justify-center gap-2 ${isShowNavigator ? "flex" : "hidden"}`}
      >
        <button
          className="rounded-full bg-white p-2 text-xl text-primary"
          onClick={prev}
        >
          <Icon icon="fe:arrow-left" />
        </button>
        <button
          className="rounded-full bg-white p-2 text-xl text-primary"
          onClick={next}
        >
          <Icon icon="fe:arrow-right" />
        </button>
      </div>

      {/* Carousel Dots */}
      <div
        className={`w-full justify-center gap-2 ${isShowDots ? "flex" : "hidden"}`}
      >
        {slider.map((_, index) => (
          // <button
          //   key={index}
          //   className={`aspect-square h-4 rounded-full bg-[#ECECEC] ${index === curr ? "border border-primary bg-white" : ""}`}
          //   onClick={() => setCurr(index)}
          // />
          <button
            // onClick={e => {
            //   onClick();
            //   e.preventDefault();
            // }}
            key={index}
            onClick={() => setCurr(index)}
            className="dot-button"
          >
            <span className={`custom-dot ${index === curr ? "custom-dot-active" : ""}`}></span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CarouselMain;
