// Lib
import Image from "next/image";
import Link from "next/link";
// Component
import CardProductHosting from "@/components/Card/CardProductHosting";
import CardProductHostingCTA from "@/components/Card/CardProductHostingCTA";
import FeatureHosting from "@/components/Section/FeatureHosting";
import SearchDomain from "@/components/Section/SearchDomain";
import TableFeature from "@/components/Table/TableFeature";
import Commitments from "@/components/Section/Commitments";
import FaqHostingMurah from "@/components/FAQ/FaqHostingMurah";
// Asset
import Artboard from "@/public/minion-hero.png";
import ArtboardMountain from "@/public/ArtboardMountain.svg";
import Advert from "@/public/Mesa de trabajo.png";
import ArtboardUMKM from "@/public/ArtUMKM.png";
import CostumerImage from "@/public/Costumer-image-dekstop.png";

export const metadata = {
  title: "Minion Hosting",
  description:
    "Hosting murah gratis domain & SSL fitur lengkap diskon sampai 80%. Mendukung CloudLinux, dengan cPanel, unlimited database, dan softaculous.",
  alternates: {
    canonical: "/hosting-murah",
  },
  openGraph: {
    url: "/hosting-murah",
    siteName: "RumahHost",
    type: "website",
    locale: "id_ID",
  },
};

// Fallback data untuk produk hosting
const fallbackProducts = {
  products: [
    {
      pid: 61,
      gid: 11,
      type: "hostingaccount",
      name: "Junior Lite",
      description: "1278",
      module: "wordpresshostingusa",
      paytype: "recurring",
      pricing: {
        IDR: {
          prefix: "Rp.",
          suffix: "",
          msetupfee: "0.00",
          qsetupfee: "0.00",
          ssetupfee: "0.00",
          asetupfee: "0.00",
          bsetupfee: "0.00",
          tsetupfee: "0.00",
          monthly: "0.00",
          quarterly: "0.00",
          semiannually: "0.00",
          annually: "240000.00",
          biennially: "480000.00",
          triennially: "720000.00",
        },
      },
      promo: {
        value: "0",
      },
      feature: {
        space: "5120",
        cores: "2",
        websites: "1",
        plan_status: "Active",
        plan_name: "Starter Lite",
        isOldPlan: false,
        ram: "2048",
        hosting_type: "wordpresshostingusa",
        isSSDPlan: false,
        addons: [
          {
            addon_name: "cpu_1",
            is_paid: true,
            quantity: "1",
            free_quantity: 0,
            conflicting_addon_names: [],
          },
          {
            addon_name: "ipaddress",
            is_paid: true,
            free_quantity: 0,
            conflicting_addon_names: [],
          },
          {
            addon_name: "ram_1",
            is_paid: true,
            quantity: "1024",
            free_quantity: 0,
            conflicting_addon_names: [],
          },
        ],
        no_of_email_accounts: "-1",
      },
      isPopular: false,
    },
    {
      pid: 25,
      gid: 6,
      type: "hostingaccount",
      name: "Exanior Lite",
      description: "1279",
      module: "wordpresshostingusa",
      paytype: "recurring",
      pricing: {
        IDR: {
          prefix: "Rp.",
          suffix: "",
          msetupfee: "0.00",
          qsetupfee: "0.00",
          ssetupfee: "0.00",
          asetupfee: "0.00",
          bsetupfee: "0.00",
          tsetupfee: "0.00",
          monthly: "-1.00",
          quarterly: "377460.00",
          semiannually: "700920.00",
          annually: "969840.00",
          biennially: "1853280.00",
          triennially: "2715120.00",
        },
      },
      promo: {
        value: "0",
      },
      feature: {
        space: "20480",
        cores: "4",
        websites: "2",
        plan_status: "Active",
        plan_name: "Performance Lite",
        isOldPlan: false,
        ram: "4096",
        hosting_type: "wordpresshostingusa",
        isSSDPlan: false,
        addons: [
          {
            addon_name: "cpu_1",
            is_paid: true,
            quantity: "1",
            free_quantity: 0,
            conflicting_addon_names: [],
          },
          {
            addon_name: "ram_1",
            is_paid: true,
            quantity: "1024",
            free_quantity: 0,
            conflicting_addon_names: [],
          },
          {
            addon_name: "ipaddress",
            is_paid: true,
            free_quantity: 0,
            conflicting_addon_names: [],
          },
        ],
        no_of_email_accounts: "-1",
      },
      isPopular: false,
    },
    {
      pid: 26,
      gid: 6,
      type: "hostingaccount",
      name: "Superior Lite",
      description: "1280",
      module: "wordpresshostingusa",
      paytype: "recurring",
      pricing: {
        IDR: {
          prefix: "Rp.",
          suffix: "",
          msetupfee: "0.00",
          qsetupfee: "0.00",
          ssetupfee: "0.00",
          asetupfee: "0.00",
          bsetupfee: "0.00",
          tsetupfee: "0.00",
          monthly: "161820.00",
          quarterly: "458460.00",
          semiannually: "862920.00",
          annually: "1293840.00",
          biennially: "2501280.00",
          triennially: "3622320.00",
        },
      },
      promo: {
        value: "0",
      },
      feature: {
        space: "40960",
        cores: "6",
        websites: "3",
        plan_status: "Active",
        plan_name: "Business Lite",
        isOldPlan: false,
        ram: "6144",
        hosting_type: "wordpresshostingusa",
        isSSDPlan: false,
        addons: [
          {
            addon_name: "ipaddress",
            is_paid: true,
            free_quantity: 0,
            conflicting_addon_names: [],
          },
          {
            addon_name: "ram_1",
            is_paid: true,
            quantity: "1024",
            free_quantity: 0,
            conflicting_addon_names: [],
          },
          {
            addon_name: "cpu_1",
            is_paid: true,
            quantity: "1",
            free_quantity: 0,
            conflicting_addon_names: [],
          },
        ],
        no_of_email_accounts: "-1",
      },
      isPopular: false,
    },
  ],
};

