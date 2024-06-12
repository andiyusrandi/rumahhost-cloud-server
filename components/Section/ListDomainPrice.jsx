"use client";

import CardDomainPrice from "../Card/CardDomainPrice";
import { useEffect, useRef, useState } from "react";

function ListDomainPrice({ className, datas }) {
  const data = datas.pricing;
  const [dataLength, setDataLength] = useState(Object.keys(data).length);
  const [countCard, setCountCard] = useState(6);
  const [containerWidth, setContainerWidth] = useState(0);

  const containerCardRef = useRef();

  useEffect(() => {
    const containerObserver = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
    });

    containerObserver.observe(containerCardRef.current);
  }, []);

  useEffect(() => {
    if (countCard !== dataLength) {
      if (containerWidth <= 700) {
        setCountCard(4);

        return;
      } else if (containerWidth > 700 && containerWidth <= 950) {
        setCountCard(6);

        return;
      } else if (containerWidth > 950 && containerWidth <= 1200) {
        setCountCard(9);

        return;
      }

      setCountCard(16);
    }
  }, [containerWidth, countCard]);

  const handleLoadMore = () => {
    if (countCard === dataLength) {
      setCountCard(4);

      return;
    }

    setCountCard(dataLength);
  };

  return (
    <section className={className}>
      <div className="container flex flex-col gap-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="mb-4 text-[28px] leading-7 font-bold md:text-4xl">Daftar Harga Domain</h3>
          <p className="text-sm md:text-base w-full md:w-[80%] lg:w-[60%]">
            Melalui domain, kamu dapat mematenkan citra, hak milik, meningkatkan
            kepercayaan dari konsumen, dan lain lain. Oleh sebab itu, memiliki
            nama yang tepat untuk usaha jadi suatu hal yang harus dilakukan.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div
            ref={containerCardRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {(() => {
              let dataCounter = 0;
              let cards = [];

              for (const [key, value] of Object.entries(data)) {
                dataCounter++
                if (dataCounter <= countCard) {
                  cards.push(<CardDomainPrice key={dataCounter} extention={key} datas={value} />);
                }
              }

              return cards;
            })()}            
          </div>
          <button
            onClick={handleLoadMore}
            className="rounded-lg border border-primary bg-white p-2 text-lg font-semibold capitalize text-primary hover:text-white hover:bg-primary"
          >
            {countCard === dataLength
              ? "lihat lebih sedikit"
              : "lihat selengkapnya"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ListDomainPrice;
