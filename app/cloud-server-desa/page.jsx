import CarouselCloudHostingDesa from "@/components/Carousel/CarouselCloudHostingDesa";
import Commitments from "@/components/Section/Commitments";
import TablePackagesDesa from "@/components/Table/TablePackagesDesa";
import FaqCloudHostingDesa from "@/components/FAQ/FaqCloudHostingDesa";
import ArtboardUMKM from "@/public/ArtUMKM.png";
import CostumerImage from "@/public/Costumer-image-dekstop.png";
import Artboard from "@/public/ArtboardHome.png";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cloud Server Desa",
  description: "Layanan Infrastruktur Server Berbasis Cloud yang di rancang khusus untuk Website Desa dengan Technology Terbaru dan jaminan uptime 99,99%",
  alternates: {
    canonical: '/cloud-server-desa',
  },
  openGraph: {
    url: '/cloud-server-desa',
    siteName: 'RumahHost',
    type: 'website',
    locale: 'id_ID'
  },
};

function CloudHostingDesa() {
  return (
    <main>
      <section className="bg__hero-main relative">
        <div className="container pb-10 pt-16 text-white lg:pt-20 lg:pb-28">
          <div className="grid w-full gap-4 md:grid-cols-[auto_50%] lg:grid-cols-[auto_40%]">
            <div className="relative items-center justify-center flex lg:hidden">
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
            <div className="flex flex-col items-start gap-8 text-left md:items-end md:text-right lg:text-left lg:items-start lg:pt-14 lg:px-0">
              <h1
                className={`font-ubuntu text-3xl font-bold text-transparent text-white lg:text-[40px] lg:leading-tight`}
              >
                Layanan Infrastruktur Server untuk Digitalisasi Desa
              </h1>
              <h3 className="text-base">
                Hosting Desa adalah Layanan Infrastruktur Server Berbasis Cloud yang di rancang khusus untuk Website Desa dengan Technology Terbaru dan jaminan uptime 99,99%.
              </h3>
              <Link href="#packages" className="w-fit rounded-lg border border-white bg-transparent px-12 py-3 text-xs font-semibold capitalize text-transparent text-white hover:border-[#f14d2e] hover:bg-[#f14d2e] lg:text-base">mulai sekarang</Link>
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

      <section id="packages">
        <div className="container -translate-y-10 text-sm">
          <TablePackagesDesa />
        </div>
      </section>

      {/* <section className="bg-primary text-white mb-10">
        <div className="container pb-7 pt-5">
          <div className="relative mb-2 lg:mb-10">
            <Image
              src={DotsSquare}
              alt=""
              height={58}
              className="absolute left-0 top-1/2 hidden -translate-x-1/3 -translate-y-1/2 opacity-25 md:block"
            />
            <h3 className="py-3 text-center text-xl font-semibold lg:text-left">
              Fitur Unggulan Cloud Hosting Desa
            </h3>
          </div>

          <CarouselCloudHostingDesa />
        </div>
      </section> */}

      <section className="mt-10 lg:mt-20">
        <div className="container grid grid-cols-1 gap-6 lg:grid-cols-6">
          <div className="text-center lg:col-span-2 lg:text-left lg:my-auto">
            <h3 className="mb-4 font-ubuntu text-[28px] leading-7 font-bold lg:text-4xl lg:leading-tight">
              Fitur Unggulan Cloud Hosting Desa
            </h3>
            <p className="text-sm md:text-base">
              Kami menawarkan perangkat keras dan perangkat lunak tercepat yang
              dipercaya oleh ribuan pengembang.
            </p>
          </div>
          <CarouselCloudHostingDesa />
        </div>
      </section>

      <FaqCloudHostingDesa />

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

export default CloudHostingDesa;
