// var http = require('http');
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     var message = 'It works!\n',
//         version = 'NodeJS ' + process.versions.node + '\n',
//         response = [message, version].join('\n');
//     res.end(response);
// });
// server.listen();

// const { createServer } = require('http');
// const next = require('next');

// const port = process.env.PORT || 3000;
// const app = next({ dev: false });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   createServer((req, res) => {
//     handle(req, res);
//   }).listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // output: 'export',
//   images: {
//     // loader: 'custom',
//     // loaderFile: './my-loader.js',
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "flagsapi.com",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagsapi.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "rumahhost.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    // Saat development, gunakan localhost
    DEV_URL:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://rumahhost.com",
    NEXT_PUBLIC_BASE_URL:
      process.env.NEXT_PUBLIC_BASE_URL || "https://rumahhost.com",
    BASE_URL:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://rumahhost.com",
  },
};

export default nextConfig;
