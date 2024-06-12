"use client";

import { emailHostingMainFeatures } from "@/utils/data";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
}

function EmailHostingMainFeatures() {
  const CustomDot = ({index, onClick, active}) => {
    return (
      <button
        onClick={e => {
          onClick();
          e.preventDefault();
        }}
        className="dot-button"
      >
        <span className={`custom-dot ${active ? "custom-dot-active" : ""}`}></span>
      </button>
    );
  };

  return (
    <section className="mb-12 bg-[#13263C]">
      <div className="container py-5">
        {/* Mobile */}
        <div className="block px-5 lg:hidden">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            transitionDuration={500}
            arrows={false}
            showDots={true}
            customDot={<CustomDot />}
          >
            {emailHostingMainFeatures.map((data, index) => (
              <div
                key={index}
                className="w-full mb-10 h-[300px] bg-white p-5 shadow-xl rounded-xl"
              >
                <div className="mb-5 text-primary">
                  <div className="mb-2">{data.icon}</div>
                  <h6 className="font-semibold text-xl">{data.title}</h6>
                </div>
                <p className="text-base text-[#212529] leading-5">{data.body}</p>
              </div>
            ))}
          </Carousel>
        </div>
        {/* Desktop */}
        <div className="hidden flex-wrap justify-center gap-4 lg:flex">
          {emailHostingMainFeatures.map((data, index) => (
            <div
              key={index}
              className="w-full h-[300px] max-w-96 rounded-xl bg-white p-5 custom-shadow"
            >
              <div className="mb-5 text-primary">
                <div className="mb-2 text-4xl">{data.icon}</div>
                <h6 className="font-semibold text-xl">{data.title}</h6>
              </div>
              <p className="h-32 md:h-56 text-base text-[#212529]">{data.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EmailHostingMainFeatures;
