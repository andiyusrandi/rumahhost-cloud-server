"use client";

import User1 from "@/public/user1.jpg";
import Image from "next/image";
import { MdStar } from "react-icons/md";
import { feedbackData } from "@/utils/data";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktoplarge: {
    breakpoint: { max: 3000, min: 1440 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1439, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
  },
};

export default function CarouselFeedback() {
  return (
    <div>
      <Carousel
        responsive={responsive}
        draggable={false}
        swipeable={false}
        infinite={true}
        autoPlay={true}
        transitionDuration={500}
        arrows={false}
      >
        {feedbackData.map((data, index) => (
          <div
            key={index}
            className="bg-main relative z-[-1] mx-2 flex aspect-square flex-[1_0_calc(50%-0.5rem)] select-none flex-col justify-between rounded-xl border border-primary p-[10px]"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <Image src={User1} alt="User 1" height={32} width={32} />
                <span className="text-lg font-medium">{data.name}</span>
              </div>
              <div className="text-sm text-[#212529]">{data.comment}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center text-primary">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
              <span className="text-[10px] text-[#616161]">
                {data.rating.toFixed(1)}
              </span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
