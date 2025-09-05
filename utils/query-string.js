export function arrayToQueryString(params) {
    const searchParams = new URLSearchParams();
    const WHMCS_ACCESS_KEY="pasword!!11QQQ"
    const WHMCS_SECRET_KEY="5t4K6nbYcRyGbd5osjKEEm4S4rlXBC50"
    const WHMCS_IDENTIFIER="5wNxVkyTfpH9JDoOz7nQYJZQYzuD75Sl"
    
    let whmcs = {
      accesskey: WHMCS_ACCESS_KEY,
      identifier: WHMCS_IDENTIFIER,
      secret: WHMCS_SECRET_KEY,
      responsetype: "json",
    };
    // let resellerclub = {
    //   'auth-userid': process.env.RC_ID,
    //   'api-key': process.env.RC_API_KEY
    // }
  
    whmcs = { ...whmcs, ...params };
  
    for (const key in whmcs) {
      if (Object.prototype.hasOwnProperty.call(whmcs, key)) {
        const value = whmcs[key];
        if (value !== undefined && value !== null) {
          searchParams.append(key, value.toString());
        } else {
          // Jika ingin, bisa tambahkan fallback, contoh:
          // searchParams.append(key, "");
          // atau skip parameter jika value undefined/null
        }
      }
    }
    return (
      "https://client.rumahhost.com/includes/api.php?" + searchParams.toString()
      // "https://domaincheck.httpapi.com/api/domains/available.json?" + searchParams.toString()
      // "https://domaincheck.httpapi.com/api/domains/available.json?domain-name=cobaapirc&tlds=com&api-key=NteZotVoOt2sPNnjfc5guyGsUbNS6aSQ&auth-userid=1247332"
    );
  }
  