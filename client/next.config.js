/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.gravatar.com',
      'localhost',
      'avatar-management--avatars.us-west-2.prod.public.atl-paas.net',
      // 'ec2-43-200-8-24.ap-northeast-2.compute.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