// Fallback data untuk domain carousel
const fallbackCarouselData = {
  data: [
    {
      ext: "com",
      price: 199000,
      register: [199000, 199000],
      image: "/domain/com.svg",
      alt: "Domain .com",
      width: 40,
      height: 40,
    },
    {
      ext: "id",
      price: 159000,
      register: [159000, 159000],
      image: "/domain/idlogo.svg",
      alt: "Domain .id",
      width: 40,
      height: 40,
    },
    {
      ext: "co.id",
      price: 299000,
      register: [299000, 299000],
      image: "/domain/coid.svg",
      alt: "Domain .co.id",
      width: 40,
      height: 40,
    },
  ],
};

// Fallback data untuk domain pricing
const fallbackPricingData = {
  data: {
    com: { register: [199000, 199000], price: 199000 },
    id: { register: [159000, 159000], price: 159000 },
    "co.id": { register: [299000, 299000], price: 299000 },
    net: { register: [249000, 249000], price: 249000 },
    org: { register: [199000, 199000], price: 199000 },
  },
};

// URL API yang tetap - gunakan production URL untuk menghindari masalah
const DEV_URL = "http://localhost:3000";
// const DEV_URL = "production2.rumahhost.com"; // Ganti dengan URL yang sesuai untuk development

const products = async () => {
  try {
    const response = await fetch(`${DEV_URL}/api/products/minion-hosting`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        whmcs: { gid: 11, action: "GetProducts" },
        whm: { url: "https://rumahhost.com:2087/json-api/getpkginfo?" },
      }),
      cache: "no-store",
    });

    // Tampilkan status response HTTP
    console.log("Response status:", response.status);

    // Ambil response sebagai text dulu
    const text = await response.text();
    // console.log("Response text (mentah):", text);

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      return fallbackProducts;
    }

    // Cek apakah response text adalah JSON valid
    if (!text || text.trim() === "") return fallbackProducts;

    // Jika responsenya adalah HTML (biasanya error page), tampilkan warning
    if (text.includes("<!DOCTYPE html>") || text.includes("<html>")) {
      // console.error("Received HTML instead of JSON");
      return fallbackProducts;
    }

    try {
      // Parse JSON dari response
      const data = JSON.parse(text);
      // console.log("Parsed JSON data:", data);
      return data;
    } catch (parseError) {
      console.error("Gagal parsing JSON dari response:", parseError);
      return fallbackProducts;
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return fallbackProducts;
  }
};

