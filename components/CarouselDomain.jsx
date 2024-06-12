"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import numeral from "numeral";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

export default function DomainSlider({ data }) {
  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        transitionDuration={500}
        arrows={false}
      >
        {data.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-[0_0_33.33%] select-none flex-col items-center"
            >
              <Image src={data.image} alt={data.alt} />
              <p className="font-semibold text-[#989898]">Rp. {numeral(data.price).format("0,0")}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
