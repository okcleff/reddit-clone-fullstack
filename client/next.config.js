/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.gravatar.com',
      'localhost',
      'avatar-management--avatars.us-west-2.prod.public.atl-paas.net',
      'ec2-13-125-120-17.ap-northeast-2.compute.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
