export function whmcsQueryString(params) {
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
  