import PoliciesAgreementsNavigator from "@/components/PoliciesAgreementsNavigator";
import Backgroud from "@/public/BackgroundPoliciesAgreements.png";
import Image from "next/image";

function PoliciesAgreementsLayout({ children }) {
  return (
    <main>
      <section className="relative">
        <div className="absolute h-full w-full">
          <Image
            src={Backgroud}
            alt=""
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top left",
              zIndex: 0,
            }}
          />
        </div>
        <div className="container relative z-[1] flex flex-col gap-10 pb-8 pt-20 text-white">
          <h3 className="text-xl font-bold md:text-4xl">MSA/SLA/AUP</h3>
          <p className="text-xs md:text-base">
            Layanan cloud computing untuk mengatur hubungan antara penyedia
            layanan dan pelanggan serta untuk melindungi hak dan kewajiban kedua
            belah pihak.
          </p>
          <PoliciesAgreementsNavigator />
        </div>
      </section>
      {children}
    </main>
  );
}

export default PoliciesAgreementsLayout;
