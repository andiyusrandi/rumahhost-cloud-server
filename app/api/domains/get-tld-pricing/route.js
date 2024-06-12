import axios from "axios";
import { whmcsQueryString } from "@/services/whmcs-api";
import { NextRequest, NextResponse } from "next/server";

export async function POST() {
  try {
    const queryString = whmcsQueryString({currencyid: 1, action: "GetTLDPricing"});

    const response = await axios.post(queryString);
    const data = response.data;
    const pricing = data.pricing;

    return NextResponse.json(pricing, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
