/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "user-images.githubusercontent.com",
      "raw.githubusercontent.com",
      "v4.mui.com",
      "cdn.icon-icons.com",
      "www.vectorlogo.zone"
    ],
  },
};

module.exports = nextConfig;
