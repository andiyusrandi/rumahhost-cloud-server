"use client";

import { Button } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

function CardResponsiveTest() {
  const [curr, setCurr] = useState(0);
  const cardContainer = useRef(null);
  const cardWrapper = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const data = [
    {
      title: "Card 1",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos odit eum minus, asperiores repellat error officiis! Quidem qui ullam sit culpa cumque voluptatibus iste sequi ipsam. Itaque et pariatur odit?",
    },
    {
      title: "Card 2",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos odit eum minus, asperiores repellat error officiis! Quidem qui ullam sit culpa cumque voluptatibus iste sequi ipsam. Itaque et pariatur odit?",
    },
    {
      title: "Card 3",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos odit eum minus, asperiores repellat error officiis! Quidem qui ullam sit culpa cumque voluptatibus iste sequi ipsam. Itaque et pariatur odit?",
    },
  ];

  useEffect(() => {
    const containerObserver = new ResizeObserver((entris) => {
      setContainerWidth(entris[0].contentRect.width);
    });

    const cardObserver = new ResizeObserver((entries) => {
      setCardWidth(entries[0].contentRect.width);
    });

    containerObserver.observe(cardContainer.current);
    cardObserver.observe(cardWrapper.current);
  }, []);

  const prev = () => {
    if (containerWidth === cardWidth + 16 * 2) {
      setCurr(curr === 0 ? data.length - 1 : curr - 1);
    }
  };

  const next = () => {
    if (containerWidth === cardWidth + 16 * 2) {
      setCurr(curr === data.length - 1 ? 0 : curr + 1);
    }
  };

  return (
    <>
      <div className="overflow-hidden" ref={cardContainer}>
        <div
          className="flex transition-transform duration-500 ease-in"
          style={{
            transform: `translateX(-${curr * 100}%)`,
          }}
        >
          {data.map((data, index) => (
            <div
              ref={cardWrapper}
              key={index}
              className="card w-full shrink-0 rounded-lg bg-white p-4 md:shrink"
            >
              <h1>{data.title}</h1>
              <div>{data.body}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        {data.map((_, index) => (
          <button
            key={index}
            value={index}
            onClick={(e) => {
              console.log(index, curr);
              setCurr(Number(e.target.value));
            }}
            className={`h-4 w-4 rounded-full ${curr === index ? "border border-primary bg-white" : "bg-[#ECECEC]"}`}
          ></button>
        ))}
      </div>
      <Button onClick={prev}>Prev</Button>
      <Button onClick={next}>Next</Button>
      <Button>{containerWidth}</Button>
      <Button>{cardWidth}</Button>
    </>
  );
}

export default CardResponsiveTest;
