import ClaimPromo from "@/components/Section/ClaimPromo";
import Commitments from "@/components/Section/Commitments";
import ExploreProducts from "@/components/Section/ExploreProducts";
import ListPromo from "@/components/Section/ListPromo";
import Testimonial from "@/components/Section/Testimonial";
import WomenTalkingMegaphone from "@/public/BackgroundPromo.png";
import PromoSVG from "@/public/ParticlePromo.png";
import { getData } from "@/utils/api-calls";
import Image from "next/image";

export const metadata = {
  title: "Promo",
};

async function Promo() {
  const datas = await getData({action: "GetPromotions"})

  return (
    <main>
      <section className="relative overflow-hidden bg-[#2D1607]">
        <div className="container relative z-[1] grid grid-cols-1 gap-4 pt-24 pb-10 md:pb-5 text-white md:grid-cols-2 lg:gap-8">
          <div className="flex flex-col items-center gap-4 text-center text-xs md:items-start md:text-left md:text-base">
            <h1 className="font-ubuntu text-3xl font-bold lg:text-[40px] lg:leading-tight">
              Promo #EverythingOnline
            </h1>
            <p className="text-base">
              Jangan lewatkan promosi hebat RumahHost untuk semua kebutuhan
              profesional Anda. Mari mulai membangun bisnis Anda dan tumbuh
              bersama.
            </p>
            <button className="w-fit rounded-lg bg-white px-12 py-3 font-semibold shadow-md">
              <span className="bg-gradient-to-r from-[#054EC5] to-[#07786280] bg-clip-text font-semibold text-transparent text-xs lg:text-base">
                CEK PROMO
              </span>
            </button>
          </div>
          <div className="relative flex h-72 items-end justify-center">
            <Image
              src={WomenTalkingMegaphone}
              alt="Women talking megaphone"
              style={{
                objectFit: "contain",
                objectPosition: "center bottom",
                height: "100%",
              }}
            />
          </div>
        </div>

        {/* Setup Background */}
        <div className="absolute bottom-0 left-0 aspect-square h-96 -translate-x-2/3 translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,125,42,0.4)_0%,transparent_60%)]" />
        <div className="absolute bottom-1/2 right-0 aspect-square h-[500px] translate-x-2/3 translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,125,42,0.4)_0%,transparent_60%)] md:bottom-[20%] md:translate-x-1/2" />
        <div className="absolute left-[20%] top-[40%] aspect-square h-16 -translate-x-1/2 -translate-y-1/2 opacity-10 md:left-[35%] md:top-[80%]">
          <Image
            src={PromoSVG}
            alt=""
            style={{
              objectFit: "contain",
              objectPosition: "center",
              height: "100%",
            }}
          />
        </div>
        <div className="absolute left-[80%] top-[80%] aspect-square h-16 -translate-x-1/2 -translate-y-1/2 rotate-90 opacity-10 md:left-[60%] md:top-[20%] md:rotate-[80deg]">
          <Image
            src={PromoSVG}
            alt=""
            style={{
              objectFit: "contain",
              objectPosition: "center",
              height: "100%",
            }}
          />
        </div>
      </section>

      <ClaimPromo />

      <ListPromo datas={datas} />

      <ExploreProducts />

      <Commitments />

      <Testimonial />
    </main>
  );
}

export default Promo;
