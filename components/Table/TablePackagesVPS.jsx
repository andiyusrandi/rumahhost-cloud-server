"use client";

import BackgroundPackage from "@/public/Background Header.png";
import Iconvps from "@/public/icons/iconvps.svg";
import { tablePackageVPSDatas } from "@/utils/data";
import Image from "next/image";
import numeral from "numeral";
import "./TablePackagesVPS.css";
// import ButtonAction from "../ButtonAction";
import { useEffect, useRef, useState } from "react";

function TablePackagesVPS() {
  const [tableContainerWidth, setTableContainerWidth] = useState(0);
  const tableContainerRef = useRef(null);

  useEffect(() => {
    const tableContainerObserver = new ResizeObserver((entries) => {
      setTableContainerWidth(entries[0].contentRect.width);
    });

    tableContainerObserver.observe(tableContainerRef.current);
  });

  return (
    <div
      id="table__packages-vps"
      ref={tableContainerRef}
      className="overflow-x-auto"
    >
      <table className="border-separate border-spacing-y-5 whitespace-nowrap rounded-lg">
        <thead className="relative">
          <tr>
            <th colSpan={9}>
              <Image
                src={BackgroundPackage}
                alt=""
                fill
                style={{
                  objectFit: "fill",
                  objectPosition: "0 0",
                  zIndex: -1,
                }}
                className="invisible md:visible"
              />
            </th>
          </tr>
          <tr>
            <th colSpan={9}>
              <div
                className={`whitespace-normal`}
                style={{
                  width: tableContainerWidth - 12 * 2,
                }}
              >
                <h3 className="mb-2 font-semibold text-[#323548] md:text-white text-[28px] leading-10 md:leading-none md:text[40px]">
                  Harga Cloud VPS Terbaik di Indonesia
                </h3>
                <p className="text-[#212529] text-base lg:text-lg md:text-[#B5B5C3]">
                  Pilih paket VPS sesuai kebutuhan dan anggaran Anda. Server
                  cloud VPS untuk mendukung bisnis anda lebih maju
                </p>
              </div>
            </th>
          </tr>
          <tr className="text-white text-base font-semibold lg:text-lg bg-gradient-to-l from-[#077864] to-[#377bf6] md:from-[#077864B2] md:to-[#377BF640]">
            <th>Product</th>
            <th>Disk Space</th>
            <th>Bandwidth</th>
            <th>RAM</th>
            <th>CPU Core</th>
            <th>Server</th>
            <th>Setup</th>
            <th>Harga/Bulan</th>
            <th className="min-w-36"></th>
          </tr>
        </thead>
        <tbody>
          {tablePackageVPSDatas.map((data, index) => (
            <tr className="shadow-lg" key={index}>
              <td className="md:flex md:flex-row md:justify-start md:gap-2 md:align-middle">
                <Image
                  src={Iconvps}
                  alt="ServerImageVPS"
                  className="w-10 h-10 rounded-full"
                  priority
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                    maxWidth: "28rem",
                    width: "auto",
                    display: "inline"
                  }}
                />
                <p className="text-base lg:text-lg md:my-auto">{data.product}</p>
              </td>
              <td><p className="text-base font-medium lg:text-lg">{data.diskSpace} GB</p></td>
              <td><p className="text-base font-medium lg:text-lg">{data.bandwidth} TB</p></td>
              <td><p className="text-base font-medium lg:text-lg">{data.ram} GB</p></td>
              <td><p className="text-base font-medium lg:text-lg">{data.cpuCore} Core</p></td>
              <td><p className="text-base font-medium lg:text-lg">{data.server}</p></td>
              <td><p className="text-base font-medium lg:text-lg">{data.setup}</p></td>
              <td className="price"><p className=" font-medium">Rp. {numeral(data.price).format("0,0")}</p></td>
              <td>
                <button
                  // href={data.url}
                  className="w-full rounded-lg border border-primary p-2 text-center text-base font-medium capitalize text-primary lg:text-lg"
                >
                  order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePackagesVPS;
