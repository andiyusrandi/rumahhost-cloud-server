import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { whmcsQueryString } from "@/services/whmcs-api";
import coid from "@/public/domain/coid.svg";
import com from "@/public/domain/com.svg";
import idlogo from "@/public/domain/idlogo.svg";
import myid from "@/public/domain/myid.svg";
import net from "@/public/domain/net.svg";
import xylogo from "@/public/domain/xylogo.svg";

export async function POST(req) {
  try {
    const queryString = whmcsQueryString({currencyid: 1, action: "GetTLDPricing"});
    const response = await axios.post(queryString);
    const data = response.data;
    const pricing = data.pricing;
    
    const carouselData = [
      { image: myid, alt: "myid", price: pricing['my.id'].register[1], ext: 'my.id' },
      { image: xylogo, alt: "xyz", price: pricing.xyz.register[1], ext: 'xyz' },
      { image: net, alt: "net", price: pricing.net.register[1], ext: 'net' },
      { image: com, alt: "com", price: pricing.com.register[1], ext: 'com' },
      { image: idlogo, alt: "idlogo", price: pricing.id.register[1], ext: 'id' },
      { image: coid, alt: "coid", price: pricing['co.id'].register[1], ext: 'co.id' },
    ]
    
    return NextResponse.json(carouselData, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
