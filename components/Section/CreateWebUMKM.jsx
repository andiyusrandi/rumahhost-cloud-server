import ArtboardUMKM from "@/public/ArtUMKM.png";
import Image from "next/image";

function CreateWebUMKM({ bg = "white" }) {
  return (
    <section className="mb-6">
      <div className="mx-5 md:ml-8 md:mr-16">
        <div
          className={`relative grid grid-cols-1 gap-4 rounded-xl px-4 py-4 z-[-1] lg:rounded-[30px] lg:px-6 lg:h-[331px] lg:grid-cols-3 ${bg !== "white" ? bg : "bg-white"}`}
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
  );
}

export default CreateWebUMKM;
