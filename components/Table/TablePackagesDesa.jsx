"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BackgroundPackage from "@/public/Background Header.png";
import "./TablePackagesVPS.css";
import { tablePackageDesaDatas } from "@/utils/data";
import numeral from "numeral";

function TablePackagesDesa() {
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
      id="table__packages-desa"
      ref={tableContainerRef}
      className="overflow-x-auto"
    >
      <table className="whitespace-nowrap rounded-lg border-separate border-spacing-y-0 md:border-spacing-y-5">
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
                <h3 className="mb-2 mt-10 font-semibold text-[#323548] md:text-white text-[28px] leading-10 md:leading-none md:text[40px] md:mt-0">
                  Harga Cloud Hosting Desa Terbaik di Indonesia
                </h3>
                <p className="mb-5 text-[#212529] text-base md:mb-0 lg:text-lg md:text-[#B5B5C3]">
                  Pilih paket Cloud Hosting Desa sesuai kebutuhan dan anggaran
                  Anda. Server cloud CHD untuk mendukung bisnis anda lebih maju
                </p>
              </div>
            </th>
          </tr>
          <tr className="text-white text-base font-semibold lg:text-lg bg-gradient-to-l from-[#077864] to-[#377bf6] md:from-[#077864B2] md:to-[#377BF640]">
            <th>Product</th>
            <th>Disk Space</th>
            <th>Bandwidth</th>
            <th>Email</th>
            <th>Database</th>
            <th>SSL</th>
            <th>Add On</th>
            <th>Harga/Tahun</th>
            <th className="min-w-36"></th>
          </tr>
        </thead>
        <tbody>
          {tablePackageDesaDatas.map((data, index) => (
            <tr className="shadow-lg" key={index}>
              <td style={{padding: "5px 5px 1.25rem 0.75rem"}}><p className="text-base lg:text-lg">{data.product}</p></td>
              <td style={{padding: "5px 5px 1.25rem 0.75rem"}}><p className="text-base font-medium lg:text-lg">{data.diskSpace} GB</p></td>
              <td style={{padding: "5px 5px 1.25rem 0.75rem"}}><p className="text-base font-medium lg:text-lg">{data.bandwidth}</p></td>
              <td style={{padding: "5px 5px 1.25rem 0.75rem"}}><p className="text-base font-medium lg:text-lg">{data.email} Akun</p></td>
              <td style={{padding: "5px 5px 1.25rem 0.75rem"}}><p className="text-base font-medium lg:text-lg">{data.database}</p></td>
              <td style={{padding: "5px 5px 1.25rem 0.75rem"}}><p className="text-base font-medium lg:text-lg">{data.ssl}</p></td>
              <td style={{padding: "5px 5px 1.25rem 0.75rem"}}><p className="text-base font-medium lg:text-lg">{data.addOn}</p></td>
              <td style={{padding: "5px 5px 1.25rem 0.75rem"}} className="price"><p className=" font-medium">Rp. {numeral(data.price).format("0,0")}</p></td>
              <td style={{padding: "5px 5px 1.25rem 0.75rem"}}>
                <button
                  // href={data.url}
                  // className="w-full rounded-lg border border-primary p-2 text-center text-lg font-semibold capitalize text-primary"
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

export default TablePackagesDesa;
