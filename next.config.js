const withPwa = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.ytimg.com"],
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV == "development",
  },
};

module.exports = withPwa(nextConfig);