const carouselDomain = async () => {
  try {
    const response = await fetch(
      `${DEV_URL}/api/domains/get-carousel-pricing`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      return fallbackCarouselData;
    }

    const text = await response.text();
    if (!text || text.trim() === "") return fallbackCarouselData;

    // Check for HTML content
    if (text.includes("<!DOCTYPE html>") || text.includes("<html>")) {
      console.error("Received HTML instead of JSON for carousel data");
      return fallbackCarouselData;
    }

    try {
      const data = JSON.parse(text);

      if (!data) return fallbackCarouselData;

      if (Array.isArray(data)) {
        return { data };
      }

      if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
        data.data = fallbackCarouselData.data;
      }

      return data;
    } catch (parseError) {
      console.error("Gagal parsing JSON dari carouselDomain():", parseError);
      return fallbackCarouselData;
    }
  } catch (error) {
    console.error("Error fetching carouselDomain:", error);
    return fallbackCarouselData;
  }
};

const domainPricing = async () => {
  try {
    const response = await fetch(`${DEV_URL}/api/domains/get-tld-pricing`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      return fallbackPricingData;
    }

    const text = await response.text();
    if (!text || text.trim() === "") return fallbackPricingData;

    // Check for HTML content
    if (text.includes("<!DOCTYPE html>") || text.includes("<html>")) {
      console.error("Received HTML instead of JSON for pricing data");
      return fallbackPricingData;
    }

    try {
      const data = JSON.parse(text);

      if (!data) return fallbackPricingData;

      if (typeof data === "object" && !data.data) {
        const keys = Object.keys(data);
        if (keys.length > 0 && typeof data[keys[0]] === "object") {
          return { data };
        }

        return fallbackPricingData;
      }

      if (
        data.data &&
        typeof data.data === "object" &&
        Object.keys(data.data).length === 0
      ) {
        data.data = fallbackPricingData.data;
      }

      return data;
    } catch (parseError) {
      console.error("Gagal parsing JSON dari domainPricing():", parseError);
      return fallbackPricingData;
    }
  } catch (error) {
    console.error("Error fetching domainPricing:", error);
    return fallbackPricingData;
  }
};

export const dynamic = "force-dynamic";

