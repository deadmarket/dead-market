/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.deadmarket.com.ar' }],
        destination: 'https://deadmarket.com.ar/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
