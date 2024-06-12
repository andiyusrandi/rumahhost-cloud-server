import Image from "next/image";
import CarouselFeedback from "../CarouselFeedback";
import CostumerImage from "@/public/Costumer-image-dekstop.png";

function Testimonial({ isBackgroundWhite = false }) {
  return (
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

      <div
        className={`container rounded-xl py-3 ${isBackgroundWhite ? "bg-white" : "bg-main"}`}
      >
        <h3 className="mb-6 px-10 text-center text-xl lg:text-2xl font-semibold">
          Mereka Yang Sudah Merasakan Performa Terbaik
        </h3>

        <CarouselFeedback />
      </div>
    </section>
  );
}

export default Testimonial;
