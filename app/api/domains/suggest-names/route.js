// import axios from "axios";
// import { NextRequest, NextResponse } from "next/server";
// import { resellerClubQueryString } from "@/services/resellerclub-api";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const url = "https://httpapi.com/api/domains/v5/suggest-names.json?"

//     const queryString = resellerClubQueryString(url, body);

//     const response = await axios.get(queryString);
//     const data = response.data;

//     return NextResponse.json(data, { status: 200 });
//   } catch (error) {
//     console.log(error);
//   }
// }

import axios from "axios";
import { NextResponse } from "next/server";
import { resellerClubQueryString } from "@/services/resellerclub-api";

export async function POST(req) {
  try {
    // Ambil isi body dari request
    const body = await req.json();

    // Base URL dari ResellerClub API
    const url = "https://httpapi.com/api/domains/v5/suggest-names.json?";

    // Buat query string lengkap menggunakan helper
    const queryString = resellerClubQueryString(url, body);

    // Request ke ResellerClub
    const response = await axios.get(queryString);

    const data = response.data;

    // Respon ke client
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    // Jika error dari response server ResellerClub
    if (error.response) {
      console.error("ResellerClub Response Error:", {
        status: error.response.status,
        data: error.response.data,
      });

      return NextResponse.json(
        {
          error: "ResellerClub API Error",
          status: error.response.status,
          detail: error.response.data,
        },
        { status: 500 }
      );
    }

    // Error lain seperti koneksi gagal atau invalid JSON
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
