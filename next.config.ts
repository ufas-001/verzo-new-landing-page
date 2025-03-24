import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "cdn.filestackcontent.com",
      "verzo.fra1.cdn.digitaloceanspaces.com",
    ],
    disableStaticImages: true, // Disable Image Optimization
  },
};

export default nextConfig;
