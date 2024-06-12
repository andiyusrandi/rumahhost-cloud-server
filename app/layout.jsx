import Footer from "@/components/Section/Footer";
import Header from "@/components/Section/Header";
import { poppins, roboto, ubuntu } from "@/utils/font";
import "./globals.css";
import { Providers } from "./providers";

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  metadataBase: process.env.DEV_URL,
  icons: {
    icon: [
      {url: '/icon/favicon-16x16.png', type: 'image/png', sizes: '16x16'},
      {url: '/icon/favicon-32x32.png', type: 'image/png', sizes: '32x32'},
      {url: '/icon/favicon-96x96.png', type: 'image/png', sizes: '96x96'},
      {url: '/icon/android-icon-192x192.png', type: 'image/png', sizes: '192x192'},
    ],
    apple: [
      {url: '/icon/apple-icon-57x57.png', type: 'image/png', sizes: '57x57'},
      {url: '/icon/apple-icon-60x60.png', type: 'image/png', sizes: '60x60'},
      {url: '/icon/apple-icon-72x72.png', type: 'image/png', sizes: '72x72'},
      {url: '/icon/apple-icon-76x76.png', type: 'image/png', sizes: '76x76'},
      {url: '/icon/apple-icon-114x114.png', type: 'image/png', sizes: '114x114'},
      {url: '/icon/apple-icon-120x120.png', type: 'image/png', sizes: '120x120'},
      {url: '/icon/apple-icon-144x144.png', type: 'image/png', sizes: '144x144'},
      {url: '/icon/apple-icon-152x152.png', type: 'image/png', sizes: '152x152'},
      {url: '/icon/apple-icon-180.png', type: 'image/png', sizes: '180'},
    ]
  },
  title: {
    template: "%s | Rumah Host",
    default: "Rumah Host",
  },
  description: "RumahHost merupakan penyedia cloud hosting server di Indonesia dengan performa terbaik uptime server terjamin dengan teknologi upper class",
  keywords: ['RumahHost :: Technology Cloud Indonesia'],
  twitter: {
    card: 'summary_large_image'
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://rumahhost.com/feed/',
      'application/rss+xml': 'https://rumahhost.com/comments/feed/',
    },
  },
  openGraph: {
    url: '/',
    siteName: 'RumahHost',
    type: 'website',
    locale: 'id_ID'
  },
  // verification: {
  //   google: 'zmgGWKtqI0Jvo6VjlR9Lx7yIPZWXSOMiWG1i_FaPTVY'
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} ${ubuntu.variable} ${poppins.className} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
