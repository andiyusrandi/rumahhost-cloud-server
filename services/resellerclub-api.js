export function resellerClubQueryString(url, params) {
    const searchParams = new URLSearchParams();

    let query = {
      'auth-userid': process.env.RC_ID,
      'api-key': process.env.RC_API_KEY
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
  