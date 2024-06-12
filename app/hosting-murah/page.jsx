// Lib
import Image from "next/image";
import Link from "next/link";
// Component
import CardProductHosting from "@/components/Card/CardProductHosting";
import CardProductHostingCTA from "@/components/Card/CardProductHostingCTA";
import FeatureHosting from "@/components/Section/FeatureHosting";
import SearchDomain from "@/components/Section/SearchDomain";
import TableFeature from "@/components/Table/TableFeature";
import Commitments from "@/components/Section/Commitments";
import FAQ from "@/components/Section/FAQ";
// Asset
import Artboard from "@/public/minion-hero.png";
import ArtboardMountain from "@/public/ArtboardMountain.svg";
import Advert from "@/public/Mesa de trabajo.png";
import ArtboardUMKM from "@/public/ArtUMKM.png";
import CostumerImage from "@/public/Costumer-image-dekstop.png";

export const metadata = {
  title: "Minion Hosting",
  description: "Hosting murah gratis domain & SSL fitur lengkap diskon sampai 80%. Mendukung CloudLinux, dengan cPanel, unlimited database, dan softaculous.",
  alternates: {
    canonical: '/hosting-murah',
  },
  openGraph: {
    url: '/hosting-murah',
    siteName: 'RumahHost',
    type: 'website',
    locale: 'id_ID'
  },
};

const products = async () => {
  const response = await fetch(process.env.DEV_URL + "/api/products/minion-hosting", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      whmcs: {
        gid: 11,
        action: "GetProducts"
      },
      whm: {
        url: 'https://rumahhost.com:2087/json-api/getpkginfo?'
      }
    }),
  });

  const data = await response.json()

  return data;
}

