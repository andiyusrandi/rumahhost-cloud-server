export default function cloudinaryLoader({ src, width, quality }) {
    const params = ['f=auto', 'c=limit', `w=${width}`, `q=${quality || 'auto'}`]
    return `https://console.rumahhost.com/${src}?${params.join('&')}`
  }