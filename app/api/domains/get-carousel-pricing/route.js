// import axios from "axios";
// import { NextRequest, NextResponse } from "next/server";
// import { whmcsQueryString } from "@/services/whmcs-api";
// import coid from "@/public/domain/coid.svg";
// import com from "@/public/domain/com.svg";
// import idlogo from "@/public/domain/idlogo.svg";
// import myid from "@/public/domain/myid.svg";
// import net from "@/public/domain/net.svg";
// import xylogo from "@/public/domain/xylogo.svg";

// export async function POST(req) {
//   try {
//     const queryString = whmcsQueryString({currencyid: 1, action: "GetTLDPricing"});
//     const response = await axios.post(queryString);
//     const data = response.data;
//     const pricing = data.pricing;
    
//     const carouselData = [
//       { image: myid, alt: "myid", price: pricing['my.id'].register[1], ext: 'my.id' },
//       { image: xylogo, alt: "xyz", price: pricing.xyz.register[1], ext: 'xyz' },
//       { image: net, alt: "net", price: pricing.net.register[1], ext: 'net' },
//       { image: com, alt: "com", price: pricing.com.register[1], ext: 'com' },
//       { image: idlogo, alt: "idlogo", price: pricing.id.register[1], ext: 'id' },
//       { image: coid, alt: "coid", price: pricing['co.id'].register[1], ext: 'co.id' },
//     ]
    
//     return NextResponse.json(carouselData, { status: 200 });
//   } catch (error) {
//     console.log(error);
//   }
// }

import axios from "axios";
import { NextResponse } from "next/server";
import { whmcsQueryString } from "@/services/whmcs-api";
import coid from "@/public/domain/coid.svg";
import com from "@/public/domain/com.svg";
import idlogo from "@/public/domain/idlogo.svg";
import myid from "@/public/domain/myid.svg";
import net from "@/public/domain/net.svg";
import xylogo from "@/public/domain/xylogo.svg";

export async function POST() {
  try {
    const queryString = whmcsQueryString({
      currencyid: 1,
      action: "GetTLDPricing",
      responsetype: "json",
    });

    const response = await axios.post(queryString);

    // WHMCS bisa return result: error meskipun status 200
    const data = response.data;

    if (data.result !== "success") {
      console.error("WHMCS Error Response:", data);
      return NextResponse.json(
        { error: "WHMCS Error", detail: data.message || "Unknown error" },
        { status: 400 }
      );
    }

    const pricing = data.pricing;

    const getSafePrice = (obj, key) => obj?.[key]?.register?.[1] ?? 0;

    const carouselData = [
      { image: myid, alt: "myid", price: getSafePrice(pricing, "my.id"), ext: "my.id" },
      { image: xylogo, alt: "xyz", price: getSafePrice(pricing, "xyz"), ext: "xyz" },
      { image: net, alt: "net", price: getSafePrice(pricing, "net"), ext: "net" },
      { image: com, alt: "com", price: getSafePrice(pricing, "com"), ext: "com" },
      { image: idlogo, alt: "id", price: getSafePrice(pricing, "id"), ext: "id" },
      { image: coid, alt: "co.id", price: getSafePrice(pricing, "co.id"), ext: "co.id" },
    ];

    return NextResponse.json(carouselData, { status: 200 });

  } catch (error) {
    if (error.response) {
      // WHMCS balas error status atau invalid token
      console.error("WHMCS Response Error:", {
        status: error.response.status,
        data: error.response.data,
      });

      return NextResponse.json(
        {
          error: "WHMCS API Error",
          status: error.response.status,
          detail: error.response.data?.message || "Invalid API credentials or response",
        },
        { status: 500 }
      );
    }

    console.error("Unhandled Error:", error.message);

    return NextResponse.json(
      {
        error: "Internal Server Error",
        detail: error.message,
      },
      { status: 500 }
    );
  }
}
