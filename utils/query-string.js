export function arrayToQueryString(params) {
    const searchParams = new URLSearchParams();
    
    let whmcs = {
      accesskey: process.env.WHMCS_ACCESS_KEY,
      identifier: process.env.WHMCS_IDENTIFIER,
      secret: process.env.WHMCS_SECRET_KEY,
      responsetype: "json",
    };
    // let resellerclub = {
    //   'auth-userid': process.env.RC_ID,
    //   'api-key': process.env.RC_API_KEY
    // }
  
    whmcs = { ...whmcs, ...params };
  
    for (const key in whmcs) {
      if (Object.prototype.hasOwnProperty.call(whmcs, key)) {
        searchParams.append(key, whmcs[key].toString());
      }
    }
  
    return (
      "https://client.rumahhost.com/includes/api.php?" + searchParams.toString()
      // "https://domaincheck.httpapi.com/api/domains/available.json?" + searchParams.toString()
      // "https://domaincheck.httpapi.com/api/domains/available.json?domain-name=cobaapirc&tlds=com&api-key=NteZotVoOt2sPNnjfc5guyGsUbNS6aSQ&auth-userid=1247332"
    );
  }
  