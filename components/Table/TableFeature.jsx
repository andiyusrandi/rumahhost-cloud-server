import Image from "next/image";
import "./TableFeature.css";

import FlagIndonesia from "@/public/Flag_of_Indonesia.svg";
import FlagSingapore from "@/public/Flag_of_Singapore.svg";

function TableFeature() {
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
              <tr>
                <td>Estimasi Visitor/Bulan</td>
                <td className="cell-bold">± 60.000</td>
                <td className="cell-bold">± 60.000</td>
                <td className="cell-bold">± 60.000</td>
              </tr>
              <tr>
                <td>Disk Space</td>
                <td>
                  <span className="cell-bold">5GB</span> SSD Storage
                </td>
                <td>
                  <span className="cell-bold">15GB</span> SSD Storage
                </td>
                <td>
                  <span className="cell-bold">45GB</span> SSD Storage
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
                <td>Akun Email</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Database</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Addon Domain</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Sub Domain</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
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
                <td>Sendmail/Hour</td>
                <td>50/Jam</td>
                <td>50/Jam</td>
                <td>50/Jam</td>
              </tr>
              <tr>
                <td>Max Team User (cPanel Sharing)</td>
                <td>1</td>
                <td>3</td>
                <td>7</td>
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
      <div className="flex flex-col gap-4">
        <div className="mx-2 rounded-lg bg-[#DEF0FF] p-2 text-center text-xl font-semibold capitalize">
          fitur email
        </div>
        <div className="overflow-x-auto whitespace-nowrap md:whitespace-normal">
          <table>
            <tbody>
              <tr>
                <td>Email Akun</td>
                <td>Unlimited Account</td>
                <td>Unlimited Account</td>
                <td>Unlimited Account</td>
              </tr>
              <tr>
                <td>Email Akun</td>
                <td>Unlimited Account</td>
                <td>Unlimited Account</td>
                <td>Unlimited Account</td>
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
    </div>
  );
}

export default TableFeature;