async function Hosting() {
  try {
    // Ambil semua data dengan Promise.all
    const [datasResult, carouselDataResult, domainPricingDataResult] =
      await Promise.all([products(), carouselDomain(), domainPricing()]);

    // Validasi data produk
    let productsData = datasResult || fallbackProducts;

    // Pastikan struktur pricing lengkap untuk semua produk
    if (productsData && Array.isArray(productsData)) {
      productsData = productsData.map((product) => {
        if (!product.pricing) {
          product.pricing = { IDR: {} };
        }
        if (!product.pricing.IDR) {
          product.pricing.IDR = {};
        }

        const idr = product.pricing.IDR;

        idr.monthly = idr.monthly ? parseFloat(idr.monthly) : 0;
        idr.annually = idr.annually
          ? parseFloat(idr.annually)
          : idr.monthly * 12 || 0;
        idr.biennially = idr.biennially
          ? parseFloat(idr.biennially)
          : idr.annually * 2;
        idr.triennially = idr.triennially
          ? parseFloat(idr.triennially)
          : idr.annually * 3;

        // Update kembali ke product.pricing.IDR
        product.pricing.IDR = idr;

        return product;
      });
    }

    // Validasi data carousel dan pricing
    const carouselData = carouselDataResult || fallbackCarouselData;
    const domainPricingData = domainPricingDataResult || fallbackPricingData;

    return (
      <main>
        {/* Hero */}
        <section id="hero" className="bg-minion">
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
                  Solusi Premium untuk Bisnis Pemula dengan Harga yang
                  Terjangkau
                </h1>
                <h3 className="text-base">
                  Didesain dengan fitur-fitur unggulan, server kami memberikan
                  performa premium dengan harga yang sangat terjangkau.
                  Percayakan bisnis Anda pada Minion Hosting dan saksikan
                  bagaimana situs Anda berkembang dengan cepat dan efisien.
                </h3>
                <Link
                  href="#pricing"
                  className="w-fit rounded-lg border border-white bg-transparent px-12 py-3 text-xs font-semibold capitalize text-transparent text-white hover:border-[#f14d2e] hover:bg-[#f14d2e] lg:text-base"
                >
                  mulai sekarang
                </Link>
              </div>
              <div className="relative hidden items-center justify-center lg:flex">
                <Image
                  src={Artboard}
                  alt=""
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

        <SearchDomain
          carouselData={carouselData}
          pricingData={domainPricingData}
        />

        <section className="mt-8 flex flex-col gap-6" id="pricing">
          <div className="container flex flex-col items-center">
            <div className="max-w-3xl text-center">
              <h3 className="mb-4 font-ubuntu text-3xl font-bold lg:text-[40px] lg:leading-tight">
                Paket Profesional Dengan Harga Ekonomis
              </h3>
              <p className="text-base">
                Pilih paket anda sekarang. Dapatkan performa terbaik dengan
                manage WordPress hosting kami.
              </p>
            </div>
          </div>
          <div className="container flex justify-center">
            <CardProductHosting datas={productsData} />
          </div>
        </section>

        <section
          id="features"
          className="relative my-6 flex flex-col gap-8 pb-5 pt-8 lg:pt-16"
        >
          <div className="container z-[1] flex flex-col gap-8 px-10">
            <div className="flex flex-col items-center gap-3 text-center">
              <h3 className="font-ubuntu text-[28px] font-bold leading-7 lg:text-4xl lg:leading-tight">
                Fitur Lengkap
              </h3>
              <p className="text-sm md:text-base">
                RumahHost hadir dengan resource terdedikasi dan dukungan tim
                profesional. Nikmati kemudahan pengelolaan dengan performa
                optimal!
              </p>
            </div>
          </div>

          <div className="container z-[1] flex flex-col gap-6 px-10">
            <div className="flex flex-col items-center justify-between gap-4 xl:flex-row">
              <div className="h-60 min-h-60 items-center justify-center lg:flex">
                <Image
                  src={Advert}
                  alt="Advert"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <CardProductHostingCTA datas={productsData} />
            </div>
            <TableFeature datas={productsData} />
          </div>
          <Image
            src={ArtboardMountain}
            alt=""
            className="absolute left-0 right-0 top-0 z-0 w-full"
          />
        </section>

        <FeatureHosting title={"Minion Hosting"} />

        <FaqHostingMurah />

        {/* Commitments */}
        <Commitments isBackgroundWhite={true} />

        <section className="mt-5 flex flex-col gap-8 md:mt-10 lg:mt-20">
          <div className="container flex flex-col items-center gap-2">
            <h3 className="text-3xl font-semibold md:text-[40px]">
              Dipercaya Ribuan Klien
            </h3>
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

          <div className="container rounded-xl bg-transparent py-3">
            <div
              className={`bg-umkm relative z-[-1] grid grid-cols-1 gap-4 rounded-xl px-4 py-4 lg:h-[272px]  lg:grid-cols-3 lg:px-6`}
            >
              <div className="flex flex-col items-center gap-4 text-center lg:col-span-2 lg:items-start lg:justify-between lg:py-10 lg:pl-9 lg:text-left">
                <div className="flex flex-col gap-2 pt-5 text-center lg:pt-0 lg:text-left">
                  <h3 className="text-3xl font-semibold text-white lg:text-[40px]">
                    Bikin Website UMKM
                  </h3>
                  <p className="text-base text-white lg:mt-3 lg:w-[80%] lg:text-lg">
                    Layanan pembuatan website impian untuk para pelaku bisnis,
                    UMKM serta Perusahaan. harga murah hasil terbaik. kami
                    membantu anda Go Online Sekarang
                  </p>
                </div>
                <button className="hover:custom-shadow flex items-center justify-center rounded-lg border border-none bg-primary px-3 py-2 text-sm font-semibold text-white  hover:bg-[#ff7d2aba] lg:text-base">
                  Mulai Sekarang
                </button>
              </div>
              <div className="relative mx-auto -mb-20 h-[300px] w-[300px] lg:absolute lg:bottom-0 lg:right-0 lg:-mb-[96px] lg:aspect-square lg:h-[431px] lg:w-[431px] lg:translate-x-6">
                <Image
                  src={ArtboardUMKM}
                  alt="Artboard UMKM"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "bottom center",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error("Error in Hosting page:", error);
    return (
      <main className="container py-10 text-center">
        <h2 className="mb-4 text-2xl font-bold text-red-600">
          Terjadi Kesalahan
        </h2>
        <p>Data gagal dimuat. Silakan coba lagi nanti.</p>
        {process.env.NODE_ENV !== "production" && (
          <div className="mx-auto mt-4 max-w-2xl rounded-md bg-gray-100 p-4 text-left">
            <p className="font-bold">
              Detail Error (hanya tampil di development):
            </p>
            <pre className="mt-2 overflow-auto text-xs">{error.toString()}</pre>
          </div>
        )}
      </main>
    );
  }
}

export default Hosting;
