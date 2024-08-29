"use client";

import Image from "next/image";
import "./TableFeature.css";
import FlagIndonesia from "@/public/Flag_of_Indonesia.svg";
import FlagSingapore from "@/public/Flag_of_Singapore.svg";
import { useState } from "react";

function TableFeature({ datas }) {
  const [showEmail, setShowEmail] = useState(false);

  const handleShowEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div id="table-feature" className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="mx-2 rounded-lg bg-[#DEF0FF] p-2 text-center text-xl font-semibold capitalize">
          fitur utama
        </div>
        <div className="overflow-x-auto whitespace-nowrap md:whitespace-normal">
          <table>
            <tbody>
              <tr>
                <td>Nama Paket</td>
                <td className="cell-bold">Hosting Junior</td>
                <td className="cell-bold">Hosting Exanior</td>
                <td className="cell-bold">Hosting Superior</td>
              </tr>
              {/* <tr>
                <td>Estimasi Visitor/Bulan</td>
                <td className="cell-bold">± 60.000</td>
                <td className="cell-bold">± 60.000</td>
                <td className="cell-bold">± 60.000</td>
              </tr> */}
              <tr>
                <td>Disk Space</td>
                <td>
                  <span className="cell-bold">{datas[0].feature.QUOTA / 1000}GB</span> SSD Storage
                </td>
                <td>
                  <span className="cell-bold">{datas[1].feature.QUOTA / 1000}GB</span> SSD Storage
                </td>
                <td>
                  <span className="cell-bold">{datas[2].feature.QUOTA / 1000}GB</span> SSD Storage
                </td>
              </tr>
              <tr>
                <td>SSL Grade-A</td>
                <td>Free</td>
                <td>Free</td>
                <td>Free</td>
              </tr>
              <tr>
                <td>Inodes/Jumlah File</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Bandwidth</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Database</td>
                <td>{datas[0].feature.MAXSQL == null ? 'Unlimited' : datas[0].feature.MAXSQL}</td>
                <td>{datas[1].feature.MAXSQL == null ? 'Unlimited' : datas[1].feature.MAXSQL}</td>
                <td>{datas[2].feature.MAXSQL == null ? 'Unlimited' : datas[2].feature.MAXSQL}</td>
              </tr>
              <tr>
                <td>Addon Domain</td>
                <td>{datas[0].feature.MAXADDON}</td>
                <td>{datas[1].feature.MAXADDON}</td>
                <td>{datas[2].feature.MAXADDON}</td>
              </tr>
              <tr>
                <td>Sub Domain</td>
                <td>{datas[0].feature.MAXSUB == null ? 'Unlimited' : datas[0].feature.MAXSUB}</td>
                <td>{datas[1].feature.MAXSUB == null ? 'Unlimited' : datas[1].feature.MAXSUB}</td>
                <td>{datas[2].feature.MAXSUB == null ? 'Unlimited' : datas[2].feature.MAXSUB}</td>
              </tr>
              <tr>
                <td>Lokasi Server</td>
                <td>
                  <div className="flex items-center justify-center">
                    <div className="w-fit">
                      <div className="flex w-fit items-center justify-start gap-2">
                        <div className="relative hidden h-6 w-6 overflow-hidden rounded-full lg:block">
                          <Image
                            src={FlagIndonesia}
                            alt=""
                            fill
                            sizes=""
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <span className="capitalize">server indonesia</span>
                      </div>
                      <div className="flex w-fit items-center justify-start gap-2">
                        <div className="relative hidden h-6 w-6 overflow-hidden rounded-full lg:block">
                          <Image
                            src={FlagSingapore}
                            alt=""
                            fill
                            sizes=""
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <span className="capitalize">server singapura</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    <div className="w-fit">
                      <div className="flex w-fit items-center justify-start gap-2">
                        <div className="relative hidden h-6 w-6 overflow-hidden rounded-full lg:block">
                          <Image
                            src={FlagIndonesia}
                            alt=""
                            fill
                            sizes=""
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <span className="capitalize">server indonesia</span>
                      </div>
                      <div className="flex w-fit items-center justify-start gap-2">
                        <div className="relative hidden h-6 w-6 overflow-hidden rounded-full lg:block">
                          <Image
                            src={FlagSingapore}
                            alt=""
                            fill
                            sizes=""
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <span className="capitalize">server singapura</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    <div className="w-fit">
                      <div className="flex w-fit items-center justify-start gap-2">
                        <div className="relative hidden h-6 w-6 overflow-hidden rounded-full lg:block">
                          <Image
                            src={FlagIndonesia}
                            alt=""
                            fill
                            sizes=""
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <span className="capitalize">server indonesia</span>
                      </div>
                      <div className="flex w-fit items-center justify-start gap-2">
                        <div className="relative hidden h-6 w-6 overflow-hidden rounded-full lg:block">
                          <Image
                            src={FlagSingapore}
                            alt=""
                            fill
                            sizes=""
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <span className="capitalize">server singapura</span>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Max Team User (cPanel Sharing)</td>
                <td>{datas[0].feature.MAX_TEAM_USERS}</td>
                <td>{datas[1].feature.MAX_TEAM_USERS}</td>
                <td>{datas[2].feature.MAX_TEAM_USERS}</td>
              </tr>
              <tr>
                <td>Percentage CPU</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>768 MB</td>
                <td>1 GB</td>
                <td>2 GB</td>
              </tr>
              <tr>
                <td>Untuk Kecepatan Websitemu</td>
                <td>Nginx, Redis, PHPX-Ray</td>
                <td>Nginx, Redis, PHPX-Ray</td>
                <td>Nginx, Redis, PHPX-Ray</td>
              </tr>
              <tr>
                <td>Untuk Keamanan Websitemu</td>
                <td>Imunify360, Backup Acronis</td>
                <td>Imunify360, Backup Acronis</td>
                <td>Imunify360, Backup Acronis</td>
              </tr>
              <tr>
                <td>Developer Tools</td>
                <td>Golang, Node.js,Python, Git, Ruby</td>
                <td>Golang, Node.js,Python, Git, Ruby</td>
                <td>Golang, Node.js,Python, Git, Ruby</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {showEmail && (
        <div className="flex flex-col gap-4">
          <div className="mx-2 rounded-lg bg-[#DEF0FF] p-2 text-center text-xl font-semibold capitalize">
            fitur email
          </div>
          <div className="overflow-x-auto whitespace-nowrap md:whitespace-normal">
            <table>
              <tbody>
                <tr>
                  <td>Akun Email</td>
                  <td className="capitalize">{datas[0].feature.MAX_EMAILACCT_QUOTA}</td>
                  <td className="capitalize">{datas[1].feature.MAX_EMAILACCT_QUOTA}</td>
                  <td className="capitalize">{datas[2].feature.MAX_EMAILACCT_QUOTA}</td>
                </tr>
                <tr>
                  <td>Sendmail/Hour</td>
                  <td>{datas[0].feature.MAX_EMAIL_PER_HOUR === "0" ? 'Unlimited' : `${datas[0].feature.MAX_EMAIL_PER_HOUR}/Jam`}</td>
                  <td>{datas[1].feature.MAX_EMAIL_PER_HOUR === "0" ? 'Unlimited' : `${datas[1].feature.MAX_EMAIL_PER_HOUR}/Jam`}</td>
                  <td>{datas[2].feature.MAX_EMAIL_PER_HOUR === "0" ? 'Unlimited' : `${datas[2].feature.MAX_EMAIL_PER_HOUR}/Jam`}</td>
                </tr>
                <tr>
                  <td>Attachment</td>
                  <td>
                    <span className="cell-bold">50 MB</span> E-mail Attachment
                  </td>
                  <td>
                    <span className="cell-bold">50 MB</span> E-mail Attachment
                  </td>
                  <td>
                    <span className="cell-bold">50 MB</span> E-mail Attachment
                  </td>
                </tr>
                <tr>
                  <td>Fitur Lain</td>
                  <td>
                    <span className="cell-bold">50 MB</span> E-mail Attachment
                  </td>
                  <td>
                    <span className="cell-bold">50 MB</span> E-mail Attachment
                  </td>
                  <td>
                    <span className="cell-bold">50 MB</span> E-mail Attachment
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <button
        className="mx-auto w-fit rounded border border-primary px-4 py-2 font-semibold capitalize text-primary"
        onClick={handleShowEmail}
      >
        {showEmail ? "lihat lebih sedikit" : "lihat fitur lainnya"}
      </button>
    </div>
  );
}

export default TableFeature;
