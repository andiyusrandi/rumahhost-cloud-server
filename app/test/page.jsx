"use client";

import SliderSearchDomain from "@/components/Carousel/SliderSearchDomain";

const suggestDomains = [
  {
    name: "akramfirmansyah.com",
    register: [0, 10000],
  },
  {
    name: "akramfirmansdasyah.com",
    register: [0, 10000],
  },
  {
    name: "akramfirmanfadasdasyah.com",
    register: [0, 10000],
  },
  {
    name: "akramfirmfasfafdaansyah.com",
    register: [0, 10000],
  },
  {
    name: "akramfirfdsfgsgmansyah.com",
    register: [0, 10000],
  },
  {
    name: "akramfirmgdfhfhansyah.com",
    register: [0, 10000],
  },
  {
    name: "hfghfh.com",
    register: [0, 10000],
  },
  {
    name: "hgfhgf.com",
    register: [0, 10000],
  },
  {
    name: "fsfsdtgr.com",
    register: [0, 10000],
  },
  {
    name: "gsdgdsfs.com",
    register: [0, 10000],
  },
  {
    name: "dsgsgv.com",
    register: [0, 10000],
  },
  {
    name: "daddadas.com",
    register: [0, 10000],
  },
  {
    name: "rqwrwq.com",
    register: [0, 10000],
  },
  {
    name: "vczcdas.com",
    register: [0, 10000],
  },
  {
    name: "dasdaw.com",
    register: [0, 10000],
  },
  {
    name: "sadqaewqe.com",
    register: [0, 10000],
  },
  {
    name: "dadasda.com",
    register: [0, 10000],
  },
  {
    name: "czczcae.com",
    register: [0, 10000],
  },
  {
    name: "sdadwqeq.com",
    register: [0, 10000],
  },
];

export default function Home() {
  return (
    <section className="relative z-[1] mt-40">
      <div className="container">
        {/* <div className="w-full py-8">
          <CarouselMain
            isShowNavigator={false}
            isShowDots={true}
            autoPlay={true}
          >
            {cloudHostingSSDSliderData.map((data, index) => (
              <div
                key={index}
                className={`flex flex-shrink-0 flex-grow basis-full flex-col items-center rounded-lg p-4 md:basis-[calc(50%-0.5rem)] ${data.isPopular ? "bg-primary" : "bg-white"}`}
              >
                <h5
                  className={`mb-2 text-center text-xl font-bold uppercase ${data.isPopular ? "text-white" : "text-black"}`}
                >
                  {data.title}
                </h5>
                <div className="mb-2 flex w-full flex-col items-center gap-2">
                  <p
                    className={`text-sm font-semibold ${data.isPopular ? "text-white" : "text-primary"}`}
                  >
                    Rp.
                    <span className="text-lg font-bold">
                      {numeral(data.priceDiscount).format("0,0")}
                    </span>
                    <span className="text-xs text-[#B5B5C3]"> / bulan</span>
                  </p>
                  <p
                    className={`font-semibold line-through ${data.isPopular ? "text-white" : "text-[#B5B5C3]"}`}
                  >
                    Rp.{numeral(data.price).format("0,0.00")}
                  </p>
                  <p
                    className={`block w-fit rounded px-2 py-1 text-sm font-semibold ${data.isPopular ? "bg-white text-primary" : "bg-primary text-white"}`}
                  >
                    Promo - Hemat {data.savingPercentage}%
                  </p>
                </div>
                <div className="mb-6 w-full">
                  {data.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex w-full items-center justify-between p-2 text-sm font-medium uppercase ${data.isPopular ? "text-white" : "text-[#5E6278]"}`}
                    >
                      <p>{feature}</p>
                      <div
                        className={`rounded-full text-lg ${data.isPopular ? "bg-white/30 text-white" : "bg-primary/30 text-primary"}`}
                      >
                        <Icon icon="mdi:done" />
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href={data.url}
                  className={`rounded-lg p-3 text-sm font-semibold capitalize ${data.isPopular ? "bg-white text-primary" : "bg-primary text-white"}`}
                >
                  Order Sekarang
                </a>
              </div>
            ))}
          </CarouselMain>
        </div> */}

        {/* Start */}
        {suggestDomains.length > 0 && (
          <div className="mt-5 w-full overflow-hidden rounded-md font-ubuntu shadow-lg">
            <div className="bg-primary p-4">
              <h1 className="text-center text-lg font-semibold text-white md:text-left md:text-xl xl:text-2xl">
                Rekomendai Domain Lainnya
              </h1>
            </div>
            <SliderSearchDomain datas={suggestDomains} />
          </div>
        )}
        {/* End */}
      </div>
    </section>
  );
}
