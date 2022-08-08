const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.ytimg.com"],
  },
  pwa: {
    dest: "public",
    register: true,
    scope: "/",
    sw: "./public/sw.js",
    disable: process.env.NODE_ENV === "development",
  },
});
