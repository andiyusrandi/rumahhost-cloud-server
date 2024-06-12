import Image from "next/image";
import CarouselProduct from "@/components/CarouselProduct";
import CreateWebUMKM from "@/components/Section/CreateWebUMKM";
import ExploreProducts from "@/components/Section/ExploreProducts";
import FAQ from "@/components/Section/FAQ";
import SearchDomain from "@/components/Section/SearchDomain";
import Testimonial from "@/components/Section/Testimonial";
import Commitments from "@/components/Section/Commitments";
import { TypewriterComponent } from "@/components/TypewriterComponent";
import Artboard from "@/public/ArtboardHome.png";
import { getData } from "@/utils/api-calls";

export const metadata = {
  title: "RumahHost :: Technology Cloud Indonesia",
  description: "RumahHost merupakan penyedia cloud hosting server di Indonesia dengan performa terbaik uptime server terjamin dengan teknologi upper class",
  alternates: {
    canonical: '/',
  }
};

const carouselDomain = async () => {
  const response = await fetch(process.env.DEV_URL + "/api/domains/get-carousel-pricing", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json()
  return data
}

const domainPricing = async () => {
  const response = await fetch(process.env.DEV_URL + "/api/domains/get-tld-pricing", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json()
  return data
}

export default async function Home() {
  const products = await getData({ gid: 11, action: "GetProducts" });
  const carouselData = await carouselDomain()
  const domainPricingData = await domainPricing()
    
  return (
    <main>
      {/* Hero */}
      <section id="hero" className="bg-home">
        <div className="container py-32 text-white md:pb-28">
          <div className="grid w-full gap-4 md:grid-cols-[auto_50%] lg:grid-cols-[auto_40%]">
            <div className="relative flex items-center justify-center lg:hidden">
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
            <div className="flex flex-col items-start gap-8 text-left md:items-end md:text-right lg:items-start lg:px-0 lg:pt-14 lg:text-left">
              <h1
                className={`font-ubuntu text-3xl font-bold text-transparent text-white lg:text-[40px] lg:leading-tight`}
              >
                Online Bersama RumahHost Dengan <br />{" "}
                <TypewriterComponent
                  words={[
                    "Pelayanan Terbaik",
                    "Great Discount",
                    "Resource Terbaik",
                    "Uptime Server Terjamin",
                  ]}
                />
              </h1>
              <h3 className="text-base">
                Cloud Hosting Indonesia dengan performance terbaik Uptime server
                terjamin, Ayo kita mulai sekarang.
              </h3>
              <button className="w-fit rounded-lg border border-white bg-transparent px-12 py-3 text-xs font-semibold capitalize text-transparent text-white hover:border-[#f14d2e] hover:bg-[#f14d2e] lg:text-base">
                mulai sekarang
              </button>
            </div>
            <div className="relative hidden items-center justify-center lg:flex">
              <Image
                src={Artboard}
                alt="Artboard"
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

      <SearchDomain carouselData={carouselData} pricingData={domainPricingData} />

      {/* Products */}
      <section id="products" className="my-8">
        <div className="container">
          <CarouselProduct datas={products} />
        </div>
      </section>

      {/* Service */}
      <CreateWebUMKM bg="bg-umkm" />

      <ExploreProducts />

      {/* Commitments */}
      <Commitments isBackgroundWhite={true} />

      <FAQ />

      <Testimonial />
    </main>
  );
}
