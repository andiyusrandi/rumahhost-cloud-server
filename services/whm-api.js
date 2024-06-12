export function whmQueryString(params, method) {
    const searchParams = new URLSearchParams();
    
    let whm = {
        'api.version': process.env.WHM_API_VERSION,
    };
  
    whm = { ...whm, ...params };
  
    for (const key in whm) {
      if (Object.prototype.hasOwnProperty.call(whm, key)) {
        searchParams.append(key, whm[key].toString());
      }
    }
  
    return (
      `https://rumahhost.com:2087/json-api/${method}?${searchParams.toString()}`
    );
  }
  