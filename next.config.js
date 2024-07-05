/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.fragrancex.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.fragrancenet.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "quixess.s3.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode:false
};

module.exports = nextConfig;
