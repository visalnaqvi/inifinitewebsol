/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async headers() {
  //   return [
  //       {
  //           source: '/:path*', // Targets all files served from the root (including public folder)
  //           headers: [
  //               {
  //                   key: 'Cache-Control',
  //                   value: 'public, max-age=31536000, immutable', // Cache for 1 year
  //               },
  //           ],
  //       },
  //   ];
},
}

module.exports = nextConfig
