/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    // loader: 'custom',
    // loaderFile: './my-loader.js',
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagsapi.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
