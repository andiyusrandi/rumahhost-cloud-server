export const getData = async (param) => {
    const response = await fetch(process.env.DEV_URL + "/api", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}, ${response.statusText}`);
    }
  
    return await response.json()
}