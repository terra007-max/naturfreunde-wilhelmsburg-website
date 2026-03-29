import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "naturfreunde-wilhelmsburg.at",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "naturfreunde-wilhelmsburg.at",
        pathname: "/wp-content/themes/**",
      },
    ],
  },
};

export default nextConfig;
