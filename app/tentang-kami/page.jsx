import CarouselCommitment from "@/components/CarouselCommitment";
import ExploreProducts from "@/components/Section/ExploreProducts";
import Testimonial from "@/components/Section/Testimonial";
import Commitments from "@/components/Section/Commitments";
import ArtboardMountain from "@/public/ArtboardMountain.svg";
import DotSquare from "@/public/DotsSquare.png";
import RumahHost from "@/public/Logo Rumah Host 2.png";
import Shape from "@/public/Shape.svg";
// import Server from "@/public/server.png";
import Iconetx from "@/public/iconetx.png";
import Iconetx2 from "@/public/iconetx2.png";
import UMKM from "@/public/umkm.png";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tentang Kami",
  description:
    "Rumahhost.com adalah penyedia layanan web hosting yang telah beroperasi sejak tahun 2019. Dengan pengalaman yang panjang, kami telah melayani ribuan.",
  alternates: {
    canonical: "/tentang-kami",
  },
  openGraph: {
    url: "/tentang-kami",
    siteName: "RumahHost",
    type: "article",
    locale: "id_ID",
  },
};

function AboutUs() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#07122D] pb-10 pt-20 lg:py-20">
        <div className="container mt-8 flex flex-col items-center gap-4 lg:flex-row-reverse">
          <div className="relative flex h-44 w-fit items-center justify-center p-4 lg:h-fit lg:w-[40%]">
            <Image
              src={RumahHost}
              alt="Logo Rumah Host"
              style={{
                objectFit: "contain",
                objectPosition: "center",
                height: "100%",
                width: "fit-content",
              }}
            />
          </div>
          <div className="flex flex-1 flex-col items-center gap-4 text-center text-white lg:items-start lg:text-left">
            <h1 className="font-ubuntu text-xl font-bold md:text-4xl">
              We <span className="text-primary">Start</span> Together,{" "}
              <span className="text-primary">Fight</span> Together, And{" "}
              <span className="text-primary">Success</span> Together.
            </h1>
            <p>
              Penyedia cloud hosting di Indonesia dengan performance terbaik
              Uptime server terjamin dengan Technologi Upper class
            </p>
            <Link
              href="https://client.rumahhost.com/login"
              className="mt-12 w-fit rounded-lg border border-white bg-transparent px-12 py-3 text-xs font-semibold capitalize text-transparent text-white hover:border-[#f14d2e] hover:bg-[#f14d2e] lg:text-base"
            >
              Daftar Sekarng
            </Link>
          </div>
        </div>
        <div className="absolute left-0 top-0 h-80 -translate-x-[40%] -translate-y-1/2">
          <Image
            src={Shape}
            alt=""
            style={{
              objectFit: "contain",
              objectPosition: "center",
              height: "100%",
              width: "fit-content",
            }}
          />
        </div>
        <div className="absolute bottom-0 right-0 h-80 translate-x-1/2 translate-y-[40%]">
          <Image
            src={Shape}
            alt=""
            style={{
              objectFit: "contain",
              objectPosition: "center",
              height: "100%",
              width: "fit-content",
            }}
          />
        </div>
      </section>
      <section className="py-5">
        <div className="container flex flex-col gap-4 md:flex-row">
          <div className="flex flex-1 flex-col justify-center">
            <h3 className="mb-5 text-xl font-bold md:text-2xl">
              TENTANG PERUSAHAAN
            </h3>
            <p className="text-sm md:text-base">
              RumahHost.com (PT Xeon Technology Indonesia ) adalah Perusahaan
              penyedia hosting dan Domain. Didirikan pada tahun 2019 di
              Makassar, kini RumahHost.com berkembang semakin pesat. Saat ini
              RumahHost.com telah dipercaya oleh 200+ perusahaan di Indonesia
              dan siap menjadi penyedia cloud hosting dan domain terbaik untuk
              Indonesia yang lebih maju.
            </p>
          </div>
          <div className="relative flex w-full items-center justify-center md:w-1/2">
            <Image
              src={Iconetx}
              alt=""
              className="w-full"
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
        <div className="container flex flex-col gap-4 md:flex-row lg:flex-row-reverse">
          <div className="flex flex-1 flex-col justify-center">
            <h3 className="mb-5 text-xl font-bold md:text-2xl">
              BERPRINSIP UNTUK MEMBANTU
            </h3>
            <p className="text-sm md:text-base">
              RumahHost didirikan berdasarkan prinsip untuk membantu UMKM dan
              MENUMBUHKAN bisnis online mereka. Kami senantiasa memberikan
              pelayanan terbaik ke pelanggan dengan menyediakan teknologi dan
              inovasi terbaru yang didukung oleh dukungan teknis profesional
            </p>
          </div>
          <div className="relative flex w-full items-center justify-center p-4 md:w-[45%] lg:p-8">
            <Image
              src={Iconetx2}
              alt=""
              className="w-full"
              style={{
                objectFit: "contain",
                objectPosition: "center",
                height: "350px",
              }}
            />
          </div>
        </div>
      </section>

      <section className="mb-12 bg-primary py-8 text-xs text-[#7E8299] md:text-base">
        <div className="container">
          <div className="relative mb-6">
            <h5 className="relative z-[2] p-2 text-sm font-semibold text-white md:text-2xl">
              Menjadi perusahaan teknologi terbaik untuk mewujudkan akses
              pelayanan infrastruktur berbasis digital secara global
            </h5>
            <div className="absolute bottom-0 left-0 z-[1] h-12 w-12 opacity-75">
              <Image
                src={DotSquare}
                alt=""
                style={{
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-[2rem_auto] rounded bg-white p-4">
              <span>1.</span>
              <p>Membantu pasar bisnis Go to Digital.</p>
            </div>
            <div className="grid grid-cols-[2rem_auto] rounded bg-white p-4">
              <span>2.</span>
              <p>
                Menjadi partner bisnis yang saling menguntungkan dengan mitra
                usaha dalam pengembangan bisnis.
              </p>
            </div>
            <div className="grid grid-cols-[2rem_auto] rounded bg-white p-4">
              <span>3.</span>
              <p>
                Menjadi perusahaan teknologi yang memberikan edukasi digital
                untuk pengembangan SDM yang berkualitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ExploreProducts />

      <Commitments isBackgroundWhite={true} />

      <Testimonial />
    </main>
  );
}

export default AboutUs;
