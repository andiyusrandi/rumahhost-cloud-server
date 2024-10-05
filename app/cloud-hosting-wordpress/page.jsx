import CloudHostingWordpressPackages from "@/components/Section/CloudHostingWordpressPackages";
import Commitments from "@/components/Section/Commitments";
import ExploreProducts from "@/components/Section/ExploreProducts";
import SearchDomain from "@/components/Section/SearchDomain";
import FaqCloudHostingWP from "@/components/FAQ/FaqCloudHostingWP";
import FeatureHosting from "@/components/Section/FeatureHosting";
import ArtboardUMKM from "@/public/ArtUMKM.png";
import CostumerImage from "@/public/Costumer-image-dekstop.png";
import Wphero from "@/public/wp/wp-hero.svg";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cloud Hosting Wordpress",
  description: "WordPress hosting terbaik & termurah Indonesia WordPress Accelerator meningkatkan performa website. Gratis domain & SSL.",
  alternates: {
    canonical: '/cloud-hosting-wordpress',
  },
  openGraph: {
    url: '/cloud-hosting-wordpress',
    siteName: 'RumahHost',
    type: 'website',
    locale: 'id_ID'
  },
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

const datas = async () => {
  const response = await fetch(process.env.DEV_URL + "/api/products/hosting-wordpress", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      whmcs: {
        gid: 6,
        action: "GetProducts"
      }
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json()
  return data
}

async function CloudHostingWordpress() {
  const products = await datas()
  const carouselData = await carouselDomain()
  const domainPricingData = await domainPricing()

  return (
    <main>
      {/* Hero */}
      <section id="hero" className="bg__hero-wordpress">
        <div className="container py-32 text-white md:pb-28">
          <div className="grid w-full gap-4 md:grid-cols-[auto_50%] lg:grid-cols-[auto_40%]">
            <div className="relative items-center justify-center flex lg:hidden">
              <Image
                src={Wphero}
                alt="Wordpress Hosting Murah"
                priority
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                  maxWidth: "28rem",
                  width: "72%",
                }}
              />
            </div>
            <div className="flex flex-col items-start gap-8 text-left md:items-end md:text-right lg:text-left lg:items-start lg:pt-14 lg:px-0">
              <h1
                className={`font-ubuntu text-3xl font-bold text-transparent text-white lg:text-[40px] lg:leading-tight`}
              >
              Get Ahead with Blazing-Fast WordPress Hosting Solutions!
              </h1>
              <h3 className="text-base">
              Manfaatkan solusi hosting WordPress super cepat untuk membuat situs Anda lebih unggul. Dapatkan kecepatan dan kinerja optimal yang memastikan situs web Anda memuat dengan cepat, meningkatkan pengalaman pengguna, dan membantu Anda tetap online.
               <br /><br />
                <li>Cocok untuk Pemula Hingga Profesional</li>
                <li>Anti Lambat dengan SSD Terbaru</li>
                <li>Domain dan SSL Gratis</li>
                <li>Garansi 100 hari Uang Kembali</li>
              
              </h3>
              <Link
                href="#pricing"
                className="w-fit rounded-lg border border-white bg-transparent px-12 py-3 text-xs font-semibold capitalize text-transparent text-white hover:border-[#f14d2e] hover:bg-[#f14d2e] lg:text-base"
              >
                mulai sekarang
              </Link>
            </div>
            <div className="relative items-center justify-center hidden lg:flex">
              <Image
                src={Wphero}
                alt="Wordpress Hosting Murah"
                priority
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                  maxWidth: "24rem",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <SearchDomain carouselData={carouselData} pricingData={domainPricingData} />

      <CloudHostingWordpressPackages datas={products}/>

      <ExploreProducts />

      <FeatureHosting title={"Cloud Hosting Wordpress"} />

      <FaqCloudHostingWP />

      <Commitments isBackgroundWhite={false} />

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

export default CloudHostingWordpress;
