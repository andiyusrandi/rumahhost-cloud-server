export function resellerClubQueryString(url, params) {
    const searchParams = new URLSearchParams();

    const RC_ID=1247332
    const RC_API_KEY="NteZotVoOt2sPNnjfc5guyGsUbNS6aSQ"
    
    let query = {
      'auth-userid': RC_ID,
      'api-key': RC_API_KEY
    }
  
    query = { ...query, ...params };
  
    for (const key in query) {
      if (Object.prototype.hasOwnProperty.call(query, key)) {
        searchParams.append(key, query[key].toString());
      }
    }
  
    return (
      url + searchParams.toString()
    );
  }
  