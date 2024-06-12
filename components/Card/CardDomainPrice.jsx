import numeral from "numeral";
import { SlGlobe } from "react-icons/sl";

function CardDomainPrice({ extention, datas }) {
  return (
    <div className="flex flex-col gap-6 rounded-xl p-5 text-xs">
      <div className="flex items-center gap-2">
        <div className="aspect-square rounded-xl bg-[#F3F6F9] p-2 text-[#989898]">
          <SlGlobe />
        </div>
        <h5 className="font-roboto text-xl font-bold">.{extention}</h5>
      </div>
      <div className="flex flex-col gap-1 text-center capitalize">
        <div className="grid grid-cols-2 gap-3">
          <div className="w-full rounded-md border border-dashed border-[#E4E6EF] p-2">
            <p className="text-sm font-bold">
              rp. {numeral(datas.transfer[1]).format("0,0.00")}
            </p>
            <span className="font-medium text-[#B5B5C3]">transfer domain</span>
          </div>
          <div className="w-full rounded-md border border-dashed border-[#E4E6EF] p-2">
            <p className="text-sm font-bold">
              rp. {numeral(datas.renew[1]).format("0,0.00")}
            </p>
            <span className="font-medium text-[#B5B5C3]">renewal</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 rounded-md border border-dashed border-[#E4E6EF] p-2">
          <span
            className={`text-[#5E6278] line-through ${datas.register[1] === datas.renew[1] ? "text-transparent" : null}`}
          >
            rp. {numeral(datas.renew[1]).format("0,0.00")}
          </span>
          <p className="rounded bg-primary text-sm font-bold text-white">
            {datas.register[1]}
          </p>
          <span className="font-medium text-[#B5B5C3]">registrasi</span>
        </div>
      </div>
    </div>
  );
}

export default CardDomainPrice;
