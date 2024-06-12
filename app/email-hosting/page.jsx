import CarouselEmailHsotingPackages from "@/components/Carousel/CarouselEmailHsotingPackages";
import EmailHostingFAQ from "@/components/FAQ/EmailHostingFAQ";
import Commitments from "@/components/Section/Commitments";
import EmailHostingMainFeatures from "@/components/Section/EmailHostingMainFeatures";
import DotSquare from "@/public/DotsSquare.png";
import EmailHostingImage from "@/public/EmailHostingHeader.png";
import ArtboardUMKM from "@/public/ArtUMKM.png";
import CostumerImage from "@/public/Costumer-image-dekstop.png";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Email Hosting",
};

function EmailHosting() {
  return (
    <main>
      <section className="bg-[#07122D] text-white">
        <div className="container flex flex-col gap-8 pb-6 pt-20 md:flex-row md:gap-4">
          <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center md:col-span-2 md:items-start md:text-left">
            <h1 className={`font-ubuntu text-3xl font-bold text-transparent text-white lg:text-[40px] lg:leading-tight`}>
              Bisnis lebih profesional dengan email hosting
            </h1>
            <p className="text-base">
              Berhenti menggunakan email pribadi, mulai gunakan email hosting
              agar pelanggan lebih dipercaya dan bisnis lebih dikenal!
            </p>
            <button className="rounded-lg bg-white px-8 py-4 font-semibold shadow-md">
              <span className="bg-gradient-to-r from-[#054EC5] to-[#07786280] bg-clip-text text-transparent text-xs lg:text-base">
                PILIH PAKET!
              </span>
            </button>
          </div>
          <div className="relative p-8">
            <Image
              src={EmailHostingImage}
              alt=""
              style={{
                objectFit: "contain",
                objectPosition: "center",
                margin: "0 auto",
              }}
              className="h-56 w-auto md:h-auto md:w-60 lg:w-80"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container py-12">
          <h3 className="mb-6 text-center text-[28px] leading-7 font-bold md:text-4xl">
            3 Langkah punya email bisnis
          </h3>
          <div className="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="h-40 w-full rounded-lg bg-white p-4 shadow-xl md:h-56">
              <div className="mb-4 text-primary">
                <span className="text-xl font-bold md:text-3xl">01</span>
                <h6 className="font-semibold text-xl">
                  Pilih layanan email hosting
                </h6>
              </div>
              <p className="text-base leading-5">
                Ingin memulai atau meningkatkan bisnis? coba business junior
                14.000/bln. Bisa upgrade kapanpun ke paket level atas!
              </p>
            </div>
            <div className="h-40 w-full rounded-lg bg-white p-4 shadow-xl md:h-56">
              <div className="mb-4 text-primary">
                <span className="text-xl font-bold md:text-3xl">02</span>
                <h6 className="font-semibold text-xl">
                  Lanjutkan proses pembayaran
                </h6>
              </div>
              <p className="text-base leading-5">
                Atur periode langganan dan jumlah mailbox, lanjutkan hingga
                proses pemesanan selesai
              </p>
            </div>
            <div className="h-40 w-full rounded-lg bg-white p-4 shadow-xl md:h-56">
              <div className="mb-4 text-primary">
                <span className="text-xl font-bold md:text-3xl">03</span>
                <h6 className="font-semibold text-xl">
                  Setting Email anda
                </h6>
              </div>
              <p className="text-base leading-5">
                Buat akun, atur DNS, dan sambungkan email ke perangkat. Akun
                anda siap digunakan!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 rounded-b-[50%_2rem] rounded-t-[50%_2rem] bg-[#13263C] py-8">
        <div className="container">
          <h3 className="mb-12 text-center text-white text-[28px] leading-7 font-bold md:text-4xl">
            Pilih layanan email bisnis sesuai kebutuhan anda
          </h3>

          <CarouselEmailHsotingPackages />
        </div>
      </section>

      <section className="mb-12">
        <div className="container">
          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="text-[28px] leading-7 font-bold md:text-4xl">
              Pindahkan email anda sekarang
            </h3>
            <p className="text-sm md:text-base">
              Dengan tool Impor Email, pindah email ke Hostinger jadi lebih
              cepat dan mudah.
            </p>
            <Link
              href="#"
              className="rounded bg-primary px-20 py-1 text-sm font-semibold text-white md:text-base"
            >
              Transfer Email
            </Link>
          </div>
        </div>
      </section>

      <EmailHostingMainFeatures />

      <section className="my-12">
        <div className="container flex flex-col gap-3">
          <div className="relative">
            <Image
              src={DotSquare}
              alt=""
              height={58}
              className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2"
            />
            <h3 className="py-3 text-xl font-semibold">
              Tanya Jawab (FAQ) Email Hosting
            </h3>
          </div>

          <EmailHostingFAQ />
        </div>
      </section>

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

export default EmailHosting;
