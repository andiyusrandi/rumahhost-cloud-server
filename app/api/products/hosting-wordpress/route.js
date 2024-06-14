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

    const data = response.data;
    const products = data.products.product
    const productWithAdditionalData = await Promise.all(products.map(async (product) => {
      let productName = product.name
      if (productName.includes('WORDPRESS')) productName = productName.replace('WORDPRESS ', '')
      let formattedProductName = productName.charAt(0).toUpperCase() + productName.slice(1).toLowerCase();
      if (formattedProductName === 'Personal') formattedProductName = 'Wordpress-Personal'
      if (formattedProductName === 'Enterprise') formattedProductName = 'Wordpress-Enterprice'
      if (formattedProductName === 'Small team') formattedProductName = 'Wordpress Small'

      const queryStringWhm = whmQueryString({pkg: `rumahhos_${formattedProductName}`}, 'getpkginfo')
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

      return {
        ...product,
        ...{previewName: productName},
        ...{isPopular: product.name !== "SMALL TEAM" ? false : true},
        ...{feature: productFeature}
      }
    }))
    
    return NextResponse.json(productWithAdditionalData, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
