import CarouselProduct from "@/components/CarouselProduct";
import Commitments from "@/components/Section/Commitments";
import CreateWebUMKM from "@/components/Section/CreateWebUMKM";
import ExploreProducts from "@/components/Section/ExploreProducts";
import FAQ from "@/components/Section/FAQ";
import SearchDomain from "@/components/Section/SearchDomain";
import Testimonial from "@/components/Section/Testimonial";
import { TypewriterComponent } from "@/components/TypewriterComponent";
import Artboard from "@/public/ArtboardHome.png";
import { getData } from "@/utils/api-calls";
import Image from "next/image";

export const metadata = {
  title: "RumahHost :: Technology Cloud Indonesia",
  description:
    "RumahHost merupakan penyedia cloud hosting server di Indonesia dengan performa terbaik uptime server terjamin dengan teknologi upper class",
  alternates: {
    canonical: "/",
  },
};

const carouselDomain = async () => {
  try {
    const DEV_URL = "http://localhost:3000";
    const response = await fetch(
      DEV_URL + "/api/domains/get-carousel-pricing",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      console.error(`Error API carousel: ${response.status}`);
      return { data: [] };
    }

    // Mengambil respons sebagai text terlebih dahulu
    const text = await response.text();

    try {
      // Mencoba parse sebagai JSON
      return JSON.parse(text);
    } catch (e) {
      console.error(
        "JSON carousel tidak valid:",
        text.substring(0, 100) + "...",
      );
      return { data: [] };
    }
  } catch (error) {
    console.error("Gagal mengambil data carousel:", error);
    return { data: [] };
  }
};

const domainPricing = async () => {
  try {
    // Menggunakan DEV_URL dari environment variable
    const DEV_URL = "http://localhost:3000";
    // Menggunakan DEV_URL untuk fetch data
    const response = await fetch(DEV_URL + "/api/domains/get-tld-pricing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(`Error API domain pricing: ${response.status}`);
      return { data: [] };
    }

    // Mengambil respons sebagai text terlebih dahulu
    const text = await response.text();

    try {
      // Mencoba parse sebagai JSON
      return JSON.parse(text);
    } catch (e) {
      console.error(
        "JSON domain pricing tidak valid:",
        text.substring(0, 100) + "...",
      );
      return { data: [] };
    }
  } catch (error) {
    console.error("Gagal mengambil data domain pricing:", error);
    return { data: [] };
  }
};

// Fungsi wrapper untuk getData
const getProductsData = async () => {
  try {
    const productsData = await getData({ gid: 11, action: "GetProducts" });
    return productsData || [];
  } catch (error) {
    console.error("Gagal mengambil data produk:", error);
    return [];
  }
};

export const dynamic = "force-dynamic";

export default async function Home() {
  try {
    // Menggunakan Promise.all untuk fetch data secara paralel
    const [products, carouselData, domainPricingData] =
      await Promise.allSettled([
        getProductsData(),
        carouselDomain(),
        domainPricing(),
      ]);

    // Mengambil nilai hasil atau default jika rejected
    const productsValue = products.status === "fulfilled" ? products.value : [];
    const carouselValue =
      carouselData.status === "fulfilled" ? carouselData.value : { data: [] };
    const pricingValue =
      domainPricingData.status === "fulfilled"
        ? domainPricingData.value
        : { data: [] };

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
                  Cloud Hosting Indonesia dengan performance terbaik Uptime
                  server terjamin, Ayo kita mulai sekarang.
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

        <SearchDomain carouselData={carouselValue} pricingData={pricingValue} />

        {/* Products */}
        <section id="products" className="my-8">
          <div className="container">
            <CarouselProduct datas={productsValue} />
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
  } catch (error) {
    console.error("Error pada komponen Home:", error);
    // Tampilkan UI alternatif jika terjadi error
    return (
      <div className="container py-20 text-center">
        <h2 className="mb-4 text-2xl font-bold text-red-600">
          Terjadi Kesalahan
        </h2>
        <p>Tidak dapat memuat data. Silakan coba lagi nanti.</p>
        {process.env.NODE_ENV !== "production" && (
          <div className="mx-auto mt-4 max-w-2xl rounded-md bg-gray-100 p-4 text-left">
            <p className="font-bold">
              Detail Error (hanya tampil di development):
            </p>
            <pre className="mt-2 overflow-auto text-xs">{error.toString()}</pre>
          </div>
        )}
      </div>
    );
  }
}
