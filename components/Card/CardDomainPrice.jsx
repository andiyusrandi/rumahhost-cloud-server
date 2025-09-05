// import numeral from "numeral";
// import { SlGlobe } from "react-icons/sl";

// function CardDomainPrice({ extention, datas }) {
//   return (
//     <div className="flex flex-col gap-6 rounded-xl p-5 text-xs">
//       <div className="flex items-center gap-2">
//         <div className="aspect-square rounded-xl bg-[#F3F6F9] p-2 text-[#989898]">
//           <SlGlobe />
//         </div>
//         <h5 className="font-roboto text-xl font-bold">.{extention}</h5>
//       </div>
//       <div className="flex flex-col gap-1 text-center capitalize">
//         <div className="grid grid-cols-2 gap-3">
//           <div className="w-full rounded-md border border-dashed border-[#E4E6EF] p-2">
//             <p className="text-sm font-bold">
//               rp. {numeral(datas.transfer[1]).format("0,0.00")}
//             </p>
//             <span className="font-medium text-[#B5B5C3]">transfer domain</span>
//           </div>
//           <div className="w-full rounded-md border border-dashed border-[#E4E6EF] p-2">
//             <p className="text-sm font-bold">
//               rp. {numeral(datas.renew[1]).format("0,0.00")}
//             </p>
//             <span className="font-medium text-[#B5B5C3]">renewal</span>
//           </div>
//         </div>
//         <div className="flex flex-col gap-1 rounded-md border border-dashed border-[#E4E6EF] p-2">
//           <span
//             className={`text-[#5E6278] line-through ${datas.register[1] === datas.renew[1] ? "text-transparent" : null}`}
//           >
//             rp. {numeral(datas.renew[1]).format("0,0.00")}
//           </span>
//           <p className="rounded bg-primary text-sm font-bold text-white">
//             {datas.register[1]}
//           </p>
//           <span className="font-medium text-[#B5B5C3]">registrasi</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CardDomainPrice;

// import numeral from "numeral";
// import { SlGlobe } from "react-icons/sl";

// function CardDomainPrice({ extention, datas }) {
//   // Pastikan datas adalah object dan memiliki properti "1"
//   const price = typeof datas === 'object' && datas["1"] ? datas["1"] : "0.00";

//   return (
//     <div className="flex flex-col gap-6 rounded-xl p-5 text-xs">
//       <div className="flex items-center gap-2">
//         <div className="aspect-square rounded-xl bg-[#F3F6F9] p-2 text-[#989898]">
//           <SlGlobe />
//         </div>
//         <h5 className="font-roboto text-xl font-bold">.{extention}</h5>
//       </div>
//       <div className="flex flex-col gap-1 text-center capitalize">
//         <div className="flex flex-col gap-1 rounded-md border border-dashed border-[#E4E6EF] p-2">
//           <p className="rounded bg-primary text-sm font-bold text-white">
//             Rp. {numeral(price).format("0,0.00")}
//           </p>
//           <span className="font-medium text-[#B5B5C3]">registrasi</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CardDomainPrice;

import numeral from "numeral";
import { SlGlobe } from "react-icons/sl";

function CardDomainPrice({ extention, datas }) {
  // Validasi data
  if (!datas || typeof datas !== 'object') {
    console.error(`Invalid data for domain ${extention}:`, datas);
    return null;
  }
  
  // Pastikan objek register, transfer, renew ada
  const register = datas.register || {};
  const transfer = datas.transfer || {};
  const renew = datas.renew || {};
  
  // Ambil harga untuk periode 1 tahun (key "1") dengan fallback
  const registerPrice = register["1"] || "0.00";
  const transferPrice = transfer["1"] || "0.00";
  const renewPrice = renew["1"] || "0.00";

  // Format harga dengan numeral
  const formatPrice = (price) => numeral(price).format("0,0.00");

  return (
    <div className="flex flex-col gap-6 rounded-xl p-5 text-xs shadow-sm border border-gray-100">
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
              Rp. {formatPrice(transferPrice)}
            </p>
            <span className="font-medium text-[#B5B5C3]">transfer</span>
          </div>
          <div className="w-full rounded-md border border-dashed border-[#E4E6EF] p-2">
            <p className="text-sm font-bold">
              Rp. {formatPrice(renewPrice)}
            </p>
            <span className="font-medium text-[#B5B5C3]">renewal</span>
          </div>
        </div>
        <div className="flex flex-col gap-1 rounded-md border border-dashed border-[#E4E6EF] p-2 mt-2">
          <span
            className={`text-[#5E6278] line-through ${registerPrice === renewPrice ? "text-transparent" : ""}`}
          >
            Rp. {formatPrice(renewPrice)}
          </span>
          <p className="rounded bg-primary text-sm font-bold text-white p-1">
            Rp. {formatPrice(registerPrice)}
          </p>
          <span className="font-medium text-[#B5B5C3]">registrasi</span>
        </div>
      </div>
    </div>
  );
}

export default CardDomainPrice;