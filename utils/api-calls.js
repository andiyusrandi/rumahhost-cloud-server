export async function getData(params) {
  try {
    // Gunakan URL yang konsisten berdasarkan environment
    const url = process.env.NODE_ENV === "development" 
      ? `http://localhost:3000/api/whmcs` 
      : `https://rumahhost.com/api/whmcs`;
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      console.error(`Error API: ${response.status}`);
      return [];
    }

    const text = await response.text();
    
    try {
      const data = JSON.parse(text);
      return data;
    } catch (e) {
      console.error("JSON tidak valid:", text.substring(0, 100) + "...");
      return [];
    }
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    return [];
  }
}