const carouselDomain = async () => {
  const response = await fetch(process.env.DEV_URL + "/api/domains/get-carousel-pricing", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json()
  return data
}

const domainPricing = async () => {
  const response = await fetch(process.env.DEV_URL + "/api/domains/get-tld-pricing", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json()
  return data
}

async function Hosting() {
  const datas = await products();
  const carouselData = await carouselDomain()
  const domainPricingData = await domainPricing()
  
  return (
    <main>
      {/* Hero */}
      <section id="hero" className="bg-minion">
        <div className="container py-32 text-white md:pb-28">
          <div className="grid w-full gap-4 md:grid-cols-[auto_50%] lg:grid-cols-[auto_40%]">
            <div className="relative flex items-center justify-center lg:hidden">
              <Image
                src={Artboard}
                alt="Artboard"
                priority
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                  maxWidth: "28rem",
                  width: "80%",
                }}
              />
            </div>
            <div className="flex flex-col items-start gap-8 text-left md:items-end md:text-right lg:items-start lg:px-0 lg:pt-14 lg:text-left">
              <h1
                className={`font-ubuntu text-3xl font-bold text-transparent text-white lg:text-[40px] lg:leading-tight`}
              >
                Solusi Premium untuk Bisnis Pemula dengan Harga yang Terjangkau
              </h1>
              <h3 className="text-base">
                Didesain dengan fitur-fitur unggulan, server kami memberikan
                performa premium dengan harga yang sangat terjangkau. Percayakan
                bisnis Anda pada Minion Hosting dan saksikan bagaimana situs
                Anda berkembang dengan cepat dan efisien.
              </h3>
              <Link
                href="#pricing"
                className="w-fit rounded-lg border border-white bg-transparent px-12 py-3 text-xs font-semibold capitalize text-transparent text-white hover:border-[#f14d2e] hover:bg-[#f14d2e] lg:text-base"
              >
                mulai sekarang
              </Link>
            </div>
            <div className="relative hidden items-center justify-center lg:flex">
              <Image
                src={Artboard}
                alt=""
                priority
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                  maxWidth: "28rem",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <SearchDomain carouselData={carouselData} pricingData={domainPricingData} />

      <section className="mt-8 flex flex-col gap-6" id="pricing">
        <div className="container flex flex-col items-center">
          <div className="max-w-3xl text-center">
            <h3 className="mb-4 font-ubuntu text-3xl font-bold lg:text-[40px] lg:leading-tight">
              Paket Profesional Dengan Harga Ekonomis
            </h3>
            <p className="text-base">
              Pilih paket anda sekarang. Dapatkan performa terbaik dengan manage
              WordPress hosting kami.
            </p>
          </div>
        </div>
        <div className="container flex justify-center">
          <CardProductHosting datas={datas}/>
        </div>
      </section>

      <section
        id="features"
        className="relative my-6 flex flex-col gap-8 pb-5 pt-8 lg:pt-16"
      >
        <div className="container z-[1] flex flex-col gap-8 px-10">
          <div className="flex flex-col items-center gap-3 text-center">
            <h3 className="font-ubuntu text-[28px] leading-7 font-bold lg:text-4xl lg:leading-tight">Fitur Lengkap</h3>
            <p className="text-sm md:text-base">
              RumahHost hadir dengan resource terdedikasi dan dukungan tim
              profesional. Nikmati kemudahan pengelolaan dengan performa
              optimal!
            </p>
          </div>
        </div>

        <div className="container z-[1] flex flex-col gap-6 px-10">
          <div className="flex flex-col items-center justify-between gap-4 xl:flex-row">
            <div className="h-60 min-h-60 items-center justify-center lg:flex">
              <Image
                src={Advert}
                alt="Advert"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <CardProductHostingCTA datas={datas} />
          </div>
          <TableFeature />
        </div>
        <Image
          src={ArtboardMountain}
          alt=""
          className="absolute left-0 right-0 top-0 z-0 w-full"
        />
      </section>

      <FeatureHosting />

      <FAQ />

      {/* Commitments */}
      <Commitments isBackgroundWhite={true} />

      <section className="mt-5 md:mt-10 lg:mt-20 flex flex-col gap-8">
        <div className="container flex flex-col items-center gap-2">
          <h3 className="text-3xl md:text-[40px] font-semibold">Dipercaya Ribuan Klien</h3>
          <div className="relative aspect-[4/1] w-[75%]">
            <Image
              src={CostumerImage}
              alt="Testimonial"
              priority
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center center",
              }}
            />
          </div>
        </div>

        <div className="container rounded-xl py-3 bg-transparent">
          <div
            className={`relative grid grid-cols-1 gap-4 rounded-xl px-4 py-4 z-[-1] lg:px-6 lg:h-[272px]  lg:grid-cols-3 bg-umkm`}
          >
            <div className="flex flex-col items-center text-center lg:pl-9 lg:py-10 lg:text-left lg:justify-between gap-4 lg:col-span-2 lg:items-start">
              <div className="flex flex-col gap-2 text-center lg:text-left pt-5 lg:pt-0">
                <h3 className="font-semibold text-3xl text-white lg:text-[40px]">
                  Bikin Website UMKM
                </h3>
                <p className="text-base text-white lg:text-lg lg:mt-3 lg:w-[80%]">
                  Layanan pembuatan website impian untuk para pelaku bisnis, UMKM
                  serta Perusahaan. harga murah hasil terbaik. kami membantu anda
                  Go Online Sekarang
                </p>
              </div>
              <button className="flex items-center justify-center rounded-lg border border-none px-3 py-2 text-sm font-semibold text-white bg-primary lg:text-base  hover:bg-[#ff7d2aba] hover:custom-shadow">
                Mulai Sekarang
              </button>
            </div>
            <div className="relative mx-auto -mb-20 h-[300px] w-[300px] lg:absolute lg:bottom-0 lg:right-0 lg:aspect-square lg:w-[431px] lg:h-[431px] lg:-mb-[96px] lg:translate-x-6">
              <Image
                src={ArtboardUMKM}
                alt="Artboard UMKM"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom center"
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hosting;
