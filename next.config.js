/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
module.exports = {
  async rewrites() {
    return [
      {
        source: '/studio',
        destination: '/studio/index.html',
      },
    ];
  },
};