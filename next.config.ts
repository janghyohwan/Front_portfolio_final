import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["vercel.com", "github.com"],
    unoptimized: true,
  },
};

export default nextConfig;
