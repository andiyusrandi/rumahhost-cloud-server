import ResellerHostingFAQ from "@/components/FAQ/ResellerHostingFAQ";
import ResellerHostingPackages from "@/components/Section/ResellerHostingPackages";
import Commitments from "@/components/Section/Commitments";
import DotSquare from "@/public/DotsSquare.png";
import ResellerHostingImage from "@/public/ResellerHostingHeader.png";
import ArtboardUMKM from "@/public/ArtUMKM.png";
import CostumerImage from "@/public/Costumer-image-dekstop.png";
import Image from "next/image";

export const metadata = {
  title: "Reseller Hosting",
};

function ResellerHosting() {
  return (
    <main>
      <section className="bg-[#07122D] text-white">
        <div className="container flex flex-col gap-8 pb-6 pt-20 md:flex-row md:gap-4">
          <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center md:items-start md:text-left">
            <h1 className="text-xl font-bold md:text-2xl lg:text-4xl">
              Mulai bisnis Reseller Hosting tidak pernah menjadi semudah ini
            </h1>
            <p>
              Kini, memulai bisnis web hosting sangat gampang dengan Reseller
              Hosting dari RumahHost. Paket reseller hosting kami menawarkan
              paket hosting kustom yang fleksibel, dengan kapasitas disk tak
              terukur dan bandwidth memadai. Paket ini juga dilengkapi
              WHM/cPanel, serta GUI intuitif untuk membantu proses web hosting,
              instalasi skrip 1-klik, dan pendukung klien.
            </p>
            <button className="rounded-lg bg-white px-8 py-4 font-semibold shadow-md">
              <span className="bg-gradient-to-r from-[#054EC5] to-[#07786280] bg-clip-text text-transparent">
                PILIH PAKET!
              </span>
            </button>
          </div>
          <div className="relative h-40 max-w-md md:h-full md:translate-y-20 lg:basis-2/5">
            <Image
              src={ResellerHostingImage}
              alt=""
              style={{
                objectFit: "contain",
                objectPosition: "bottom",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </section>

      <ResellerHostingPackages />

      <section className="my-12">
        <div className="container flex flex-col gap-3">
          <div className="relative">
            <Image
              src={DotSquare}
              alt=""
              height={58}
              className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2"
            />
            <h3 className="py-3 text-[28px] leading-10 font-semibold md:leading-none md:text[40px]">
              Tanya Jawab (FAQ) Reseller Hosting
            </h3>
          </div>

          <ResellerHostingFAQ />
        </div>
      </section>

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

export default ResellerHosting;
