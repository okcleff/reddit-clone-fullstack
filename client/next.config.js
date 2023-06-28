/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.gravatar.com',
      'localhost',
      'avatar-management--avatars.us-west-2.prod.public.atl-paas.net',
      'ec2-3-37-86-22.ap-northeast-2.compute.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
