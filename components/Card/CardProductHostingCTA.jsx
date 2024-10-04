import numeral from "numeral";
import ButtonServer from "@/components/Button/ButtonServer";
import ButtonAction from "@/components/Button/ButtonAction";
import CarouselMain from "../Carousel/CarouselMain";
import Link from "next/link";

function CardProductHostingCTA({ datas }) {
  return (
    <>
      <div className="w-full md:hidden">
        <CarouselMain
          isShowDots={true}
          isShowNavigator={false}
          autoPlay={false}
        >
          {datas.map((data, index) => (
            <div key={index} className={`flex h-full flex-shrink-0 flex-grow basis-full flex-col gap-6 rounded-lg border ${data.isPopular ? "text-white border-white bg-primary" : "text-primary border-primary"} px-6 py-4 text-sm md:basis-[calc(50%-0.5rem)]`}>
              <div className="flex flex-col items-center gap-4">
                 <h3 className={`text-xl font-bold ${data.isPopular ? "text-xl font-bold" : "text-black text-xl font-bold"}`}>{data.name}</h3>
                <p className="font-bold">
                  Rp.{" "}
                  <span className={`font-roboto text-3xl lg:text-4xl`}>
                    {numeral(parseInt(data.pricing.IDR.annually) - (parseInt(data.pricing.IDR.annually) * (parseInt(data.promo.value) / 100))).format("0,0")}
                  </span>
                  <span className={`font-normal text-black ${data.isPopular ? "text-white" : "text-[#5E6278]}"}`}>/ tahun</span>
                </p>
              </div>
              <ButtonServer isPrimary={data.isPopular ? true : false}>Server Indonesia</ButtonServer>
              {/* <ButtonAction isPrimary={data.isPopular ? true : false}>Order sekarang</ButtonAction> */}
              <Link
                href={`https://client.rumahhost.com/cart.php?a=add&pid=${data.pid}&billingcycle=annually&promocode=${data.promo.code}`}
                className={`flex-1 rounded-lg border p-[10px] text-sm font-semibold md:text-base ${data.isPopular ? "border-white text-white" : "border-primary text-primary"}`}
              >
                Order Sekarang
              </Link>
            </div>
          ))}
        </CarouselMain>
      </div>
      <div className={`hidden grid-cols-${datas.length} gap-3 md:grid`}>
        {datas.map((data, index) => (
          <div key={index} className={`flex h-full flex-col gap-6 rounded-lg border px-6 py-4 text-sm ${data.isPopular ? "text-white border-white bg-primary" : "text-primary border-primary"}`}>
            <div className="flex flex-col items-center gap-4">
              <h3 className={`text-xl font-bold ${data.isPopular ? "text-xl font-bold" : "text-black text-xl font-bold"}`}>{data.name}</h3>
              <p className="font-bold">
                Rp.{" "}
                <span className={`font-roboto text-3xl lg:text-4xl ${data.isPopular ? "font-roboto text-3xl lg:text-4xl" : "font-roboto text-3xl lg:text-4xl"}`}>
                  {numeral(parseInt(data.pricing.IDR.annually) - (parseInt(data.pricing.IDR.annually) * (parseInt(data.promo.value) / 100))).format("0,0")}
                </span>
                <span className={`font-normal text-black ${data.isPopular ? "text-white" : "text-[#5E6278]}"}`}>/ tahun</span>
              </p>
            </div>
            <ButtonServer isPrimary={data.isPopular ? true : false}>Server Indonesia</ButtonServer>
            {/* <ButtonAction isPrimary={data.isPopular ? true : false}>Order sekarang</ButtonAction> */}
            <Link
              href={`https://client.rumahhost.com/cart.php?a=add&pid=${data.pid}&billingcycle=annually&promocode=${data.promo.code}`}
              className={`flex rounded-lg border p-[10px] text-sm font-semibold md:text-base ${data.isPopular ? "border-white text-white" : "border-primary text-primary"}`}
            >
              Order Sekarang
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardProductHostingCTA;
