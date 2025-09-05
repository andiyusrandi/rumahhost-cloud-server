"use client";

import CardDomainPrice from "../Card/CardDomainPrice";
import { useEffect, useRef, useState } from "react";

function ListDomainPrice({ className, datas }) {
  // Choose which pricing data to use here:
  const data = datas ?? {}; // Use register prices, fallback to empty object

  // Safely get keys length
  const [dataLength, setDataLength] = useState(Object.keys(data).length);
  const [countCard, setCountCard] = useState(6);
  const [containerWidth, setContainerWidth] = useState(0);

  console.log("ListDomainPrice datas:", datas);
  console.log("data entries:", Object.entries(data));

  const containerCardRef = useRef();

  useEffect(() => {
    const containerObserver = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
    });

    if (containerCardRef.current) {
      containerObserver.observe(containerCardRef.current);
    }

    return () => {
      containerObserver.disconnect();
    };
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
  }, [containerWidth, countCard, dataLength]);

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
          <h3 className="mb-4 text-[28px] leading-7 font-bold md:text-4xl">
            Daftar Harga Domain
          </h3>
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
              // Di dalam loop rendering card
              for (const [key, value] of Object.entries(data)) {
                dataCounter++;
                if (dataCounter <= countCard) {
                  // Ambil data lengkap untuk domain ini
                  const domainData = datas[key] || {};
                  cards.push(
                    <CardDomainPrice key={dataCounter} extention={key} datas={domainData} />
                  );
                }
              }
              return cards;
            })()}
          </div>
          <button
            onClick={handleLoadMore}
            className="rounded-lg border border-primary bg-white p-2 text-lg font-semibold capitalize text-primary hover:text-white hover:bg-primary"
          >
            {countCard === dataLength ? "lihat lebih sedikit" : "lihat selengkapnya"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ListDomainPrice;
