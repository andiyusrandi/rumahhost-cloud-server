const params = {
    // currencyid: 1,
    // action: "GetTLDPricing"
    tlds: 'net',
    'domain-name': 'cobaresellerclubapi'
};

const DEV_URL = "http://localhost:3000";
  
export const getTldsPricing = async () => {
    const response = await fetch(DEV_URL + "/api", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}, ${response.statusText}`);
    }
  
    const data = await response.json()
    
    return data;
}