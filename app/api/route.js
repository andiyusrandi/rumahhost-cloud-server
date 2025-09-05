// app/api/index.js atau app/api/route.js

import axios from "axios";
import { arrayToQueryString } from "@/utils/query-string";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const queryString = arrayToQueryString(body); // include action + domain
    console.log("Generated URL:", queryString);

    const response = await axios.get(queryString); // Use GET if API requires query string
    const data = response.data;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("API ERROR", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
