import axios from "axios";
import { arrayToQueryString } from "@/utils/query-string";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const queryString = arrayToQueryString(body);

    const response = await axios.post(queryString);
    // const response = await axios.get(queryString);
    const data = response.data;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
