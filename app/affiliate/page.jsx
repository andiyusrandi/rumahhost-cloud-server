import FaqAffiliate from "@/components/FAQ/FaqAffiliate";
import AffiliateProfits from "@/components/Section/AffiliateProfits";
import Testimonial from "@/components/Section/Testimonial";
import DotsSquare from "@/public/DotsSquare.png";
import Image from "next/image";

export const metadata = {
  title: "Program Affiliate",
  description: "Dapatkan Keuntungan, Mudah & Cepat! untuk setiap member baru yang anda referensikan membeli paket hosting di RumahHost. Ajak teman anda sekarang",
  alternates: {
    canonical: '/affiliate',
  },
  openGraph: {
    url: '/affiliate',
    siteName: 'RumahHost',
    type: 'website',
    locale: 'id_ID'
  },
};

function Affiliate() {
  return (
    <main className="bg-main relative z-[1]">
      <section className="relative bg-[#07122D] text-center text-xs text-white md:text-base">
        <div className="container">
          <div className="mx-auto max-w-[54rem] pt-24 pb-10">
            <h1 className="mb-5 bg-gradient-to-l from-white to-[120%] bg-clip-text font-ubuntu text-3xl font-bold text-transparent lg:text-[40px] lg:leading-tight">
              Raih Keuntungan, Mudah & Cepat!
            </h1>
            <p className="text-base">
              ✓ Daftar Mudah & Gratis Tanpa Biaya | ✓ Komisi Besar 75% | ✓
              Statistik yang Real-Time, Detail, dan Akurat | ✓ Pembayaran
              Langsung ke Rekening Anda
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-0 h-20 w-full translate-y-full rounded-[0_0_50%_50%/0_0_100%_100%] bg-[#07122D]" />
      </section>
      <section className="relative mb-8">
        <div className="container px-8">
          <div className="flex flex-col items-start gap-4 rounded-lg bg-white px-8 py-5 text-xs text-[#5E6278] md:text-xl">
            <h5 className="w-full text-center text-[28px] leading-7 font-medium text-[#323548] md:text-4xl">
              Apa Itu Program Afiliasi?
            </h5>
            <p className="text-sm md:text-base">
              Program Afiliasi adalah sebuah program memberikan komisi atau
              imbalan kepada Anda yang diberika oleh RumahHost sebagai salah
              satu kontribusi Anda membantu dalam berkolaborasi untuk
              perkembangan yang lebih baik.
            </p>
            <p className="text-sm md:text-base">
              RumahHost mengajak dan merekomendasikan anda mengikuti program
              afiliasi hosting untuk mendapatkan penghasilan tambahan secara
              online dengan Mudah, Cepat dan GRATIS tanpa biaya!
            </p>
            <button className="w-full rounded-md bg-[#323548] p-2 text-sm font-medium capitalize text-white md:w-fit md:text-base">
              gabung sekarang!
            </button>
          </div>
        </div>
      </section>

      <AffiliateProfits />

      <section>
        <div className="container my-10">
          <div className="relative mb-3">
            <Image
              src={DotsSquare}
              alt=""
              height={58}
              className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2"
            />
            <h3 className="py-3 font-semibold text-[28px] leading-10 md:leading-none md:text[40px]">
              Tanya Jawab (FAQ) Shared Web Hosting
            </h3>
          </div>

          <FaqAffiliate />
        </div>
      </section>

      <Testimonial isBackgroundWhite={true} />
    </main>
  );
}

export default Affiliate;
