import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { whmcsQueryString } from "@/services/whmcs-api";
import { whmQueryString } from "@/services/whm-api";

export async function POST(req) {
  try {
    const body = await req.json();
    const whmcs = body.whmcs;
    const whm = body.whm;

    const queryString = whmcsQueryString(whmcs);
    const response = await axios.post(queryString);

    const queryStringPromo = whmcsQueryString({ action: "GetPromotions" });
    const promoRespone = await axios.post(queryStringPromo);
    const promoResult = promoRespone.data;
    const promoData = promoResult.promotions.promotion;

    const data = response.data;
    const products = data.products.product.filter((data) => {
      if (data.name.toLowerCase().indexOf("cpanel") === -1) {
        return data;
      }
    });

    const WHM_USERNAME = "rumahhos";
    const WHM_API_TOKEN = "TNP1CNGDQ1V57NHNJD1ZY917QKPA0MVY";

    const productWithAdditionalData = await Promise.all(
      products.map(async (product) => {
        const productNameArray = product.name.split(" ");
        let productName = `${productNameArray[1]}-${productNameArray[0]}-${productNameArray[2]}`;
        if (product.name === "Cloud SSD Starter")
          productName = `${productNameArray[0]}-${productNameArray[1]}-${productNameArray[2]}`;

        const queryStringWhm = whmQueryString(
          { pkg: `rumahhos_${productName}` },
          "getpkginfo",
        );
        const whmResponse = await axios.get(queryStringWhm, {
          headers: {
            Authorization: `whm ${WHM_USERNAME}:${WHM_API_TOKEN}`,
          },
        });

        const whmResponseData = await whmResponse.data;
        const productFeature = whmResponseData.data.pkg;

        let promos = {};
        promoData.map((promo) => {
          const applicablePromo = promo.appliesto.split(",");

          if (applicablePromo.includes(product.pid.toString())) {
            promos = promo;
          }

          return {};
        });

        return {
          ...product,
          ...{ previewName: productNameArray[2] },
          ...{
            isPopular:
              product.name !== "Cloud SSD Starter" &&
              product.name !== "Cloud SSD Business"
                ? true
                : false,
          },
          ...{ feature: productFeature },
          ...{ promo: promos },
        };
      }),
    );

    return NextResponse.json(productWithAdditionalData, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
