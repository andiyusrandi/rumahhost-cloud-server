"use client";

import SearchIcon from "@/public/search-Icons.svg";
import Image from "next/image";
import CarouselDomain from "../CarouselDomain";
import { useEffect, useRef, useState } from "react";
import numeral from "numeral";
import { Icon } from "@iconify/react";

const extensions = ["com", "net", "co.id", "my.id", "id"]

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
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param)
  })

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json()

  return data
}

const getSuggestDomains = async (param) => {
  const response = await fetch(`/api/domains/suggest-names`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param)
  })

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json()

  return data
}

function SearchDomain({ carouselData, pricingData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [statusData, setStatusData] = useState();
  const [otherExtStatusData, setOtherExtStatusData] = useState()
  const [suggestDomains, setSuggestDomains] = useState()
  const [domain, setDomain] = useState("");
  const [keyword, setKeyword] = useState("");
  const [ext, setExt] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const inputRef = useRef(null);

  const handlePlaceholderClick = () => {
    inputRef.current.focus();
  };

  const checkDomain = async () => {
    setOverlay(false)
    setIsLoading(!isLoading);
    
    let checkStatus = await checkAvailibility({domain: domain, action: 'DomainWhoIs'})

    const otherStatus = await Promise.all(extensions.filter((value) => {return value != ext}).map(async (value) => {
      const otherStatus = await checkAvailibility({domain: `${keyword}.${value}`, action: 'DomainWhoIs'})

      let otherData = {}
      carouselData.map((data, index) => {
        if (data.ext == value) {
          otherData = data
        }

        return {}
      })

      return {...otherStatus, ...otherData}
    }))

    const otherStatusAvailable = otherStatus.filter((data) => {return data.status === "available"})

    for (const [key, value] of Object.entries(pricingData)) {
      if (ext == key) {
        checkStatus = {...checkStatus, ...value}
      }
    }

    const suggestDomains = await getSuggestDomains({keyword: keyword})
    let suggestDomainsArray = []

    for (const [key, value] of Object.entries(suggestDomains)) {
      let newObj = {}

      if (value.status === 'available') {
        newObj = {name: key, ...value}
      }

      suggestDomainsArray.push(newObj)
    }

    const suggests = suggestDomainsArray
      .filter((data, index) => {
        const suggestDomain = data.name.split(".")
        let suggestExt = `${suggestDomain[1]}`
        if (suggestDomain.length == 1) {
          suggestExt = `${suggestDomain[1]}.${suggestDomain[2]}`
        }
        
        let availableDomain = [];
        for (const [key, value] of Object.entries(pricingData)) {    
          availableDomain.push(key)
        }

        if (availableDomain.includes(suggestExt)) {
          return data;
        }
      })
      .map((data, index) => {
        const suggestDomain = data.name.split(".")
        let suggestExt = `${suggestDomain[1]}`
        let suggest = {...data}

        if (suggestDomain.length == 1) {
          suggestExt = `${suggestDomain[1]}.${suggestDomain[2]}`
        }

        for (const [key, value] of Object.entries(pricingData)) {
          if (suggestExt == key) {
            suggest = {...suggest, ...value}
          }
        }

        return suggest
      })

    setStatusData(checkStatus)
    setSuggestDomains(suggests)
    setOtherExtStatusData(otherStatusAvailable)
    
    setTimeout(setIsLoading(false), 2000);
  };

  const handleInput = (e) => {
    setStatusData({})
    setSuggestDomains({})
    setOtherExtStatusData({})

    const value = e.target.value;
    const valArray = value.split(".")

    if (valArray.length > 2) {
      setKeyword(valArray[0])
      if(valArray[2] != '') setExt(`${valArray[1]}.${valArray[2]}`)
      setDomain(value);
    } else if (valArray.length < 2) {
      setKeyword(valArray[0])
      setExt("com")
      setDomain(`${keyword}.${ext}`)
    } else {
      setKeyword(valArray[0])
      valArray[1] != '' ? setExt(valArray[1]) : setExt("com")
      setDomain(value);
    }
  };

  const handler = (e) => {
    if (e.code === "Enter") {
      const value = e.target.value;
      const valArray = value.split(".")
      
      if (valArray.length > 2) {
        setKeyword(valArray[0])
        setExt(`${valArray[1]}.${valArray[2]}`)
        setDomain(value);
      } else if (valArray.length < 2) {
        setKeyword(valArray[0])
        setExt("com")
        setDomain(`${keyword}.${ext}`)
      } else {
        setKeyword(valArray[0])
        setExt(valArray[1])
        setDomain(value);
      }

      checkDomain()
    }
  }

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
      {overlay === true && (
        <div className="overlay-body"></div>
      )}
      <div className={`mx-auto flex w-full max-w-3xl flex-col gap-2 rounded-lg bg-white p-4 text-sm shadow-onPrimary md:text-base ${overlay === true ? 'z-[999] relative' : ''}`}>
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
              onFocus={e => setOverlay(true)}
              onBlur={e => setOverlay(false)}
              onKeyDown={e => handler(e)}
              className="peer flex w-full gap-1 rounded-full border border-transparent bg-[#f4f7fe] py-3 pl-8 pr-2 text-black focus-visible:outline-none md:py-3 md:pl-12"
            />
            <div
              className="absolute left-10 top-3 duration-500 ease-in [--search-domain-translate:2.25rem] peer-focus:hidden md:left-12 md:top-3 md:[--search-domain-translate:2.5rem]"
              style={{
                transform: `translateY(calc(${placeholderIndex === 0 ? placeholderIndex : placeholderIndex * -1} * var(--search-domain-translate)))`,
                visibility: `${domain !== '' ? 'hidden' : 'visible'}`
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
        <CarouselDomain data={carouselData} />
      </div>

      {statusData && (
        <div className="mx-auto w-full max-w-3xl mt-5">
          {statusData.status === "available" && (
            <div className="w-full overflow-hidden rounded-md shadow-lg">
              <div className="bg-primary p-4">
                <h1 className="text-center font-semibold text-white md:text-left">
                  Selamat! Domain yang Anda Cari Tersedia
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 bg-white p-4 text-black md:flex-row md:justify-between">
                <span className="block flex-1 text-[#323548] text-center text-lg font-bold md:text-left">
                  {domain}
                </span>
                <div className="flex w-full flex-col items-center gap-4 md:w-fit md:flex-row md:gap-4">
                  <div className="text-center text-xs">
                    <p className="text-lg font-bold text-[#323548]">
                      Rp. {numeral(statusData.register[1]).format("0,0")} /
                      Tahun
                    </p>
                  </div>
                  <button className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white md:w-fit">
                    Pilih
                  </button>
                </div>
              </div>
            </div>
          )}

          {statusData.status === "unavailable" && (
            <div className="w-full overflow-hidden rounded-md shadow-lg">
              <div className="bg-slate-400 p-4">
                <h1 className="text-center text-[#323548] font-semibold md:text-left">
                  Domain sudah terdaftar
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 bg-white p-4 text-black md:flex-row md:justify-between">
                <span className="flex flex-1 items-center gap-2 text-center text-lg font-bold text-slate-500 md:text-left">
                  <div className="rounded-full bg-slate-500/30 p-1 text-lg text-slate-500">
                    <Icon icon="mdi:close" />
                  </div>
                  {domain} <span className="font-normal text-[#323548]">sudah terdaftar</span>
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

          {otherExtStatusData.length > 0 && (
            <div className="w-full overflow-hidden rounded-md shadow-lg mt-5">
              <div className="bg-slate-400 p-4">
                <h1 className="text-center text-[#323548] font-semibold md:text-left">
                  Ekstensi Populer Lainnya
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 bg-white p-4 text-black md:flex-row md:justify-center">
                {otherExtStatusData.map((data, index) => {
                  return(
                    <div
                      key={index}
                      className="flex select-none flex-col gap-2 items-center"
                    >
                      <Image src={data.image} alt={data.alt} />
                      <p className="font-semibold text-[#323548]">Rp. {numeral(data.price).format("0,0")}</p>
                      <button className="w-full rounded-lg bg-slate-400 px-5 py-2 font-semibold text-white md:w-fit">
                        Pilih
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {suggestDomains.length > 0 && (
            <div className="w-full overflow-hidden rounded-md shadow-lg mt-5">
              <div className="bg-slate-400 p-4">
                <h1 className="text-center text-[#323548] font-semibold md:text-left">
                  Rekomendai Domain Lainnya
                </h1>
              </div>
              {suggestDomains.map((data, index) => {
                return (
                  <div key={index} className="flex flex-col items-center justify-center gap-6 bg-white p-4 text-black md:flex-row md:justify-between">
                    <span className="block flex-1 text-[#323548] text-center text-lg font-bold md:text-left">
                      {data.name}
                    </span>
                    <div className="flex w-full flex-col items-center gap-4 md:w-fit md:flex-row md:gap-4">
                      <div className="text-center text-xs">
                        <p className="text-lg font-bold text-[#323548]">
                          Rp. {numeral(data.register[1]).format("0,0")} /
                          Tahun
                        </p>
                      </div>
                      <button className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white md:w-fit">
                        Pilih
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default SearchDomain;