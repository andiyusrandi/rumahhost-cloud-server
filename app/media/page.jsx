import News from "@/components/Section/News";
import Testimonial from "@/components/Section/Testimonial";
import Backgroud from "@/public/BackgroundPoliciesAgreements.png";
import Image from "next/image";

export const metadata = {
  title: "Media Publikasi",
};

function MediaPublication() {
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
        <div className="container relative z-[1] flex flex-col gap-10 py-24 text-white">
          <h3 className="text-xl font-bold md:text-4xl">Media Publication</h3>
        </div>
      </section>

      <News />

      <Testimonial />
    </main>
  );
}

export default MediaPublication;
