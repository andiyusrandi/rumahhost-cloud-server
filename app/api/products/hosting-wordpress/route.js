import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { whmcsQueryString } from "@/services/whmcs-api";
import { whmQueryString } from "@/services/whm-api";
import { resellerClubQueryString } from "@/services/resellerclub-api";

export async function POST(req) {
  try {
    const body = await req.json();
    const whmcs = body.whmcs;

    const queryString = whmcsQueryString(whmcs);
    const response = await axios.post(queryString);

    const data = response.data;
    const products = data.products.product;

    // const productWithAdditionalData = await Promise.all(products.filter(product => product.type !== "hostingaccount").map(async (product) => {
    //   let productName = product.name
    //   if (productName.includes('WORDPRESS')) productName = productName.replace('WORDPRESS ', '')
    //   let formattedProductName = productName.charAt(0).toUpperCase() + productName.slice(1).toLowerCase();
    //   if (formattedProductName === 'Personal') formattedProductName = 'Wordpress-Personal'
    //   if (formattedProductName === 'Enterprise') formattedProductName = 'Wordpress-Enterprice'
    //   if (formattedProductName === 'Small team') formattedProductName = 'Wordpress Small'

    //   const queryStringWhm = whmQueryString({pkg: `rumahhos_${formattedProductName}`}, 'getpkginfo')
    //   const whmResponse = await axios.get(
    //     queryStringWhm,
    //     {
    //       headers: {
    //         'Authorization': `whm ${process.env.WHM_USERNAME}:${process.env.WHM_API_TOKEN}`
    //       }
    //     }
    //   )
    //   const whmResponseData = await whmResponse.data
    //   const productFeature = whmResponseData.data.pkg

    //   return {
    //     ...product,
    //     ...{previewName: productName},
    //     ...{isPopular: product.name !== "SMALL TEAM" ? false : true},
    //     ...{feature: productFeature}
    //   }
    // }))

    const productWithAdditionalData = await Promise.all(
      products.map(async (product) => {
        let productName = product.name;
        if (productName.includes("WORDPRESS"))
          productName = productName.replace("WORDPRESS ", "");

        let formattedProductName =
          productName.charAt(0).toUpperCase() +
          productName.slice(1).toLowerCase();
        if (formattedProductName === "Personal")
          formattedProductName = "Wordpress-Personal";
        if (formattedProductName === "Enterprise")
          formattedProductName = "Wordpress-Enterprice"; // Fixed typo here
        if (formattedProductName === "Small team")
          formattedProductName = "Wordpress Small";

        let productFeature;

        // Only run whmResponse if product.type is 'other'
        // if (product.type === 'other') {
        //   const queryStringWhm = whmQueryString({ pkg: `rumahhos_${formattedProductName}` }, 'getpkginfo');
        //   const whmResponse = await axios.get(queryStringWhm, {
        //     headers: {
        //       'Authorization': `whm ${process.env.WHM_USERNAME}:${process.env.WHM_API_TOKEN}`
        //     }
        //   });

        //   const whmResponseData = await whmResponse.data;
        //   productFeature = whmResponseData.data.pkg;
        // } else {
        const rcUrl = "https://httpapi.com/api/products/plan-details.json?";

        const queryStringRc = resellerClubQueryString(rcUrl, {
          "product-key": "wordpresshostingusa",
        });

        const response = await axios.get(queryStringRc);
        const plans = response.data;
        // const filteredPlans = Object.values(plans.wordpresshostingusa).filter(plan => plan.hosting_type === productDescription);
        const rcId = product.description;
        const filteredPlan = plans.wordpresshostingusa;
        const specificPlan = filteredPlan[rcId];
        // const plan = filteredPlan.filter(plan => plan == rcId)
        // productFeature = { QUOTA: 0 }; // Set default feature for other types
        productFeature = {
          ...specificPlan,
          // "MAXPASSENGERAPPS": "unlimited",
          // "MAXTEAMUSERS": null,
          // "QUOTA": "13000",
          // "MAX_TEAM_USERS": "7",
          // "HASSHELL": 1,
          // "CPMOD": "jupiter",
          // "MAXADDON": null,
          // "BWLIMIT": "1048576",
          // "FRONTPAGE": 0,
          // "MAXLST": null,
          // "MAX_EMAILACCT_QUOTA": "unlimited",
          // "MAXFTP": null,
          // "WP_TOOLKIT_MANDATORY_SET": "0",
          // "MAXPARK": null,
          // "WP_TOOLKIT_VIRTUAL_PATCHES_SUBSCRIPTION_LIMIT": "0",
          // "IP": 0,
          // "MAX_EMAIL_PER_HOUR": "0",
          // "DIGESTAUTH": "n",
          // "MAXPOP": null,
          // "MAXSQL": null,
          // "LANG": "en",
          // "FEATURELIST": "default",
          // "MAX_DEFER_FAIL_PERCENTAGE": "0",
          // "MAXSUB": null,
          // "WP_TOOLKIT_PROVISION_NEW_SITE": "0",
          // "CGI": 1,
          // "_PACKAGE_EXTENSIONS": "wp-toolkit"
        };
        // }

        return {
          ...product,
          previewName: productName,
          isPopular: product.name === "SMALL TEAM", // Simplified condition
          feature: productFeature,
        };
      }),
    );

    return NextResponse.json(productWithAdditionalData, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
