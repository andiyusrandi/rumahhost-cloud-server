import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { resellerClubQueryString } from "@/services/resellerclub-api";

export async function POST(req) {
  try {
    const body = await req.json();
    const url = "https://domaincheck.httpapi.com/api/domains/available.json?"

    const queryString = resellerClubQueryString(url, body);

    const response = await axios.get(queryString);
    const data = response.data;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}