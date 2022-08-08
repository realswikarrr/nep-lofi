const withPwa = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.ytimg.com"],
  },
  pwa: {
    dest: "public",
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    disable: process.env.NODE_ENV == "development",
  },
};

module.exports = withPwa(nextConfig);
