import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.filestackcontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "verzo.fra1.cdn.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
      },
    ],
    disableStaticImages: true, // Disable Image Optimization
  },
};

export default nextConfig;
