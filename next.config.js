/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
  },
  env: {
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.SERVICE_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
  }
};

module.exports = nextConfig;
