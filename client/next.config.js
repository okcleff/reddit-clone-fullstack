/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.gravatar.com',
      'localhost',
      'w7.pngwing.com',
      // 'ec2-43-200-8-24.ap-northeast-2.compute.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
