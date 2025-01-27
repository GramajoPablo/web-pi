/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};
 
module.exports = {
  async rewrites() {
    return [
      {
        images: {
          domains: ['dummyimage.com'],
        },
        source: '/studio',
        destination: '/studio/index.html',
        
      },
    ];
  },
};