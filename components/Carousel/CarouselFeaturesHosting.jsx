"use client";

import { FeatureHostingData } from "@/utils/data";
import { Icon } from "@iconify/react";
import { useKeenSlider } from "keen-slider/react.esm.js"
import { useState } from "react";
import "keen-slider/keen-slider.min.css"

function CarouselFeaturesHosting() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, slider] = useKeenSlider({
    initial: currentSlide,
    loop: true,
    spacing: 25,
    breakpoints: {
      '(max-width: 768px)': {
        slidesPerView: 1.5,
        loop: false
      },
      '(min-width: 1024px)': {
        slidesPerView: 2.25
      },
      '(min-width: 1440px)': {
        slidesPerView: 2.5
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div className="lg:col-span-4">
      <div className="lg:overflow-hidden overflow-x-scroll px-2.5 pb-2.5 -mx-2.5">
        <div className="keen-slider lg:overflow-hidden overflow-x-scroll" ref={sliderRef}>
          {FeatureHostingData.map((data, index) => (
            <div
              key={index}
              className="keen-slider__slide"
            >
              <div className="flex flex-col text-center p-5 bg-main h-[400px] rounded-xl items-center shadow-[0_16px_40px_0_rgba(53, 64, 90, .1)]">
                <span className="text-6xl text-secondary mt-5">{data.icon}</span>
                <h5 className="my-4 text-[#212529] text-lg font-semibold capitalize md:text-xl">{data.title}</h5>
                <p className="text-sm md:text-base">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex items-center mt-4">
          {loaded && (
            <>
              {/* Nav Button */}
              <div className="flex mr-10">
                {slider && (
                  <>
                    <div 
                      onClick={e => e.stopPropagation() || slider.prev()}
                      disabled={currentSlide === 0}
                      className="flex min-w-10 h-10 bg-main shadow-[0_2px_8px_rgba(48, 49, 53, 0.16)] border-0 rounded-lg cursor-pointer items-center justify-center mr-2"
                    >
                      <Icon icon="tdesign:arrow-left" width={24} height={24} className="text-[#71747d] hover:text-black" />
                    </div>

                    <div 
                      onClick={e => e.stopPropagation() || slider.next()}
                      disabled={currentSlide === slider.details().size - 1}
                      className="flex min-w-10 h-10 bg-main shadow-[0_2px_8px_rgba(48, 49, 53, 0.16)] border-0 rounded-lg cursor-pointer items-center justify-center"
                    >
                      <Icon icon="tdesign:arrow-right" width={24} height={24} className="text-[#71747d] hover:text-black" />
                    </div>
                  </>
                )}
              </div>

              {/* Slider Bar */}
              <div className="flex flex-1 justify-center pt-0 h-[1px]" style={{listStyle: 'none'}}>
                {(() => {
                  let buttons = [];

                  for (let i = 0; i < FeatureHostingData.length; i++) {
                    buttons.push(<button key={i} onClick={e => e.stopPropagation() || slider.moveToSlide(i)} className={`slide-bar ${i === currentSlide ? 'slide-bar-active' : ''}`}></button>)
                  }

                  return buttons;
                })()}
              </div>

              {/* Slider Number */}
              <div className="text-[#71747d] font-bold ml-10">
                <span className="text-lg">{currentSlide + 1}/{FeatureHostingData.length}</span>
              </div>              
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarouselFeaturesHosting;
