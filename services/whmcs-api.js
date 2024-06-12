export function whmcsQueryString(params) {
    const searchParams = new URLSearchParams();
    
    let whmcs = {
      accesskey: process.env.WHMCS_ACCESS_KEY,
      identifier: process.env.WHMCS_IDENTIFIER,
      secret: process.env.WHMCS_SECRET_KEY,
      responsetype: "json",
    };
  
    whmcs = { ...whmcs, ...params };
  
    for (const key in whmcs) {
      if (Object.prototype.hasOwnProperty.call(whmcs, key)) {
        searchParams.append(key, whmcs[key].toString());
      }
    }
  
    return (
      "https://client.rumahhost.com/includes/api.php?" + searchParams.toString()
    );
  }
  