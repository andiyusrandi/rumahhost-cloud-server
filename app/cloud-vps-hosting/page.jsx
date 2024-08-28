import Commitments from "@/components/Section/Commitments";
import TablePackagesVPS from "@/components/Table/TablePackagesVPS";
import FaqCloudVps from "@/components/FAQ/FaqCloudVps";
import FeatureHosting from "@/components/Section/FeatureHosting";
import ArtboardUMKM from "@/public/ArtUMKM.png";
import CostumerImage from "@/public/Costumer-image-dekstop.png";
import ServerImage from "@/public/server.png";
import Iconvps from "@/public/icons/iconvps.svg";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cloud VPS Hosting",
  description: "Dengan Cloud VPS Hosting, server kamu akan berjalan lebih cepat dikarenakan semua sumber daya server tidak akan terbagi dengan VPS lain.",
  alternates: {
    canonical: '/cloud-vps-hosting',
  },
  openGraph: {
    url: '/cloud-vps-hosting',
    siteName: 'RumahHost',
    type: 'website',
    locale: 'id_ID'
  },
};

function Server() {
  return (
    <main>
      <section className="bg__hero-main relative">
        <div className="container pb-10 pt-16 text-white lg:pt-20 lg:pb-28">
          <div className="grid w-full gap-4 md:grid-cols-[auto_50%] lg:grid-cols-[auto_40%]">
            <div className="relative items-center justify-center flex lg:hidden">
              <Image
                src={ServerImage}
                alt="ServerImage"
                priority
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                  maxWidth: "28rem",
                  width: "80%",
                }}
              />
            </div>
            <div className="flex flex-col items-start gap-8 text-left md:items-end md:text-right lg:text-left lg:items-start lg:pt-14 lg:px-0">
              <h1
                className={`font-ubuntu text-3xl font-bold text-transparent text-white lg:text-[40px] lg:leading-tight`}
              >
                High Performance CloudVirtual Private Server
              </h1>
              <h3 className="text-base">
                Dengan Cloud VPS Hosting, server kamu akan berjalan lebih cepat
                dikarenakan semua sumber daya server tidak akan terbagi dengan VPS
                lain. Tersedia berbagai pilihan kapasitas penyimpanan yang sangat
                besar hingga 1283 GB.
              </h3>
              <Link href="#packages" className="w-fit rounded-lg bg-white px-12 py-3">
                <span className="bg-gradient-to-r from-[#054EC5] to-[rgba(7,120,98,0.5)] bg-clip-text font-semibold uppercase text-transparent text-xs lg:text-base">
                  pilih paket!
                </span>
              </Link>
            </div>
            <div className="relative items-center justify-center hidden lg:flex">
              <Image
                src={ServerImage}
                alt="ServerImage"
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

      <section id="packages">
        <div className="container -translate-y-10 text-sm">
          <TablePackagesVPS />
        </div>
      </section>

      <FeatureHosting title={"Cloud VPS Hosting"} />

      <FaqCloudVps />

      <Commitments isBackgroundWhite={false} />

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

export default Server;
