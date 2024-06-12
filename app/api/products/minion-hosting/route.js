import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { whmcsQueryString } from "@/services/whmcs-api";
import { whmQueryString } from "@/services/whm-api";

export async function POST(req) {
  try {
    const body = await req.json();
    const whmcs = body.whmcs
    const whm = body.whm

    const queryString = whmcsQueryString(whmcs);
    const response = await axios.post(queryString);

    const queryStringPromo = whmcsQueryString({ action: 'GetPromotions' })
    const promoRespone = await axios.post(queryStringPromo)
    const promoResult = promoRespone.data
    const promoData = promoResult.promotions.promotion

    const data = response.data;
    const products = data.products.product.filter((data) => {return data.pid != 65})
    const productWithAdditionalData = await Promise.all(products.map(async (product) => {
      const queryStringWhm = whmQueryString({pkg: `rumahhos_${product.name}`}, 'getpkginfo')
      const whmResponse = await axios.get(
        queryStringWhm,
        {
          headers: {
            'Authorization': `whm ${process.env.WHM_USERNAME}:${process.env.WHM_API_TOKEN}`
          }
        }
      )
      const whmResponseData = await whmResponse.data
      const productFeature = whmResponseData.data.pkg

      let promos = {};
      promoData.map((promo) => {
        const applicablePromo = promo.appliesto.split(',')

        if (applicablePromo.includes(product.pid.toString())) {
          promos = promo
        }

        return {};
      })

      return {
        ...product,
        ...{isPopular: product.name !== "Hosting Exanior" ? false : true},
        ...{subtitle: product.name !== "Hosting Junior" ? "Best Settings for Bussiness" : "Best Settings for Startups"},
        ...{feature: productFeature},
        ...{promo: promos}
      }
    }))
    
    return NextResponse.json(productWithAdditionalData, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
