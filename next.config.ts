import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "darkstarstorage.com",
      },
    ],
  },
};

export default nextConfig;
