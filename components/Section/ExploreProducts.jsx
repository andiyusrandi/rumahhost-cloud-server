import DotsSquare from "@/public/DotsSquare.png";
import Image from "next/image";
import CarouselService from "../CarouselService";

function ExploreProducts() {
  return (
    <section className="mb-12">
      <div className="container flex flex-col">
        <div className="relative mb-1 md:mb-10">
          <Image
            src={DotsSquare}
            alt=""
            height={58}
            className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2"
          />
          <h3 className="py-3 text-[28px] leading-9 font-semibold md:leading-none md:text-[40px]">
            Explore Products & Services
          </h3>
        </div>
        <CarouselService />
      </div>
    </section>
  );
}

export default ExploreProducts;
