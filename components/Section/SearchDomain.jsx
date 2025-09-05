"use client";

import SearchIcon from "@/public/search-Icons.svg";
import Image from "next/image";
import CarouselDomain from "../CarouselDomain";
import { useEffect, useRef, useState } from "react";
import numeral from "numeral";
import { Icon } from "@iconify/react";
import SliderSearchDomain from "../Carousel/SliderSearchDomain";

const extensions = ["com", "net", "co.id", "my.id", "id"];

const placeholderText = [
  "examplehub.com",
  "techwave.net",
  "greenfields.org",
  "urbanconnect.co",
  "smartideas.io",
  "bluehorizon.biz",
  "innovatepathway.com",
  "freshstartspace.net",
];

const checkAvailibility = async (param) => {
  const response = await fetch(`/api`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(param),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();

  return data;
};

const getSuggestDomains = async (param) => {
  const response = await fetch(`/api/domains/suggest-names`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(param),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();

  return data;
};

function SearchDomain({ carouselData, pricingData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [statusData, setStatusData] = useState();
  const [otherExtStatusData, setOtherExtStatusData] = useState();
  const [suggestDomains, setSuggestDomains] = useState();
  const [domain, setDomain] = useState("");
  const [keyword, setKeyword] = useState("");
  const [ext, setExt] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const inputRef = useRef(null);

  const handlePlaceholderClick = () => {
    inputRef.current.focus();
  };

  // const checkDomain = async () => {
  //   setOverlay(false);
  //   setIsLoading(!isLoading);

  //   let checkStatus = await checkAvailibility({
  //     domain: domain,
  //     action: "DomainWhoIs",
  //   });

  //   const otherStatus = await Promise.all(
  //     extensions
  //       .filter((value) => {
  //         return value != ext;
  //       })
  //       .map(async (value) => {
  //         const otherStatus = await checkAvailibility({
  //           domain: `${keyword}.${value}`,
  //           action: "DomainWhoIs",
  //         });

  //         let otherData = {};
  //         if (Array.isArray(carouselData?.data)) {
  //           carouselData.data.forEach((data) => {
  //             if (data.ext == value) {
  //               otherData = data;
  //             }
  //           });
  //         } else if (Array.isArray(carouselData)) {
  //           carouselData.forEach((data) => {
  //             if (data.ext == value) {
  //               otherData = data;
  //             }
  //           });
  //         }

  //         return { ...otherStatus, ...otherData };
  //       }),
  //   );

  //   const otherStatusAvailable = otherStatus.filter((data) => {
  //     return data.status === "available";
  //   });

  //   if (pricingData && typeof pricingData === 'object') {
  //     for (const [key, value] of Object.entries(pricingData.data || pricingData)) {
  //       if (ext == key) {
  //         checkStatus = { ...checkStatus, ...value };
  //       }
  //     }
  //   }

  //   const suggestDomains = await getSuggestDomains({ keyword: keyword });
  //   let suggestDomainsArray = [];

  //   for (const [key, value] of Object.entries(suggestDomains)) {
  //     let newObj = {};

  //     if (value.status === "available") {
  //       newObj = { name: key, ...value };
  //     }

  //     suggestDomainsArray.push(newObj);
  //   }

  //   const suggests = suggestDomainsArray
  //   .filter((data) => {
  //     if (!data.name) return false; // filter objek kosong
  //     const suggestDomainParts = data.name.split(".");
  //     const suggestExt = suggestDomainParts.length > 1 ? suggestDomainParts.slice(1).join(".") : "";

  //     let availableDomain = [];
  //     if (pricingData && typeof pricingData === 'object') {
  //       availableDomain = Object.keys(pricingData.data || pricingData);
  //     }

  //     return availableDomain.includes(suggestExt);
  //   })
  //   .map((data) => {
  //     const suggestDomainParts = data.name.split(".");
  //     const suggestExt = suggestDomainParts.length > 1 ? suggestDomainParts.slice(1).join(".") : "";
  //     let suggest = { ...data };

  //     if (pricingData && typeof pricingData === 'object') {
  //       for (const [key, value] of Object.entries(pricingData.data || pricingData)) {
  //         if (suggestExt === key) {
  //           suggest = { ...suggest, ...value };
  //           break;
  //         }
  //       }
  //     }
  //     return suggest;
  //   });

  //   setStatusData(checkStatus);
  //   setSuggestDomains(suggests);
  //   setOtherExtStatusData(otherStatusAvailable);

  //   setTimeout(() => setIsLoading(false), 2000);
  // };

  const checkDomain = async () => {
    try {
      setOverlay(false);
      setIsLoading(true); // Ubah ke true langsung, bukan toggle

      // Coba ambil data domain
      let checkStatus;
      try {
        checkStatus = await checkAvailibility({
          domain: domain,
          action: "DomainWhoIs",
        });
      } catch (error) {
        console.error("Error checking domain:", error);
        checkStatus = { status: "error", message: "Gagal memeriksa domain" };
      }

      // Coba ambil data ekstensi lain dengan penanganan error
      let otherStatusData = [];
      try {
        const otherStatus = await Promise.all(
          extensions
            .filter((value) => value != ext)
            .map(async (value) => {
              try {
                const otherStatus = await checkAvailibility({
                  domain: `${keyword}.${value}`,
                  action: "DomainWhoIs",
                });

                let otherData = {};
                if (Array.isArray(carouselData?.data)) {
                  carouselData.data.forEach((data) => {
                    if (data.ext == value) {
                      otherData = data;
                    }
                  });
                } else if (Array.isArray(carouselData)) {
                  carouselData.forEach((data) => {
                    if (data.ext == value) {
                      otherData = data;
                    }
                  });
                }

                return { ...otherStatus, ...otherData };
              } catch (error) {
                console.error(`Error checking ${value} extension:`, error);
                return { status: "error", ext: value };
              }
            })
        );

        otherStatusData = otherStatus.filter((data) => {
          return data.status === "available";
        });
      } catch (error) {
        console.error("Error checking other extensions:", error);
        otherStatusData = [];
      }

      // Tambahkan data pricing ke status domain
      if (pricingData && typeof pricingData === 'object') {
        for (const [key, value] of Object.entries(pricingData.data || pricingData)) {
          if (ext == key) {
            checkStatus = { ...checkStatus, ...value };
          }
        }
      }

      // Pastikan checkStatus memiliki properti register
      if (!checkStatus.register) {
        checkStatus.register = [0, 0];
      }

      // Coba dapatkan domain rekomendasi
      let suggests = [];
      try {
        const suggestDomains = await getSuggestDomains({ keyword: keyword });
        let suggestDomainsArray = [];

        for (const [key, value] of Object.entries(suggestDomains || {})) {
          let newObj = {};
          if (value && value.status === "available") {
            newObj = { name: key, ...value };
          }
          suggestDomainsArray.push(newObj);
        }

        suggests = suggestDomainsArray
          .filter((data) => {
            if (!data || !data.name) return false;
            
            const suggestDomain = data.name.split(".");
            if (suggestDomain.length < 2) return false;
            
            let suggestExt = `${suggestDomain[1]}`;
            if (suggestDomain.length > 2) {
              suggestExt = `${suggestDomain[1]}.${suggestDomain[2]}`;
            }

            let availableDomain = [];
            if (pricingData && typeof pricingData === 'object') {
              for (const [key, value] of Object.entries(pricingData.data || pricingData)) {
                availableDomain.push(key);
              }
            }

            return availableDomain.includes(suggestExt);
          })
          .map((data) => {
            const suggestDomain = data.name.split(".");
            let suggestExt = `${suggestDomain[1]}`;
            let suggest = { ...data };

            if (suggestDomain.length > 2) {
              suggestExt = `${suggestDomain[1]}.${suggestDomain[2]}`;
            }

            if (pricingData && typeof pricingData === 'object') {
              for (const [key, value] of Object.entries(pricingData.data || pricingData)) {
                if (suggestExt == key) {
                  suggest = { ...suggest, ...value };
                }
              }
            }

            return suggest;
          });
      } catch (error) {
        console.error("Error getting domain suggestions:", error);
        suggests = [];
      }

      // Update state setelah semua data siap
      setStatusData(checkStatus);
      setSuggestDomains(suggests);
      setOtherExtStatusData(otherStatusData);
    } catch (error) {
      console.error("Error in checkDomain function:", error);
      // Set status data dengan pesan error
      setStatusData({ status: "error", message: "Terjadi kesalahan saat memeriksa domain" });
      setSuggestDomains([]);
      setOtherExtStatusData([]);
    } finally {
      // Pastikan loading state selalu dimatikan
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  const handleInput = (e) => {
    setStatusData({});
    setSuggestDomains({});
    setOtherExtStatusData({});

    const value = e.target.value;
    const valArray = value.split(".");

    if (valArray.length > 2) {
      setKeyword(valArray[0]);
      if (valArray[2] != "") setExt(`${valArray[1]}.${valArray[2]}`);
      setDomain(value);
    } else if (valArray.length < 2) {
      setKeyword(valArray[0]);
      setExt("com");
      setDomain(`${keyword}.${ext}`);
    } else {
      setKeyword(valArray[0]);
      valArray[1] != "" ? setExt(valArray[1]) : setExt("com");
      setDomain(value);
    }
  };

  const handler = (e) => {
    if (e.code === "Enter") {
      const value = e.target.value;
      const valArray = value.split(".");

      if (valArray.length > 2) {
        setKeyword(valArray[0]);
        setExt(`${valArray[1]}.${valArray[2]}`);
        setDomain(value);
      } else if (valArray.length < 2) {
        setKeyword(valArray[0]);
        setExt("com");
        setDomain(`${keyword}.${ext}`);
      } else {
        setKeyword(valArray[0]);
        setExt(valArray[1]);
        setDomain(value);
      }

      checkDomain();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex((prevIndex) => {
        if (prevIndex === placeholderText.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [placeholderText.length]);

  return (
    <section className="relative -translate-y-10 px-4 md:-translate-y-16 lg:-translate-y-20">
      {overlay === true && <div className="overlay-body"></div>}
      <div
        className={`mx-auto flex w-full max-w-3xl flex-col gap-2 rounded-lg bg-white p-4 text-sm shadow-onPrimary md:text-base ${overlay === true ? "relative z-[999]" : ""}`}
      >
        <div className="relative flex flex-col gap-2 md:flex-row">
          <div className="relative w-full overflow-hidden">
            <div className="absolute left-2 top-1/2 aspect-square h-6 -translate-y-1/2 md:h-8">
              <Image
                src={SearchIcon}
                alt="Search Icon"
                quality={100}
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <input
              ref={inputRef}
              type="text"
              name="domain"
              id="search-domain"
              onChange={handleInput}
              onFocus={(e) => setOverlay(true)}
              onBlur={(e) => setOverlay(false)}
              onKeyDown={(e) => handler(e)}
              className="peer flex w-full gap-1 rounded-full border border-transparent bg-[#f4f7fe] py-3 pl-8 pr-2 text-black focus-visible:outline-none md:py-3 md:pl-12"
            />
            <div
              className="absolute left-10 top-3 duration-500 ease-in [--search-domain-translate:2.25rem] peer-focus:hidden md:left-12 md:top-3 md:[--search-domain-translate:2.5rem]"
              style={{
                transform: `translateY(calc(${placeholderIndex === 0 ? placeholderIndex : placeholderIndex * -1} * var(--search-domain-translate)))`,
                visibility: `${domain !== "" ? "hidden" : "visible"}`,
              }}
            >
              {placeholderText.map((data, index) => (
                <div
                  key={index}
                  className="mb-4 text-[#71747d] md:mb-4"
                  onClick={handlePlaceholderClick}
                >
                  {data}
                </div>
              ))}
            </div>
          </div>
          <button
            className="flex h-10 w-full items-center justify-center rounded-md bg-[#323548] capitalize text-white hover:bg-[#ec4157] md:absolute md:right-2 md:top-1/2 md:w-32 md:-translate-y-1/2 md:rounded-3xl"
            onClick={() => checkDomain()}
          >
            {isLoading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white bg-transparent" />
            ) : (
              "cek domain"
            )}
          </button>
        </div>
        <CarouselDomain data={carouselData?.data || carouselData || []} />
      </div>

      {statusData && (
        <div className="mx-auto mt-5 w-full max-w-3xl">
          {statusData?.status === "available" && (
            <div className="w-full overflow-hidden rounded-md shadow-lg">
              <div className="bg-primary p-4">
                <h1 className="text-center font-medium text-white md:text-left">
                  Selamat! Domain yang Anda Cari Tersedia
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 bg-white p-4 text-black md:flex-row md:justify-between">
                <span className="block flex-1 text-center text-lg font-bold text-[#323548] md:text-left">
                  {domain}
                </span>
                <div className="flex w-full flex-col items-center gap-4 md:w-fit md:flex-row md:gap-4">
                  <div className="text-center text-xs">
                    <p className="text-lg font-medium text-black">
                      Rp. {numeral(statusData.register[1]).format("0,0")} / tahun
                    </p>
                  </div>
                  <form action="https://client.rumahhost.com/cart.php?a=add&domain=register" method="POST">
                    <input type="hidden" name="query" value={domain} />
                    {/* <button className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white md:w-fit">
                      Pilih
                    </button> */}
                    <button className="bg-[#f14d2e] text-white hover:bg-[#323649] focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:hover:bg-[#323649] dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                        <svg
                          id="shopping-cart"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-7 fill-current"
                        >
                      <path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"></path>
                    </svg>
                    <span className="ml-2">Pesan Sekarang</span>
                  </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {statusData?.status === "unavailable" && (
            <div className="w-full overflow-hidden rounded-md shadow-lg">
              <div className="bg-slate-400 p-4">
                <h1 className="text-center font-semibold text-[#323548] md:text-left">
                  Domain sudah terdaftar
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 bg-white p-4 text-black md:flex-row md:justify-between">
                <span className="flex flex-1 items-center gap-2 text-center text-lg font-bold text-slate-500 md:text-left">
                  <div className="rounded-full bg-slate-500/30 p-1 text-lg text-slate-500">
                    <Icon icon="mdi:close" />
                  </div>
                  {domain}{" "}
                  <span className="font-normal text-[#323548]">
                    sudah terdaftar
                  </span>
                </span>
                <div className="hidden w-full flex-col items-center gap-4 md:w-fit md:flex-row md:gap-4">
                  <div className="text-center text-xs">
                    <div className="mb-2 flex items-center justify-center gap-2">
                      <span className="text-[#727586] line-through">
                        Rp. {numeral(300000).format("0,0")}
                      </span>
                      <span className="rounded-full bg-primary/30 px-2 py-1 text-primary">
                        Hemat 10%
                      </span>
                    </div>
                    <p className="text-lg font-bold">
                      Rp. {numeral(270000).format("0,0")} / Tahun
                    </p>
                  </div>
                  <button className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white md:w-fit">
                    Pilih
                  </button>
                </div>
              </div>
            </div>
          )}

          {Array.isArray(otherExtStatusData) && otherExtStatusData.length > 0 && (
            <div className="mt-5 w-full overflow-hidden rounded-md shadow-lg">
              <div className="bg-[#004166] p-4">
                <h1 className="text-center font-medium text-white md:text-left">
                  Ekstensi Populer Lainnya
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 bg-white p-4 text-black md:flex-row md:justify-center">
                {otherExtStatusData.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="flex select-none flex-col items-center gap-2"
                    >
                      <Image src={data.image} alt={data.alt} />
                      <p className="text-lg text-[#323548]">
                        Rp. {numeral(data.price).format("0,0")}
                      </p>
                      <form action="https://client.rumahhost.com/cart.php?a=add&domain=register" method="POST">
                        <input type="hidden" name="query" value={`${keyword}.${data.ext}`} />
                        <button type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                        <svg
                            id="shopping-cart"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-7 fill-current"
                          >
                            <path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"></path>
                          </svg>
                        Pilih
                        </button>


                      </form>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {Array.isArray(suggestDomains) && suggestDomains.length > 0 && (
            <div className="mt-5 w-full overflow-hidden rounded-md shadow-lg">
              <div className="bg-[#694d30] p-4">
                <h1 className="text-center font-normal text-white md:text-left">
                  Rekomendai Domain Lainnya
                </h1>
              </div>
              <SliderSearchDomain datas={suggestDomains} />
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default SearchDomain;
